import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LogincomponentComponent implements OnInit {

  loginForm : any;
  hide = true;
  loginUserData={};

  constructor(private router: Router, private _auth:AuthService) { 
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
          '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
        ),]),
        password: new FormControl('', [Validators.required,Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        )])
      }
    );
  }




  ngOnInit(): void {
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
    }
  }



  onLogin(){
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;
    this.loginUserData={email,password}
    console.log(this.loginUserData);
    if(!this.loginForm.valid ){
      return;
    }
    this._auth.loginUser(this.loginUserData).subscribe(
   {
    next: res=>{
    console.log(res)
    localStorage.setItem('token',res.token);
    this.loginForm.reset();
    this.router.navigate(['/employee']);
  }
  ,error :err=>{
    if(err instanceof HttpErrorResponse){
      if(err.status === 401){
        console.log(err);
    alert("Invalid credentials!!")
    this.loginForm.reset();
    this.router.navigate(['/']);}
    }
    },
  })
  }
}
