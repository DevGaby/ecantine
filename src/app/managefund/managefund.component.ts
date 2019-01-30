import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-managefund',
  templateUrl: './managefund.component.html',
  styleUrls: ['./managefund.component.css']
})
export class ManagefundComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.userService
    .getUsers()
    .subscribe(data => 
      {
        console.log(data);
        this.users = Object.values(data);
        let keys = Object.keys(data);
        for(let i = 0; i < this.users.length; i++)
        {
          this.users[i].id = keys[i];
        }

        console.log(this.users);
      });

      this.userService
      .getUser('-LT73AzCOG7QvnehfLRw')
      .subscribe(data => console.log(Object.values(data)[0]));
  }

  onSubmit(form: NgForm)
  {
    const user  = new User(
      null,
      null,
      null,
      form.form.value.firstname,
      form.form.value.lastname,
      form.form.value.fund
    );

    console.log(
      'firstname : ' + user.firstname + '\n' +
      'lastname : ' + user.lastname + '\n' +
      'fund : ' + user.fund
    );

    this.userService
    .addUser(user)
    .subscribe(data =>
      {
        user.id = Object.values(data)[0];
        this.users.push(user);
      });
  }

  addFund(user: User, fundValue: number, index: number)
  {
    console.log('addFund called');

    if (fundValue.toString() === '')
    {
      this.messageService.sendMessage(new Message('incorrect input', 'danger'));
      return;
    }

    // No need to query for 0
    if (fundValue === 0)
    {
      return;
    }

    const newFundValue = Number(user.fund) + Math.abs(Number(fundValue));

    user.fund = newFundValue;

    this.userService
    .updateUser(user)
    .subscribe(data =>
      {
        this.users[index] = user;
        this.messageService.sendMessage(new Message('operation done', 'success'));
      });
  }

  substractFund(user: User, fundValue: number, index: number)
  {
    console.log('substractFund called');

    if (fundValue.toString() === '')
    {
      this.messageService.sendMessage(new Message('incorrect input', 'danger'));
      return;
    }

    // No need to query for 0
    if (fundValue === 0)
    {
      return;
    }

   const newFundValue = Math.max(0, Number(user.fund) - Math.abs(Number(fundValue)));
    user.fund = newFundValue;

    this.userService
    .updateUser(user)
    .subscribe(data =>
      {
        this.users[index] = user;
        this.messageService.sendMessage(new Message('operation done', 'success'));
      });
  }
}
