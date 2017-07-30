import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heros',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }
   title = 'Tour of Heroes';
selectedHero: Hero;
heroes: Hero[];
onSelect(hero: Hero): void {
  this.selectedHero = hero;
};
getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
ngOnInit(): void {
    this.getHeroes();
  }
}