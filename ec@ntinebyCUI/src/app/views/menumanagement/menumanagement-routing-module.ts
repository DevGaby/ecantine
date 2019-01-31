
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: ''
      },
      children: [
        {
          path: '',
          redirectTo: 'creer-menu'
        },
        {
            path:'creer-menu',
            component: CreateComponent,
            data:{
                title:'Créer votre menu hebdomadaire'
            }
        }
        
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MenuManagementRoutingModule {}
