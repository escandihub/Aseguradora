import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HdicontigoComponent} from './hdicontigo.component';

const routes: Routes = [
  {
    path:'',component: HdicontigoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HdicontigoRoutingModule { }
