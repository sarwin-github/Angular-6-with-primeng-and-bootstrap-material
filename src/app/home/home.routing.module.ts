import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChartModule } from 'primeng/chart';
import { MessagesComponent } from './messages/messages.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { AboutComponent } from '../about/about.component';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
  	ChartModule,
  	RouterModule.forRoot(homeRoute)
  ],
  exports: [RouterModule],
  declarations: [
    AboutComponent,
    HomeComponent,
    MessagesComponent,
    ActivityFeedComponent
  ],
  providers: []
})

export class HomeRoutingModule { }