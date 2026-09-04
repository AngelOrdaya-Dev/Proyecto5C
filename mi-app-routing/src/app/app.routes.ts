import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiciosComponent } from './servicios/servicios.component';


export const routes: Routes = [

  // Ruta por defecto
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // Página de inicio
  {
    path: 'home',
    component: HomeComponent
  },

  // Página acerca de nosotros
  {
    path: 'about',
    component: AboutComponent
  },

  // Página de servicios
  {
    path: 'servicios',
    component: ServiciosComponent
  },

  // Página de contacto
  {
    path: 'contact',
    component: ContactComponent
  },

  // Cualquier ruta que no exista
  {
    path: '**',
    redirectTo: '/home'
  }

];
