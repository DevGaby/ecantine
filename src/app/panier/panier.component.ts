import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  constructor (private userService: UserService) {}
  /* param = idUser
  L'ID de l'utilisateur connecté
  */
  
 users: User[];
 usersTest: User[];
 userTest = this.getUserTestById("-LT73AzCOG7QvnehfLRw");
 
  ngOnInit() {
    //this.getUserTest()
    this.userService.getUsers()
    .subscribe(data =>
      {
        this.users = Object.values(data);
        let keys = Object.keys(data);
        for(let i=0; i< this.users.length; i++)
        {
          this.users[i].id = keys[i];
        }
        console.log(this.users);
      });
    }

  // Recupere l'utilisateur associé a id passée en attribut
  getUserTestById(param: string)
  {
    this.userService.getUsers()
    .subscribe(data =>
      {
        this.users = Object.values(data);
        let keys = Object.keys(data);
        for(let i=0; i< this.users.length; i++)
        {
          this.users[i].id = keys[i];
          if (this.users[i].id === param)
          {
            console.log("Voici l'utilisateur : "+ this.users[i].firstname);
            return this.users[i].firstname;
          }
        }
      });

    /* this.usersTest = this.userService.users;
    for( var i= 0; i<this.usersTest.length; i++)
    {
      if (this.usersTest[i].id === this.usersTest[param])
      { 
        console.log("Voici l'utilisateur : "+this.usersTest[i].firstname);
        return this.usersTest[i].firstname;
      }
    }
 */  
  }

  // Recupere la cagnotte de l'utilisateur associé a id passée en attribut
  getUserFundTestById(param: string)
  {


    /* this.usersTest = this.userService.users;
    for( var i= 0; i<this.usersTest.length; i++)
    {
      if (this.usersTest[i] === this.usersTest[param])
      { 
        console.log("Voici l'utilisateur : "+this.usersTest[i].fund);
        return this.usersTest[i].fund;
      }
    } */
  }
}

