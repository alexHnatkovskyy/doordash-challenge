import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _user: User = {} as User;

  constructor( private router: Router ) {
  }

  login( username: string ) {
    if (!this._user || !this._user.isAuthenticated) {
      this.user = new User(username, true);
      this.router.navigate(['/chat']);
    }
  }

  get user(): User {
    return { ...this._user };
  }

  set user( user: User ) {
    this._user = user;
  }

  isUserAuthenticated(): boolean {
    return this._user && this._user.isAuthenticated;
  }
}
