import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  loggedin: boolean = false;

  constructor() {}

  ngOnInit() {
    this.isLoggedin();
  }

  isLoggedin() {
    const token = window.sessionStorage.getItem("token");
    console.log(token);
  }
}
