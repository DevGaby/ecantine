import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddFoodComponent } from './add-food/add-food.component';

import {FoodRoutingModule} from './food-routing.module';

@NgModule({
  declarations: [AddFoodComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule
  ]
})
export class FoodModule { }
