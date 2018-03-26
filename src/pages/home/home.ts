import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  root = "InformationPage";
  constructor(public navCtrl: NavController) {

  }

  open(pageName){
    this.root = pageName;
  }

}
