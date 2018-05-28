import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiniestroRoutingModule } from './siniestro-routing.module';
import {SiniestroComponent} from './siniestro.component';
@NgModule({
  imports: [
    CommonModule,
    SiniestroRoutingModule
  ],
  declarations: [SiniestroComponent]
})
export class SiniestroModule { }
