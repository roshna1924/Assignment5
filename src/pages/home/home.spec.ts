import { async, TestBed } from '@angular/core/testing';
import {AlertController, IonicModule, NavController} from 'ionic-angular';
import {AlertControllerMock, AlertMock, NavControllerMock} from 'ionic-mocks';
import {HttpClientModule} from "@angular/common/http";

import { HomePage} from './home';
import {AboutPage} from "../about/about";
describe('Home Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;
  let navCtrl: NavController;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock },
        { provide: NavController, useClass: NavControllerMock }

      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();
    navCtrl= NavControllerMock.instance();
  });

  it('should be created', () => {
    expect(component instanceof HomePage).toBe(true);
  });

  it("login function", () =>{

    let home = new HomePage( navCtrl, alertCtrl);
    home.signIn();
    expect(alertCtrl.create).toHaveBeenCalled();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('Incorrect Password', () => {
    component.username = 'hello';
    component.password = 'hello';
    let loginF = new HomePage(navCtrl,alertCtrl);
    loginF.signIn();
    expect(alertCtrl.create).toHaveBeenCalled();

  });
});









