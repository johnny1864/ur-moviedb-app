import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$: any;

  constructor(private _moiveService: MovieService) {}

  ngOnInit() {
    this.popular();
  }

  nowPlaying() {
    this.movies$ = this._moiveService.nowPlaying;
  }

  popular() {
    this.movies$ = this._moiveService.popular;
  }

  topRated() {
    this.movies$ = this._moiveService.topRated;
  }

  upcoming() {
    this.movies$ = this._moiveService.upcoming;
  }
}
