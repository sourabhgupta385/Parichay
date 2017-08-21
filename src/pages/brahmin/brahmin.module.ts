import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrahminPage } from './brahmin';
import { SearchPipeModule } from '../../pipes/search/search.module';

@NgModule({
  declarations: [
    BrahminPage,
  ],
  imports: [
    IonicPageModule.forChild(BrahminPage),
    SearchPipeModule
  ],
  exports: [
    BrahminPage,
    
  ]
})
export class BrahminPageModule {}
