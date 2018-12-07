import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { GestioncommandesComponent } from './gestioncommandes/gestioncommandes.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModificationprofilComponent } from './modificationprofil/modificationprofil.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PanierComponent } from './panier/panier.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { ManagefundComponent } from './managefund/managefund.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    GestioncommandesComponent,
    ProfilComponent,
    HeaderComponent,
    FooterComponent,
    ModificationprofilComponent,
    AuthenticationComponent,
    PanierComponent,
    WeeklyComponent,
    ManagefundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
