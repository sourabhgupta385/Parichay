import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaheshwariPage } from './maheshwari';
import { SearchPipeModule } from '../../pipes/search/search.module';

@NgModule({
  declarations: [
    MaheshwariPage,
  ],
  imports: [
    IonicPageModule.forChild(MaheshwariPage),
    SearchPipeModule
  ],
  exports: [
    MaheshwariPage,
  ]
})
export class MaheshwariPageModule {}
