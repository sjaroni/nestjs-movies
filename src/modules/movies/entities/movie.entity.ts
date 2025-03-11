import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Genre } from "../enums/movie.enum";
import { IsEnum, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

@Entity()
export class Movie {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  name: string;
  
  @Column()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  director: string;
  
  @Column({ type: "double"})
  @IsNumber()
  @Min(1)
  @Max(300, { message: "Individueller Fehlertext"})
  length: number;
  
  @Column()
  @IsEnum(Genre)
  genre: Genre;  

}