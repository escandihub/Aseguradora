import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CasaComponent} from './casa.component';
const routes: Routes = [
  {
    path: '',
    component: CasaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasaRoutingModule { }
