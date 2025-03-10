import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './modules/movies/movies.module';
import { MoviesService } from './modules/movies/movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './modules/movies/entities/movie.entity';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/entities/user.entity';

@Module({
  imports: [MoviesModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'nestdb',
    entities: [Movie, User],
    synchronize: true,
  }), UsersModule,],
  controllers: [AppController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
