import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';
import {AutosComponent} from './autos.component';
@NgModule({
  imports: [
    CommonModule,
    AutosRoutingModule
  ],
  declarations: [AutosComponent]
})
export class AutosModule { }
