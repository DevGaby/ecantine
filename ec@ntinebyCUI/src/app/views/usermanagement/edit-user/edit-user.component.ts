import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import { ActivatedRoute } from "@angular/router";
declare var require: any;

const Swal = require('sweetalert2');
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public user;
  public id;
  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
   });

   this.getUser(this.id);
  }

  getUser(id:any){
    this.userService.getUser(id)
        .subscribe(
          data=>{
            this.user = data;
          },
          error=>{
            console.log(error);
            
          }
        )
  }

  updateUser(value:any) {
    let user = {
      name: (typeof value.name =="undefined") ? this.user.name : value.name,
      firstname: (typeof value.firstname =="undefined") ? this.user.firstname : value.firstname,
      email: (typeof value.email =="undefined") ? this.user.email : value.email,
      role: (typeof value.role =="undefined") ? this.user.role : value.role,
      fund: (typeof value.fund =="undefined") ? this.user.fund : value.fund,
    };

    
    this.userService.updateUser(user, this.id)
    .subscribe(
      data => { 
        Swal.fire("Utilisateur modifié")
        return true;
      },
      error => {
        console.error(error);
        
      }
    )
  }

}
