import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrarpolizaComponent} from './registrarpoliza.component'
const routes: Routes = [
  {
    path:'',component: RegistrarpolizaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarpolizaRoutingModule { }
