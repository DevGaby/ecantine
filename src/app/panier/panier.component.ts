import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  constructor (private userService: UserService) {}

  usersTest : Object [];

  /* param = idUser
  L'ID de l'utilisateur connecté
  */
  
  ngOnInit() {
    this.getUserTest()
  }

  // Recupere tous les users
  getUserTest() : void {
    this.usersTest = this.userService.users;
    //console.log(this.usersTest);
  }

  // Recupere l'utilisateur associé a id passée en attribut
  getUserTestById(param: string)
  {
    this.usersTest = this.userService.users;
    for( var i= 0; i<this.usersTest.length; i++)
    {
      if (this.usersTest[i] === this.usersTest[param])
      { 
        console.log("Voici l'utilisateur : "+this.usersTest[i].firstname);
        return this.usersTest[i].firstname;
      }
    }
  }

  // Recupere la cagnotte de l'utilisateur associé a id passée en attribut
  getUserFundById(param: string)
  {
    this.usersTest = this.userService.users;
    for( var i= 0; i<this.usersTest.length; i++)
    {
      if (this.usersTest[i] === this.usersTest[param])
      { 
        console.log("Voici l'utilisateur : "+this.usersTest[i].fund);
        return this.usersTest[i].fund;
      }
    }
  }
}

