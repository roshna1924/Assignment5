import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

import {AlertController, NavController} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-seach',
  templateUrl: 'search.html',
})
export class SearchPage {
  todos: string[] = [];
  todo: string;
  public details: any;

  url : any;
  search: any;
  public name: any;
  public description: any;
  public  detailedDescription: any;
  public image: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: HttpClient) {

  }
  searchdetails(){

    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.search + '&key=AIzaSyBg6Mk-p0Br270tvJZnfwSYOCeyYQcpgsM&limit=1&indent=True')
      .subscribe((data: any) => {
        this.details = data;
        this.name = data.itemListElement[0].result.name;
        this.description = data.itemListElement[0].result.description;
        this.detailedDescription = data.itemListElement[0].result.detailedDescription.articleBody;
        this.image = data.itemListElement[0].result.image.contentUrl;
        this.url= data.itemListElement[0].result.url;

      })
  }


  add() {
    // @ts-ignore
    this.todos.push(this.todo);
    this.todo = "";
  }

  delete(item) {
    // @ts-ignore
    var index = this.todos.indexOf(item);
    if (index > -1) {
      // @ts-ignore
      this.todos.splice(index, 1);
    }
  }
}
