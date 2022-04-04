#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: victor
"""
import glob
import os, time
from warnings import WarningMessage
import requests
import zipfile
import pandas as pd
import pymysql
from sqlalchemy import create_engine
from unidecode import unidecode

class ElectionsDB:
    def __init__(self):
        self._data_dir = '../data'
        self._db_dir = f'{self._data_dir}/db'
        self._csv_options = {'quotechar':'"','sep':';','encoding':'latin-1','header':0}
        self._connection_params = None
        self._engine_uri = None
        self._print_time = True
        self._group_results = {}
        self.setup()

    def setup(self):
        os.makedirs(self._data_dir,exist_ok=True)
        os.makedirs(self._db_dir,exist_ok=True)
    
    def get_db_connection_parameters(self):
        
        if self._connection_params:
            return self._connection_params

        db_conn_path = 'db_connection/db_connection.json'
        
        if not os.path.isfile(db_conn_path):
            # rodando teste, procurar um nível acima
            if os.path.isfile(f'../{db_conn_path}'):
                db_conn_path = f'../{db_conn_path}'
            
        if os.path.isfile(db_conn_path):
            with open(db_conn_path,'r') as f:
                content = f.read()
            self._connection_params = eval(content)
            return self._connection_params
        else:
            base_file = db_conn_path.split('.')[0] + '__base.json'
            print(f"Arquivo '{db_conn_path}' não encontrado.\nUtilizar como referência o arquivo '{base_file}', incluindo user e passwd.")
    
    def get_engine_uri(self):
        if not self._engine_uri:        
            connection_parameters = self.get_db_connection_parameters()
            user=connection_parameters['user']
            pw=connection_parameters['passwd']
            host=connection_parameters['host']
            db=connection_parameters['db']
            self._engine_uri = f"mysql+pymysql://{user}:{pw}@{host}/{db}"

        return self._engine_uri

    def get_filename(self, uf:str, ano:int, option:str, agg:str='secao'):
        uf = uf.upper()
        if option == 'votacao':
            if agg == 'secao':
                filename = f'votacao_secao_{ano}_{uf}'
            elif agg == 'munzona':
                filename = f'votacao_candidato_munzona_{ano}'
        elif option == 'local':
            filename = f'eleitorado_local_votacao_{ano}'
        elif option == 'perfil':
            filename = f'perfil_eleitor_secao_{ano}_{uf}'
        else:
            msg = f'Opção <{option}> não disponível.'
            raise Exception(msg)
        
        return filename

    def show_tables(self):
        '''Retorna um DataFrame com nomes das tabelas e número de linhas.'''

        connection_params = self.get_db_connection_parameters()
        try:
            connection = pymysql.connect(**connection_params)
            cursor = connection.cursor()
        except OSError as error:
            print(error)
        else:
            query = f""" SELECT  table_name, table_rows FROM information_schema.tables
                    WHERE   table_schema = '{connection_params['db']}' AND table_type = 'BASE TABLE'; """
            cursor.execute(query)
            lines = cursor.fetchall()
            df = pd.DataFrame(lines,columns=['Table','rows'])
        finally:
            cursor.close()
            connection.commit()
            connection.close()
        return df

    def clean_election_data(self,uf:str,option:str,agg:str='secao'):
        '''remove sql_table, se existir.
        ---
        sql_table = f'{uf}_{option}_{agg}'.lower()
        '''
        connection_params = self.get_db_connection_parameters()
        try:
            connection = pymysql.connect(**connection_params)
            cursor = connection.cursor()
        except OSError as error:
            print(error)
        else:
            sql_table = f'{uf}_{option}_{agg}'.lower()
            query=f'DROP TABLE IF EXISTS `{sql_table}` ;'
            cursor.execute(query)
        finally:
            cursor.close()
            connection.commit()
            connection.close()
        return


    def get_election_result(self,uf:str,ano:int,agg:str='cand'):
        '''Retorna um DataFrame com informações das eleições por ano e uf.

        agg == 'secao': agregado por seção eleitoral (menor granularidade)
        agg == 'zona': agregado por zona eleitoral
        agg == 'bairro': agregado por nome do bairro
        agg == 'municipio': agregado por municipio
        agg == 'cand': agregado por canditadx
        agg == 'munzona': agregado por município e zona eleitoral (outro banco tse)
        '''
        assert agg in ['secao','zona','bairro','municipio','cand','munzona']
        option = 'votacao'
        if agg == 'cand':
            agg = 'municipio'
            df = self.get_election_data(uf,ano,option,agg)
            drop_list = ['NM_MUNICIPIO','QT_VOTOS']
            index_list = df.columns.drop(drop_list).to_list()
            df = df.groupby(index_list,as_index=False)['QT_VOTOS'].sum()
        else:
            df = self.get_election_data(uf,ano,option,agg)
        
        #TODO: adicionar esse tratamento antes de salvar tabelas
        df['NM_VOTAVEL'] = df['NM_VOTAVEL'].apply(unidecode).str.strip()
        return df

    def get_election_data(self,uf:str,ano:int,option:str,agg:str):
        '''Retorna um DataFrame com informações das eleições por ano e uf.
        option == 'votacao': votação dos candidatos por seção eleitoral
        option == 'local': dados dos locais de votação
        option == 'perfil': perfil do eleitorado por seção eleitoral

        agg == 'secao': agregado por seção eleitoral (menor granularidade)
        agg == 'zona': agregado por zona eleitoral
        agg == 'bairro': agregado por nome do bairro
        agg == 'municipio': agregado por municipio
        agg == 'munzona': agregado por município e zona eleitoral (outro banco tse)
        '''
        option = option.lower()
        assert option in ['votacao','local','perfil']
        assert agg in ['secao','zona','bairro','municipio','munzona']
        if ano%2:
            raise ValueError(f'Temos eleições apenas em anos pares. Ano solicitado: {ano}.')
        
        if option != 'votacao' and agg != 'secao':
            agg = 'secao'
            print(f"'agg' modificado para 'secao', pois option == '{option}'")

        table_name = f'{uf}_{option}_{agg}'.lower()
        
        connection_params = self.get_db_connection_parameters()
        try:
            connection = pymysql.connect(**connection_params)
            cursor = connection.cursor()
            conn_uri = self.get_engine_uri()
        
        except OSError as error:
            print(error)
        
        else:    
            if self.check_table(table_name, cursor):
                print(f'Lendo dados da tabela {table_name}.')
                ano_str = 'ANO_ELEICAO'
                if not ano:
                    print('Obtendo dados salvos de todos os anos.')
                    query = f'SELECT * FROM {table_name} ;'
                    df = pd.read_sql(query, conn_uri)
                    anos_disp = df[ano_str].unique()
                    print(f'Anos disponíveis: {anos_disp}')
                else:
                    if self.check_year(cursor, table_name, ano_str, ano):
                        print('Os dados estão no banco, não serão atualizados.')
                        df = pd.read_sql(f'SELECT * FROM {table_name} WHERE {ano_str} = {ano}', conn_uri)
                    else:
                        print(f'Os dados referentes ao ano <{ano}> serão adicionados ao banco.')
                        df = self.add_election_data(uf,ano,table_name,option,agg)

            else:
                if ano:
                    print(f' >>> Gerando tabela {table_name} <<<')
                    df = self.add_election_data(uf,ano,table_name,option,agg)
                else:
                    print(f'A tabela {table_name} não existe. Para gerar o arquivo, você deve indicar o ano que deseja adicionar.')
                    df = pd.DataFrame()
        
        
        finally:
            cursor.close()
            connection.commit()
            connection.close()

            if not df.empty:
                df = df.set_index('id')

        return df
        
    
    def add_election_data(self,uf,ano,table_name,option:str,agg:str):
        
        if agg in ['zona','bairro']:
            df = self.get_election_data(uf,ano,option,agg='secao')
        elif agg == 'municipio':
            df = self.get_election_data(uf,ano,option,agg='zona')
        else:
            df = self.get_raw_data(uf,ano,option,agg)
        
        if option == 'votacao':
            if agg == 'secao':
                selected_cols = ['ANO_ELEICAO','NR_TURNO','NM_MUNICIPIO','NR_ZONA','NR_SECAO',
                'DS_CARGO', 'NR_VOTAVEL', 'NM_VOTAVEL', 'QT_VOTOS']
            elif agg == 'munzona':
                selected_cols = ['ANO_ELEICAO','NR_TURNO','NM_MUNICIPIO','NR_ZONA',
                'DS_CARGO', 'NR_CANDIDATO', 'NM_URNA_CANDIDATO', 'NR_PARTIDO',
                'DS_COMPOSICAO_COLIGACAO','DS_SIT_TOT_TURNO','DS_SITUACAO_CANDIDATURA','QT_VOTOS_NOMINAIS']
            else:
                selected_cols = df.columns

        elif option == 'local':
            df = df.query(f'SG_UF == "{uf}"'.upper()).copy()
            df['NR_TURNO'] = df['DS_ELEICAO'].str[0].astype(int)
            selected_cols = ['AA_ELEICAO','NR_TURNO','NM_MUNICIPIO','NR_ZONA','NR_SECAO',
            'DS_TIPO_SECAO_AGREGADA','NR_LOCAL_VOTACAO', 'NM_LOCAL_VOTACAO', 'NM_BAIRRO',
            'NR_LATITUDE','NR_LONGITUDE']
        elif option == 'perfil': #else:
            selected_cols = ['ANO_ELEICAO','NM_MUNICIPIO','NR_ZONA','NR_SECAO',
            'NR_LOCAL_VOTACAO','DS_GENERO','DS_ESTADO_CIVIL','DS_FAIXA_ETARIA','DS_GRAU_ESCOLARIDADE',
            'QT_ELEITORES_PERFIL','QT_ELEITORES_BIOMETRIA','QT_ELEITORES_DEFICIENCIA','QT_ELEITORES_INC_NM_SOCIAL']

        df = df[selected_cols].rename(columns={'AA_ELEICAO':'ANO_ELEICAO'})
        df = df.rename(columns={'NR_CANDIDATO':'NR_VOTAVEL','NM_URNA_CANDIDATO':'NM_VOTAVEL','QT_VOTOS_NOMINAIS':'QT_VOTOS'})

        if agg in ['bairro','secao']:
            if option in ['votacao','local']:
                df['chave_secao'] = df['NR_TURNO'].astype(str) + '-' + df['NM_MUNICIPIO'] + '-' + df['NR_ZONA'].astype(str) + '-' + df['NR_SECAO'].astype(str)
            else:
                df['chave_secao'] = '1-' + df['NM_MUNICIPIO'] + '-' + df['NR_ZONA'].astype(str) + '-' + df['NR_SECAO'].astype(str)

        if option == 'votacao':
            if agg=='bairro':
                if ano == 2014:
                    ano_local = 2018
                else:
                    ano_local = ano

                df_local = self.get_election_data(uf,ano_local,option='local',agg=agg)
                dict_bairro = df_local.set_index('chave_secao')['NM_BAIRRO'].to_dict()
                df['NM_BAIRRO'] = df['chave_secao'].apply(lambda x: dict_bairro.get(x,'nd'))
            if agg in ['bairro','zona','municipio']:
                if agg == 'bairro':
                    drop_list = ['NR_ZONA','NR_SECAO','chave_secao']
                elif agg == 'zona':
                    drop_list = ['NR_SECAO','chave_secao']
                elif agg == 'municipio':
                    drop_list = ['NR_ZONA']
                drop_list.append('QT_VOTOS')
                index_list = df.columns.drop(drop_list).to_list()
                # total_votos = df['QT_VOTOS'].sum()
                df = df.groupby(index_list,as_index=False)['QT_VOTOS'].sum()
                # assert total_votos == df['QT_VOTOS'].sum()               
        elif option == 'local':
            assert df.shape[0] == df['chave_secao'].nunique()        
           
        if ('NR_PARTIDO' not in df.columns) and ('NR_VOTAVEL' in df.columns):
            df['NR_PARTIDO'] = df['NR_VOTAVEL'].astype(str).str[:2].astype(int)

        sort_list = ['NR_TURNO','DS_CARGO','NM_MUNICIPIO','NM_BAIRRO', 'NR_PARTIDO', 'NR_VOTAVEL']
        sort_list = [x for x in sort_list if x in df.columns]
        df = df.sort_values(by=sort_list).reset_index(drop=True)
        df['id'] = df.index
        df['id'] = df['ANO_ELEICAO'].astype(str) + df['id'].apply(lambda x: f'{x:09d}')
        df['id'] = df['id'].astype(int)

        self.load(df, table_name)
        
        return df

    
    def get_raw_data(self,uf:str,ano:int,option:str,agg:str):
        '''Retorna um DataFrame com informações das eleições por ano e uf.
        Extrai e lê arquivos em formato csv.
        '''
        # agg: duas opções apenas: votaçao por seção ou por zona
        assert agg in ['secao','munzona']
        
        filename = self.get_filename(uf,ano,option,agg)

        if agg == 'secao':
            csv_path = f'{self._data_dir}/{filename}/{filename}.csv'
        else:
            csv_path = f'{self._data_dir}/{filename}/{filename}_{uf.upper()}.csv'

        if os.path.exists(csv_path):
            print(f'Arquivo {csv_path} já existia.')
        else:
            self.extract(uf,ano,option,agg)
        
        print(f'Lendo arquivo {csv_path}...',end='')
        df = pd.read_csv(csv_path,**self._csv_options)
        print('OK!')
               
        return df


    def extract(self,uf:str,ano:int,option:str,agg:str='secao'):
        assert(agg in ['secao','munzona'])
        file_name = self.get_filename(uf, ano, option, agg)
        zip_file = f'{file_name}.zip'
        if not os.path.isfile(zip_file):
            url = self.get_zip_url(uf, ano, option, agg)
            self.url2zip(url,zip_file)
        self.extractFromZip(zip_file)
        os.remove(zip_file)
    
    def get_zip_url(self, uf:str, ano:int, option:str, agg:str='secao'):

        uf = uf.upper()
        
        try:
            ano = str(int(ano))
        except ValueError:
            raise ValueError(f"Não foi possível converter '{ano}' em int.")
        
        if len(ano) != 4:
            raise ValueError('O número do ano deve conter 4 dígitos. Ex: 2018')
        
        if len(uf) != 2:
            raise ValueError(f"uf: <{uf}>. O valor de uf deve conter 2 caracteres. Ex: 'BA'")
        
        url_base = 'https://cdn.tse.jus.br/estatistica/sead/odsele'

        if option == 'votacao':
            if agg == 'secao':
                if ano == '2012':
                    print('\n ATENÇÃO! Faltam resultados do segundo turno')
                    zip_url = f'https://cdn.tse.jus.br/estatistica/sead/eleicoes/eleicoes2012/votosecao/vsec_1t_{UF}.zip'

                    # 2o turno:
                    # https://cdn.tse.jus.br/estatistica/sead/eleicoes/eleicoes2012/votosecao/vsec_2t_RJ_30102012194527.zip 
                    # https://cdn.tse.jus.br/estatistica/sead/eleicoes/eleicoes2012/votosecao/vsec_2t_PR_30102012194527.zip 
                    # https://cdn.tse.jus.br/estatistica/sead/eleicoes/eleicoes2012/votosecao/vsec_2t_BA_30102012194527.zip 

                    # raise NotImplementedError("Busca não configurada para seções das eleições de 2012.")
                else:
                    agg_string = 'votacao_secao'
                    zip_url = f'{url_base}/{agg_string}/{agg_string}_{ano}_{uf}.zip'
            elif agg == 'munzona':
                agg_string = 'votacao_candidato_munzona'
                zip_url = f'{url_base}/{agg_string}/{agg_string}_{ano}.zip'
            
        elif option == 'local':
            url_base += '/eleitorado_locais_votacao/eleitorado_local_votacao'
            zip_url = f'{url_base}_{ano}.zip'
        elif option == 'perfil':
            url_base += '/perfil_eleitor_secao/perfil_eleitor_secao'
            zip_url = f'{url_base}_{ano}_{uf}.zip'
            
        else:
            raise NotImplementedError('opção não disponível.')
            
        return zip_url  
    
    def url2zip(self, url, zip_file): 

        print(f'iniciando download de <{url}> ...', end = '')

        r = requests.get(url)
        if r.status_code == 200:
            print(' Download realizado com sucesso.')
        elif r.status_code == 404:
            raise ValueError(f' url não encontrada.')
    
        print(f'escrevendo conteudo no arquivo <{zip_file}> ... ', end='')
        with open(zip_file, 'wb') as f:
            f.write(r.content)
        print('OK!')
    
    def extractFromZip(self,path_to_zip_file):
        print(f'Extraindo arquivo <{path_to_zip_file}> ... ', end='')
        subfolder = path_to_zip_file.split('/')[-1].rstrip('.zip')
        directory_to_extract_to = f'{self._data_dir}/{subfolder}'
        with zipfile.ZipFile(path_to_zip_file, 'r') as zip_ref:
            zip_ref.extractall(directory_to_extract_to)
        print('OK!')
        return

    def check_year(self, cursor, table_name, ano_str:str, ano:int):
        query = f"SELECT * FROM `{table_name}` WHERE {ano_str} = {ano} LIMIT 1;"
        cursor.execute(query)
        lines = cursor.fetchall()
        if len(lines):
            return True
        else:
            return False


    def check_table(self, sql_table, cursor):
        query = f"SELECT COUNT(*) FROM information_schema.tables WHERE table_name = '{sql_table}';"
        cursor.execute(query)
        lines = cursor.fetchall()
        if lines[0][0]:
            return True
        else:
            return False

    def load(self, df, sql_table,local_infile:bool=True):
        
        start = time.time()
        connection_params = self.get_db_connection_parameters()

        if self._print_time:
            print(f"\n Carregando tabelas... - Host: {connection_params['host']} - DB: {connection_params['db']}\n")

        try:
            connection_params['local_infile'] = local_infile
            connection = pymysql.connect(**connection_params)
            cursor = connection.cursor()
        
        except OSError as error:
            print(error)
        
        else:
            if self._print_time:
                print(f'> Tabela: `{sql_table}`...', end = '')

            if not self.check_table(sql_table, cursor):

                all_table_columns = """
                `ANO_ELEICAO` smallint unsigned NOT NULL,
                `NR_TURNO` tinyint NOT NULL,
                `NM_MUNICIPIO` varchar(50) NOT NULL,
                `NR_ZONA` smallint unsigned NOT NULL,
                `NR_SECAO` smallint unsigned NOT NULL,
                `DS_CARGO` varchar(20) NOT NULL,
                `NR_VOTAVEL` mediumint unsigned NOT NULL,
                `NM_VOTAVEL` varchar(60) NOT NULL,
                `QT_VOTOS` mediumint unsigned NOT NULL,

                `DS_SITUACAO_CANDIDATURA` varchar(10) NOT NULL,
                `DS_COMPOSICAO_COLIGACAO` varchar(60) NOT NULL,
                `DS_SIT_TOT_TURNO` varchar(20) NOT NULL,

                `DS_TIPO_SECAO_AGREGADA` varchar(12) NOT NULL,
                `NR_LOCAL_VOTACAO` smallint unsigned NOT NULL,
                `NM_LOCAL_VOTACAO` varchar(70) NOT NULL,
                `NM_BAIRRO` varchar(60) NOT NULL,
                `NR_LATITUDE` decimal(11,8) NOT NULL,
                `NR_LONGITUDE` decimal(11,8) NOT NULL,

                `chave_secao` varchar(60) NOT NULL,
                `NR_PARTIDO` tinyint NOT NULL,
                `id` bigint unsigned NOT NULL
                """

                all_sql_columns= [x for x in all_table_columns.split('\n') if '`' in x]

                sql_columns_dict = {x.split('`')[1]:x for x in all_sql_columns}
                sql_table_columns = ''
                for col in df.columns:
                    sql_table_columns += sql_columns_dict[col]
                
                create_table = f"CREATE TABLE `{sql_table}` ({sql_table_columns}) "
                create_table += ' ENGINE=MyISAM DEFAULT CHARSET=utf8;'
                cursor.execute(create_table)
        
                add_index = f"ALTER TABLE `{sql_table}` ADD PRIMARY KEY (`id`)"
                for column in ['ANO_ELEICAO','NR_TURNO','DS_CARGO','NR_VOTAVEL']:
                    if column in df.columns:
                        add_index += f", ADD KEY `{column}` (`{column}`)"
                cursor.execute(add_index)

            if local_infile:
                csv_file = '_temp.csv'
                df.to_csv(csv_file,index=False)
                cursor.execute("SET @@global.local_infile = 1;")
                sql_command = f"""LOAD DATA LOCAL INFILE '{csv_file}' 
                INTO TABLE `{sql_table}` 
                CHARACTER SET UTF8 
                FIELDS TERMINATED BY ','
                ENCLOSED BY '"'
                IGNORE 1 LINES;"""
                # LINES TERMINATED BY '\n'               
                cursor.execute(sql_command)
                os.remove(csv_file)
            else:
                raise Exception('método load implementado apenas para caso com local_infile=True ')        
        
        finally:
            cursor.close()
            connection.commit()
            connection.close()
        
        delta = time.time() - start
        if self._print_time:
            print(f"\n----- {'Load:':<10s} {delta:.1f} segundos. -----")

############################ locais de votacao ############################
    
    def add_elections_locations(self,ano, option='local',uf=None):
        
        folder_name = f'eleitorado_local_votacao_{ano}'
        if uf:
            file_name = f'{folder_name}_{uf}'.lower()
        else:
            file_name = folder_name
        
        file_pattern = f'data/{folder_name}/{file_name}.*'
        data_paths = glob.glob(file_pattern)
        
        if not data_paths:
            zip_path = f'{file_name}.zip'
            if not os.path.isfile(zip_path):
                self.get_zip_file(ano,uf,option)
                
            self.extractFromZip(zip_path)
            data_paths = glob.glob(file_pattern)
        
        data_file_path = data_paths[0]
        print(f"Lendo dados do arquivo '{data_file_path}'.")
        df = self.csv2df(data_file_path)
        df['id'] = df.DS_ELEICAO.str[0]+'-'+df.SG_UF+'-'+df.CD_MUNICIPIO.astype(str)
        df['id'] = df['id'] + '-' + df.NR_ZONA.astype(str) + '-' + df.NR_SECAO.astype(str)
        if df.id.nunique() != df.shape[0]:
            msg = 'Atenção! Existem linhas distintas com o mesmo id. '
            msg += f'df.id.nunique() = {df.id.nunique()}, df.shape[0] = {df.shape[0]}'
            print(msg)
        self._election_locations[ano] = df.groupby('id').first()
        return

    
#############################################3

    def add_voter_profile(self,ano,uf, option='perfil'):
        
        self.set_ano_UF(ano,uf)
        
        if option == 'perfil':
            file_name = f'perfil_eleitor_secao_{ano}_{uf}'
        else:
            raise NotImplementedError('opção não disponível.')
        
        data_paths = glob.glob(f'data/{file_name}/{file_name}.*')
        
        if not data_paths:
            zip_path = f'{file_name}.zip'
            if not os.path.isfile(zip_path):
                self.get_zip_file(ano, uf, option)
                
            self.extractFromZip(zip_path)
            data_paths = glob.glob(f'data/{file_name}/{file_name}.*')
        
        data_file_path = data_paths[0]

        header_option = 0
        df_columns = None

        print(f"Lendo dados do arquivo '{data_file_path}'.")
        df = self.csv2df(data_file_path,header_option,df_columns)

        elections_key = self._ano + self._UF
        self._voter_profile[elections_key] = df
        return
    
    def csv2df(self, csv_path, header_option=0, df_columns=None):

        quotechar='"'
        sep=';'
        encoding='latin-1'        
        df = pd.read_csv(csv_path,quotechar=quotechar,sep=sep,encoding=encoding,header=header_option)
        if df_columns:
            df.columns = df_columns
        return df

    
    
    
    def clear_elections_results(self):
        self._election_results = {}
        
        
    def get_elections_results(self,ano,UF):
        self.set_ano_UF(ano,UF)
        elections_key = self._ano + self._UF
        if elections_key not in self._election_results.keys():
            print('Adicionando resultado...')
            self.add_elections_results(self._ano,self._UF)
            
        return self._election_results[elections_key]
    
    def get_voter_profile(self,ano,UF):
        self.set_ano_UF(ano,UF)
        elections_key = self._ano + self._UF
        if elections_key not in self._voter_profile.keys():
            print('Adicionando resultado...')
            self.add_voter_profile(self._ano,self._UF)
            
        return self._voter_profile[elections_key]
    
    def agrupa(self, grupo:str):
        if grupo in ['8_bolsonarismo','6_pantano','7_direita_neoliberal']: 
            return '3_direita'
        elif grupo in ['2_esquerda_ref','1_esquerda_rev','3_centro_esquerda']: #3_centro_esquerda
            return '1_esquerda'
        elif grupo in ['4_outros','5_centrao']:
            return '2_centro'
        else:
            return grupo
    
    def get_results_complete_df(self,ano,UF):
        election_results = self.get_elections_results(ano,UF)
        return election_results.get_complete_df()
    
    def get_results_df(self,ano,UF):
        election_results = self.get_elections_results(ano,UF)
        return election_results.get_df()
    
    def get_results_slice_df(self,ano,UF,selection_dict,first_column='CD_MUNICIPIO'):
        election_results = self.get_elections_results(ano,UF)
        df = election_results.get_slice_df(selection_dict)
        return df.loc[:,first_column:]
    
    def get_party_group(self,uf=''):
        
        party_group_dict = {
            10: '8_bolsonarismo',
            11: '5_centrao',
            12: '3_centro_esquerda',
            13: '2_esquerda_ref',
            14: '5_centrao',
            15: '7_direita_neoliberal',
            16: '1_esquerda_rev',
            17: '8_bolsonarismo',
            18: '3_centro_esquerda',
            19: '6_pantano',
            20: '8_bolsonarismo',
            21: '1_esquerda_rev',
            22: '5_centrao',
            23: '6_pantano',
            25: '7_direita_neoliberal',
            27: '4_outros',
            28: '8_bolsonarismo',
            29: '1_esquerda_rev',
            30: '7_direita_neoliberal',
            31: '4_outros',
            33: '4_outros',
            35: '4_outros',
            36: '4_outros',
            40: '3_centro_esquerda',
            43: '3_centro_esquerda',
            44: '4_outros',
            45: '7_direita_neoliberal',
            50: '2_esquerda_ref',
            51: '8_bolsonarismo',
            54: '4_outros',
            55: '5_centrao',
            65: '2_esquerda_ref',
            70: '5_centrao',
            77: '5_centrao',
            90: '5_centrao',
            95: 'nulo',
            96: 'nulo'
            }
        
        if uf.lower() == 'rj':
            party_group_dict[40] = '2_esquerda_ref'
        
        return party_group_dict
        
    def get_group_parties(self,uf=''):

        grupo_partidos = {}
        for partido, grupo in self.get_party_group(uf).items():
            if grupo not in grupo_partidos.keys():
                grupo_partidos[grupo] = [partido]
            else:
                grupo_partidos[grupo] += [partido]
        return grupo_partidos
        
        # group_parties = {
        #     'nulo' : [95,96],                   # branco, nulo
        #     '4_outros' : [27,31,33,35,36,44,54],  # PSDC, PHS, PMN, PMB, PTC, PRP, PPL
        #     '1_esquerda_rev' : [16,21,29],          # PSTU, PCB, PCO
        #     '1_esquerda' : [13,50,65],              # PT, PSOL, PCdoB
        #     '3_centro_esquerda' : [12,18,40,43],    # PDT, Rede, PSB, PV
        #     '5_centrao' : [11,14,22,55,70,77,90],   # PP, PTB, PL, PSD, AVANTE, SD, PROS
        #     '6_pantano' : [19,23],                  # Podemos, PPS
        #     '7_direita_neoliberal' : [15,25,30,45], # MDB, Democratas, Novo, PSDB
        #     '8_bolsonarismo' : [10,17,20,28,51]     # Republicanos, PSL, PSC, PRTB, Patriotas
        #     }
        # if uf.lower() == 'rj':
        #     party_groups['1_esquerda'] = [13,40,50,65]
        #     party_groups['3_centro_esquerda'] = [12,18,43]

        # return party_groups

    def get_group_votes(self, ano, UF, columns_list, selection_dict={}):
        df = self.get_results_slice_df(ano, UF, selection_dict)
        df_group = df.groupby(by=columns_list)[['QT_VOTOS']].sum()
        return df_group.sort_values(by='QT_VOTOS',ascending=False).reset_index()
    
    def get_location_df(self,ano,uf=None):
        ano = self.validate_year(ano)

        locations_key = ano
        if locations_key not in self._election_locations.keys():
            print(f'Adicionando locais de votação. ano: {ano} uf: {uf}...')
            self.add_elections_locations(ano=ano,uf=uf)

        df = self._election_locations[locations_key].copy()            
        return df
    
    def validate_year(self, ano):
        
        try:
            ano = str(int(ano))
        except ValueError:
            raise ValueError(f"Não foi possível converter '{ano}' em int.")
            
        if len(ano) != 4:
            raise ValueError('O número do ano deve conter 4 dígitos. Ex: 2018')
        return ano
    
    def get_location_index(self,dict_index):
        id_list = [str(x) for x in dict_index.values()]
        return '-'.join(id_list)
    
    
    def get_location_coords(self,ano,dict_index):
        
        df = self.get_location_df(ano)
        
        location_id = self.get_location_index(dict_index)
        if location_id not in df.index:
            print('seção não encontrada.')
            return None
            
        return df.loc[location_id,['NR_LATITUDE','NR_LONGITUDE']]
    
    def get_group_results(self,uf:str):
        if not uf in self._group_results.keys():
            self.set_group_results(uf)
        return self._group_results.get(uf)


    def set_group_results(self,uf:str):

        option = 'votacao'
        agg = 'cand'
        ano = 0
        df_cand = self.get_election_result(uf,ano,agg)

        df_group = df_cand.query(f'NR_TURNO == 1').copy()
        # df_group['DS_CARGO'] = df_group['DS_CARGO'].str.upper()
        # df_group['NM_VOTAVEL'] = df_group['NM_VOTAVEL'].str.strip()

        index_list = ['ANO_ELEICAO','DS_CARGO','NR_PARTIDO','NR_VOTAVEL','NM_VOTAVEL']
        df_group = df_group.groupby(index_list,as_index=False)['QT_VOTOS'].sum()
        party_group = self.get_party_group(uf)
        df_group['GRUPO'] = df_group['NR_PARTIDO'].apply(lambda x: party_group.get(x))

        mask = (df_group['DS_CARGO']=='Senador') & (df_group['ANO_ELEICAO']==2018)
        df_group.loc[mask,'QT_VOTOS'] = df_group.loc[mask,'QT_VOTOS'] / 2
        df_group['GRUPAO'] = df_group['GRUPO'].apply(self.agrupa)

        # cargos = ['DEPUTADO ESTADUAL','DEPUTADO FEDERAL']

        #TODO: avaliar outro local para inserir essa correção
        nr_partidos = [13,40,50,65]
        # for cargo in cargos:
        if True:
            for nr_partido in nr_partidos:
                # mask = df_group['DS_CARGO']== cargo
                # mask = mask & (df_group['NR_VOTAVEL'] == nr_partido)
                mask = df_group['NR_VOTAVEL'] == nr_partido
                x = df_group.loc[mask,'NM_VOTAVEL'].iat[-1]
                df_group.loc[mask,'NM_VOTAVEL'] = x
        
        self._group_results[uf] = df_group
    
    def get_selected_df(self,df,selection_queries:list):
        df = df.copy()
        if selection_queries:
            for sel_query in selection_queries:
                # df = df.query(sel_query.upper())
                df = df.query(sel_query)
        
        return df
    
    def get_most_voted(self,uf:str,selection_queries:list,n_cands:int=None):

        df_group = self.get_group_results(uf)
        df = self.get_selected_df(df_group,selection_queries)
        # df = df_group.copy()
        # if selection_queries:
        #     for sel_query in selection_queries:
        #         df = df.query(sel_query)

        df = df.sort_values(by='QT_VOTOS',ascending=False)
        if n_cands:
            df = df.head(n_cands)
        df = df.reset_index(drop=True)
        df.index += 1
        return df

    def get_dict_candidatxs(self,uf:str,selection_queries:list,n_cands:int=None):
        df = self.get_most_voted(uf,selection_queries,n_cands)
        df = df.reset_index()
        df['NR_VOTAVEL'] = df['NR_VOTAVEL'].astype(str)
        df['num_nome'] = df['index'].apply('{:02d}'.format) + '_' + df['NR_VOTAVEL'] + '_' + df['NM_VOTAVEL']
        dict_candidatxs = df.set_index('NR_VOTAVEL')['num_nome'].to_dict()        
        # dict_candidatxs['13'] = 'LEGENDA_13_PT'
        # dict_candidatxs['40'] = 'LEGENDA_40_PSB'
        # dict_candidatxs['50'] = 'LEGENDA_50_PSOL'
        # dict_candidatxs['65'] = 'LEGENDA_65_PCdoB'
        return dict_candidatxs

    def get_df_style(self,df,relative):
        df_bairros = df.copy()
        if not relative:
            df_bairros = df_bairros.astype(int)

        font_size = 12
        line_height = 12
        
        hover_color = '#00BBBB'
        hover_color = '#EEEE55'
        styles = []    

        headers = {
            'selector': 'th',
            'props': f'background-color: #cccccc; font-size: {font_size}px; text-align: center'
            }

        col0 = {
            'selector': '.col0',
            'props': f'widht:200px; font-size:{font_size-2}px;'       
            }
        
        tr = {
            'selector': 'tr:hover',
            'props': f'background-color:{hover_color}'
            }
        styles += [headers,col0,tr]
        format_dict = {}
        for col,tipo in df_bairros.dtypes.items():
            if tipo == 'float64':
                format_dict[col] = '{:,.2%}'.format

        df_style = df_bairros.style.format(format_dict)
        df_style = df_style.set_properties(**{
                    'padding': '0px',
                    'font-size':f'{font_size}px',
                    'line-height':f'{line_height}px',
                    'width': '100px',
                    "text-align": "center"})

        df_style = df_style.background_gradient() #.bar(color='#d65f5f')
        df_style= df_style.set_table_styles(styles)
        return df_style

    def get_nr_name_dict(self,uf,cargo,ano_ref):
        df = self.get_election_result(uf,ano=ano_ref,agg='cand')
        selection_queries = [f"NR_TURNO == 1"]
        selection_queries += [f"DS_CARGO == '{cargo}'"]
        df = self.get_selected_df(df,selection_queries)
        # df['chave'] = df['DS_CARGO'] + df['NM_VOTAVEL']
        df['NR_NM_VOTAVEL'] = df['NR_PARTIDO'].astype(str) + '_' + df['NM_VOTAVEL']
        party_dict = df.set_index('NM_VOTAVEL')['NR_NM_VOTAVEL'].to_dict()
        return party_dict
    
    def get_selected_cand(self,uf:str,selection_queries:list,n_cands:int=None):
        df = self.get_most_voted(uf,selection_queries,n_cands)
        df['NR_NM_VOTAVEL'] = df['NR_PARTIDO'].astype(str) + '_' + df['NM_VOTAVEL']
        return df['NR_NM_VOTAVEL'].values.tolist()


    def add_number_name(self,df,uf,ano):
        df_cand_18 = self.get_election_result(uf,ano=2018,agg='cand')
        selection_queries = [f"NR_TURNO == 1"]
        df_cand_18 = self.get_selected_df(df_cand_18,selection_queries)
        df_cand_18['chave'] = df_cand_18['DS_CARGO'] + df_cand_18['NM_VOTAVEL']
        party_dict = df_cand_18.set_index('chave')['NR_PARTIDO'].to_dict()

        key_series = df['DS_CARGO'] + df['NM_VOTAVEL']
        new_col = f'NR_PARTIDO_{ano}'
        ref_party = key_series.apply(lambda x: party_dict.get(x,-1)).astype(str)
        df['NR_NM_VOTAVEL'] = ref_party + '_' + df['NM_VOTAVEL']

# Singleton
# db = ElectionsDB()

