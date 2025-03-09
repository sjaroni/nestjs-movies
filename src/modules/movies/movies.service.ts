import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepo: Repository<Movie>,
  ) {}

  createMovie(movie: Movie): Promise<Movie> {
    return this.movieRepo.save(movie);
  }

  // get all movies
  readMovies(): Promise<Movie[]> {
    return this.movieRepo.find();
  }

  // get only one movie by id  
  readMovie(id: number): Promise<Movie | null> {
    return this.movieRepo.findOneBy({ id });
  }

  // update movie
  updateMovie(id: number, newMovie: Movie): Promise<UpdateResult> {
    return this.movieRepo.update(id, newMovie);
  }

  // delete movie
  deleteMovie(id: number): Promise<DeleteResult> {
    return this.movieRepo.delete(id);
  }
}
