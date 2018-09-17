import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero';
import { HEROES} from '../data/Heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero:Hero;
  heroes:Hero[] = HEROES;

  constructor() { }
   hero:Hero={
    id: 1,
    name: "Win Win",
    dob: new Date("Jan,20 1995")
  }
  toggle = false;
  get format(){
    return this.toggle ? "shortDate" : "fullDate";
  }
  toggleFormat(){
    this.toggle=!this.toggle;
  }

  ngOnInit() {
  }

  onSelect(hero: Hero) : void
  {
       this.selectedHero = hero;
  }

}
