webpackJsonp([6],{

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals__ = __webpack_require__(641);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPageModule", function() { return ModalsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalsPageModule = (function () {
    function ModalsPageModule() {
    }
    return ModalsPageModule;
}());
ModalsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modals__["a" /* ModalsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modals__["a" /* ModalsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modals__["a" /* ModalsPage */]
        ]
    })
], ModalsPageModule);

//# sourceMappingURL=modals.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_preloader_preloader__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalsPage = (function () {
    function ModalsPage(navCtrl, params, _FB, _IMG, viewCtrl, _LOADER, _DB) {
        this.navCtrl = navCtrl;
        this.params = params;
        this._FB = _FB;
        this._IMG = _IMG;
        this.viewCtrl = viewCtrl;
        this._LOADER = _LOADER;
        this._DB = _DB;
        this.movieImage = '';
        this.form = _FB.group({
            '_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_city': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_dob': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_birthtime': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_birthplace': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_gender': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_education': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_occupation': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_monthlyincome': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_fathername': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_fatheroccupation': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_brother': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_sister': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_contact': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_image': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_gotra': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            '_caste': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
        this.movies = __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref(this.form.controls["_caste"].value + '/');
    }
    ModalsPage.prototype.saveMovie = function (val) {
        var _this = this;
        this._LOADER.displayPreloader();
        this.dateofbirth = new Date(this.form.controls["_dob"].value);
        this.today = new Date();
        this.age = this.today.getFullYear() - this.dateofbirth.getFullYear();
        var title = this.form.controls["_name"].value, image = this._image, city = this.form.controls["_city"].value, dob = this.form.controls["_dob"].value, _age = this.age, birthtime = this.form.controls["_birthtime"].value, birthplace = this.form.controls["_birthplace"].value, gender = this.form.controls["_gender"].value, education = this.form.controls["_education"].value, occupation = this.form.controls["_occupation"].value, monthlyincome = this.form.controls["_monthlyincome"].value, fathername = this.form.controls["_fathername"].value, fatheroccupation = this.form.controls["_fatheroccupation"].value, brother = this.form.controls["_brother"].value, sister = this.form.controls["_sister"].value, gotra = this.form.controls["_gotra"].value, contact = this.form.controls["_contact"].value, caste = this.form.controls["_caste"].value;
        this._DB.uploadImage(image)
            .then(function (snapshot) {
            var uploadedImage = snapshot.downloadURL;
            _this._DB.addToDatabase({
                title: title,
                city: city,
                dob: dob,
                age: _age,
                birthtime: birthtime,
                birthplace: birthplace,
                gender: gender,
                education: education,
                occupation: occupation,
                monthlyincome: monthlyincome,
                fathername: fathername,
                fatheroccupation: fatheroccupation,
                brother: brother,
                sister: sister,
                gotra: gotra,
                contact: contact,
                caste: caste,
                image: uploadedImage,
            })
                .then(function (data) { });
        });
        this.closeModal(true);
    };
    ModalsPage.prototype.closeModal = function (val) {
        if (val === void 0) { val = null; }
        this.viewCtrl.dismiss(val);
    };
    ModalsPage.prototype.selectImage = function () {
        var _this = this;
        this._IMG.selectImage()
            .then(function (data) {
            _this._image = data;
        });
    };
    return ModalsPage;
}());
ModalsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-modals',template:/*ion-inline-start:"F:\Ionic Projects\moveez\src\pages\modals\modals.html"*/'<ion-header>\n   <ion-toolbar color="light">\n      <ion-title>\n         Add a new Bio-Data\n      </ion-title>\n      <ion-buttons start>\n         <button ion-button (click)="closeModal()">\n           <ion-icon name="md-close"></ion-icon>\n         </button>\n      </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n   <form [formGroup]="form" (ngSubmit)="saveMovie(form.value)">\n      <h4>Personal Details :-</h4>\n      <ion-item>\n         <ion-label floating >Name:</ion-label>\n         <ion-input type="text" formControlName="_name" [(ngModel)]="_name"></ion-input>\n   	  </ion-item>\n\n      <ion-item>\n         <ion-label floating >City:</ion-label>\n         <ion-input type="text" formControlName="_city" [(ngModel)]="_city"></ion-input>\n      </ion-item>  \n\n      <ion-item>\n        <ion-label floating>Date Of Birth</ion-label>\n        <ion-datetime displayFormat="DD MMM , YYYY" formControlName="_dob" [(ngModel)]="_dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Birth Time:</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="_birthtime" [(ngModel)]="_birthtime"></ion-datetime>\n      </ion-item>\n\n   	  <ion-item>\n         <ion-label floating >Birth Place:</ion-label>\n         <ion-input type="text" formControlName="_birthplace" [(ngModel)]="_birthplace"></ion-input>\n      </ion-item>\n\n      <ion-item>\n         <ion-label floating >Education:</ion-label>\n         <ion-input type="text" formControlName="_education" [(ngModel)]="_education"></ion-input>\n      </ion-item>\n\n      <ion-item>\n         <ion-label floating >Monthly Income:</ion-label>\n         <ion-input type="tel" formControlName="_monthlyincome" [(ngModel)]="_monthlyincome"></ion-input>\n      </ion-item>\n\n      <ion-item>\n         <ion-label>Occupation:</ion-label>\n         <ion-select formControlName="_occupation" [(ngModel)]="_occupation">\n           <ion-option value="Job">Job</ion-option>\n           <ion-option value="Business">Business</ion-option>\n         </ion-select>\n      </ion-item>\n\n      <ion-item>\n         <ion-label>Gender:</ion-label>\n         <ion-select formControlName="_gender" [(ngModel)]="_gender">\n           <ion-option value="Male">Male</ion-option>\n           <ion-option value="Female">Female</ion-option>\n         </ion-select>\n      </ion-item>\n      <br>\n      <h4>Family Details :-</h4>\n\n      <ion-item>\n         <ion-label floating >Father\'s Name:</ion-label>\n         <ion-input type="text" formControlName="_fathername" [(ngModel)]="_fathername"></ion-input>\n      </ion-item>\n\n      <ion-item>\n         <ion-label floating >Gotra:</ion-label>\n         <ion-input type="text" formControlName="_gotra" [(ngModel)]="_gotra"></ion-input>\n      </ion-item>\n\n      <ion-item>\n         <ion-label floating >Contact No:</ion-label>\n         <ion-input type="tel" formControlName="_contact" [(ngModel)]="_contact"></ion-input>\n      </ion-item>\n\n      <ion-item>\n         <ion-label>Father\'s Occupation:</ion-label>\n         <ion-select formControlName="_fatheroccupation" [(ngModel)]="_fatheroccupation">\n           <ion-option value="Job">Job</ion-option>\n           <ion-option value="Business">Business</ion-option>\n         </ion-select>\n      </ion-item>\n\n      <ion-item>\n         <ion-label>Brothers:</ion-label>\n         <ion-select formControlName="_brother" [(ngModel)]="_brother">\n           <ion-option value="0">0</ion-option>\n           <ion-option value="1">1</ion-option>\n           <ion-option value="2">2</ion-option>\n           <ion-option value="3">3</ion-option>\n           <ion-option value="4">4</ion-option>\n           <ion-option value="5">5</ion-option>\n           <ion-option value="6">6</ion-option>\n         </ion-select>\n      </ion-item>\n\n      <ion-item>\n         <ion-label >Sisters:</ion-label>\n         <ion-select formControlName="_sister" [(ngModel)]="_sister">\n           <ion-option value="0">0</ion-option>\n           <ion-option value="1">1</ion-option>\n           <ion-option value="2">2</ion-option>\n           <ion-option value="3">3</ion-option>\n           <ion-option value="4">4</ion-option>\n           <ion-option value="5">5</ion-option>\n           <ion-option value="6">6</ion-option>\n         </ion-select>\n      </ion-item>\n\n      <ion-item>\n         <ion-label>Caste:</ion-label>\n         <ion-select formControlName="_caste" [(ngModel)]="_caste">\n           <ion-option value="Agarwal">Agarwal</ion-option>\n           <ion-option value="Brahmin">Brahmin</ion-option>\n           <ion-option value="Jain">Jain</ion-option>\n           <ion-option value="Porwal">Porwal</ion-option>\n           <ion-option value="Maheshwari">Maheshwari</ion-option>\n           <ion-option value="Rajput">Rajput</ion-option>\n         </ion-select>\n      </ion-item>\n\n      <ion-item>\n         <span ion-text  color="primary" (click)="selectImage()">\n         	Upload Photo\n         </span>\n            <input type="hidden" name="_image" formControlName="_image" [(ngModel)]="_image">\n   	  </ion-item>\n\n   	  <ion-item>\n   	     <input type="hidden" name="movieId">\n         <button ion-button block color="secondary" text-center [disabled]="!form.valid">\n               Add a new Bio Data\n          </button>\n      </ion-item>\n    </form>\n</ion-content>        \n'/*ion-inline-end:"F:\Ionic Projects\moveez\src\pages\modals\modals.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_preloader_preloader__["a" /* PreloaderProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
], ModalsPage);

//# sourceMappingURL=modals.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map