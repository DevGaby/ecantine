import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { from } from 'rxjs';

import * as $ from 'jquery';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  key: string;
  user: User;

  list: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers();
  }

  signIn(inputEmail: string, inputpPassword: string) {
    this.userService.getUsers()
    .subscribe(data => {
      // Recuperation d'un objet pour chaque User
      const users: User[] = Object.values(data);
      // Recuperation de chaque compte utilisateur
      const count: User[] = users.filter(user => {
        // Verification de la condition
        return user.email === inputEmail && user.password === inputpPassword;
      });

      // controle que au moins & cpte existe
      console.log(count.length === 1);
    });
}

  onSubmit(form: NgForm) {
    // Récuparation des donnés du formulaire
    // Destrucring ES6
    const { email, password } = form.value;
    this.signIn(email, password);
    console.log($('#inputemail'));
  }
}
