import { Component, OnInit } from "@angular/core";
import MessageService from "../services/message.service";
import HeroService from "../services/hero.service";
import Hero from "../model/hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService
  ) { }

  // this is the Angular constructor
  // classified as a "lifecycle hook"
  // this is called AFTER this class is constructed, so after the above constructor is invoked
  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Array<Hero> = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes);
  }
}