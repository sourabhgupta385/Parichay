import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { PreloaderProvider } from '../../providers/preloader/preloader';
import * as firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

	public movie : any;

  constructor(
  				public navCtrl     : NavController, 
  				public navParams   : NavParams,
  				public viewCtrl    : ViewController,
                private _LOADER    : PreloaderProvider,
                public socialSharing : SocialSharing) {

  				this.movie = navParams.get('movie_obj');
  }

  ionViewDidLoad() {
  }

  closeModal(val = null)
   {
      this.viewCtrl.dismiss(val);
   }

   regularShare(){
     console.log("Checkout the biodata of "+this.movie.title + " at Parichay Mobile App ");
     this.socialSharing.share("Checkout the biodata of "+this.movie.title + " at Parichay Mobile App ",null,null,this.movie.image);
  }

}
