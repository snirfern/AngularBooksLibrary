import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'Filterit'
})
export class filter implements PipeTransform {
  transform(value: any[], filterBy: string, category: string): any[] {
    filterBy = filterBy ? filterBy.toString().toLocaleLowerCase() : null;

    return filterBy ? value.filter((dataIn) =>
      dataIn[category.toLowerCase()].toLocaleLowerCase().indexOf(filterBy) !== -1) : value;


  }
}

