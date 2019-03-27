import { AdItem } from './ad-item';
import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  color :string;
  condition =false;
  ads:AdItem[];
  constructor(private adService:AdService){}

  ngOnInit(){
    this.ads = this.adService.getAds();
  }
 
}
