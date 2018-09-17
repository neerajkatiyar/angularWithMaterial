import { Component, OnInit } from '@angular/core';
import {HEROES} from '../data/Heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
heroes: any[] = [];
canFly = true;
  constructor() {
    this.reset();
   }

  ngOnInit() {
  }

  addHero(name:string)
  {
    if(!name) {  return; }

    name = name.trim();
    let hero = {name:name, canFly: this.canFly};
    this.heroes.push(hero);
    console.log(this.heroes);

  }

  reset()
  {
    this.heroes = HEROES.slice();
  }
}
