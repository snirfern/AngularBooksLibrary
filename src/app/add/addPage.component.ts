import { Component} from '@angular/core'
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {middleManService} from '../services/middleManServcie.component';

@Component({
  selector: 'add-component',
  templateUrl: './addPage.html',
  styleUrls: ['./addPage.component.css'],

})

export class addComponent
{
  status:string= "The book was added  successfully";
  success:boolean=false;
 public  input:any;

  public constructor(private _httpService : middleManService,private _router :Router)
  {

    this.input= {
      "imgUrl":"",
      "Isbn":"",
      "Title":"",
      "Subtitle":"",
      "Author":"",
      "Publisher":"",
      "Published":"",
      "Pages":"",
      "Description":""
    }
  }
submit(form:NgForm)
{
if ( this._httpService.checkIsbn(this.input))
{
  alert("Isbn value already exists. ");
}
else if ( this._httpService.addUser(this.input) ) {
  form.resetForm();
  this.success = !this.success;
  setTimeout(() => {
    this._router.navigate(['/Home']);

  }, 4000);
}
else
 alert("reload page and check isbn");



}


}
