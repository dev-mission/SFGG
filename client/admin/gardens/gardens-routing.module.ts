import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditGardenComponent, ListGardensComponent, NewGardenComponent } from '.';

const appRoutes: Routes = [
  {
    path: 'gardens',
    component: ListGardensComponent,
    children: [
      {
        path: 'new',
        component: NewGardenComponent
      },
      {
        path: ':id',
        component: EditGardenComponent
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
