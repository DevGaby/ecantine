
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMenuComponent } from './add-menu/add-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Menu'
      },
      children: [
        {
          path: '',
          redirectTo: 'menuList'
        },
        {
          path: 'menuList',
          component: ListMenuComponent,
          data: {
            title: 'Liste des menus'
          }
        },
        {
          path: 'addMenu',
          component: AddMenuComponent,
          data: {
            tittle: 'Nouveau menu'
          }
        },
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule {}
