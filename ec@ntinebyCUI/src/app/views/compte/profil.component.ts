import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUserPassword() {}

  getUserEmail() {}

  onSubmit (form: NgForm) {
    const {password, newpassword, confirmpassword, email, newemail, confirmemail } = form.value;
    // this.modifyEmail(password, newpassword, confirmpassword, email, newemail, confirmemail);
  }
}
