import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import {Msg} from './msg';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

@NgModule({
  imports:[
    BrowserModule,
    FormsModule
  ]
})

export class Tab1Page {
    Msg=[
      new Msg(1,'TypeScript'), new Msg(2,'Ionic'), new Msg(3,'Angular')
    ]
    currentStyles={
      'font-size':'24px',
      'color':'red',
    }
    currentHero={
      name:'AnsonChans',
      emmotion:'happy'
    }
    clickMsg = ''
    values=''
    onClickMe(){
      this.clickMsg='You are Click'
    }
    onKey(event:any){
      this.values+=event.target.value+'|'
    }
}
