import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../../shared/components';
import { SharedPipesModule } from '../../shared/pipes';

import { GardensRoutingModule } from './gardens-routing.module';
import { GardenFormComponent, ListGardensComponent, NewGardenComponent } from '.';

@NgModule({
  declarations: [
    GardenFormComponent,
    ListGardensComponent,
    NewGardenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    SharedPipesModule,
    GardensRoutingModule
  ],
  providers: []
})
export class GardensModule {}
