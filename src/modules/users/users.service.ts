import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  
  createUser(user: User): Promise<User> {
    return this.userRepo.save(user);
  }

  readUsers(): Promise<User[]>{
    return this.userRepo.find();
  }

}
