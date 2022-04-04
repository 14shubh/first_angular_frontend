import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';



@Component({
  selector: '.app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string = '';
  email : string = '';
  password : string = '';

  constructor(private _userService: UserService, private _router: Router) {
  }

  public Signup(){
    this._userService.registerUser(this.name, this.email, this.password).subscribe(user=>{
      if(user){
        // alert("User register successully");
        this._router.navigate(['sign-in']);
      }else{
        alert("User not registered");
      }

    });
  }

  ngOnInit(): void {
  }

}
