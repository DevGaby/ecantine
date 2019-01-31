// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddCommandComponent } from './add-command/add-command.component';
import { ListCommandComponent } from './list-command/list-command.component';


// Ticket Routing
import { CommandManagementRoutingModule } from './commandmanagement-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommandManagementRoutingModule
  ],
  declarations: [
    AddCommandComponent,
    ListCommandComponent,
  ],
  exports: [
    ListCommandComponent,
  ]
})
export class CommandManagementModule {}
