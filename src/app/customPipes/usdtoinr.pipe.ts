import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDTOINR',
})
export class USDTOINRPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const [x] = args;

    return value * x;
  }
}
