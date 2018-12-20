import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  movies: any;
  baseURL: "https://api.themoviedb.org/3/";
  API_key: "3ceedebc84e6ec94b4dc92e24df9d7c";
  constructor(private http: HttpClient) {}

  get movie() {
    return ""; // this.http(`${this.baseURL}search/`);
  }

  get nowPlaying() {
    this.movies = this.http.get(
      `${this.baseURL}movie/now_playing?api_key=${
        this.API_key
      }&language=en-US&page=1`
    );

    return this.movies;
  }
}
