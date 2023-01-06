import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/auth.service';
import { getEmployeeDetails } from '../actions/getEmployee.action';
import { Employee } from '../models';
import { EmployeeState } from '../reducers/getEmployee.reducer';
// import * as EmployeeSelector from '../selector/getEmployee.selector';
// import * as FilterSelector from '../selector/employee.selector';
import * as SearchSelector from '../selector/search.selector';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-listcontainer',
  template: `<app-listcomponent [dataSource]="dataSource"></app-listcomponent>`
})
export class ListcontainerComponent implements OnInit {

  displayedColumns: any[] = ['id', 'name', 'Salary','Address'];

  dataSource: any;

  constructor(private store: Store<EmployeeState>, private auth: AuthService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.dispatch(getEmployeeDetails());
    this.store.select(SearchSelector.getSearch).pipe(debounceTime(500)).subscribe(employees=>{
      this.dataSource=employees;
      this.cd.detectChanges();
    })
    // this.store.select(FilterSelector.getFilter).subscribe(res=>{
    //   this.filterString=res,
    //   this.cd.detectChanges();
    //   console.log(this.filterString);
    // })

    // this.store.pipe(select(EmployeeSelector.getEmployee)).subscribe(employees=>{
    //   this.dataSource=employees;
    //   this.cd.detectChanges();
    //   console.log(this.dataSource)
    // })
  
  }

}
