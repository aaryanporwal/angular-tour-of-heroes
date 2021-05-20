import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  // Component is a decorator function specifying metadata for the component
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  constructor() {}
  ngOnInit(): void {}
}
