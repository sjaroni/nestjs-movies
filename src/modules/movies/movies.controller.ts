import { Body, Controller, Get, Post } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(private movieService: MoviesService){}

  // add new movie, data from body
  @Post()
  createMovie(@Body() movie: Movie): number {
    // return 'lorem';
    return this.movieService.createMovie(movie);
  }

  @Get()
  readMovies(): Movie[]{
    return this.movieService.readMovies();
  }

}
