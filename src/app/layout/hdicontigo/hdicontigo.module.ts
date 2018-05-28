import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HdicontigoRoutingModule } from './hdicontigo-routing.module';
import {HdicontigoComponent} from './hdicontigo.component';
@NgModule({
  imports: [
    CommonModule,
    HdicontigoRoutingModule
  ],
  declarations: [HdicontigoComponent]
})
export class HdicontigoModule { }
