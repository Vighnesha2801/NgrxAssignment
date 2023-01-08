import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeemoduleRoutingModule } from './employeemodule-routing.module';
// import { LayoutcomponentComponent } from './component/layoutcomponent/layoutcomponent.component';
// import { ListcomponentComponent } from './component/listcomponent/listcomponent.component';
import { LayoutcontainerComponent } from './container/layout.container';
import { ListcontainerComponent } from './container/employeeTable.container';
import { MaincontainerComponent } from './container/main.container';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './effect/getEmployee.effect';
import { ListcomponentComponent } from './component/employeeTablecomponent/employeeTable.component';
import { LayoutcomponentComponent } from './component/layoutcomponent/layout.component';



@NgModule({
  declarations: [
    LayoutcomponentComponent,
    ListcomponentComponent,
    ListcontainerComponent ,
    LayoutcontainerComponent,
    MaincontainerComponent
  ],
  imports: [
    CommonModule,
    EmployeemoduleRoutingModule,
    // BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    // HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    EffectsModule.forFeature([RouterEffects]),
    // StoreModule.forFeature({'employee',employeeReducer})
  ],
  exports:[
    LayoutcomponentComponent,
    ListcomponentComponent,
    ListcontainerComponent ,
    LayoutcontainerComponent,
    MaincontainerComponent 
  ]
})
export class EmployeemoduleModule { }
