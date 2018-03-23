import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SendSuccessDialog } from '../success_modal/sendSuccessDialog.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'left-section-page',
  templateUrl: 'leftSection.component.html',
  styleUrls: ['../campaigns/allcampaign.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class NewCampaignLeft {
  newCampaignDetails: FormGroup;
  gender = [
    { name: 'Male' },
    { name: 'Female' },
  ];
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {
    this.campaignDetails();
  }


  // form group
  campaignDetails() {
    this.newCampaignDetails = this.fb.group({
      location: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required]],
      fanscore: ['', Validators.required],
      messagebody: ['']
    });
  }

  // open dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(SendSuccessDialog, {
      width: '500px',
      data: this.newCampaignDetails.value
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['allcampaign']);
    });
  }


  // post new campaign functionality
  sendnow(data) {

  }
}
