import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesStorageService {
  constructor() { }

  addMovieToFavorites(movie: Movie): void{
    if(this.isFavorite(movie)){
      return;
    }
    let movies: Array<Movie>;
    let moviesJson = localStorage.getItem('favorites')
    if(moviesJson){
      movies=JSON.parse(moviesJson);
    }
    else{
      movies = new Array<Movie>();
    }
    movies.push(movie);
    localStorage.setItem('favorites', JSON.stringify(movies));
  }

  romoveMovieFromFavorites(movie: Movie): void{
    let movies: Array<Movie>;
    let moviesJson = localStorage.getItem('favorites')
    if(moviesJson){
      movies = JSON.parse(moviesJson);
      movies = movies.filter(m=>m.imdbID != movie.imdbID);
      localStorage.setItem('favorites', JSON.stringify(movies));
    }
  }

  allFavorites(): Array<Movie>{
    let movies: Array<Movie>;
    let moviesJson = localStorage.getItem('favorites')
    if(moviesJson){
      movies = JSON.parse(moviesJson);
    }
    else{
      movies = new Array<Movie>();
    }
    return movies;
  }

  isFavorite(movie: Movie): boolean{
    let movies: Array<Movie>;
    let moviesJson = localStorage.getItem('favorites')
    if(moviesJson){
      movies = JSON.parse(moviesJson);
      let favorite = movies.filter(m => m.imdbID == movie.imdbID);
      if(favorite.length > 0){
        return true;
      }
    }
    return false;
  }
}
