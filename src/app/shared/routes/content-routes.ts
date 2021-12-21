import { Routes } from '@angular/router';
export const content: Routes = [
  {
    path: 'maps',
    loadChildren: () =>
      import('../../components/maps/maps.module').then((m) => m.MapsModule),
  },
];
