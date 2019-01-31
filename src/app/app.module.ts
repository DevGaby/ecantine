import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GestioncommandesComponent } from './gestioncommandes/gestioncommandes.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModificationprofilComponent } from './modificationprofil/modificationprofil.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PanierComponent } from './panier/panier.component';
import { MenuHebdoAdminComponent } from './menu-hebdo-admin/menu-hebdo-admin.component';
import { NavDroiteComponent } from './nav-droite/nav-droite.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { ManagefundComponent } from './managefund/managefund.component';
import { NotificatorComponent } from './notificator/notificator.component';


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
    MenuHebdoAdminComponent,
    NavDroiteComponent,
    WeeklyComponent,
    ManagefundComponent,
    NotificatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
