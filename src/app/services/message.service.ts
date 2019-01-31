import { Injectable } from '@angular/core';

import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  limit: number = 5;
  messageQueue: Message[] = [
    // new Message('success', 'success'),
    // new Message('info', 'info'),
    // new Message('danger', 'danger'),
  ];

  constructor() { }

  getMessages(): Message[]
  {
    return this.messageQueue;
  }

  sendMessage(message: Message) {
    this.messageQueue.push(message);
    if(this.messageQueue.length > this.limit)
    {
      this.messageQueue.shift();
    }
  }

  dismissMessage(index: number) {
    this.messageQueue.splice(index, 1);
  }
}