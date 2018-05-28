import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path:'', redirectTo:'inicio' },
      {path:'inicio', loadChildren:'./inicio/inicio.module#InicioModule'},
      {path: 'autos', loadChildren:'./autos/autos.module#AutosModule'},
      {path: 'casa', loadChildren:'./casa/casa.module#CasaModule'},
      {path: 'about', loadChildren:'./about/about.module#AboutModule'},
      //{path: 'hdi_contigo', loadChildren:'./hdicontigo/hdicontigo.module#HdicontigoModule'},                
      {path: 'siniestro', loadChildren:'./siniestro/siniestro.module#SiniestroModule'}
      //{path:'**', loadChildren:'not-found'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
