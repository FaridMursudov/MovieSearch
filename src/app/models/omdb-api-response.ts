import { Movie } from './movie';

export interface OmdbApiResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
  }