import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'add-ticket.component.html'
})
export class AddTicketComponent {

  constructor() { }

  onSubmit(form: NgForm) {
    const {
      name, select1, select2} = form.value;
  }
}
