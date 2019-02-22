import { Pipe, PipeTransform } from '@angular/core';
import { WeeklyDays } from '../services/session.service';

@Pipe({
  name: 'weeklyDaysFormatString'
})
export class WeeklyDaysFormatStringPipe implements PipeTransform {

  transform(value: WeeklyDays, args?: any): string {
    return `${value.monday.toLocaleDateString()} - ${value.friday.toLocaleDateString()}`;
  }

}
