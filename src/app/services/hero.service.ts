import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import MessageService from "./message.service";
import Hero from "../model/hero";
import HEROES from "../model/mock-heroes";

@Injectable({
  providedIn: "root"
})
class HeroService {

  constructor(private messageService: MessageService) {
    // this.messageService = messageService;
  }

  // this "of()" call mocks an actual observable, in this case everything is sync but here we treat it as async
  getHeroes(): Observable<Array<Hero>> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}

export default HeroService;
