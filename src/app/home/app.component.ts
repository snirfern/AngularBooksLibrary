import {Component} from '@angular/core';
import {FilterService} from '../services/service.component';
import {Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigationVar: boolean;
  selectedFilter: string;
  options: string[] = ['Isbn', 'Subtitle', 'Author', 'Published', 'Publisher', 'Pages', 'Description'];
  selectedValue: string;
  flag: boolean = false;
  isFilterClicked: boolean = false;
  menuFlag: boolean = true;


  constructor(private _data: FilterService, private router: Router) {

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (event.url.toLocaleLowerCase().indexOf('home') == -1) {
            this.menuFlag = false;
          }
          else
            this.menuFlag = true;
        }
      });

  }


  filterValue(event: any) {

    this.selectedFilter = '';
    this.selectedValue = event.target.value;
    this._data.setCategory(event.target.value);

    if (event.target.value.trim() != '-- None --')
      this.flag = true;
    else
      this.flag = false;


  }

  transfer(event: any): void {
    this._data.setFilter(event.target.value);
  }
}
