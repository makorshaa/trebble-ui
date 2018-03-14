import { Component, Inject} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmationDialog } from './loginDialog.component';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-page',
  templateUrl: 'signup.component.html',
  styleUrls: ['login.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;
  firstname= 'kuhelica';
  lastname= 'hazra';
  constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  // form group
      createForm() {
        this.signupForm = this.fb.group({
          firstname: ['', Validators.required ],
          lastname: ['', Validators.required ],
          email: ['', [Validators.required, Validators.email] ],
          twitter: ['', Validators.required ]
        });
      }

// open dialog
      openDialog(): void {
        const dialogRef = this.dialog.open(ConfirmationDialog, {
          width: '380px',
          data: this.signupForm.value
        });

        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate(['allcampaign']);
        });
      }

// form submit method
      submit(formdata) {
      }
}
