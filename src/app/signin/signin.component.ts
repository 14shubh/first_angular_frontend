import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:string = '';
  password:string = '';
  constructor(private _userService:UserService, private _router:Router) { }

  public Signin(){
    this._userService.login(this.email, this.password).subscribe(user => {
      if(user.status){
        localStorage.setItem('jwt_token',user.token)
        this._router.navigate(['home']);
      }else{
        alert("User Login failed");
      }
    })
  }

  ngOnInit(): void {
  }

}
