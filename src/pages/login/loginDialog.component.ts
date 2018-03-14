import { Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-success',
  templateUrl: 'loginDialog.component.html',
})


// tslint:disable-next-line:component-class-suffix
export class ConfirmationDialog {
result= { };
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.result = data;
     }

  onNoClick(): void {
    this.dialogRef.close();

  }

}
