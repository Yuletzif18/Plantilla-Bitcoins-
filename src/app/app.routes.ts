import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { 
    path: 'inicio', 
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.InicioComponent) 
  },
  { 
    path: 'personas', 
    loadComponent: () => import('./pages/personas/personas').then(m => m.PersonasComponent) 
  },
  { 
    path: 'personas/acumula', 
    loadComponent: () => import('./pages/personas/acumula').then(m => m.AcumulaComponent) 
  },
  { 
    path: 'personas/redime', 
    loadComponent: () => import('./pages/personas/redime').then(m => m.RedimeComponent) 
  },
  { 
    path: 'comercios', 
    loadComponent: () => import('./pages/comercios/comercios').then(m => m.ComerciosComponent) 
  },
  { 
    path: 'legal', 
    loadComponent: () => import('./pages/legal/legal').then(m => m.LegalComponent) 
  },
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog').then(m => m.BlogComponent) 
  },
  { path: '**', redirectTo: '/inicio' }
];
