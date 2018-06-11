import { Routes } from '@angular/router';

//import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { MenuComponent } from './componentes/menu/menu.component';  
import { AuthComponent } from './componentes/auth/auth.component'
<<<<<<< HEAD
import { LayoutComponent } from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component'
=======

>>>>>>> 4c841ccfceb773f11d0b289824c77c2787f31e72

export const AppRoutes: Routes = [
  
  {path:'', loadChildren:'./layout/layout.module#LayoutModule'},
  {path:'dashboard/cliente', loadChildren:'./dashboard/cliente/cliente.module#ClienteModule'},
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
<<<<<<< HEAD
    }    
=======
    }
>>>>>>> 4c841ccfceb773f11d0b289824c77c2787f31e72
  ];
