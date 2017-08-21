import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JainPage } from './jain';
import { SearchPipeModule } from '../../pipes/search/search.module';
@NgModule({
  declarations: [
    JainPage,
  ],
  imports: [
    IonicPageModule.forChild(JainPage),
    SearchPipeModule
  ],
  exports: [
    JainPage,
  ]
})
export class JainPageModule {}
