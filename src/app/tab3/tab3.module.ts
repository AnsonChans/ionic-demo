import { HighlightDirective } from './highlight.directive';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { AdService } from './ad.service';
@NgModule({
  providers: [AdService],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  declarations: [Tab3Page,AdDirective,AdBannerComponent,HeroJobAdComponent, HeroProfileComponent,HighlightDirective],
  bootstrap: [ Tab3Page ]
})
export class Tab3PageModule {}
