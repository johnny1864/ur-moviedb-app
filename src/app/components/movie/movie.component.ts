import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie$: any;
  relatedMovie$: any;
  routeURL: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _movie: MovieService
  ) {}

  ngOnInit() {
    this.routeURL = this.route.params.subscribe(() => {
      this.getMovie();
    });
  }

  ngOnDestroy() {
    this.routeURL.params.unsubscribe();
  }

  getMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie$ = this._movie.getMovie(id);
    this.getRelatedMovies(id);
  }

  getRelatedMovies(id) {
    this.relatedMovie$ = this._movie.getrelatedMovies(id);
  }

  navigateToMovie(id) {
    this.router.navigate(['/', 'movie', id]);
  }
}
