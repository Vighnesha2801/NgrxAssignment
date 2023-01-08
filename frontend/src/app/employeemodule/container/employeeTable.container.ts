import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/auth.service';
import { getEmployeeDetails } from '../actions/getEmployee.action';

import { EmployeeState } from '../reducers/getEmployee.reducer';

import * as SearchSelector from '../selector/search.selector';
import { debounceTime, Observable } from 'rxjs';

@Component({
  selector: 'app-listcontainer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-listcomponent [dataSource]="dataSource$ | async"></app-listcomponent>`
})
export class ListcontainerComponent implements OnInit {

  displayedColumns: any[] = ['id', 'name', 'Salary','Address'];

  dataSource: any;

  dataSource$: Observable<any>;
  constructor(private store: Store<EmployeeState>, private auth: AuthService) { }

  ngOnInit(): void {
    this.store.dispatch(getEmployeeDetails());
    this.dataSource$ = this.store.pipe(select(SearchSelector.getSearch));
  
  }

}
