import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { GestioncommandesComponent } from './gestioncommandes/gestioncommandes.component';
import { ProfilComponent } from './profil/profil.component';
import { ModificationprofilComponent } from './modificationprofil/modificationprofil.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PanierComponent } from './panier/panier.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { ManagefundComponent } from './managefund/managefund.component';

const routes: Routes = [
  { path: 'form', component: FormsModule },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'gestioncommandes', component : GestioncommandesComponent },
  { path: 'profil', component : ProfilComponent },
  { path: 'modificationprofil', component :  ModificationprofilComponent},
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'panier', component: PanierComponent},
  { path: 'weekly', component: WeeklyComponent },
  { path: 'managefund', component: ManagefundComponent},
  { path: '', component: WeeklyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
