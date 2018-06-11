import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import {ClienteComponent} from './cliente.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SideComponent } from './side/side.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {
  MatInputModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatTableModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSortModule,
  MatTooltipModule,
  MatStepperModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ClienteRoutingModule,
    FormsModule, ReactiveFormsModule,

    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTooltipModule,
    MatStepperModule 

  ],
  declarations: [ClienteComponent,NavbarComponent,SideComponent]
})
export class ClienteModule { }
