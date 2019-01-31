import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SessionService } from './../services/session.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.countObservable.subscribe(console.log);
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
