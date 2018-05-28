import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent} from './components/footer/footer.component';
import { NavbarComponent} from './components/navbar/navbar.component';
//import { InicioComponent } from './inicio/inicio.component'

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, FooterComponent, NavbarComponent]
})
export class LayoutModule { }
