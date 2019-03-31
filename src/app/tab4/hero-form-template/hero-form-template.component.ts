import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.scss'],
})
export class HeroFormTemplateComponent implements OnInit {
  powers = ['羽毛球', '爬山', '游泳'];

  hero = {name:'AnsonChans',alterEgo:'Dr.Chan',power:this.powers[0]}

  constructor() { }

  ngOnInit() {}

}
