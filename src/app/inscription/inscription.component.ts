import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  key: string;
  users: User[];

  list: any[] = [];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data =>
    {
        console.log(data);
        this.users = Object.values(data);
        let keys = Object.keys(data);
        for (let i = 0; i < this.users.length; i++)
        {
          this.users[i].id = keys[i];
        }

        console.log(this.users);
    });

      // this.userService
      // .getUser('-LT73AzCOG7QvnehfLRw')
      // .subscribe(data => console.log(Object.values(data)[0]));
  }

  signUp(inputName: string, intputFistname: string,
          inputEmail: string, inputPassword: string) 
  {
    this.userService.getUsers()
    .subscribe(data =>
    {
      // Recuperation d'un obj par user
      const users: User[] = Object.values(data);
      // Recuperation de chaque compte user de la BDD
      const count: User[] = users.filter(user =>
      {
      // Verification de l'email saisie et ceux de la BDD
      for (let i = 0; i < users.length; i++)
      {
       if (user.email === users[i])
       {
          console.log(user[0][i]);
          alert('Ce compte existe déjà');
       } else
       {
         alert('Vous êtes inscrit(e) !!');
        }
      }
      });
    });
  }

  onSubmit(form: NgForm)
  {
    const user = new User (
      null,
      form.form.value.email,
      form.form.value.password,
      form.form.value.firstname,
      form.form.value.lastname,
      null
    );
    const { lastname, firstname, email, password } = form.value;
    this.signUp(lastname, firstname, email, password);

    this.userService.addUser(user)
    .subscribe(data =>
    {
        user.id = Object.values(data)[0];
        this.users.push(user);
      });
    }

}
