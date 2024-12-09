import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if (value == null || value < 0) return 'Invalid time';

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return `${hours}h${minutes.toString().padStart(2, '0')}`;
  }

}
