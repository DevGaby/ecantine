import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-managefund',
  templateUrl: './managefund.component.html',
  styleUrls: ['./managefund.component.css']
})
export class ManagefundComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService
    .getUsers()
    .subscribe(data => 
      {
        this.users = Object.values(data);
        let keys = Object.keys(data);
        for(let i = 0; i < this.users.length; i++)
        {
          this.users[i].id = keys[i];
        }

        console.log(this.users);
      });
  }

  onSubmit(form)
  {
    let user  = new User(
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

  addFund(user: User, fundValue: number)
  {
    console.log('edit clicked :\n' +
    'id : ' + user.id + '\n' +
    'fundvalue : ' + fundValue
    );

    console.log('user.fund isNaN : ' + isNaN(user.fund));
    console.log('fundValue isNaN : ' + isNaN(fundValue));
    let newFundValue = user.fund + fundValue;
    console.log('new Fund value : ' + newFundValue);
  }

  substractFund(user: User, fundValue: number)
  {
    console.log('edit clicked :\n' +
    'id : ' + user.id + '\n' +
    'fundvalue : ' + fundValue
    );

    console.log('user.fund isNaN : ' + isNaN(user.fund));
    console.log('fundValue isNaN : ' + isNaN(fundValue));

    let newFundValue = Math.max(0, user.fund - fundValue);
    console.log('new Fund value : ' + newFundValue);
  }
}
