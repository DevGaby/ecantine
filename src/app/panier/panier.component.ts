import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  plats :object[];
  constructor (private userService: UserService) {}

  ngOnInit() {
    //this.getPlats();
    
  }

  getPlats(): void {
    // On recupere tous les objets plat et les donnees qui les constituent
    /* this.platService.getPlats()
    .subscribe(data=>this.plats = Object.values(data)); */
  }

}
