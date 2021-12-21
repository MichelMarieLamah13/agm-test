import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { RechercheAddresseComponent } from './recherche-addresse/recherche-addresse.component';
import { PageMapComponent } from './page-map/page-map.component';


@NgModule({
  declarations: [
    RechercheAddresseComponent,
    PageMapComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
