import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ViewCategoryComponent } from '../view-category/view-category.component';

@Component({
  selector: '.app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) { }

  public isLoggedIn(): boolean {
    return this._userService.checkToken();
  }

  public signOut(){
    localStorage.removeItem('jwt_token');
    this._router.navigate(['sign-in']);
  }
  ngOnInit(): void {
  }



}
