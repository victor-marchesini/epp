#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from EppDataBase import epp_database

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
# import plotly.express as px
# from sklearn.cluster import KMeans

import folium
import unicodedata
import branca

import os
from pathlib import Path 
import time
from selenium import webdriver


def get_party_groups_votes(df_elections, index_col, columns_col, values_col, grupos_votos, relative_col=None):
    
    df = df_elections.copy()
    
    df[columns_col] = df['nr_partido'].apply(lambda x: grupos_votos.get(x,'outros'))
    df = df.groupby([index_col,columns_col])[values_col].sum().reset_index()
    df = df.pivot(index=[index_col],columns=columns_col,values=values_col).fillna(0)
    
    df['Total'] = df.sum(axis=1)
#     df['Validos'] = df['Total'] - df['__nulo']
#     df['direita'] = df['direita_conser'] + df['direita_trad']
    
    if relative_col:
        df = df.div(df[relative_col], axis=0)
    
    return df

def plot_clusters(X, ano, uf, cargo, group_level, n_clusters, grupos, municipio='', i_cols=(0,1),centroids=True,alpha=0.3):

    filename =  f'{cargo}_{group_level}_{i_cols[0]}_{i_cols[1]}'    
    folder_path = f'clusters/{ano}_{uf}'
    if municipio:
        folder_path += f'_{municipio}'
    file_path = folder_path + '/' + filename + '.png'
    if not os.path.exists(folder_path):
        Path(folder_path).mkdir(parents=True, exist_ok=True)
    
    i_x = i_cols[0]
    i_y = i_cols[1]
    x_label = grupos[i_x]
    y_label = grupos[i_y]
    fig, ax = plt.subplots()
    
    
    kmeans = KMeans(n_clusters, init = 'k-means++', random_state = 42)
    y_kmeans = kmeans.fit_predict(X)

    for i in range(n_clusters):
        ax.scatter(X[y_kmeans == i, i_x], X[y_kmeans == i, i_y], s = 50, alpha=alpha,  label = f'Cluster {i+1}')
    ax.plot([0,1],[1,0],c='k')
    ax.plot([0,0.5],[0,0.5],c='k')
    if centroids:
#         for i in range(n_clusters):
#             ax.scatter(kmeans.cluster_centers_[i, i_x], kmeans.cluster_centers_[i, i_y], s = 80, c = 'yellow',label = f'Centroid_{i}')
        ax.scatter(kmeans.cluster_centers_[:, i_x], kmeans.cluster_centers_[:, i_y], s = 100, c = 'yellow', label = 'Centroids')
    ax.set_title(f'Clusters - {filename}')
    ax.set_xlabel(x_label)
    ax.set_ylabel(y_label)
    ax.legend()
    fig.savefig(file_path)

def get_location(id_local,df,group_level):
    if id_local in df.index:
        return df.loc[id_local,group_level]
    else:
        return 'n.d.'
    
def add_location(df,ano,group_level='NM_BAIRRO'):
    '''
    df: data frame com dados de votação por seção
    group_level: 'NM_BAIRRO' (default) ou 'NM_LOCAL_VOTACAO'
    
    '''
    valid_agg = ('NM_BAIRRO','NM_LOCAL_VOTACAO')
    if group_level not in valid_agg:
        print(f"group_level inválido. valores válidos: {valid_agg} ")
        return
    
    
    df_location = epp_database.get_location_df(ano)
    df['id_local'] = df.NR_TURNO.astype(str) +'-' + df.SG_UF.astype(str) + '-' + df.CD_MUNICIPIO.astype(str)
    df['id_local'] = df['id_local'] + '-' + df.NR_ZONA.astype(str) + '-' + df.NR_SECAO.astype(str)
    df[group_level] = df['id_local'].apply(get_location,df=df_location,group_level=group_level)
    return df
    
def get_group_results(ano,uf,selection_dict,group_level='NM_BAIRRO',selected_col='NR_VOTAVEL',relative=True,dict_candidatxs={}):
    ''' group_level: 'NM_BAIRRO' ou 'NM_LOCAL_VOTACAO'
        relative - True: votação relativa do candidato
                 - False: votação relativa do candidato
    '''
    valid_agg = ('NM_BAIRRO','NM_LOCAL_VOTACAO')
    if group_level not in valid_agg:
        print(f"group_level inválido. valores válidos: {valid_agg} ")
        return
    
    cargo = selection_dict['DS_CARGO']
    if type(cargo) is list:
        if len(cargo) > 1:
            print("selection_dict['DS_CARGO'] inválido. Apenas um cardo deve ser selecionado.")
            return
        else:
            cargo = cargo[0]
    cargo = cargo.replace(' ','_')
    
    
    file_path = f'data/votacao_{group_level}'
    csv_path = file_path + f'/{ano}_{uf}_{cargo}_{selected_col}.csv'
    
    if not os.path.exists(file_path):
        Path(file_path).mkdir(parents=True, exist_ok=True)
    if os.path.isfile(csv_path):
        df_out = pd.read_csv(csv_path)
        try:
            municipios = selection_dict['NM_MUNICIPIO']
        except:
            municipios = None
        if municipios:
            if type(municipios) is str:
                municipios = [municipios]
            df_out = df_out.loc[df_out['NM_MUNICIPIO'].isin(municipios)]
        
            
    else:
        df = epp_database.get_results_slice_df(ano,uf,selection_dict,first_column='NR_TURNO')
        if df.empty:
            print(f"""
    Tabela sem dados. Verifique os valors das seguintes variáveis: 
    ano: {ano}
    uf: {uf}
    selection_dict: {selection_dict}""")
            return
        
        df = add_location(df,ano,group_level)
        dfg = df.groupby(['NM_MUNICIPIO',group_level,selected_col])

        df = pd.DataFrame()
        cols_sum = ['QT_VOTOS']
        df[cols_sum] = dfg[cols_sum].sum()
        df = df.reset_index()
    
        index_cols = ['NM_MUNICIPIO',group_level]
        df = df.pivot(index=index_cols,columns=selected_col,values='QT_VOTOS').fillna(0)
        df = df.reset_index()
        df.loc['TODOS'] = df.sum(numeric_only=True, axis=0)
        df.loc['TODOS'] = df.loc['TODOS'].fillna('TODOS')
        df.to_csv(csv_path,index=False)
#         df_out = df
        df_out = pd.read_csv(csv_path)
    
    if relative:
        df_out_votes = df_out.iloc[:,2:]
        df_out.iloc[:,2:] = df_out_votes.div(df_out_votes.sum(axis=1), axis=0)   
    
    if dict_candidatxs:
        
        # Seleciona colunas com base em dict_candidatxs.keys()
        
        cols = df_out.columns.tolist()
        candidatxs_cols = list(dict_candidatxs.keys())
        candidato_ref = str(candidatxs_cols[0])
        ref_index = cols.index(candidato_ref)
        cols = cols[:2] + [ cols[ref_index] ]  + candidatxs_cols[1:] #cols[2:ref_index] + cols[ref_index + 1 :]
        selected_cols = [col for col in cols if col in df_out.columns]
        df_out = df_out[selected_cols].copy()
        
        # ordena com base no candidato_ref e renomeia as colunas 
        
        df_out = df_out.sort_values(by=candidato_ref,ascending=False)
        df_out = df_out.rename(columns=dict_candidatxs)
    
    return df_out

# def resultados_bairros(ano,uf,selection_dict,aggregate_level='NM_BAIRRO',relative=True,dict_candidatxs={}):
#     ''' aggregate_level: 'NM_BAIRRO' ou 'NM_LOCAL_VOTACAO'
#         relative - True: votação relativa do candidato
#                  - False: votação relativa do candidato
#     '''
#     valid_agg = ('NM_BAIRRO','NM_LOCAL_VOTACAO')
#     if aggregate_level not in valid_agg:
#         print(f"aggregate_level inválido. valores válidos: {valid_agg} ")
#         return
    
#     cargo = selection_dict['DS_CARGO']
#     if type(cargo) is list:
#         if len(cargo) > 1:
#             print("selection_dict['DS_CARGO'] inválido. Apenas um cardo deve ser selecionado.")
#             return
#         else:
#             cargo = cargo[0]
#     cargo = cargo.replace(' ','_')
    
    
#     file_path = f'data/votacao_{aggregate_level}'
#     csv_path = file_path + f'/{ano}_{uf}_{cargo}.csv'
    
#     if not os.path.exists(file_path):
#         Path(file_path).mkdir(parents=True, exist_ok=True)
#     if os.path.isfile(csv_path):
#         df_out = pd.read_csv(csv_path)
#     else:
#         df = epp_database.get_results_slice_df(ano,uf,selection_dict)
#         if df.empty:
#             print(f"""
#     Tabela sem dados. Verifique os valors das seguintes variáveis: 
#     ano: {ano}
#     uf: {uf}
#     selection_dict: {selection_dict}""")
#             return
        
#         df = add_location(df,ano,aggregate_level)
# #         df_location = epp_database.get_location_df(ano)
# #         df['id_local'] = df.NR_TURNO.astype(str) +'-' + df.SG_UF.astype(str) + '-' + df.CD_MUNICIPIO.astype(str)
# #         df['id_local'] = df['id_local'] + '-' + df.NR_ZONA.astype(str) + '-' + df.NR_SECAO.astype(str)
# #         df[aggregate_level] = df['id_local'].apply(get_location,df=df_location,aggregate_level=aggregate_level)
    
#         dfg = df.groupby(['NM_MUNICIPIO',aggregate_level,'NR_VOTAVEL'])

#         df = pd.DataFrame()
#         cols_sum = ['QT_VOTOS']
#         df[cols_sum] = dfg[cols_sum].sum()
#         df = df.reset_index()
    
#         index_cols = ['NM_MUNICIPIO',aggregate_level]
#         df = df.pivot(index=index_cols,columns='NR_VOTAVEL',values='QT_VOTOS').fillna(0)
#         df = df.reset_index()
#         df.loc['TODOS'] = df.sum(numeric_only=True, axis=0)
#         df.loc['TODOS'] = df.loc['TODOS'].fillna('TODOS')
#         df.to_csv(csv_path,index=False)
# #         df_out = df
#         df_out = pd.read_csv(csv_path)
    
#     if relative:
#         df_out_votes = df_out.iloc[:,2:]
#         df_out.iloc[:,2:] = df_out_votes.div(df_out_votes.sum(axis=1), axis=0)   
    
#     if dict_candidatxs:
        
#         # Seleciona colunas com base em dict_candidatxs.keys()
        
#         cols = df_out.columns.tolist()
#         candidatxs_cols = list(dict_candidatxs.keys())
#         candidato_ref = str(candidatxs_cols[0])
#         ref_index = cols.index(candidato_ref)
#         cols = cols[:2] + [ cols[ref_index] ]  + candidatxs_cols[1:] #cols[2:ref_index] + cols[ref_index + 1 :]
#         df_out = df_out[cols]
        
#         # ordena com base no candidato_ref e renomeia as colunas 
        
#         df_out = df_out.sort_values(by=candidato_ref,ascending=False)
#         df_out = df_out.rename(columns=dict_candidatxs)
    
#     return df_out

def map2png(m,folder_path='maps/',filename='map.png'):
    
        
    delay=3
    fn='maps/temp_map.html'
    tmpurl='file://{path}/{mapfile}'.format(path=os.getcwd(),mapfile=fn)
    m.save(fn)

    # browser = webdriver.Firefox()
    browser = webdriver.Chrome()
    browser.get(tmpurl)
    
    if not os.path.exists(folder_path):
        Path(folder_path).mkdir(parents=True, exist_ok=True)
    file_path = folder_path + filename    
    
    #Give the map tiles some time to load
    time.sleep(delay)
    
    browser.save_screenshot(file_path)
    browser.quit()
    
# myscale = (df[column].quantile((0,0.02,0.25,0.5,0.75,0.9,0.98,1))).tolist()
# myscale = (df[column].quantile((0,0.2,0.4,0.6,0.8,0.9,1))).tolist()
# myscale = (df[column].quantile((0,0.8,0.85,0.90,0.95,1))).tolist()

def get_map(bairros_geo,df,legend_name,max_scale=0):
    df = df.copy()
    if max_scale:
        new_row = len(df.index)
        df.loc[new_row] = df.max().iloc[2:].max()
        df.loc[new_row,'NM_BAIRRO'] = 'n.a'
    
    df['bairro'] = df['NM_BAIRRO'].str.lower().apply(lambda x: ''.join(ch for ch in unicodedata.normalize('NFKD', x) if not unicodedata.combining(ch)))
    df2 = df.iloc[1:].copy()

#     myscale = (df[column].quantile((0,0.8,0.85,0.90,0.95,1))).tolist()

#     colorscale = branca.colormap.linear.YlOrRd_09.scale(0, 3e3)
    m = folium.Map(location=[-22.90,-43.4], zoom_start=11,tiles= 'Stamen Terrain')
    folium.Choropleth(
        geo_data=bairros_geo,
        name='choropleth',
        data=df2,
        columns=['bairro', legend_name],
        nan_fill_color = 'gray',
        nan_fill_opacity = 0.8,
#         fill_color='YlGnBu',
#         threshold_scale=myscale,
        key_on='properties.NOME',
        fill_color='YlOrRd',
#         fill_color='#black' if None else colorscale,
        fill_opacity=0.8,
        line_opacity=0.2,
#         bins = myscale,
        legend_name=legend_name
    ).add_to(m)
    return m


def get_city_data(df,agg_level='ZONA_SECAO'):
    df = df.groupby(by=[agg_level])[['NM_MUNICIPIO']].first()
    if agg_level == 'SG_UF':
        df.NM_MUNICIPIO = 'TODOS'    
    return df
def get_education_data(df,agg_level='ZONA_SECAO'):
    df = df.loc[df.CD_GRAU_ESCOLARIDADE>0]
    df = df.groupby(by=[agg_level,'CD_GRAU_ESCOLARIDADE'])[['QT_ELEITORES_PERFIL']].sum().reset_index()
    df1 = df.copy()
    
    df['escolaridade_media'] = df['QT_ELEITORES_PERFIL'] * df['CD_GRAU_ESCOLARIDADE']
    df = df.drop('CD_GRAU_ESCOLARIDADE',axis=1)
    df = df.rename(columns={'QT_ELEITORES_PERFIL':'QT_ELEITORES'})
    df = df.groupby(by=[agg_level]).sum()
    df['escolaridade_media'] = df['escolaridade_media'] / df['QT_ELEITORES']

    df1 = df1.set_index(agg_level)    
    df1 = df1.join(df)
    df1['std_escol'] = df1['QT_ELEITORES_PERFIL'] * (df1['CD_GRAU_ESCOLARIDADE'] - df1['escolaridade_media'])**2
    df1['std_escol'] = df1['std_escol'] / df1['QT_ELEITORES']
    df1 = df1.groupby(by=[agg_level])['std_escol'].sum()
    df1 = df1**0.5
    return df.join(df1)

def get_average_age(x):
    if x < 0:
        age = 0
    else:
        str_age = str(x)
        first_age = str_age[:2]
        last_age = str_age[-2:]
        if last_age == '00':
            age = int(first_age)
        elif first_age == '99':
            age = 100
        else:
            age = (int(first_age) + int(last_age) ) / 2
        
    return age

def get_age_data(df,agg_level='ZONA_SECAO'):
    df = df.groupby(by=[agg_level,'CD_FAIXA_ETARIA'])[['QT_ELEITORES_PERFIL']].sum().reset_index()
    df['idade_faixa'] = df['CD_FAIXA_ETARIA'].apply(get_average_age)
    df1 = df.copy()
    df = df.rename(columns={'idade_faixa':'idade_media'})
    df = df.drop('CD_FAIXA_ETARIA',axis=1)
    df = df.rename(columns={'QT_ELEITORES_PERFIL':'QT_ELEITORES'})
    df['idade_media'] = df['QT_ELEITORES'] * df['idade_media']
    df = df.groupby(by=[agg_level]).sum()
    df['idade_media'] = df['idade_media'] / df['QT_ELEITORES']
    
    df1 = df1.set_index(agg_level)    
    df1 = df1.join(df)
    df1['std_idade'] = df1['QT_ELEITORES_PERFIL'] * (df1['idade_faixa'] - df1['idade_media'])**2
    df1['std_idade'] = (df1['std_idade'] / df1['QT_ELEITORES'])
    df1 = df1.groupby(by=[agg_level])['std_idade'].sum()
    df1 = df1**0.5
    
    df = df.drop('QT_ELEITORES',axis=1).join(df1)
    
    return df

def plotly_histogram(df_original,x_column=None,color_column=None,selection_dict={},overlap=True):
    
    if overlap:
        barmode = 'overlay'
        histnorm = 'probability'
        opacity=0.50
    else:
        barmode = 'relative'
        histnorm = ''
        opacity=1.0
    
    df = df_original.dropna()
    
    for column,values_list in selection_dict.items():
        df = df_original.dropna().loc[df[column].isin(values_list)]
    fig = px.histogram(df, x=x_column, color=color_column,hover_data=df.columns,  marginal="box",barmode=barmode,histnorm=histnorm,opacity=opacity)#"rug")
    return fig

def plotly_scatter(df_original,x_column=None,y_column=None,color_column=None,size_column=None,selection_dict={},yaxis_range=None):
    df = df_original.dropna()#.reset_index()
    for column,values_list in selection_dict.items():
        df = df.loc[df[column].isin(values_list)]
    fig = px.scatter(df, x=x_column, y=y_column, color=color_column,size=size_column, hover_data=df.columns)
    if yaxis_range:
        fig.update_layout(yaxis_range=yaxis_range)
    return fig

def plot_tornado(people,time_spent,proficiency):
    num_people = len(people)
    pos = np.arange(num_people) + .5 # bars centered on the y axis
    fig, (ax_left, ax_right) = plt.subplots(ncols=2)
    ax_left.barh(pos, time_spent, align='center', facecolor='cornflowerblue')
    ax_left.set_yticks([])
    ax_left.set_xlabel('Hours spent')
    ax_left.invert_xaxis()
    ax_right.barh(pos, proficiency, align='center', facecolor='lemonchiffon')
    ax_right.set_yticks(pos)
    ax_right.set_yticklabels(people, ha='center', x=-0.08)
    ax_right.set_xlabel('Proficiency')
    plt.suptitle('Learning Python')
    plt.show()