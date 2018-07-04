import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'star-component',
  templateUrl: './star.html',
  styleUrls: ['./star.component.css']
})

export class starComponent {

  @Input() currentBook: number;
  @Output() starRating: EventEmitter<object> = new EventEmitter<object>();
  rated: number;
  flag: boolean = false;

  rate(i: number): void {
    this.starRating.emit({'index': this.currentBook, 'stars': i});
  }


}
