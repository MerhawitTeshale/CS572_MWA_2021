import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: number): string {
    let suffix:string="th";
    const firstDigit=value%10;
    switch(firstDigit){
      case 1:
        suffix="st";
        break;
      
    }
    return value+suffix;
  }

}
