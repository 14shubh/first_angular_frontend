import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) { }
  canActivate(): boolean {
    if (this._userService.checkToken()) {
      return true;
    } else {
      this._router.navigate(['sign-in']);
      return false;
    }
  }
}
