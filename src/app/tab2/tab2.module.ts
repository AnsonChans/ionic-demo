import { HeroChildComponent } from './tab2.child';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {VersionChildComponent} from './tab2.version'
import {VoterComponent} from './tab2.voter'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  
  ],
  declarations: [Tab2Page,HeroChildComponent,VersionChildComponent,VoterComponent]
})
export class Tab2PageModule {}
