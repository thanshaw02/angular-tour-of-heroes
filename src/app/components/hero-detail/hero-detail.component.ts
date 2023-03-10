import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services';
import { Hero } from '../../model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() public hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  public ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id)
      .subscribe((hero) => this.hero = hero);
  }

  public goBack(): void {
    this.location.back();
  }
}
