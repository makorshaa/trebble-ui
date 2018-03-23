import { Component, Inject, Directive } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'send-success',
  templateUrl: 'successDialog.component.html',
  styleUrls: ['../campaigns/allcampaign.component.css']
})


// tslint:disable-next-line:component-class-suffix
export class SendSuccessDialog {
  msg: string;
  description: string;
  result = {};
  constructor(
    public dialogRef: MatDialogRef<SendSuccessDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.msg = 'Success';
    this.description = 'Your campaign has been sent. You will now be redirected to the inbox';
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

}
