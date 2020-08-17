import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';
import { parse } from 'querystring';

@Pipe({
  name: 'yearFilter'
})
export class YearFilterPipe implements PipeTransform {

  transform(movies: Array<Movie>, yeaFrom: number, yearTo: number): any {
    return movies.filter(m => parseInt(m.Year, 10) >= yeaFrom && parseInt(m.Year, 10) <= yearTo);
  }
}