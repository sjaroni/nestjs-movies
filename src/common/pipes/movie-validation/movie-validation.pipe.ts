import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from '@nestjs/common';
import { Movie } from 'src/modules/movies/movie';

@Injectable()
export class MovieValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    const movie = value as Movie;
    if(movie.length > 300){
      throw new HttpException("Der Film ist zu lang", 400)
    }
    return value;
  }
}
