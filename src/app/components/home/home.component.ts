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
    this.nowPlaying();
  }

  nowPlaying() {
    this.movies$ = this._moiveService.nowPlaying;
    this.pageTitle = "Now Playing";
  }
}
