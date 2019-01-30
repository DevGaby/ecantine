import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../class/ticket';
import { RestService } from '../../../service/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'ticket-detail.component.html'
})
export class TicketDetailComponent implements OnInit {

  ticket: any;

  constructor() { }

  ngOnInit() {
  }

}
