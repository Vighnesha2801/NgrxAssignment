import { createFeatureSelector, createSelector } from "@ngrx/store";
import { filterFeatureKey } from "../reducers/employee.reducer";
import { employeeFeatureKey } from "../reducers/getEmployee.reducer";

const getEmployeeFeature = createSelector((state:any)=>state, state=> state[employeeFeatureKey]);
const getSearchFeature = createSelector((state:any)=>state, state=> state[filterFeatureKey]);

export const getSearch = createSelector(
    getEmployeeFeature,
    getSearchFeature,
    (EmployeeState,FilterState)=>{
        return ((EmployeeState.employee).filter(obj => String(obj.id).toLowerCase().includes((FilterState.filterString).toLowerCase()) || String(obj.name).toLowerCase().includes((FilterState.filterString).toLowerCase()) || String(obj.Salary).toLowerCase().includes((FilterState.filterString).toLowerCase()) || String(obj.Address).toLowerCase().includes((FilterState.filterString).toLowerCase())));
    }
)