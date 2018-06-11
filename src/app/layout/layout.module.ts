import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent} from './components/footer/footer.component';
import { NavbarComponent} from './components/navbar/navbar.component';
//import { InicioComponent } from './inicio/inicio.component'
import {
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
    LayoutRoutingModule,
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
  declarations: [LayoutComponent, FooterComponent, NavbarComponent]
})
export class LayoutModule { }
