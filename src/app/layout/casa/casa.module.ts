import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasaRoutingModule } from './casa-routing.module';
import {CasaComponent} from './casa.component';

@NgModule({
  imports: [
    CommonModule,
    CasaRoutingModule
  ],
  declarations: [CasaComponent]
})
export class CasaModule { }
