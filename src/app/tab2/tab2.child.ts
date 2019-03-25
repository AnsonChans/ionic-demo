import {  Hero } from './person';
import { Component, Input } from '@angular/core';
@Component({
    selector:"app-hero-child",
    template:`
   <p>{{masterName}}</p>
   <p>{{hero.name}}, Hello</p>
  `
})

export class HeroChildComponent{
    @Input() hero:Hero;
    @Input('master') masterName: string;
}