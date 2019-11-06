import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  title: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Button Cancel');
          }
        },
        {
          text: 'Ok',          
          handler: (blah) => {
            console.log('Button ok');
          }
        },
      ]
    });

    await alert.present();
  }

  async presentAlertInput(){
    const alert = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Enter the title',
      inputs: [
        {
          name: 'txtTitle',
          type: 'text',
          placeholder: 'Page title',
          handler: () => {

          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Button Cancel');
          }
        },
        {
          text: 'Ok',          
          handler: (data) => {
            if(data.txtTitle){
              this.title = data.txtTitle;
            }            
          }
        },
      ]
    });

    await alert.present();
  }

}
