
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PasswordComponent } from './password/password.component';
import { CommandmanagementComponent } from './views/commandmanagement/commandmanagement.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Début d'ajout
  {
    path: 'connexion',
    component: ConnexionComponent,
    data: {
      title: 'Page Connexion'
    }
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
    data: {
      title: 'Page Inscription'
    }
  },
  {
    path: 'password',
    component: PasswordComponent,
    data: {
      title: 'Page Mot De Passe'
    }
  },
  // GESTION DES COMMANDES
  {
    path: 'gestion/commandes',
    component: CommandmanagementComponent,
 
  },

 // Fin d'ajout
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Accueil'
    },
    children: [
// Ajout
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      },
      {
        path: 'menu',
        loadChildren: './views/menu/menu.module#MenuModule'
      },
      {
        path: 'message',
        loadChildren: './views/message/message.module#MessageModule'
      },
      {
        path: 'ticket',
        loadChildren: './views/ticket/ticket.module#TicketModule'
      },
      {
        path: 'compte',
        loadChildren: './views/compte/compte.module#CompteModule'
      },
// Fin d'ajout
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
