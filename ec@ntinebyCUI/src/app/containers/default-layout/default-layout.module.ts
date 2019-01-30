import { NgModule } from '@angular/core';

import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { MessageModule } from '../../views/message/message.module';
import { NotificationComponent} from '../../views/message/notification.component';

@NgModule({
    imports: [
        DefaultLayoutRoutingModule,
        MessageModule,
    ],
    exports: [
        NotificationComponent,
    ],
    declarations: [
        DefaultLayoutComponent,
    ]
})
export class DefaultLayoutModule {}
