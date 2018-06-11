import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteComponent} from './cliente.component';

const routes: Routes = [
  {
    path:'',component: ClienteComponent,
    children:[
      //{path:''}
      {path:'', loadChildren:'../cliente/inicio/inicio.module#InicioModule'},
      {path:'registrar_poliza', loadChildren:'./registrarpoliza/registrarpoliza.module#RegistrarpolizaModule'}
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
