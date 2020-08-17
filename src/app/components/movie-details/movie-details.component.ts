import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie';
import { OmdbApiResponse } from 'src/app/models/omdb-api-response';
import { OmdbApiServiceService } from 'src/app/services/omdb-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styles: []
})
export class MovieDetailsComponent implements OnInit {
  id: string;
  movie: Movie;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private omdbApiService: OmdbApiServiceService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie = await this.omdbApiService.getMovieDetails(this.id);
  }

  onLoadImageError(movie: Movie){
    movie.Poster = '../../../assets/poster-placeholder.jpg';
  }
}
