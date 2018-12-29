import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
import {Word} from './words';



@Injectable({
  providedIn: 'root'
})
export class WebService {
  private headers= new Headers({'Content-Type':'application/json'});
  private options= new RequestOptions({headers: this.headers});
  url= 'http://localhost:3000/api/words';
  url_word= 'http://localhost:3000/api/words';
  words:Word[];
  //name:string;
  constructor(private http: HttpClient) { }

    //getMessages(): Observable<Word>{
      //return this.http.get(this.url);
    //}
    

  getWords(name: string, option: any):Observable<Word[]>{

    return this.http.get<Word[]>('http://localhost:3000/api/words',{
      params: {
        name:name,
        option:option
      }
    }
  
  );
  }

  /* GET heroes whose name contains search term */
  searchWords(term: string): Observable<Word[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Word[]>(`${this.url_word}/?name=${term}`).pipe(
      
      catchError(this.handleError<Word[]>('searchHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log();
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log() {
    console.log("this word does not exist");
  }

    // getMessage(): Observable<Word>{
    //   return this.http.get('http://localhost:3000/word').pipe(
    //     map((res: Response)=> res.json())
    //   )
    

      
    // }
  }

  //return this.http.get('http://localhost:1234/words').pipe(
    //    map((res: Response)=> res.json())
        
      //)
