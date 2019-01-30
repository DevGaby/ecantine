// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';

// Ticket Routing
import { TicketRoutingModule } from './ticket-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TicketRoutingModule
  ],
  declarations: [
    AddTicketComponent,
    TicketDetailComponent,
    ListTicketComponent,
  ],
  exports: [
    ListTicketComponent,
  ]
})
export class TicketModule {}
