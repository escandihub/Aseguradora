import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PolizasComponent} from './polizas.component';
const routes: Routes = [
  {
    path:'',component: PolizasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolizasRoutingModule { }
