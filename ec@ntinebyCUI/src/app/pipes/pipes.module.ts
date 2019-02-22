import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklyDaysFormatStringPipe } from './weekly-days-format-string.pipe';
import { DateFormatStringPipe } from './date-format-string.pipe';

@NgModule({
  declarations: [
    WeeklyDaysFormatStringPipe,
    DateFormatStringPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WeeklyDaysFormatStringPipe,
    DateFormatStringPipe
  ]

})
export class PipesModule { }
