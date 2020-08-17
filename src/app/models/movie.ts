export interface Movie {
  //Movie
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
  IsFavorite: boolean;
  
  //Movie details
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Ratings?: Rating[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}

export interface Rating {
  Source: string;
  Value: string;
}