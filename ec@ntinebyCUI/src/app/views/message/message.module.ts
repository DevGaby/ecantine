// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component du dossier
import { NotificationComponent } from './notification.component';
import { MessagerieComponent } from './messagerie.component';

// Messaage Routing
import { MessageRoutingModule } from './message-routing.module';


@NgModule({
    imports: [
        CommonModule,
        MessageRoutingModule
    ],
    declarations:  [
        NotificationComponent,
        MessagerieComponent
    ],
    exports: [
        NotificationComponent,
    ]
})
export class MessageModule { }
