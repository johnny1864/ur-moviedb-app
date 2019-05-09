import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  genres$: any;

  constructor(
    private _movie: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.genres();
  }

  genres() {
    this.genres$ = this._movie.genres;
  }

  toGenre(genre) {
    let name = genre.name;
    let id = genre.id;
    this.router.navigate(['/genres'], {
      queryParams: { name, id }
    });
  }
}
