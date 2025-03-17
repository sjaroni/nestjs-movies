import { Injectable } from '@nestjs/common';
import { Movie } from './movie';
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

  // update full movie
  updateFullMovie(id: number, newMovie: Movie): Promise<UpdateResult> {
    return this.movieRepo.update(id, newMovie);
  }

  // update part of movie
  // works only if validation in movie.ts is off
  async updatePartiallyMovie(id: number, updateMovieDto: Partial<Movie>): Promise<UpdateResult> {
    return this.movieRepo.update(id, updateMovieDto);
  }
  

  // delete movie
  deleteMovie(id: number): Promise<DeleteResult> {
    return this.movieRepo.delete(id);
  }
}
