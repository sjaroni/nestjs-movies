import { Genre } from "../enums/movie.enum";

export interface Movie {
  id: number,
  name: string,
  director: string,
  length: number,
  genre: Genre;
}