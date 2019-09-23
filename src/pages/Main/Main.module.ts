import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './Main';
import {FindPageModule} from "../find/find.module";

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    FindPageModule,
  ],
})
export class MainPageModule {}
