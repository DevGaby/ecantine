import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AddUserComponent } from './add-user/add-user.component';
import {UserManagementRoutingModule} from './usermanagement-routing-module';
import { EditUserComponent } from './edit-user/edit-user.component'
@NgModule({
  declarations: [AddUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class UserManagementModule { }
