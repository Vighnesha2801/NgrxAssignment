import * as FilterReducer from './employee.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as EmployeeReducer from './getEmployee.reducer';

export interface State{
    [EmployeeReducer.employeeFeatureKey ]:EmployeeReducer.EmployeeState;
    [FilterReducer.filterFeatureKey]:FilterReducer.FilterState;
}

export const reducers: ActionReducerMap<State> ={
    [EmployeeReducer.employeeFeatureKey]: EmployeeReducer.getEmployeeReducer,
    [FilterReducer.filterFeatureKey]:FilterReducer.getStringReducer
}

