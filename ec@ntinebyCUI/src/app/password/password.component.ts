import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(email) {
    alert('Un email vous à été envoyé ' + email);
  }
}
