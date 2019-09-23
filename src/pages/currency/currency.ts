
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";


@IonicPage()
@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html',
})
export class CurrencyPage {
  public currency;
  public GBP: any;
  USD: any;
  HKD: any;
  CAD: any;
  AUD: any;
  CNY: any;
  BGN: any;
  MYR: any;
  INR: any;
  EUR: any;

  constructor(public http: HttpClient, public alertCtrl: AlertController) {
  }


  getRates() {

    if(this.currency == null || this.currency == "")
    {
      let alert = this.alertCtrl.create({
        title: 'Please Enter Currency',
        subTitle: 'Currency incorrect',
        buttons: ['OK']
      });
      alert.present().then();
    }

    this.http.get('https://api.ratesapi.io/api/latest?base=' + this.currency).subscribe(data => {
      this.GBP = data["rates"].GBP;
      this.USD = data["rates"].USD;
      this.INR = data["rates"].INR;
      this.HKD = data["rates"].HKD;
      this.CAD = data["rates"].CAD;
      this.AUD = data["rates"].AUD;
      this.CNY = data["rates"].CNY;
      this.BGN = data["rates"].BGN;
      this.MYR = data["rates"].MYR;
      this.EUR = data["rates"].EUR;

      console.log(this.GBP);
    });
  }

}


