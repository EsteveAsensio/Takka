import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'pedidos',
        loadComponent: () =>
          import('../pedidos/pedidos.page').then(m => m.PedidosPage),
      },
      {
        path: 'activos',
        loadComponent: () =>
          import('../activos/activos.page').then(m => m.ActivosPage),
      },
      {
        path: 'resumen',
        loadComponent: () =>
          import('../resumen/resumen.page').then(m => m.ResumenPage),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('../perfil/perfil.page').then(m => m.PerfilPage),
      },
      {
        path: '',
        redirectTo: 'pedidos',
        pathMatch: 'full',
      },
    ],
  },
];