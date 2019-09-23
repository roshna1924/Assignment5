import { async, TestBed } from '@angular/core/testing';
import {AlertController, IonicModule, NavController} from 'ionic-angular';
import {AlertControllerMock, NavControllerMock} from 'ionic-mocks';


import { AboutPage} from './about';


describe('About Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;
  let navCtrl: NavController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      imports: [
        IonicModule.forRoot(AboutPage)
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock },
        { provide: NavController, useClass: NavControllerMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();

    navCtrl = NavControllerMock.instance();
  });

  it('should be created', () => {
    expect(component instanceof AboutPage).toBe(true);
  });
  it('Registration fails, email not entered', () => {

    let registerF = new AboutPage( navCtrl, alertCtrl);
    registerF.username = 'sahi';
    registerF.email= 'sahithya';
    registerF.password = 'sahi';
    registerF.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

  it('Registration fails, email not entered', () => {

    let registerP = new AboutPage(navCtrl, alertCtrl);
    registerP.username = 'sahi';
    registerP.email = 'sahithya';
    registerP.password = 'sahi';
    registerP.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

  it('All Fields are Mandatory', () => {

    let registerE = new AboutPage(navCtrl, alertCtrl);
    registerE.username = '';
    registerE.email = '';
    registerE.password = '';
    registerE.confirmpassword = '';
    registerE.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

  it("sign up function", () =>{


    let fun = new AboutPage( navCtrl, alertCtrl);
    fun.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();
  });

});
