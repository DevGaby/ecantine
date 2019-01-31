import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count: number = 0;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.countObservable.subscribe(value => this.count = value);
  }

}
