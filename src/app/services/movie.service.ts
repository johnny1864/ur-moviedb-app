import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: any;
  baseURL = 'https://api.themoviedb.org/3/';
  API_key = '3ceedebc84e6ec94b4dc92e24df9d7c8';
  constructor(private http: HttpClient) {}

  get nowPlaying() {
    return this.http.get(
      `${this.baseURL}movie/now_playing?api_key=${
        this.API_key
      }&language=en-US&page=1`
    );
  }

  get popular() {
    return this.http.get(
      `${this.baseURL}movie/popular?api_key=${
        this.API_key
      }&language=en-US&page=1`
    );
  }

  get topRated() {
    return this.http.get(
      `${this.baseURL}movie/top_rated?api_key=${
        this.API_key
      }&language=en-US&page=1`
    );
  }

  get upcoming() {
    return this.http.get(
      `${this.baseURL}movie/upcoming?api_key=${
        this.API_key
      }&language=en-US&page=1`
    );
  }

  searchTitle(title: string) {
    console.log(title);
    return this.http.get(
      `${this.baseURL}search/movie?api_key=${
        this.API_key
      }&language=en-US&query=${title}&page=1&include_adult=false`
    );
  }

  get genres() {
    return this.http.get(
      `${this.baseURL}genre/movie/list?api_key=${
        this.API_key
      }&language=en-US&page=1`
    );
  }

  getMovie(id: string) {
    return this.http.get(
      `${this.baseURL}movie/${id}?api_key=${this.API_key}&language=en-US&page=1`
    );
  }

  getrelatedMovies(id: string) {
    return this.http.get(
      `${this.baseURL}movie/${id}/similar?api_key=${
        this.API_key
      }&language=en-US&page=1`
    );
  }
}
