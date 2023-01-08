import { state } from '@angular/animations';
import { createReducer,on } from '@ngrx/store';
import { filterTableAction } from '../actions/employee.action';


export const filterFeatureKey = 'FilterState';

export interface FilterState{
    filterString:String;
}

const initialState:FilterState = {
    filterString :""
};

export const getStringReducer = createReducer(
    initialState,
    on(filterTableAction, (state,{ filterString })=>{
        return {...state,filterString}
    }) 
);



