import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultBooks = [];
    for(const book of value){
      if(book.title.indexOf(arg)>-1){
        console.log('sip');
      };
    };
  }

}
