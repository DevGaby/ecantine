
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    PipesModule
  ],
  declarations: [
    AddMenuComponent,
    ListMenuComponent
  ],
  exports: [
    ListMenuComponent,
  ]
})
export class MenuModule {}

