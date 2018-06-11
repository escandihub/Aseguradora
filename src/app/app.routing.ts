import { Routes } from '@angular/router';

//import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { MenuComponent } from './componentes/menu/menu.component';  
import { AuthComponent } from './componentes/auth/auth.component'


export const AppRoutes: Routes = [
  
  {path:'', loadChildren:'./layout/layout.module#LayoutModule'},
    {
      path: 'menu',
      component: MenuComponent,
          
    },{
      path:'',
      component: AuthComponent,
      children:[{
        path:'session',
        loadChildren: './session/session.module#SessionModule'
      }]
    },{
      path: '**',
      redirectTo: 'session/404'
    }
  ];
