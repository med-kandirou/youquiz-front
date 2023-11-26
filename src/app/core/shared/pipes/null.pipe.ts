import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNull'
})
export class IsNullPipe implements PipeTransform {
    transform(value: any):string {
        if(value!=null){
            return value;
        }
        return 'No parent';
    }
//   transform(value: any): boolean {
//     return value === null;
//   }
}