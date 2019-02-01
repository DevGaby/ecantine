
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFoodComponent } from './add-food/add-food.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Plats'
      },
      children: [
        {
          path: '',
          redirectTo: 'ajouter-plat'
        },
        {
          path: 'ajouter-plat',
          component: AddFoodComponent,
          data: {
            title: 'Ajouter un Plat'
          }
        }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FoodRoutingModule {}
