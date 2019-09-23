
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  public country;
  public year;
  date : Date;
  name: any;
  date1: Date;
  name1: any;
  date2 : Date;
  name2 : any;
  date3 : Date;
  name3 : any;
  date4 : Date;
  name4 : any;
  date5 : Date;
  name5 : any;
  date6 : Date;
  name6 : any;
  date7 : Date;
  name7 : any;
  date8 : Date;
  name8 : any;
  date9 : Date;
  name9 : any;
  date10 : Date;
  name10 : any;

  constructor( public http: HttpClient, public alertCtrl: AlertController ) {
  }

  searchHold()
  {
    if(this.country == null || this.year == null)
    {
      let alert = this.alertCtrl.create({
        title: 'Please Enter Currency',
        subTitle: 'Currency incorrect',
        buttons: ['OK']
      });
      alert.present().then();
    }

    this.http.get('https://holidayapi.co.uk/v1/holidays?api_key=f1a8d926-5138-4367-a3c2-63e345eac97b&country=' + this.country +  '&year='+this.year).subscribe(data => {
      console.log();
      this.date=data['holidays'].holidays[0].date;
      this.name=data['holidays'].holidays[0].name;
      this.date1=data['holidays'].holidays[1].date;
      this.name1=data['holidays'].holidays[1].name;
      this.date2=data['holidays'].holidays[2].date;
      this.name2=data['holidays'].holidays[2].name;
      this.date3=data['holidays'].holidays[3].date;
      this.name3=data['holidays'].holidays[3].name;
      this.date4=data['holidays'].holidays[4].date;
      this.name4=data['holidays'].holidays[4].name;
      this.date5=data['holidays'].holidays[5].date;
      this.name5=data['holidays'].holidays[5].name;
      this.date6=data['holidays'].holidays[6].date;
      this.name6=data['holidays'].holidays[6].name;
      this.date7=data['holidays'].holidays[7].date;
      this.name7=data['holidays'].holidays[7].name;
      this.date8=data['holidays'].holidays[8].date;
      this.name8=data['holidays'].holidays[8].name;
      this.date9=data['holidays'].holidays[9].date;
      this.name9=data['holidays'].holidays[9].name;
      this.date10=data['holidays'].holidays[10].date;
      this.name10=data['holidays'].holidays[10].name;

    });
  }

}
