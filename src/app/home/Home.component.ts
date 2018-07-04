import {Component, OnInit} from '@angular/core';
import {FilterService} from '../services/service.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import 'rxjs/add/operator/map';
import {middleManService} from '../services/middleManServcie.component';


@Component({
  selector: 'app-root',
  templateUrl: './Home.html',
  styleUrls: ['./app.component.css'],

})


export class HomeComponent implements OnInit {

ngOnInit()
{

}
public errImg = "assets/imgErr.png";
  data: any;
  private url = 'assets/books.json';

  constructor(private _data: FilterService, private _http: HttpClient, private _httpService: middleManService) {

    if (!this._httpService.flag)
      this._httpService.bindData().subscribe(dataIn => this.data = dataIn);
    else
      this.data = this._httpService.getData();

  }





//////////////////////////////////////////////////
 // - Connects between main page to data page using service - //
  // /////////////////////////////////////////////
  filterCriteria: string;
  category: string;

  filters(): any[] {

    this.filterCriteria = this._data.getFilter();
    this.category = this._data.getCategory();

    return this.data;

  }
//////////////////////////////////////////////
// ////////////////////////////////////////////





//////////////////////////////////////////////////
     // - function for event emitter from star component - //
  ////////////////////////////////////////////////
  isRatingOn: boolean = false;
  currentIndex: number;

  ratingClicked(index: number) {

    this.currentIndex = index;
    this.isRatingOn = !this.isRatingOn;
    for (var i = 0; i < this.data.length; i++) {
      var sum =
        this.data[i].rating.reduce(
          function (total, num) {
            return total + num;
          }
          , 0);
      this.data[i].totalRating = sum / this.data[i].rating.length;

    }

  }

  //////////////////////////////////////////////
// ////////////////////////////////////////////


  //////////////////////////////////////////////////
                // - Helper functions --//
  ////////////////////////////////////////////////

  isMoreContent: boolean = true;
  readMoreContent: string = '..read more..';
  indexed: number;
  isVisible: boolean = false;


  getData(): any[] {
    return this.data;
  }


  hide() {
    this.isVisible = !this.isVisible;
  }

  setNum(i: number) {
    this.indexed = i;
  }


  //////////////////////////////////////////////////
  ////////////////////////////////////////////////


  //////////////////////////////////////////////////
            // -Read more book title content - //
  ////////////////////////////////////////////////


  readMore() {

    this.isMoreContent = !this.isMoreContent;
    if (this.readMoreContent == '...readLess...')
      this.readMoreContent = '...readMore...';
    else
      this.readMoreContent = '...readLess...';
  }
//////////////////////////////////////////////////
  ////////////////////////////////////////////////





  RatingClicked(obj: any): void {
    this.isRatingOn = !this.isRatingOn;
    this.data[obj.index].rating.push(obj.stars);
  }


  //////////////////////////////////////////////////
     // - Sets stars main preview according to data rating - //
  ////////////////////////////////////////////////
  getClass(index: number, bookIndex: number) {

    if (index < this.data[bookIndex].totalRating)
      return 'glyphicon glyphicon-star ';

    return 'glyphicon glyphicon-star-empty';

  }

//////////////////////////////////////////////////
  ////////////////////////////////////////////////
}



