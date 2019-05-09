import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  movies$: any;
  routeURL: any;
  genre: string;

  constructor(
    private _movie: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log();
    this.routeURL = this.route.params.subscribe(val => {
      this.getUrlData();
    });
  }

  ngOnDestroy() {
    this.routeURL.unsubscribe();
  }

  getUrlData() {
    this.genre = this.route.snapshot.queryParams.name;
    let id = this.route.snapshot.queryParams.id;
    console.log(this.genre, id);
    this.movies$ = this._movie.getGenreMovies(id);
  }
}
