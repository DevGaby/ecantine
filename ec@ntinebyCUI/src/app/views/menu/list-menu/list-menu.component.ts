
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  readonly today: Date = new Date();

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.weeklyDaysObservable.subscribe(data => this.today.setTime(data.today.getTime()));
  }

}
