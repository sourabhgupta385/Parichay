import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgarwalPage } from './agarwal';
import { SearchPipeModule } from '../../pipes/search/search.module';

@NgModule({
  declarations: [
    AgarwalPage,
  ],
  imports: [
    IonicPageModule.forChild(AgarwalPage),
    SearchPipeModule
  ],
  exports: [
    AgarwalPage,  
  ]
})
export class AgarwalPageModule {}
