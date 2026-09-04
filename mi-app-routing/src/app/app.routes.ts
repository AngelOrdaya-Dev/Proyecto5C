import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ServiciosComponent } from './servicios/servicios.component';

import { WebComponent } from './servicios/web/web.component';
import { RedesSocialesComponent } from './servicios/redes-sociales/redes-sociales.component';
import { MarketingComponent } from './servicios/marketing/marketing.component';
import { SoftwareComponent } from './servicios/software/software.component';
import { HostingComponent } from './servicios/hosting/hosting.component';
import { EstrategiaComponent } from './servicios/estrategia/estrategia.component';
import { IdentidadComponent } from './servicios/identidad/identidad.component';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },


  // Página principal de servicios

  {
    path: 'servicios',
    component: ServiciosComponent
  },


  // Servicios individuales

  {
    path: 'servicios/web',
    component: WebComponent
  },

  {
    path: 'servicios/redes-sociales',
    component: RedesSocialesComponent
  },

  {
    path: 'servicios/marketing',
    component: MarketingComponent
  },

  {
    path: 'servicios/software',
    component: SoftwareComponent
  },

  {
    path: 'servicios/hosting',
    component: HostingComponent
  },

  {
    path: 'servicios/estrategia',
    component: EstrategiaComponent
  },

  {
    path: 'servicios/identidad',
    component: IdentidadComponent
  },


  // Si la ruta no existe, regresar al inicio

  {
    path: '**',
    redirectTo: 'home'
  }

];
