import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './modules/movies/movies.module';
import { MoviesService } from './modules/movies/movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './modules/movies/entities/movie.entity';

@Module({
  imports: [MoviesModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'nestdb',
    entities: [Movie],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
