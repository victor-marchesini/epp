#hide
 
import electionsBR as el
import json, os

cand_elections_fed = {}
results_elections_fed = {}


base_path = '/epp/'
abs_folder = f'{base_path}assets/html'
relative_folder = '../assets/html'
tables_folder = f'{relative_folder}/tables/elected'

os.makedirs(tables_folder,exist_ok=True)

n_turno = 1
uf='RJ'
anos = [2014, 2018]
# cargos= ["DEPUTADO FEDERAL","DEPUTADO ESTADUAL"]
cargos= ["Deputado Federal","Deputado Estadual"]
party_groups = ['todos','esquerda']

partidos_esquerda = ['PT','PSOL','PC do B']
hover_color = '#00BBBB'
styles = [dict(selector="tr:hover", props=[("background-color", f"{hover_color}")])]


html_dict = {}
for cargo in cargos:
    html_dict[cargo] = {}
    selection_dict = {'NR_TURNO':n_turno,'DS_CARGO':cargo}
    for ano in anos:        
        cand = el.get_candidates(year=ano, position=cargo,only_elected=True,state='RJ',
        columns=["NUMERO_CANDIDATO", "NOME_CANDIDATO", "SIGLA_UF", "NUM_TURNO", "SIGLA_PARTIDO", "COMPOSICAO_LEGENDA"])
        cand = cand.loc[cand.SIGLA_UF == uf].copy()
        
        el_results = el.get_elections(year=ano, position=cargo, state=uf, regional_aggregation="State", political_aggregation="Candidate",only_elected=True,
        columns=['NUMERO_CANDIDATO','QTDE_VOTOS'])
        el_results['QTDE_VOTOS'] = el_results['QTDE_VOTOS'].astype(int)
        votes_dict = el_results.set_index('NUMERO_CANDIDATO').to_dict()['QTDE_VOTOS']

        selected_cols = ['SIGLA_PARTIDO','NUMERO_CANDIDATO','NOME_CANDIDATO']
        cand = cand[selected_cols].copy()
        cand['QTDE_VOTOS'] = cand['NUMERO_CANDIDATO'].apply(lambda x: votes_dict.get(x))

        

        html_dict[cargo][ano]={}
        for party_group in party_groups:
            table_name = f'{uf}_{cargo}_{ano}_{party_group}'.replace(' ','_')
            print(table_name)
            table_path = f'{tables_folder}/{table_name}.html'
        
            html_dict[cargo][ano][party_group]= f'{abs_folder}/tables/elected/{table_name}.html'
            
            if party_group == 'esquerda':
                cand = cand.loc[cand.SIGLA_PARTIDO.isin(partidos_esquerda)]

            cand = cand.sort_values(by='QTDE_VOTOS',ascending=False)
            cand.index = range(1,len(cand)+1)
            
            df_styled = cand.style.set_table_styles(styles)
            
            if party_group != 'esquerda':
                df_styled = df_styled.apply(lambda x: ['background: #CC8888' if (set(partidos_esquerda).intersection(x.values)) 
                                        else '' for i in x], axis=1)
            df_styled.to_html(table_path)

with open(f'{relative_folder}/elected_html_dict.json', 'w') as fp:
    json.dump(html_dict, fp,sort_keys=True, indent=4)