import { Movie } from 'src/modules/movies/movie';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @ManyToMany(() => Movie, {
    // nestjs erlauben änderungen an der watchlist zu machen
    cascade: true
  })
  @JoinTable()
  watchList: Movie[];
  // erg: in sql eine tabelle mit dem namen user_watch_list_movie
}