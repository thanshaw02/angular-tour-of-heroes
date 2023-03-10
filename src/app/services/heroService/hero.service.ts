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
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // GET request that fetches all Hero objects
  public getHeroes(): Observable<Array<Hero>> {
    return this.http.get<Array<Hero>>(this.heroesUrl)
      .pipe(
        tap(_ => this.log("fetched heroes")),
        catchError(this.handleError<Array<Hero>>("getHeroes", []))
      );
  }

  // GET request that fetches a single Hero object by id
  public getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero by id ${id}`)),
      catchError(this.handleError<Hero>(`getHero id = ${id}`))
    );
  }

  // PUT request that updates a singl hero by id
  public updateHero(hero: Hero): Observable<void> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero by id ${hero.id}`)),
      catchError(this.handleError<any>(`updateHero`))
    )
  }

  // POST request that adds a new hero
  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero) => this.log(`added new hero by id ${newHero.id}`)),
      catchError(this.handleError<Hero>("addHero"))
    );
  }

  // DELETE request that deletes a hero by id
  public deleteHero(id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero by id ${id}`)),
      catchError(this.handleError<any>(`deleteHero`))
    );
  }

  // Log a HeroService message with the MessageService
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
