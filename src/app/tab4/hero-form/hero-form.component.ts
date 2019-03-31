import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  powers = ['羽毛球', '爬山', '游泳'];

  model = new Hero(18, 'AnsonChans', this.powers[0], 'Chunk OverStreet');

  submitted = false;
  
  onSubmit(){
    this.submitted=true
  }

  newHero(){
    this.model = new Hero(42,'','')
  }

  get diagnostic(){
    return JSON.stringify(this.model)
  }

  constructor() { }

  ngOnInit() { }

}
