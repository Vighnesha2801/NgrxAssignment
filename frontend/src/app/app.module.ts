import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginmoduleModule } from "./loginmodule/loginmodule.module";
import { EmployeemoduleModule } from './employeemodule/employeemodule.module';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './custom.interceptor';
import { StoreModule } from '@ngrx/store';
import { getEmployeeReducer } from './employeemodule/reducers/getEmployee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './employeemodule/effect/getEmployee.effect';
import { CommonModule } from '@angular/common';
import { reducers } from './employeemodule/reducers';
// import { FilterPipe } from './pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        PagenotfoundComponent,
        // FilterPipe,

    ],
    providers: [
        AppRoutingModule,
        AuthService, 
        AuthGuard,
        {
            provide:HTTP_INTERCEPTORS,
            useClass: CustomInterceptor,
            multi:true
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LoginmoduleModule,
        EmployeemoduleModule,
        HttpClientModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([RouterEffects]) 
    ]
    
})
export class AppModule { }
