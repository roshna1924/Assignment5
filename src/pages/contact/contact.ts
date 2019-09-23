import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  todos: string[] = [];
  todo: string;

  constructor(public navCtrl: NavController) {

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
