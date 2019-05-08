import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies$: any;
  routeURL: any;
  query: string;

  constructor(
    private _movie: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeURL = this.route.params.subscribe(_ => {
      this.getUrlData();
    });
  }

  ngOnDestroy() {
    this.routeURL.unsubscribe();
  }

  getUrlData() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.movies$ = this._movie.searchTitle(this.query);
  }
}
