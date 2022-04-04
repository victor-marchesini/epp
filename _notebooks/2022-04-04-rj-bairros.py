#hide

import os
# from IPython.core.display import HTML
# from IPython import display
  
# from IPython.display import IFrame
# import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import json
from unidecode import unidecode


from ElectionsDB import ElectionsDB

self = ElectionsDB()

def show_folium(m):
    data = m.get_root().render()
    data_fixed_height = data.replace('width: 100%;height: 100%', 'width: 100%').replace('height: 100.0%;', 'height: 609px;', 1)
    # display(HTML(data_fixed_height))
    return data_fixed_height

def get_elected_candidates_dict(uf,partidos,cargos,anos,only_elected=True,verbose=False):
    if only_elected:
        folder_path = 'results/eleitos'
    else:
        folder_path = 'results/candidatos'
    os.makedirs(folder_path,exist_ok=True)
    elected = {}
    for cargo in cargos:
        cargo_api = ' '.join([x.capitalize() for x in cargo.split()])
        elected[cargo] = {}
        for ano in anos:
            fname = f'{ano}_{uf}_{cargo}_{"_".join(partidos)}.csv'.replace(' ','_')
            file_path = f'{folder_path}/{fname}'
            if verbose:
                print(file_path)
            if not os.path.exists(file_path):
                if only_elected:
                    cand = el.get_candidates(year=ano, position=cargo_api,only_elected=only_elected,
                        columns=["NUMERO_CANDIDATO", "NOME_CANDIDATO", "SIGLA_UF", "NUM_TURNO", "SIGLA_PARTIDO", "COMPOSICAO_LEGENDA"])
                else:
                    cand = el.get_candidates(year=ano, position=cargo_api,
                        columns=["NUMERO_CANDIDATO", "NOME_CANDIDATO", "SIGLA_UF", "NUM_TURNO", "SIGLA_PARTIDO", "COMPOSICAO_LEGENDA"])

                cand = cand.query(f"SIGLA_UF == '{uf}' ").query(f"SIGLA_PARTIDO in {partidos}")
                cand.to_csv(file_path,index=False)
            else:
                cand = pd.read_csv(file_path)
                cand['NUMERO_CANDIDATO'] = cand['NUMERO_CANDIDATO'].astype(str)
            
            elected[cargo][ano] = cand
            
    return elected

def shrink_html(fname,base_path):
    # geo_json_file='../assets/html/maps/geo_json_coords.txt'
    with open(fname,'r') as f:
        lines = f.readlines()

    out_str = ''
    script_file = fname.replace('.html','.js')
    script_scr = script_file.replace('../',base_path)
    for i,line in enumerate(lines):
        if '</body>' in line:
            out_str += line + f'<script src="{script_scr}"></script>\n'
            script_index = i + 2
            break
        else:
            # print(line)
            out_str += line

    with open(fname,'w') as f:
        f.write(out_str)

    # print(len(out_str),out_str)

    script_str = ''
    for line in lines[script_index:]:
        if '</script>' in line:
            break
        script_str+= line

    geo_json_file='../assets/html/geo_json_coords.json'

    
    lines = script_str.split('\n')

    out_str = ''
    for i,line in enumerate(lines):
        if '_add' in line:
            if len(line) > 1000:
                index = line.index('{"crs"')
                # print('len(line):',len(line))
                if not os.path.exists(geo_json_file):
                    geo_json_coords = line[index:].strip().rstrip(');')
                    with open(geo_json_file,'w') as f:
                        f.write(geo_json_coords)
                # line = line[:index] + ');'
                line = f"""
        function load_geo_json(file_path) {{
            fetch(file_path)
            .then(response => response.text())
            .then(data => {{
              const obj = JSON.parse(data);
              {line[:index].strip()}obj);
            }})
          }}
            const file_path ='{geo_json_file.replace('../',base_path)}';
            load_geo_json(file_path);
            """
        out_str += line + '\n'

    fname = fname.replace('.html','.js')
    with open(fname,'w') as f:
        f.write(out_str)

# definições gerais fixas

base_path = '/epp/'
abs_folder = f'{base_path}assets/html/'
relative_folder = '../assets/html'

tables_folder = f'{relative_folder}/tables'
os.makedirs(tables_folder,exist_ok=True)
# bairros_geo = 'geojson/limites_bairros_RJ_edit.geojson'
bairros_geo = '../assets/geojson/limites_bairros_RJ_edit.geojson'


maps_folder = f'{relative_folder}/maps'
os.makedirs(maps_folder,exist_ok=True)

update_maps=True


#hide
 
uf = 'RJ'
n_cands = 5

partidos_esquerda = [13,40,50,65]
partidos_direita = [15,17,25,45]
nulo = [96,95]
nr_partidos=partidos_esquerda + nulo


anos = [2014,2016,2018,2020]
cargos= ["DEPUTADO ESTADUAL","DEPUTADO FEDERAL","GOVERNADOR","VEREADOR","PREFEITO"]

# uf = 'AC'
# n_cands = 1
# cargos= ["GOVERNADOR","VEREADOR"]


nr_partidos_str = [str(x) for x in nr_partidos]

##########################################################################3

html_dict_path = f'{relative_folder}/html_dict.json'
if os.path.exists(html_dict_path):
    with open(html_dict_path, 'r') as fp:
        html_dict = json.loads(fp.read())
else:
    html_dict = {}

df_bairros = self.get_election_result(uf,ano=0,agg='bairro')
selection_queries = [f"NR_TURNO == 1"]
selection_queries += [f"ANO_ELEICAO == {anos}"]
df_bairros = self.get_selected_df(df_bairros,selection_queries)
df_bairros['DS_CARGO'].unique().tolist(), df_bairros['ANO_ELEICAO'].unique().tolist()



#hide
# cargos= ["GOVERNADOR","PREFEITO"]

for cargo in cargos:
    print(cargo)
    
    if cargo not in html_dict.keys():
        html_dict[cargo] = {}

    selection_queries = [f"DS_CARGO == '{cargo}'"]

    df_sel = df_bairros.copy()
    if cargo in ['VEREADOR','PREFEITO']:
        ano_ref = 2020
    else:
        ano_ref = 2018

    self.add_number_name(df_sel,uf,ano=ano_ref) #add coluna NR_NM_VOTAVEL
    df_sel = self.get_selected_df(df_bairros,selection_queries)

    nr_name_dict = self.get_nr_name_dict(uf,cargo,ano_ref)

    selection_queries_dict = [f"ANO_ELEICAO == {ano_ref}"]
    selection_queries_dict += [f"DS_CARGO == '{cargo}'"]
    selection_queries_dict += [f"NR_PARTIDO == {nr_partidos}"]
    selected_cand = self.get_selected_cand(uf,selection_queries_dict,n_cands)

    for relative in [False,True]:
        rel_sufix = 'relativa' if relative else 'absoluta'
        print(f'cargo: {cargo} - ano_ref: {ano_ref} - {rel_sufix}')

        if rel_sufix not in html_dict[cargo].keys():
            html_dict[cargo][rel_sufix] = {}
        
        index_cols = ['ANO_ELEICAO','NM_MUNICIPIO', 'NM_BAIRRO']
        df = pd.pivot_table(df_sel, values='QT_VOTOS', index=index_cols,columns=['NM_VOTAVEL'],aggfunc=np.sum).fillna(0)
        if relative:
            df = df.div(df.sum(axis=1),axis=0)
    
        df = df.rename(columns=nr_name_dict)
        selected_cols = [x for x in df.columns if x[:2] in nr_partidos_str]            
        df = df[selected_cols]
        df['SOMA'] = df.sum(axis=1)
        df = df.sort_values('SOMA',ascending=False).reset_index(drop=False)
        df.index += 1
        df_all = df.reset_index()
        
        for i,cand in enumerate(selected_cand):
            # print(cand)
            ordem_cand = f'{i+1:02d}_{cand}'

            if ordem_cand not in html_dict[cargo][rel_sufix].keys():
                html_dict[cargo][rel_sufix][ordem_cand] = {}

            table_name = f'{uf}_{cargo}_{ordem_cand}_{rel_sufix}_{cand}'.replace(' ','_').upper()
            table_path = f'{tables_folder}/{table_name}.html'
            html_dict[cargo][rel_sufix][ordem_cand]['tabela'] = f'{abs_folder}/tables/{table_name}.html'
            df = df_all[index_cols + [cand]].reset_index()
            df = pd.pivot_table(df, values=cand, index=['NM_MUNICIPIO', 'NM_BAIRRO'],columns=['ANO_ELEICAO'],aggfunc=np.sum).fillna(0)
            df = df.sort_values(df.columns[-1],ascending=False)
            mask = df.sum(axis=1)>0
            df = df[mask]

            if not relative:
                total = [int(x) for x in df.sum(axis=0)]
                tuples = list(zip( df.columns, total ))
                index = pd.MultiIndex.from_tuples(tuples, names=["ANO_ELEICAO", "TOTAL"])
                
                df_tabela = df.copy()
                df_tabela.columns = pd.MultiIndex.from_tuples(tuples, names=["ANO_ELEICAO", "TOTAL"])
            else:
                df_tabela = df
            
            df_style = self.get_df_style(df_tabela,relative)
            df_style.to_html(table_path)

            if 'mapas' not in html_dict[cargo][rel_sufix][ordem_cand].keys():
                html_dict[cargo][rel_sufix][ordem_cand]['mapas'] = {}
            for ano_mapa in df.columns:
                map_name = f'{table_name}_{ano_mapa}'
                html_dict[cargo][rel_sufix][ordem_cand]['mapas'][str(ano_mapa)] = f'{abs_folder}/maps/{map_name}.html'
                file_path = f'{maps_folder}/{map_name}.html'
                if update_maps:
                    df_map = df.reset_index()
                    # df_map = df_map
                    m = self.get_map(bairros_geo,df_map,ano_mapa,legend=ordem_cand,max_scale=0.0)
                    m.save(file_path)
                    shrink_html(file_path,base_path)
            
       
with open(f'{relative_folder}/html_dict.json', 'w') as fp:
    json.dump(html_dict, fp,sort_keys=True, indent=4)


