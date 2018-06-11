import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
//import { ClienteComponent } from './cliente/cliente.component';
//import { PersonalComponent } from './personal/personal.component';
//import { NavbarComponent } from './cliente/navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { FlexLayoutModule } from "@angular/flex-layout";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    LoadingBarRouterModule,
    PerfectScrollbarModule,
    CommonModule,
    DashboardRoutingModule,
    
    FlexLayoutModule   
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
