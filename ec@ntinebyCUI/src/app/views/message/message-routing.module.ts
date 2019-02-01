
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationComponent } from './notification.component';
import { MessagerieComponent } from './messagerie.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Message'
        },
        children: [
            // {
            //     path: '',
            //     redirectTo: 'notification'
            // },
            {
            // Component Notification
                path: 'notification',
                component: NotificationComponent,
                data: {
                 title: 'Notification'
                 }
            },
            // Component Messagerie
            {
                path: 'messagerie',
                component: MessagerieComponent,
                data: {
                 title: 'Messagerie'
                 }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MessageRoutingModule {}
