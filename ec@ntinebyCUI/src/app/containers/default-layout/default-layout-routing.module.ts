import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout.component';
import { MessageModule } from '../../views/message/message.module';
import { NotificationComponent} from '../../views/message/notification.component';


const routes: Routes = [
    { path: '', redirectTo: 'default' },
    { path: 'default', component: DefaultLayoutComponent,
    data: {
        title: ''
    }}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        MessageModule,
        NotificationComponent,
        RouterModule
    ]
})
export class DefaultLayoutRoutingModule {}
