import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AgarwalPage } from '../pages/agarwal/agarwal';
import { BrahminPage } from '../pages/brahmin/brahmin';
import { JainPage } from '../pages/jain/jain';
import { MaheshwariPage } from '../pages/maheshwari/maheshwari';
import { PorwalPage } from '../pages/porwal/porwal';
import { RajputPage } from '../pages/rajput/rajput';


import { DatabaseProvider } from '../providers/database/database';
import { ImageProvider } from '../providers/image/image';
import { PreloaderProvider } from '../providers/preloader/preloader';
import { Camera } from '@ionic-native/camera';
import { SearchPipe } from '../pipes/search/search';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgarwalPage,
    BrahminPage,
    JainPage,
    MaheshwariPage,
    PorwalPage,
    RajputPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    ImageProvider,
    PreloaderProvider,
    Camera,
    SocialSharing
  ]
})
export class AppModule {}
