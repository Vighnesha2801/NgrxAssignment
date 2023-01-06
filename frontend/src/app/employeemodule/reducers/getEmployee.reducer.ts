import { state } from '@angular/animations';
import { createReducer,on } from '@ngrx/store';
import { getEmployeeDetails, getEmployeeSucess } from '../actions/getEmployee.action';
import { Employee } from '../models';

export const employeeFeatureKey = 'employeesState';


export interface EmployeeState{
    employee: Employee[];
}

const initialState:EmployeeState = {
    employee:[]
};

export const getEmployeeReducer = createReducer(
    initialState,
    on(getEmployeeSucess, (state,{ employee })=>{
        // console.log(employee)
        return {...state,employee}
    }) 
);



