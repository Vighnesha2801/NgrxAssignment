import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontainer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <mat-toolbar class="mat-elevation-z8">
    <span>Ployeee!!</span>

    <div class="spacer" style="flex: 1 1 auto;"></div>
  <a mat-button matSuffix routerLink="/">Logout</a>
</mat-toolbar>
<div class="spacer" style="flex: 1 1 auto;"></div>
<app-layoutcontainer></app-layoutcontainer>
<app-listcontainer></app-listcontainer>`

// dataSource="employee$ | async"

})
export class MaincontainerComponent implements OnInit {

  // employee$ = this.employeeStore.employee$;

  constructor() { }

  ngOnInit(): void {
  }

}
function rgb(arg0: number, arg1: number, arg2: number): string {
  throw new Error('Function not implemented.');
}

