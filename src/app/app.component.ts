import { Component, ViewChild } from '@angular/core';
import { Platform , Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { AgarwalPage } from '../pages/agarwal/agarwal';
import { BrahminPage } from '../pages/brahmin/brahmin';
import { JainPage } from '../pages/jain/jain';
import { MaheshwariPage } from '../pages/maheshwari/maheshwari';
import { PorwalPage } from '../pages/porwal/porwal';
import { RajputPage } from '../pages/rajput/rajput';

export const firebaseConfig = {
    apiKey: "AIzaSyD9CD2D5bdoVpQk7l9DjomOF32UH4SI6FY",
    authDomain: "moveez-8126a.firebaseapp.com",
    databaseURL: "https://moveez-8126a.firebaseio.com",
    projectId: "moveez-8126a",
    storageBucket: "moveez-8126a.appspot.com",
    messagingSenderId: "284159403392"
};


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
pages: Array<{title: string, component: any}>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home'       , component: HomePage      },
      { title: 'Agarwal'    , component: AgarwalPage    },
      { title: 'Brahmin'    , component: BrahminPage    },
      { title: 'Jain'       , component: JainPage       },
      { title: 'Maheshwari' , component: MaheshwariPage },
      { title: 'Porwal'     , component: PorwalPage     },
      { title: 'Rajput'     , component: RajputPage     }
    ];

    
    firebase.initializeApp(firebaseConfig);
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  
}

