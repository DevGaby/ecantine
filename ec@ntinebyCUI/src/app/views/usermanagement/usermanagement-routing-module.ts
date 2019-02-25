
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: ''
      },
      children: [
        {
          path: '',
          redirectTo: 'gerer-user'
        },
        {
          path: 'gerer-user/edit-user/:id',
          redirectTo: 'edit-user/:id'
        },
        {
            path:'gerer-user',
            component: AddUserComponent,
            data:{
                title:'Gérer un user'
            }
        }
        ,
        {
            path:'edit-user/:id',
            component: EditUserComponent,
            data:{
                title:'Modifier un user'
            }
        }
        
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserManagementRoutingModule {}
