import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class FilterService {

  Filter: string;
  Category: string;

  getFilter(): string {
    return this.Filter;
  }

  setFilter(valueIn: string): void {
    this.Filter = valueIn;

  }

  setCategory(valueIn: string) {
    this.Category = valueIn;

  }

  getCategory() {
    return this.Category;
  }
}
