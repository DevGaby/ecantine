import { Component, OnInit } from '@angular/core';

import { SessionService } from './../services/session.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    const date: Date = new Date();
    date.setHours(0, 0, 0, 0);
    console.log(date);
  }

  add()
  {
    this.sessionService.increaseCountSubject(1);
  }

  remove()
  {
    this.sessionService.decreaseCountSubject(1);
  }
}
