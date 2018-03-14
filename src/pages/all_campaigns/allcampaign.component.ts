import { Component, Inject} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'allcampaign-page',
  templateUrl: 'allcampaigns.component.html',
  styleUrls: ['allcampaign.component.css']
})
export class AllcampaignComponent {

  constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router) {

  }

}
