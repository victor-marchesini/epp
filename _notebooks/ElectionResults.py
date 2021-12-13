#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Oct 18 11:18:15 2020

@author: victor
"""

# import pandas as pd

class ElectionResults:
    
    def __init__(self,ano,UF,df):
        self._ano = ano
        self._UF = UF
        self.set_complete_df(df)
        self.set_df()
        
    def set_complete_df(self,df):
        df['nr_partido'] = df.NR_VOTAVEL.astype(str).str[:2].astype(int)
        self._comp_df = df
        
    def get_complete_df(self):
        return self._comp_df
    
    def set_df(self,first_column='CD_MUNICIPIO',aditional_cols=['NR_TURNO']):
        first_column = 'CD_MUNICIPIO'
        df = self._comp_df.loc[:,first_column:]
        if aditional_cols:
            for col in aditional_cols:
                df[col] = self._comp_df.loc[:,col]
        self._df = df
    
    def get_df(self,first_column='CD_MUNICIPIO',aditional_cols=['NR_TURNO']):
        if self._df.empty:
            self.set_df(first_column,aditional_cols)
        
        return self._df
    
    def get_slice_df(self, selection_dict):
        df = self._comp_df
        
        mask = [True]*len(df)
        
        for key, value in selection_dict.items():   
            if type(value) is list:
                values_list = value
            else:
                values_list = [value]
            if values_list:
                mask = mask & (df[key].isin(values_list))   
        
        return df.loc[mask].copy()
    