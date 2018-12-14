import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';

import { timer, Observable, Subscription } from 'rxjs';
import { Message } from '../models/message';


@Component({
  selector: 'app-notificator',
  templateUrl: './notificator.component.html',
  styleUrls: ['./notificator.component.css']
})
export class NotificatorComponent implements OnInit {

  // source: Observable<number>;
  // subscribe: Subscription;

  constructor(
    private mesageService: MessageService
  ) { }

  ngOnInit() {
    this.messages = this.mesageService.getMessages();
    // this.source = timer(0, 5000);
    // this.subscribe = this.source.subscribe(value =>
    //   {
    //     this.mesageService.sendMessage(new Message(value, 'success'));
    //   });
  }

  messages: any;

  dismiss(index: number) {
    this.mesageService.dismissMessage(index);
  }
}
