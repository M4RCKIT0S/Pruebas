import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if( args === '' || args.length < 2) return value;
    const resultBooks = [];
    for(const book of value){
      if(book.titulo.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultBooks.push(book);
      }
      if(book.ISBN.indexOf(args) > -1){
        resultBooks.push(book);
      }
      if(book.precio.indexOf(args) > -1){
        resultBooks.push(book);
      }
    }
    return resultBooks;
  }

}
