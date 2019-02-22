import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';

@Pipe({
  name: 'dateFormatString'
})
export class DateFormatStringPipe implements PipeTransform {

  transform(value: Date, args?: number): string {
    const datePipe: DatePipe = new DatePipe('fr-FR');
    const result: string = datePipe.transform(value, 'EEEE d MMMM y');
    return result;
  }

}
