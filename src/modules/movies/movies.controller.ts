import { Body, Controller, Get, Post, Param, Put, Delete, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Movie } from './movie';
import { MoviesService } from './movies.service';
import { DeleteResult, UpdateResult } from 'typeorm';
// import { MovieValidationPipe } from 'src/common/pipes/movie-validation/movie-validation.pipe';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  // add new movie, data from body
  @Post()
  // createMovie(@Body(MovieValidationPipe) movie: Movie): Promise<Movie> {
  // createMovie(@Body(ValidationPipe) movie: Movie): Promise<Movie> { <--- Global in main.ts eingebunden
  createMovie(@Body() movie: Movie): Promise<Movie> {
    // return 'lorem';
    return this.movieService.createMovie(movie);
  }

  // get all movies from movie-array
  @Get()
  readMovies(): Promise<Movie[]> {
    return this.movieService.readMovies();
  }

  // get single movie by id from movie-array
  @Get(':id')
  readMovie(@Param('id', ParseIntPipe) id: number,): Promise<Movie | null> {
    return this.movieService.readMovie(id);
  }

  // update movie
  @Put(':id')
  updateMovie(@Param('id') id: number, @Body() newMovie: Movie): Promise<UpdateResult> {
    return this.movieService.updateMovie(id, newMovie);
  }

  // delete movie
  @Delete(':id')
  deleteMovie(@Param('id') id: number): Promise<DeleteResult>{
    return this.movieService.deleteMovie(id);
  }

}
