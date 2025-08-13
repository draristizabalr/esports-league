import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page.component'),
    title: 'Liga e-sports'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page.component'),
    title: 'Nosotros'
  },
  {
    path: 'esports',
    loadComponent: () => import('./pages/esports/esports-page.component'),
    title: 'Esports'
  },
  {
    path: 'sponsors',
    loadComponent: () => import('./pages/sponsors/sponsors-page.component'),
    title: 'Patrocinadores'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page.component'),
    title: 'Contacto'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
