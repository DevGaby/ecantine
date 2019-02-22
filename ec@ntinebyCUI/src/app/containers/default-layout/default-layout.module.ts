import { NgModule } from '@angular/core';

import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { MessageModule } from '../../views/message/message.module';

@NgModule({
    imports: [
        DefaultLayoutRoutingModule,
        MessageModule
    ],
    declarations: [
        DefaultLayoutComponent,
    ]
})
export class DefaultLayoutModule {}
