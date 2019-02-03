// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component du dossier
import { ProfilComponent } from './profil/profil.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';

// Messaage Routing
import { CompteRoutingModule } from './compte-routing.module';


@NgModule({
    imports: [
        CommonModule,
        CompteRoutingModule,
    ],
    declarations:  [
        ProfilComponent,
        ShoppingCartComponent,
    ],
    exports: [
        ProfilComponent,
        ShoppingCartComponent,
    ]
})
export class CompteModule { }
