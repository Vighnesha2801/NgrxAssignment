import { createAction, props } from "@ngrx/store";



export const filterTableAction =createAction(
    "[Filter employee]",
    props<{filterString:string}>()
)
