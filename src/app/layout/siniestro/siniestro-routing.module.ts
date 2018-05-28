import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiniestroComponent} from './siniestro.component';
const routes: Routes = [
  {
    path:'',component: SiniestroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiniestroRoutingModule { }
