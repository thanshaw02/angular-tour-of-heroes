import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import MessageService from "../messageService/message.service"
import { Hero, HEROES } from "../../model";

@Injectable({
  providedIn: "root"
})
class HeroService {
  private heroesUrl = "api/heroes"; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // GET request that fetches all Hero objects
  public getHeroes(): Observable<Array<Hero>> {
    return this.http.get<Array<Hero>>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Array<Hero>>("getHeroes", []))
      );
  }

  public getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;

    // need error handling if a hero is not found with id

    this.log(`HeroService: fetched hero with id=${id}`);
    return of(hero);
  }

  /* Log a HeroService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}

export default HeroService;
