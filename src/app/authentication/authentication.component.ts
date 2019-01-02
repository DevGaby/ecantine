import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as $ from 'jquery';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log($('#inputemail'));
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
  }
}
