import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilteredTableAction } from '../actions';
import { filterTableAction } from '../actions/employee.action';
import * as FilterSelector from '../selector/employee.selector';

@Component({
  selector: 'app-layoutcontainer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-layoutcomponent (filterString)="filter($event)"></app-layoutcomponent>`
})
export class LayoutcontainerComponent implements OnInit {

  filterString:string='';

  constructor(private store:Store, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.dispatch(FilteredTableAction.filterTableAction({ filterString:this.filterString }));
  }

  filter(filterString:string) {
    this.store.dispatch(FilteredTableAction.filterTableAction({ filterString }));
  }

}
