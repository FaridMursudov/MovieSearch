import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { OmdbApiResponse } from 'src/app/models/omdb-api-response';
import { Movie } from 'src/app/models/movie';
import { OmdbApiServiceService } from 'src/app/services/omdb-api-service.service';
import { FavoritesStorageService } from 'src/app/services/favorites-storage.service';
// import { FavoritesStorageServiceService } from 'src/app/services/favorites-storage-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})

export class SearchComponent implements OnInit {
  title = '';
  movies = Array<Movie>();
  type = '';
  yearFrom = 1888;
  yearTo = new Date().getFullYear();
  page = 1;
  totalResults = 0;
  
  constructor(private omdbApiService: OmdbApiServiceService, private favoritesService: FavoritesStorageService) { }
  
  ngOnInit() {
    console.log(this.yearTo);
  }

  async onSearch(){
    this.page = 1;
    this.clearMovies();
    await this.loadMovies();
  }

  onLike(movie: Movie){
    if(movie.IsFavorite == undefined){
      movie.IsFavorite = true;
    }
    else{
      movie.IsFavorite = !movie.IsFavorite;
    }
    this.favoritesService.addMovieToFavorites(movie);
  }

  async onLoadMoreClick(){
    this.page++;
    await this.loadMovies();
  }

  async loadMovies(){
    let response = await this.omdbApiService.searchMovies(this.title, this.page);
    if (response.Response) {
      this.totalResults = parseInt(response.totalResults);
      this.movies = this.movies.concat(response.Search);
    }
  }

  clearMovies():void{
    while (this.movies.length > 0) {
      this.movies.pop();
    }
  }
}