import { log } from 'util';
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
        const keys = Object.keys(data);
        for (let i = 0; i < this.users.length; i++)
        {
          this.users[i].id = keys[i];
        }
        // console.log(this.users);
    });

      // this.userService
      // .getUser('-LT73AzCOG7QvnehfLRw')
      // .subscribe(data => console.log(Object.values(data)[0]));
  }

  signUp (inputName: string, intputFistname: string,
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
        // console.log('@BDD : ' + users[i].email + ' et @input : ' + inputEmail);
       if (inputEmail === users[i].email)
       {
         // On sort de la boucle
         console.log('Ce compte existe deja');
       } else {
         console.log('En cous d\'ajout');
         console.log(inputEmail);
        // return inputEmail;
       }
       // On passe a l'ieration suivante
      }
      });
    });
    // On retourne inputEmail et on ajoute le nouvel user
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

    // const controle = this.signUp(lastname, firstname, email, password);
    // user.email = controle;
    // console.log(controle);
    this.userService.addUser(user)
    .subscribe(data =>
    {
        user.id = Object.values(data)[0];
        this.users.push(user);
    });
  }

}
