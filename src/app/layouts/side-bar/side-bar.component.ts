import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  genres$: any;

  constructor(private _movie: MovieService) {}

  ngOnInit() {
    this.genres();
  }

  genres() {
    this.genres$ = this._movie.genres;
  }
}
