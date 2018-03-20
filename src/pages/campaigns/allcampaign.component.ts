import { Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'allcampaign-page',
  templateUrl: 'allcampaigns.component.html',
  styleUrls: ['allcampaign.component.css']
})
export class AllcampaignComponent {
  show: boolean;
  params:  any;
  buttonName: string;
  constructor(private router: Router) {
    this.params = this.router.url;
    if (this.params === '/allcampaign/inbox') {
      this.show = true;
   }
   // tslint:disable-next-line:one-line
   else {
    this.show = false;
   }
  }

  toggle() {
    this.show = !this.show;
}
}
