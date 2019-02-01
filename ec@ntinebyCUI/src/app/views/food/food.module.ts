import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodComponent } from './add-food/add-food.component';

import {FoodRoutingModule} from './food-routing.module';

@NgModule({
  declarations: [AddFoodComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
  ]
})
export class FoodModule { }
