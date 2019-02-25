import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import * as $ from 'jquery';
declare var require: any;
const Swal = require('sweetalert2')
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public users;
  constructor(private userService:UserService) { }

  ngOnInit() {
this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe(
        data=>{
          this.users = data;
          console.log(data);
          
        },
        error=>{
          console.log(error);
          
        }
      )
  }

  addUser(value){
    let user = value;
    
    this.userService.addUser(user)
    .subscribe(
      data => { 
        this.getUsers();
        return true;
      },
      error => {
        console.error(error);
      }
    )
  }
  deleteUser(id){

    var thiss = this;
        $(document).ready(function(){
          $('.delete').click(function(){
            Swal.fire({
              title: 'Vraiment supprimer l\'utilisateur ?',
              text: 'l\'utilisateur sera défnitivement supprimé',
              type: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Oui',
              cancelButtonText: 'Non'
            }).then((result) => {
              if (result.value) {
                
                thiss.userService.deleteUser(id)
                .subscribe(
                  data => { 
                    thiss.getUsers();
                    return true;
                  },
                  error => {
                    console.error(error);
                  }
                )
            $(this).parents('tr').hide();
                Swal.fire(
                  'Supprimé!',
                  'Article supprimé',
                  'success'
                )
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                  'Annulé',
                  ' :)',
                  ''
                )
              }
            })
          })
          
          
        });

  }

}
