import { Component } from '@angular/core';
import {NavController, AlertController, IonicPage} from 'ionic-angular';
import {Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import {HomePage} from '../home/home';
import {FindPage} from "../find/find";
import {CurrencyPage} from "../currency/currency";
import {SearchPage} from "../search/search";
import { GlobalProvider } from "../../providers/global/global";
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  public accuracy:object;
  public name;
  myphoto : any;
  constructor(public navC: NavController, public http: HttpClient,public alertC: AlertController, private camera:Camera, public global: GlobalProvider) {
    this.downloadImage();
  }

  takeImage(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      this.uploadImage(this.myphoto);
    }, (err) => {
      // Handle error
    });
  }

  downloadImage(){
    var postId = firebase.auth().currentUser.uid;
    let ref = firebase.database().ref('Posts/' + postId);

    ref.on('value', resp => {
      this.myphoto = resp.child('url').val();
    })

  }

  uploadImage(imageURI) {
    return new Promise<any>((resolve, reject) => {
      const storageRef = firebase.storage().ref('/pic/' + this.global.userEmail);
      let userEmail = this.global.userEmail;
      storageRef.putString(imageURI, 'data_url').then(function(snapshot) {
        storageRef.getDownloadURL().then(function(downloadURL) {

          let postKey = firebase.auth().currentUser.uid;
          let updates = {};
          let postData = {
            url: downloadURL,
            user: userEmail
          };
          updates['/Posts/' +postKey] = postData;
          firebase.database().ref().update(updates);

        });
      },function () {

      });

    });
  }
  calender(){
  this.navC.push(FindPage).then();
  }
  currency() {
    this.navC.push(CurrencyPage).then();
  }
  searchDet(){
    this.navC.push(SearchPage).then();
  }

  logout(){
    let alert = this.alertC.create({
      title: 'Log out',
      buttons: ['OK']
    });
    alert.present().then();
    this.navC.push(HomePage).then();
  }

}

