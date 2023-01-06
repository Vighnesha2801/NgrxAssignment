import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logincontainer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-logincomponent></app-logincomponent>`
})
export class LogincontainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
