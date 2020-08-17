import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {  
  transform(movies: Array<Movie>, type: string): any {
    if(type == ''){
      return movies;
    }
    return movies.filter(x=>x.Type == type);
  }

}
