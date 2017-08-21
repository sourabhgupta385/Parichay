import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,  ModalController } from 'ionic-angular';
import { PreloaderProvider } from '../../providers/preloader/preloader';
import { DatabaseProvider } from '../../providers/database/database';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-brahmin',
  templateUrl: 'brahmin.html',
})
export class BrahminPage {
  public movies    : any;
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  public toggled : boolean;
  public _gender = "male";
  
  constructor(
          public navCtrl       : NavController, 
          public navParams     : NavParams,
          private modalCtrl    : ModalController,
          private _LOADER      : PreloaderProvider,
                private _DB          : DatabaseProvider,
                private platform     : Platform) {
  
            this.toggled = false;
            this.searchControl = new FormControl();
  }

  ionViewDidEnter(){
      this._LOADER.displayPreloader();
      this.platform.ready()
      .then(() =>{
          this.loadAndParseMovies();
      }).catch((err : Error) =>
         {
            console.log(err.message);
         });
      
      this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
         this.searching = false;   
      }); 
  }

  loadAndParseMovies(){
      this.movies = this._DB.renderMovies("Brahmin"); 
  }

  openModal(movie){  
    let modal = this.modalCtrl.create('DescriptionPage' ,{movie_obj :movie});
    modal.onDidDismiss((data) =>{
          if(data){
              this._LOADER.displayPreloader();
              this.loadAndParseMovies();
          }
    });

    modal.present();
  }

  doRefresh(refresher) {
    this.loadAndParseMovies();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  toggleSearch() {
      this.toggled = this.toggled ? false : true;
  }

  toggle(){
    this.toggled = !this.toggled; 
  }

  onSearchInput(ev:any){
      this.searching = true;
      this.searchTerm = ev.target.value;
  }
}
