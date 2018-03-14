import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/login/signup.component';
import { AllcampaignComponent } from '../pages/all_campaigns/allcampaign.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'allcampaign', component: AllcampaignComponent },

];

