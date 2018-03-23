import { Component, Inject, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'right-section-page',
  templateUrl: 'rightSection.component.html',
  styleUrls: ['../campaigns/allcampaign.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class NewCampaignRight {
  @Input() users: String;
  newCampaignMessageDetails: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.newCampaignMessage();
  }
  // form group
  newCampaignMessage() {
    this.newCampaignMessageDetails = this.fb.group({
      yourmessage: ['', Validators.required],
    });
  }

}


