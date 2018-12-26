import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movies$: any;
  pageTitle: String = "Home";
  constructor(private _moiveService: MovieService) {}

  ngOnInit() {
    this.popular();
  }

  nowPlaying() {
    this.movies$ = this._moiveService.nowPlaying;
    this.pageTitle = "Now Playing";
  }

  popular() {
    this._moiveService.getPopular();
    this.movies$ = this._moiveService.movies;
    this.pageTitle = "Popular";
  }
}
