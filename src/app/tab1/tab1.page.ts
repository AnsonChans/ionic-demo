import { Component } from '@angular/core';
import {Msg} from './msg';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    Msg=[
      new Msg(1,'TypeScript'), new Msg(2,'Ionic'), new Msg(3,'Angular')
    ]
}
