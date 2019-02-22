
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Plats'
      },
      children: [
        {
          path: 'gerer-plat/modifier-plat/:id',
          redirectTo: 'modifier-plat/:id'
        },
        {
          path: '',
          redirectTo: 'gerer-plat'
        },
        {
          path: 'gerer-plat',
          component: AddFoodComponent,
          data: {
            title: 'Gestion des Plats'
          },
          
        },
        {
          path: 'modifier-plat/:id',
          component: UpdateFoodComponent,
          data: {
            title: 'Modifier un Plat'
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
