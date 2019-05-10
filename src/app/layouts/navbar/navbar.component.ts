import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedin: boolean = false;
  query: string = '';

  constructor(private router: Router, private user: UserService) {}

  ngOnInit() {
    this.isLoggedin();
  }

  // CHECK IF A USER IS LOGGED IN
  isLoggedin() {
    const token = this.user.isLoggedIn;
    this.loggedin = token ? true : false;
  }

  toLogin() {
    this.router.navigate(['/', 'login']);
  }

  toRegister() {
    this.router.navigate(['/', 'register']);
  }

  toHome() {
    this.router.navigate(['/', 'home']);
  }

  search(query: string) {
    this.query = '';
    query != '' ? this.router.navigate(['/movies', query]) : false;
  }
}
