// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


// Ticket Routing
import { MenumanagementComponent } from './menumanagement.component';
import { CreateComponent } from './create/create.component';

import {MenuManagementRoutingModule} from './menumanagement-routing-module'
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MenuManagementRoutingModule,
    PipesModule
  ],
  declarations: [
    // MenumanagementComponent,
    CreateComponent
  ],
  exports: [
    CreateComponent
  ]
})
export class MenuManagementModule {}
