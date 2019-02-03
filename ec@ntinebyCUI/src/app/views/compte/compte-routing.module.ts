
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilComponent } from './profil/profil.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
    {
        path: '',
        data: {
        title: 'Compte'
        },
        children: [
            {
                path: '',
                redirectTo: 'profil'
            },
            {
             // Component Profil
                path: 'profil',
                component: ProfilComponent,
                data: {
                    title: 'Profil'
                }
            },
            {
                path: 'shopping-cart',
                component: ShoppingCartComponent,
                data: {
                    title: 'Panier'
            }
            },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompteRoutingModule {}
