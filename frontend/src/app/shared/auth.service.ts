import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl ="http://localhost:3000/api/login";
  private _getData="http://localhost:3000/api/employee";
  
  constructor(private http:HttpClient) { }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user);
  }

  getData(){
    return this.http.get(this._getData);
  }

  IsLoggedIn(){
    const t = localStorage.getItem('token');
    if(t){
      return true;
    }
    else
    {
      return false;
    }
    //return !!localStorage.getItem('token');
  }

  getToken(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
}
