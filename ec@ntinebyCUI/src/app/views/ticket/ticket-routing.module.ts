
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Ticket'
      },
      children: [
        {
          path: '',
          redirectTo: 'ticketList'
        },
        {
          path: 'ticketList',
          component: ListTicketComponent,
          data: {
            title: 'Liste des Tickets'
          }
        },
        {
          path: 'addTicket',
          component: AddTicketComponent,
          data: {
            title: 'Nouveau Ticket'
          }
        },
        {
          path: 'ticketDetail',
          component: TicketDetailComponent,
          data: {
            title: 'Détail du ticket'
          }
        },
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TicketRoutingModule {}
