import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMapComponent } from './page-map/page-map.component';
import { RechercheAddresseComponent } from './recherche-addresse/recherche-addresse.component';

const routes: Routes = [
  {
    path:'recherche-addresse',
    component:RechercheAddresseComponent
  },
  {
    path:'page-maps',
    component:PageMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
