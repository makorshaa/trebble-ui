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
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/login/signup.component';
import { routes } from './app-routing.module';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';
import {MatSelectModule} from '@angular/material/select';
import { AllcampaignComponent } from '../pages/campaigns/allcampaign.component';
import { ViewMessageAreaComponent } from '../pages/inbox/messageArea.component';
import { ViewFansListComponent } from '../pages/inbox/fansList.component';
import { NewCampaignRight } from '../pages/new_campaign/rightSection.component';
import {NewCampaignLeft} from '../pages/new_campaign/leftSection.component';
import { ConfirmationDialog} from '../pages/success_modal/successDialog.component';
import { SendSuccessDialog } from '../pages/success_modal/sendSuccessDialog.component';
import { ShareDataService } from '../providers/shareData.service';
import { UtilityServices } from '../providers/utility.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AllcampaignComponent,
    ViewMessageAreaComponent,
    ViewFansListComponent,
    NewCampaignRight,
    NewCampaignLeft,
    ConfirmationDialog,
    SendSuccessDialog
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
    MatGridListModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ ConfirmationDialog],
  entryComponents: [
    ConfirmationDialog, SendSuccessDialog
],
  providers: [ShareDataService, UtilityServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
