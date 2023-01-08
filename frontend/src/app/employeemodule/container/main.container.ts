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

})
export class MaincontainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


