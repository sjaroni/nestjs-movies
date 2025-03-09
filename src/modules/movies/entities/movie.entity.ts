import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Genre } from "../enums/movie.enum";

@Entity()
export class Movie {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  director: string;
  
  @Column({ type: "double"})
  length: number;
  
  @Column()
  genre: Genre;  

}