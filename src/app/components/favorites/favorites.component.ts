import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { FavoritesStorageService } from 'src/app/services/favorites-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: []
})
export class FavoritesComponent implements OnInit {
  
  movies: Array<Movie>;

  constructor(private favoriteStrorage: FavoritesStorageService) { }

  ngOnInit() {
    this.movies = this.favoriteStrorage.allFavorites();
  }

}
