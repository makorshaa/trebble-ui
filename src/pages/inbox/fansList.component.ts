import { Component, Inject} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'view-fanslist-page',
  templateUrl: 'fansList.component.html',
  styleUrls: ['../campaigns/allcampaign.component.css']
})
export class ViewFansListComponent {
  fanslist = [
    {name: 'Kuhelica', messagePreview: 'Kuhelica\'s message preview'},
    {name: 'Moulika', messagePreview: 'Moulika\'s message preview'},
    {name: 'Akash', messagePreview: 'Akash\'s message preview'},
    {name: 'Abhishek', messagePreview: 'Abhishek\'s message preview'},
    {name: 'Poushali', messagePreview: 'Poushali\'s message preview'},

  ];
  constructor(private fb: FormBuilder, private router: Router) {

  }

}
