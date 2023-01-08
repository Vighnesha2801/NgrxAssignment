import { Injectable } from '@angular/core';


import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { GetTableAction } from '../actions';
import { AuthService } from 'src/app/shared/auth.service';

import {catchError,debounceTime,map,mergeMap,skip,switchMap,} from 'rxjs/operators';



@Injectable()
export class RouterEffects {

    getDetails$ = createEffect(
      () => this.actions$.pipe(
        ofType(GetTableAction.getEmployeeDetails),
        switchMap((action) => {
          return this.authService.getData().pipe(map((data: any) => {
            console.log(data);
            return GetTableAction.getEmployeeSucess({employee: data})
          }),
          catchError(async ()=>GetTableAction.getEmployeeFailure()))
        })
      )
    ) 

  constructor(
    private actions$: Actions,
    private store: Store,
    private authService:AuthService
  ) {}
}



