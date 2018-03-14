import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/login/signup.component';
import { routes } from './app-routing.module';
import { ConfirmationDialog } from '../pages/login/loginDialog.component';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';
import { AllcampaignComponent } from '../pages/all_campaigns/allcampaign.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConfirmationDialog,
    AllcampaignComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ ConfirmationDialog],
  entryComponents: [
    ConfirmationDialog,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
