import { FlyingHeroesImpurePipe, FlyingHeroesPipe } from './flying-heroes.pipe';
import { FlyingHeroesComponent,FlyingHeroesImpureComponent } from './flying-heroes.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page,FlyingHeroesImpureComponent,FlyingHeroesImpurePipe, FlyingHeroesPipe ,ExponentialStrengthPipe,FlyingHeroesComponent]
})
export class Tab1PageModule {}
