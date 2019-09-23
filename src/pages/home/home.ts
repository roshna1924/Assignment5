import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AboutPage} from "../about/about";
import {MainPage} from "../Main/Main";
import {User} from "../../Models/user";
import { GlobalProvider } from "../../providers/global/global";
import {AngularFireAuth}  from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {} as User;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private firebaseauth: AngularFireAuth, public global: GlobalProvider) {

  }

  signIn(user:User) {
    try {
      this.firebaseauth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
        this.global.userEmail = user.email;
        this.navCtrl.push(MainPage);
      }).catch(()=>{
        alert("Try again. Invalid Credentials");
      })
    }
    catch(e){
      console.error(e);
    }
  }
  register(){
    this.navCtrl.push(AboutPage).then();

  }

}
