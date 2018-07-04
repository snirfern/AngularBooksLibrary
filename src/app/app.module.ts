import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from "./home/app.component";
import {filter} from './services/filter.component';
import {FormsModule} from '@angular/forms';
import {starComponent} from './star/star.component';
import {editComponent} from './edit/editPage.component';
import {addComponent} from './add/addPage.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/Home.component';
import {FilterService} from './services/service.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {middleManService} from './services/middleManServcie.component';

@NgModule({
  declarations: [
    AppComponent, filter, starComponent, editComponent, addComponent, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([{path: '', redirectTo: 'Home', pathMatch: 'full'}, {
      path: 'Home',
      component: HomeComponent
    }, {path: 'Add', component: addComponent}, {
      path: 'editPage',
      component: editComponent
    }, {
      path: 'editPage/:imgUrl/:isbn/:title/:subtitle/:author/:published/:publisher/:pages/:description',
      component: editComponent
    }], {useHash: false}), HttpClientModule
  ],
  providers: [FilterService, middleManService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
