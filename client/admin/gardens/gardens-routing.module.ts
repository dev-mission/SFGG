import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListGardensComponent, NewGardenComponent } from '.';

const appRoutes: Routes = [
  {
    path: 'gardens',
    component: ListGardensComponent,
    children: [
      {
        path: 'new',
        component: NewGardenComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GardensRoutingModule {}
