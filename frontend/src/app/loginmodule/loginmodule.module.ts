import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginmoduleRoutingModule } from './loginmodule-routing.module';
// import { LogincomponentComponent } from './component/logincomponent/login.component';
import { LogincontainerComponent } from './container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { LogincomponentComponent } from './component/login/login.component';
// import { LayoutcontainerComponent } from '../employeemodule/container/layoutcontainer.component';


@NgModule({
  declarations: [
    LogincomponentComponent,
    LogincontainerComponent,
    

  ],
  imports: [
    CommonModule,
    LoginmoduleRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
  ],
  exports: [
    LogincomponentComponent,
    LogincontainerComponent,
    
  ]
})
export class LoginmoduleModule { }
