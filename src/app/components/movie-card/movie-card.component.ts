import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { FavoritesStorageService } from 'src/app/services/favorites-storage.service';
import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styles: []
})
export class MovieCardComponent {
  @Input() movie: Movie;
  @Output() like = new EventEmitter<Movie>();
  constructor(private favoriteStorage: FavoritesStorageService) { 
  }

  

  

  onImageLoadError():void{
    this.movie.Poster = '../../../assets/poster-placeholder.jpg';
  }

  onLikeClick():void{
    // this.like.emit(this.movie);

    if(this.movie.IsFavorite == undefined){
      this.movie.IsFavorite = true;
      this.favoriteStorage.addMovieToFavorites(this.movie);
    }
    else if(this.movie.IsFavorite){
      this.movie.IsFavorite = false;
      this.favoriteStorage.romoveMovieFromFavorites(this.movie);
    }
    else{
      this.movie.IsFavorite = true;
      this.favoriteStorage.addMovieToFavorites(this.movie);
    }

    // if(this.favoriteStorage.isFavorite(this.movie)){
    //   this.movie.IsFavorite = false;
    //   this.favoriteStorage.romoveMovieFromFavorites(this.movie);
    // }
    // else{
    //   this.movie.IsFavorite = true;
    //   this.favoriteStorage.addMovieToFavorites(this.movie);
    // }
  }
}
