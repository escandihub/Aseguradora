import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrarpolizaComponent} from './registrarpoliza.component';
import { RegistrarpolizaRoutingModule } from './registrarpoliza-routing.module';
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

  import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RegistrarpolizaRoutingModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
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
  declarations: [RegistrarpolizaComponent]
})
export class RegistrarpolizaModule { }
