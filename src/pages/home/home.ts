import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ImageProvider } from '../../providers/image/image';
import { PreloaderProvider } from '../../providers/preloader/preloader';
import 'rxjs/Rx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public movies    : any;
 splash = true;

  constructor(
                public navCtrl       : NavController , 
                private platform     : Platform,
                private modalCtrl    : ModalController,
                private _IMG         : ImageProvider,
                private _LOADER      : PreloaderProvider,
                private _DB          : DatabaseProvider ) {

                

  }

  ionViewDidEnter(){
    setTimeout(() => this.splash = false, 4000);
                
  }

  
  addRecord(){
    let modal = this.modalCtrl.create('ModalsPage');
    modal.onDidDismiss((data) =>{
        if(data){
            this._LOADER.displayPreloader();
        }
    });
    modal.present();
  }

  openModal(movie){  
    let modal = this.modalCtrl.create('DescriptionPage' ,{movie_obj :movie});
    modal.onDidDismiss((data) =>{
        if(data){
            this._LOADER.displayPreloader();
        }
    });
    modal.present();
  }

  


}
