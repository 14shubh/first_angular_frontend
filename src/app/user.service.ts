import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
  view() {
    throw new Error('Method not implemented.');
  }

  signupApi = 'https://angular-first-api.herokuapp.com/sign-up';
  // signinApi = 'https://angular-first-api.herokuapp.com/sign-in';
  signinApi = 'http://localhost:3000/sign-in';
  constructor(private _http: HttpClient) { }

  public registerUser(name: string, email: string, password: string){
    return this._http.post<any>(this.signupApi, { name:name, email:email, password:password});
  }

  public login(email:string, password:string){
    return this._http.post<any>(this.signinApi, { email:email, password:password});
  }

  public checkToken(){
    return !!localStorage.getItem('jwt_token');
  }
}
