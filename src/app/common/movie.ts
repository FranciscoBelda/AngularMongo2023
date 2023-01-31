
  export interface Imdb {
  rating: number;
  votes: number;
}

export interface Movie {
  imdb: Imdb;
  _id: string;
  title: string;
  year: number;
  director: string;
  plot: string;
  poster: string;
  genres: string[];
}

