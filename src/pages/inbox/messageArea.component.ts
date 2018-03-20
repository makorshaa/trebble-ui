import { Component, Inject} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'view-messageArea-page',
  templateUrl: 'messageArea.component.html',
  styleUrls: ['../campaigns/allcampaign.component.css']
})
export class ViewMessageAreaComponent {

  constructor(private fb: FormBuilder, private router: Router) {

  }

}
