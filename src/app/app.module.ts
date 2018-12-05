import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { InscriptionComponent } from './inscription/inscription.component';
=======
import { GestioncommandesComponent } from './gestioncommandes/gestioncommandes.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 1ca7bb15bd09ba841085890262ac1bf62929578a

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    InscriptionComponent
=======
    GestioncommandesComponent,
    ProfilComponent,
    HeaderComponent,
    FooterComponent
>>>>>>> 1ca7bb15bd09ba841085890262ac1bf62929578a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
