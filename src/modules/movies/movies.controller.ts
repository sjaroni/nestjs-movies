import { Body, Controller, Get, Post, Param } from '@nestjs/common';
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

  // get all movies from movie-array
  @Get()
  readMovies(): Movie[]{
    return this.movieService.readMovies();
  }

  // get single movie by id from movie-array
  @Get(':id')
    readMovie(@Param('id') id: number):Movie{
      return this.movieService.readMovie(id);
    }

}
