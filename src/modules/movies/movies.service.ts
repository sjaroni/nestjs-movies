import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  createMovie(movie: Movie): number {
    this.movies.push(movie);
    return movie.id;
  }

  readMovies(): Movie[] {
    return this.movies;
  }

  readMovie(id: number): Movie {
    return this.movies.find((movie) => movie.id === id)!;
  }
}
