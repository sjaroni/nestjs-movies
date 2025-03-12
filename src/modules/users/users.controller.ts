import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // add new user, data from body
  @Post()
  createUser(@Body() user: User): Promise<User> {
    // return 'lorem';
    return this.userService.createUser(user);
  }

  // get all users from user-array
  @Get()
  readUsers(): Promise<User[]> {
    return this.userService.readUsers();
  }

  // save movie to users watchlist
  @Put(':userId/movies/:movieId')  
  addMovieToWatchList(
    @Param('userId') userId: number,
    @Param('movieId') movieId: number,
  ) {
    return this.userService.addMovieToWatchList(userId, movieId);
  }

  // get all movies from user-watchlist
  @Get(':userId/movies')
  getWatchList(@Param('userId') userId: number){
    return this.userService.getWatchList(userId);
  }

}
