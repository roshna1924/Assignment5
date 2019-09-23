import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SearchPage} from "../pages/search/search";
import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/Main/Main';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AboutPageModule} from '../pages/about/about.module';
import {MainPageModule} from '../pages/Main/Main.module';
import {HomePageModule} from '../pages/home/home.module';
import {FindPageModule} from '../pages/find/find.module';
import {CurrencyPageModule} from '../pages/currency/currency.module'
import {SearchPageModule} from "../pages/search/search.module";
import { Camera } from '@ionic-native/camera';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { GlobalProvider } from '../providers/global/global';

const firebaseConfig = {
  apiKey: "AIzaSyCkHrOU_uqUeXrvI0z2rxNizS6VeV0LLA0",
  authDomain: "assignment5-28f59.firebaseapp.com",
  databaseURL: "https://assignment5-28f59.firebaseio.com",
  projectId: "assignment5-28f59",
  storageBucket: "assignment5-28f59.appspot.com",
  messagingSenderId: "183080655839",
  appId: "1:183080655839:web:03acb15becc937464fc26a"
};

// @ts-ignore
@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AboutPageModule,
    MainPageModule,
    HomePageModule,
    FindPageModule,
    CurrencyPageModule,
    SearchPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
