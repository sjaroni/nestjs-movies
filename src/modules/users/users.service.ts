import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/entities/movie.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private movieService: MoviesService,
  ) {}

  createUser(user: User): Promise<User> {
    return this.userRepo.save(user);
  }

  readUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  async addMovieToWatchList(userId: number, movieId: number) {
    const [user, movie] = await Promise.all([
      this.findUserWithWatchList(userId),
      this.findMovie(movieId),
    ]);

    if (!user || !movie) {
      throw new Error(user ? 'Movie not found' : 'User not found');
    }

    user.watchList ||= [];

    if (!user.watchList.some((m) => m.id === movieId)) {
      user.watchList.push(movie);
      await this.userRepo.save(user);
    }

    return user;
  }

  private async findUserWithWatchList(userId: number): Promise<User | null> {
    return this.userRepo.findOne({
      where: { id: userId },
      relations: ['watchList'],
    });
  }

  private async findMovie(movieId: number): Promise<Movie | null> {
    return this.movieService.readMovie(movieId);
  }

  async getWatchList(userId: number): Promise<Movie[]> {
    const user: User | null = await this.userRepo.findOne({
      where: { id: userId },
      relations: ['watchList'],
    });
    if (!user) {
      throw new Error('Movie not found');
    }
    return user.watchList;
  }
}
