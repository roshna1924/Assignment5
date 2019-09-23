import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {User} from "../../Models/user";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user = {} as User;
  public username;
  public email;
  public password;
  public confirmpassword;


  constructor(public navCtrl: NavController, private firebaseauth: AngularFireAuth, public alertCtrl: AlertController) {

  }

  Signup(user:User) {
    if (this.password === this.confirmpassword) {
      try {
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(function () {
          let alert = this.alertCtrl.create({
            title: 'Created successfully, Now Login',
            subTitle: 'Congratulations',
            buttons: ['OK']
          });
          alert.present().then();
          this.user.email="";
          this.user.password="";
        }).catch(() =>
        {
          let alert = this.alertCtrl.create({
            title: 'Created successfully, Now Login',
            subTitle: 'Congratulations',
            buttons: ['OK']
          });
          alert.present().then();
        })
      }
      catch(e){
        console.error(e);
      }

      this.navCtrl.push(HomePage).then();
    }else if(this.username == null || this.username == "" || this.email == null || this.email =="" || this.password == null || this.password == "" || this.confirmpassword == null || this.confirmpassword == "")
    {
      let alert = this.alertCtrl.create({
        title: 'All Fields are mandatory',
        subTitle: 'Please enter all fields',
        buttons: ['OK']
      });
      alert.present().then();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Registration unsuccessful!',
        subTitle: 'Password and Confirm password does not match',
        buttons: ['OK']
      });
      alert.present().then();
    }
  }
}
