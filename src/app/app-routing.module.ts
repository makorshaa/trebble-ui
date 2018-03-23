import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/login/signup.component';
import { AllcampaignComponent } from '../pages/campaigns/allcampaign.component';
import { ViewFansListComponent } from '../pages/inbox/fansList.component';
import { ViewMessageAreaComponent } from '../pages/inbox/messageArea.component';
import { NewCampaignRight } from '../pages/new_campaign/rightSection.component';
import { NewCampaignLeft } from '../pages/new_campaign/leftSection.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup/:id', component: SignupComponent },
  {
    path: 'allcampaign',
    component: AllcampaignComponent,
    children: [
      {path: '', redirectTo: 'inbox', pathMatch: 'full'},
      {path: 'inbox',
      children: [
        {
           path: '',
           component: ViewFansListComponent
        },
        {
           path: '',
           component: ViewMessageAreaComponent,
           outlet: 'right'
        }
      ]},
      {path: 'newcampaign',
      children: [
        {
           path: '',
           component: NewCampaignLeft
        },
        {
           path: '',
           component: NewCampaignRight,
           outlet: 'right'
        }
      ]}
    ]
  },

];

