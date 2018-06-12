import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteComponent} from './cliente.component';
import{MensajeComponent} from './mensaje/mensaje.component';
const routes: Routes = [
  {
    path:'',component: ClienteComponent,
    children:[
      //{path:''}
      {path:'inicioo', redirectTo:'' },
      {path:'', loadChildren:'../cliente/inicio/inicio.module#InicioModule'},
      {path:'registrar_poliza', loadChildren:'./registrarpoliza/registrarpoliza.module#RegistrarpolizaModule'},
      {path:'mis_polizas',loadChildren:'./polizas/polizas.module#PolizasModule'},
      {path:'sugerencias', loadChildren:'./mensaje/mensaje.module#MensajeModule'}
    ]  
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
