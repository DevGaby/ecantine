// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component du dossier
import { ProfilComponent } from './profil.component';

// Messaage Routing
import { CompteRoutingModule } from './compte-routing.module';


@NgModule({
    imports: [
        CommonModule,
        CompteRoutingModule,
    ],
    declarations:  [
        ProfilComponent,
    ],
    exports: [
        ProfilComponent,
    ]
})
export class CompteModule { }
