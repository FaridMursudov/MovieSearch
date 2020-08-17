import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OmdbApiResponse } from '../models/omdb-api-response';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiServiceService {

  constructor(private httpClient: HttpClient) { }

  private readonly requestUrl = 'http://www.omdbapi.com/';
  private readonly key = 'b5b64a47';

  async searchMovies(title: string, page: number = 1) : Promise<OmdbApiResponse>{
    let apiParams = {
      apiKey: this.key,
      s: title,
      page: page.toString()
    };

    return await this.httpClient.get<OmdbApiResponse>(this.requestUrl, { params: apiParams }).toPromise();
  }

  async getMovieDetails(id: string): Promise<Movie>{
    let apiParams = {
      apiKey: this.key,
      i: id
    };
    return await this.httpClient.get<Movie>(this.requestUrl, { params: apiParams }).toPromise();

  }
}
