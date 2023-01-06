import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MaincontainerComponent } from './employeemodule/container/main.container';
import { LogincontainerComponent } from './loginmodule/container/logincontainer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  
  {
    path:'',
    component:LogincontainerComponent
  },
  {
    path:'employee',
    loadChildren: () => import('./employeemodule/employeemodule.module').then(m => m.EmployeemoduleModule),
    // component:MaincontainerComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    component: PagenotfoundComponent 
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
