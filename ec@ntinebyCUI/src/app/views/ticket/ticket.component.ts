import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../class/ticket';
import { RestService } from '../../service/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTickets();
  }

  onSubmit(form) {

  }

  getTickets() {
    this.tickets = [];
    this.rest.GetTickets().subscribe((data: {}) => {
      console.log(data);
      this.tickets = data;
    });
  }

  addTicket() {

  }

  deleteTicket(id) {
    this.rest.DeleteTicket(id)
      .subscribe(res => {
        this.getTickets();
      }, (err) => {
        console.log(err);
      }
      );
  }
}
