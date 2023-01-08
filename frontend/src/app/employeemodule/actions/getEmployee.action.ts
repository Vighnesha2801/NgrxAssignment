import { createAction, props } from "@ngrx/store";
import { Employee } from "../models/employee.model";

export const getEmployeeDetails = createAction(
    '[Employee] Get Employee'
  );

  export const getEmployeeSucess = createAction(
    '[Employee] Get Employee Success',
    props<{ employee: Employee[] }>()
  );

  export const getEmployeeFailure = createAction(
    '[Employee] Get Employee Failure',
  );


