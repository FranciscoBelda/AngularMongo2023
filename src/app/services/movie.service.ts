import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../common/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseURI = 'http://localhost:3000/api/movies/';
  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.baseURI);
  }

  getGenres(): Observable<string[]>{
    return this.http.get<string[]>(this.baseURI+'genres');
  }
  updateMovie(id: string, movie: Movie): Observable<any>{
    return this.http.put<any>(this.baseURI+id,movie);
  }
  addMovie(movie: Movie): Observable<any>{
    return this.http.post<any>(this.baseURI,movie);
  }
  deleteMovie(id: string): Observable<any>{
    return this.http.delete<any>(this.baseURI+id);
  }
}
