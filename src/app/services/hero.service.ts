import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import MessageService from "./message.service";
import { Hero, HEROES } from "../model";

@Injectable({
  providedIn: "root"
})
class HeroService {

  constructor(private messageService: MessageService) { }

  // this "of()" call mocks an actual observable, in this case everything is sync but here we treat it as async
  public getHeroes(): Observable<Array<Hero>> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}

export default HeroService;
