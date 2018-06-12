import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MensajeComponent} from './mensaje.component';
const routes: Routes = [
  {
    path:'',component:MensajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
