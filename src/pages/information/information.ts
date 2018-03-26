import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  notifyMe(){
    if(this.plt.is('core')){
      let notification = new Notification('First Notification', {
        body:'this is my first notification'
      });

      notification.onclick = () => {
        console.log("this to nofication");
      }
    }
  }

}
