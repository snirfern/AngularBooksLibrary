import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {FilterService} from '../services/service.component';
import {middleManService} from '../services/middleManServcie.component';

@Component({
  selector: 'edit-component',
  templateUrl: './editPage.html',
  styleUrls: ['./editPage.component.css'],

})

export class editComponent implements OnInit {
  status: string;
  pageTitle: number = 123;
  isbn: any;
  title: any;
  subtitle: any;
  author: any;
  published: any;
  publisher: any;
  pages: any;
  description: any;
  imgUrl: string;
  public input: any;
  success: boolean = false;

  constructor(private service: FilterService, private _route: ActivatedRoute, private _httpService: middleManService, private _router: Router) {

    this.input = {
      'Isbn': this._route.snapshot.params['isbn'],
      'Title': this._route.snapshot.params['title'],
      'Subtitle': this._route.snapshot.params['subtitle'],
      'Author': this._route.snapshot.params['author'],
      'Publisher': this._route.snapshot.params['publisher'],
      'Published': this._route.snapshot.params['published'],
      'Pages': this._route.snapshot.params['pages'],
      'Description': this._route.snapshot.params['description'],
      'imgUrl': this._route.snapshot.params['imgUrl'],
    };


  }

  ngOnInit() {


    this.imgUrl = this._route.snapshot.params['imgUrl'];

  }

  deleteUser(): void {
    window.document.getElementById('form').style.opacity = '0.5';
    if (this._httpService.removeUser(this.input.Isbn)) {

      this.status = 'The user was succesfully removed!';
      this.success = true;
    }

else
  alert
    this.navigate();

  }

  editUser(): void {

    this.deleteUser();
    if (this._httpService.addUser(this.input)) {


      this.status = 'The user was succesfully edited!';

      this.success = true;


      this.navigate();
    }
    else
      alert('reload home page...connection disconnected..');
  }

  navigate() {

    setTimeout(() => {
      this._router.navigate(['/Home']);

    }, 4000);
  }
}
