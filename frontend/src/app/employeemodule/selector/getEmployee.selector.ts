import { createFeatureSelector, createSelector } from "@ngrx/store";
import { employeeFeatureKey, EmployeeState } from "../reducers/getEmployee.reducer";


// const getUserFeatureState = createFeatureSelector<State>('EmployeeState');
const getEmployeeFeature = createSelector((state:any)=>state, state=> state[employeeFeatureKey]);

export const getEmployee = createSelector(
    getEmployeeFeature,
    EmployeeState =>{
        return EmployeeState.employee
    }
)