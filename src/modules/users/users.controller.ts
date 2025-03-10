import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
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
}