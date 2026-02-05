import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  
  // Inicio
  { 
    path: 'inicio', 
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.InicioComponent) 
  },
  
  // Personas
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
    path: 'personas/winncoins', 
    loadComponent: () => import('./pages/personas/winncoins').then(m => m.WincoinsComponent) 
  },
  { 
    path: 'personas/referidos', 
    loadComponent: () => import('./pages/personas/referidos').then(m => m.ReferidosComponent) 
  },
  
  // Comercios
  { 
    path: 'comercios', 
    loadComponent: () => import('./pages/comercios/comercios').then(m => m.ComerciosComponent) 
  },
  { 
    path: 'comercios/afiliate', 
    loadComponent: () => import('./pages/comercios/afiliate').then(m => m.AfiliateComponent) 
  },
  { 
    path: 'comercios/planes', 
    loadComponent: () => import('./pages/comercios/planes').then(m => m.PlanesComponent) 
  },
  { 
    path: 'comercios/demo', 
    loadComponent: () => import('./pages/comercios/demo').then(m => m.DemoComponent) 
  },
  { 
    path: 'comercios/beneficios', 
    loadComponent: () => import('./pages/comercios/beneficios').then(m => m.BeneficiosComponent) 
  },
  { 
    path: 'comercios/casos-exito', 
    loadComponent: () => import('./pages/comercios/success-cases').then(m => m.SuccessCasesComponent) 
  },
  { 
    path: 'comercios/calificaciones', 
    loadComponent: () => import('./pages/comercios/calificaciones').then(m => m.CalificacionesComponent) 
  },
  
  // Legal
  { 
    path: 'legal', 
    loadComponent: () => import('./pages/legal/legal').then(m => m.LegalComponent) 
  },
  
  // Blog
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog').then(m => m.BlogComponent) 
  },
  
  // Wildcard - debe ser la última ruta
  { path: '**', redirectTo: '/inicio' }
];
