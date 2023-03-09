import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../services";
import { Hero } from "../../model";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero> = [];

  constructor(private heroService: HeroService) { }

  // this is the Angular constructor
  // classified as a "lifecycle hook"
  // this is called AFTER this class is constructed, so after the above constructor is invoked
  public ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes);
  }
}