webpackJsonp([7],{

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__description__ = __webpack_require__(640);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionPageModule", function() { return DescriptionPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DescriptionPageModule = (function () {
    function DescriptionPageModule() {
    }
    return DescriptionPageModule;
}());
DescriptionPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__description__["a" /* DescriptionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__description__["a" /* DescriptionPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__description__["a" /* DescriptionPage */]
        ]
    })
], DescriptionPageModule);

//# sourceMappingURL=description.module.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_preloader_preloader__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DescriptionPage = (function () {
    function DescriptionPage(navCtrl, navParams, viewCtrl, _LOADER, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._LOADER = _LOADER;
        this.socialSharing = socialSharing;
        this.movie = navParams.get('movie_obj');
    }
    DescriptionPage.prototype.ionViewDidLoad = function () {
    };
    DescriptionPage.prototype.closeModal = function (val) {
        if (val === void 0) { val = null; }
        this.viewCtrl.dismiss(val);
    };
    DescriptionPage.prototype.regularShare = function () {
        console.log("Checkout the biodata of " + this.movie.title + " at Parichay Mobile App ");
        this.socialSharing.share("Checkout the biodata of " + this.movie.title + " at Parichay Mobile App ", null, null, this.movie.image);
    };
    return DescriptionPage;
}());
DescriptionPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-description',template:/*ion-inline-start:"F:\Ionic Projects\moveez\src\pages\description\description.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-title text-center>\n         {{ movie.title }}\n      </ion-title>\n      <ion-buttons end>\n         <button ion-button (click)="regularShare()">\n            <ion-icon ios="ios-share" md="md-share"></ion-icon>\n         </button>\n         <button ion-button  (click)="closeModal()"> \n           <ion-icon name="md-close"></ion-icon>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content  style="background-color: #961823">\n\n<div text-center  >\n<img  padding [src] = movie.image >\n<br>\n<h3 text-center><i><u>Personal Profile</u></i></h3>\n<h6>\n<ion-grid >\n <ion-row><ion-col col-5>Name</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.title }}</ion-col></ion-row>\n <ion-row><ion-col col-5>City</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.city }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Date Of Birth</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.dob.substring(8,10) }}-{{movie.dob.substring(5,7)}}-{{movie.dob.substring(0,4)}}</ion-col></ion-row>\n <ion-row><ion-col col-5>Birth Time</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.birthtime }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Birth Place</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.birthplace }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Education</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.education }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Occupation</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.occupation }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Monthly Income</ion-col><ion-col col-1>:</ion-col><ion-col>&#8377;{{ movie.monthlyincome }}</ion-col></ion-row>\n <br>\n <h3 text-center><i><u>Family Background</u></i></h3><br>\n <ion-row><ion-col col-5>Father\'s Name</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.fathername }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Father\'s Occupation</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.fatheroccupation }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Self Gotra</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.gotra }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Brothers</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.brother }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Sisters</ion-col><ion-col col-1>:</ion-col><ion-col>{{ movie.sister }}</ion-col></ion-row>\n <ion-row><ion-col col-5>Contact No</ion-col ><ion-col col-1>:</ion-col><ion-col>{{ movie.contact }}</ion-col></ion-row>\n\n</ion-grid>\n</h6>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\Ionic Projects\moveez\src\pages\description\description.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_preloader_preloader__["a" /* PreloaderProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], DescriptionPage);

//# sourceMappingURL=description.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map