import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: boolean;
  constructor() {}

  get isLoggedIn() {
    return this.loggedIn;
  }

  login() {}
}
