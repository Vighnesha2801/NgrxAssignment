import { createFeatureSelector, createSelector } from "@ngrx/store";
import { filterFeatureKey } from "../reducers/employee.reducer";


const getStringFeature = createSelector((state:any)=>state, state=> state[filterFeatureKey]);

export const getFilter = createSelector(
    getStringFeature,
    FilterState=>{
        // console.log(FilterState)
        return FilterState.filterString
    }
)