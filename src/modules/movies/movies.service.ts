import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
@Injectable()
export class MoviesService {
  
  // constructor(
  //   @InjectRepository(Movie)
  //   private usersRepository: Repository<Movie>,
  // ) {}

  private movies: Movie[] = [];

  createMovie(movie: Movie): number {
    this.movies.push(movie);
    return movie.id;
  }

  readMovies(): Movie[] {
    return this.movies;
  }

  readMovie(id: number): Movie {
    // return this.movies.find((movie) => movie.id === id);
    const movie = this.movies.find((movie) => movie.id === id);
    if(movie){
      return movie;
    }    
    throw new Error("Movie not found");
  }

  // update movie
  updateMovie(newMovie: Movie): Movie{
    const index = this.movies.findIndex(movie => movie.id == newMovie.id);
    if(index > -1){
      this.movies[index] = newMovie;
      return this.movies[index];
    }
    throw new Error("Movie not found");
  }

  // delete movie
  deleteMovie(id: number){
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

}
