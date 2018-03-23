import { Component, Inject, Directive } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-success',
  templateUrl: 'successDialog.component.html',
  styleUrls: ['../campaigns/allcampaign.component.css']
})


// tslint:disable-next-line:component-class-suffix
export class ConfirmationDialog {
  msg: string;
  description: string;
  result = {};
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.msg = 'Hi' + this.data.firstname;
    this.description = 'Thankyou for signing Up. Please check your texts.';
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

}
