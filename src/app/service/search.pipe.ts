import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(filterText: string, movie: any[]): any {
    return movie ? movie.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
