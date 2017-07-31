import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'my-heros',
  templateUrl: './heroes.component.html',
  // template: '<h3>My Heros</h3>',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

 constructor(
    private router: Router,
    private heroService: HeroService) { }
   title = 'Tour of Heroes';
selectedHero: Hero;
heroes: Hero[];
onSelect(hero: Hero): void {
  this.selectedHero = hero;
};
getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
ngOnInit(): void {
    this.getHeroes();
  }
}
