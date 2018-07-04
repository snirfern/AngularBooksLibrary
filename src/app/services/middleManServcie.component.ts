import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class middleManService {
  private url = 'assets/books.json';

  constructor(private http: HttpClient) {
  };

  public data:any;
  public flag = false;



  ///////////////////////////////////////
            // -  returns data -  //
  //////////////////////////////////////
  getData() {
    return this.data;
  }

  ///////////////////////////////////////
  //////////////////////////////////////


  ///////////////////////////////////////
                // - Returns json file data - //
  //////////////////////////////////////
  bindData() :Observable<any>{
    this.flag = true;
    this.data= this.http.get(this.url).map((response)=>this.data=response);

    return this.data;


  }


  ///////////////////////////////////////
  //////////////////////////////////////


  ///////////////////////////////////////
                // - Add new user - //
  //////////////////////////////////////
  addUser(input: any): boolean {
    try {
      this.data.push({
        'isbn': input.Isbn,
        'title': input.Title,
        'subtitle': input.Subtitle,
        'author': input.Author,
        'published': input.Published,
        'publisher': input.Publisher,
        'pages': input.Pages,
        'description': input.Description,
        'website': input.imgUrl,
        'rating': [Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1],
        'totalRating': Math.floor(Math.random() * 5) + 1


      });
    } catch (err) {
      return false;
    }
    return true;


  }
  ///////////////////////////////////////
  //////////////////////////////////////


  ///////////////////////////////////////
              // -  Remove user -  //
  //////////////////////////////////////
  removeUser(isbnIn: number): boolean {
    try {

      this.data = this.data.filter(function (value) {
        return (value !== null && value.isbn != isbnIn);
      });
    } catch (err) {alert(err);alert(this.data.length);
      return false;
    }
    return true;


  }


  ///////////////////////////////////////
                // - Check if user exists - //
  //////////////////////////////////////
  checkIsbn(input: any): boolean {
    return this.data.some(value => value.isbn == input.Isbn);

  }

  ///////////////////////////////////////
  //////////////////////////////////////
}
