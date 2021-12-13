#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Oct 18 02:11:10 2020

@author: victor
"""
import os.path, glob
import requests
import zipfile
import pandas as pd
from ElectionResults import ElectionResults

# zip_url = 'http://agencia.tse.jus.br/estatistica/sead/odsele/votacao_partido_uf/votacao_partido_uf_1945.zip'



class EppDataBase:
    def __init__(self):
        self._data_dir = 'data/'
        self._ano = ''
        self._UF = ''
        self._election_results = {}
        self._election_locations = {}
        self._voter_profile = {}
        self._party_groups = {}
    
    def url2zip(self, url, filename, option = 'request'):
        
        if option == 'request':

            print('iniciando download com requests')
            print('url:',url)
            r = requests.get(url)
            # Retrieve HTTP meta-data
            if r.status_code == 200:
                print('Download realizado com sucesso.')
            elif r.status_code == 404:
                raise ValueError(f'url não encontrada: {url}')
            # print(r.headers['content-type'])
            # print(r.encoding)
        
            print(f'escrevendo conteudo no arquivo <{filename}> ... ', end='')
        
            with open(filename, 'wb') as f:
                f.write(r.content)
            print('OK!')

            
    
    def set_ano_UF(self,ano,UF):

        try:
            ano = str(int(ano))
        except ValueError:
            raise ValueError(f"Não foi possível converter '{ano}' em int.")
        
        if len(ano) != 4:
            raise ValueError('O número do ano deve conter 4 dígitos. Ex: 2018')
        
        if len(UF) != 2:
            raise ValueError("O valor de UF deve conter 2 caracteres. Ex: 'BA'")        
        
        self._ano = ano
        self._UF = UF

    def validate_year(self, ano):
        
        try:
            ano = str(int(ano))
        except ValueError:
            raise ValueError(f"Não foi possível converter '{ano}' em int.")
            
        if len(ano) != 4:
            raise ValueError('O número do ano deve conter 4 dígitos. Ex: 2018')
        return ano
                
    def get_zip_url(self, ano, UF, option):
        
        try:
            ano = str(int(ano))
        except ValueError:
            raise ValueError(f"Não foi possível converter '{ano}' em int.")
        
        if len(ano) != 4:
            raise ValueError('O número do ano deve conter 4 dígitos. Ex: 2018')
        
        if len(UF) != 2:
            raise ValueError("O valor de UF deve conter 2 caracteres. Ex: 'BA'")
        
        url_base = 'http://cdn.tse.jus.br/estatistica/sead/odsele/'

        if option == 'secao':
            if ano == '2012':
                print('\n ATENÇÃO! Faltam resultados do segundo turno')
                zip_url = f'https://cdn.tse.jus.br/estatistica/sead/eleicoes/eleicoes2012/votosecao/vsec_1t_{UF}.zip'

                # 2o turno:
                # https://cdn.tse.jus.br/estatistica/sead/eleicoes/eleicoes2012/votosecao/vsec_2t_RJ_30102012194527.zip 
                # https://cdn.tse.jus.br/estatistica/sead/eleicoes/eleicoes2012/votosecao/vsec_2t_PR_30102012194527.zip 
                # https://cdn.tse.jus.br/estatistica/sead/eleicoes/eleicoes2012/votosecao/vsec_2t_BA_30102012194527.zip 

                # raise NotImplementedError("Busca não configurada para seções das eleições de 2012.")
            else:
                url_base += 'votacao_secao/votacao_secao_'
                zip_url = url_base + f'{ano}_{UF}.zip'
            
        elif option == 'local_votacao':
            url_base += 'eleitorado_locais_votacao/eleitorado_local_votacao_'
            zip_url = url_base + f'{ano}.zip'
        elif option == 'perfil_eleitor':
            url_base += 'perfil_eleitor_secao/perfil_eleitor_secao_'
            zip_url = url_base + f'{ano}_{UF}.zip'
            
        else:
            raise NotImplementedError('opção não disponível.')
            
        return zip_url
        
    def get_zip_file(self, ano, option):
        if option in ('secao','perfil_eleitor'):
            url = self.get_zip_url(ano, self._UF, option)
        elif option == 'local_votacao':
            url = self.get_zip_url(ano, UF='NA', option=option)
            
        filename = url.split('/')[-1]
        self.url2zip(url,filename)
        return filename
        
    def extractFromZip(self,path_to_zip_file):
        print(f'Extraindo arquivo <{path_to_zip_file}> ... ', end='')
        subfolder = path_to_zip_file.split('/')[-1].rstrip('.zip')
        directory_to_extract_to = self._data_dir + subfolder
        with zipfile.ZipFile(path_to_zip_file, 'r') as zip_ref:
            zip_ref.extractall(directory_to_extract_to)
        print('OK!')
        return

    def csv2df(self, csv_path, header_option=0, df_columns=None):

        quotechar='"'
        sep=';'
        encoding='latin-1'        
        df = pd.read_csv(csv_path,quotechar=quotechar,sep=sep,encoding=encoding,header=header_option)
        if df_columns:
            df.columns = df_columns
        return df
    
    
    def add_elections_results(self,ano,UF, option='secao'):
        
        self.set_ano_UF(ano,UF)
        
        if option == 'secao':
            file_name = f'votacao_secao_{self._ano}_{self._UF}'
        else:
            raise NotImplementedError('opção não disponível.')
        
        data_paths = glob.glob(f'data/{file_name}/{file_name}.*')
        
        if not data_paths:
            zip_path = f'{file_name}.zip'
            if not os.path.isfile(zip_path):
                self.get_zip_file(ano, option)
                
            self.extractFromZip(zip_path)
            data_paths = glob.glob(f'data/{file_name}/{file_name}.*')
        
        data_file_path = data_paths[0]

        if int(ano) <= 2016:
            header_option = None
            df_columns = ['DT_GERACAO','HH_GERACAO','ANO_ELEICAO','NR_TURNO','DS_ELEICAO','SG_UF','SG_UE','CD_MUNICIPIO',
                          'NM_MUNICIPIO','NR_ZONA','NR_SECAO','CD_CARGO','DS_CARGO','NR_VOTAVEL','QT_VOTOS']
        else:
            header_option = 0
            df_columns = None

        print(f"Lendo dados do arquivo '{data_file_path}'.")
        df = self.csv2df(data_file_path,header_option,df_columns)

        elections_key = self._ano + self._UF
        elections_value = ElectionResults(self._ano,self._UF, df)
        self._election_results[elections_key] = elections_value
        return
    
    def add_voter_profile(self,ano,UF, option='perfil_eleitor'):
        
        self.set_ano_UF(ano,UF)
        
        if option == 'perfil_eleitor':
            file_name = f'perfil_eleitor_secao_{self._ano}_{self._UF}'
        else:
            raise NotImplementedError('opção não disponível.')
        
        data_paths = glob.glob(f'data/{file_name}/{file_name}.*')
        
        if not data_paths:
            zip_path = f'{file_name}.zip'
            if not os.path.isfile(zip_path):
                self.get_zip_file(ano, option)
                
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
    
    def add_elections_locations(self,ano, option='local_votacao'):
        
        file_name = f'eleitorado_local_votacao_{ano}'
        
        file_pattern = f'data/{file_name}/{file_name}.*'
        data_paths = glob.glob(file_pattern)
        
        if not data_paths:
            zip_path = f'{file_name}.zip'
            if not os.path.isfile(zip_path):
                self.get_zip_file(ano,option)
                
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
        #     raise Warning(msg)
        self._election_locations[ano] = df.groupby('id').first()
        return
    
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
    
    def set_party_groups(self, party_groups):
        self._party_groups = party_groups
        
    def get_party_groups(self):
        return self._party_groups

    def get_group_votes(self, ano, UF, columns_list, selection_dict={}):
        df = self.get_results_slice_df(ano, UF, selection_dict)
        df_group = df.groupby(by=columns_list)[['QT_VOTOS']].sum()
        return df_group.sort_values(by='QT_VOTOS',ascending=False).reset_index()
    
    def get_location_df(self,ano):
        ano = self.validate_year(ano)
        if int(ano) < 2016:
            raise NotImplementedError("dados não disponíveis para eleições anteriores a 2016.")

        locations_key = ano
        if locations_key not in self._election_locations.keys():
            print('Adicionando locais de votação...')
            self.add_elections_locations(ano)
            
        return self._election_locations[locations_key].copy()    
    
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

    
# Singleton
epp_database = EppDataBase()




# forma de acessar os arquivos .zip sem precisar fazer o download.
# Nos testes iniciais achei muito demorado.
#
# from io import BytesIO
# from zipfile import ZipFile
# from urllib.request import urlopen

# resp = urlopen(zip_url)
# zipfile = ZipFile(BytesIO(resp.read()))
# zipfile.namelist()
#
# filebytes = BytesIO(get_zip_data())
# myzipfile = zipfile.ZipFile(filebytes)
# for name in myzipfile.namelist():
    # [ ... ]
