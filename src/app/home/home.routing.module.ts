import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {ChartModule} from 'primeng/chart';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent },
];

@NgModule({
  imports: [
  	ChartModule,
  	RouterModule.forRoot(homeRoute)
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ],
  providers: []
})

export class HomeRoutingModule { }