import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  loggedin: boolean = false;
  movie: string = "";

  constructor() {}

  ngOnInit() {
    this.isLoggedin();
  }

  // CHECK IF A USER IS LOGGED IN
  isLoggedin() {
    const token = window.sessionStorage.getItem("token");

    this.loggedin = token ? true : false;
  }
}
