import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movies: any;
  pageTitle: String = "Home";
  constructor(private _moiveService: MovieService) {}

  ngOnInit() {
    this.nowPlaying();
  }

  nowPlaying() {
    this._moiveService.nowPlaying.subscribe(results => {
      this.movies = results["results"];
      console.log(this.movies);
    });
    this.pageTitle = "Now Playing";
  }
}
