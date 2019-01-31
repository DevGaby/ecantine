
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddCommandComponent} from './add-command/add-command.component';
import {ListCommandComponent} from './list-command/list-command.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: ''
      },
      children: [
        {
          path: '',
          redirectTo: 'list-commande'
        },
        {
          path: 'list-commande',
          component: ListCommandComponent,
          data: {
            title: 'Liste des Commandes'
          }
        },
        {
          path: 'ajout-commande',
          component: AddCommandComponent,
          data: {
            title: 'Nouvelle commande'
          }
        },
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CommandManagementRoutingModule {}
