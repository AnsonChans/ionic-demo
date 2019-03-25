import { HEROES } from './person';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Hero = HEROES;
  master = 'Master';
  minor = 23;
  major = 1;
  agreed = 0;
  disagreed = 0;
  voters = ['Mr.Chan', 'Mr.Wang', 'Mr.Peng']
  newMinor() {
    this.minor++
  }
  newMajor() {
    this.minor = 0;
    this.major++;
  }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
