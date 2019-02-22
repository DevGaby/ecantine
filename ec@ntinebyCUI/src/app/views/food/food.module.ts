import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddFoodComponent } from './add-food/add-food.component';
import { DataTablesModule } from 'angular-datatables';

import {FoodRoutingModule} from './food-routing.module';
import { UpdateFoodComponent } from './update-food/update-food.component';

@NgModule({
  declarations: [AddFoodComponent, UpdateFoodComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class FoodModule { }
