webpackJsonp(["layout.module"],{

/***/ "../../../../../src/app/layout/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#myFooter {\r\n    background-color: #3c3d41;\r\n    color: white;\r\n    padding-top: 30px;\r\n  }\r\n  \r\n  #myFooter .footer-copyright {\r\n    background-color: #333333;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    text-align: center;\r\n  }\r\n  \r\n  #myFooter .row {\r\n    margin-bottom: 60px;\r\n  }\r\n  \r\n  #myFooter .navbar-brand {\r\n    margin-top: 45px;\r\n    height: 65px;\r\n  }\r\n  \r\n  #myFooter .footer-copyright p {\r\n    margin: 10px;\r\n    color: #ccc;\r\n  }\r\n  \r\n  #myFooter ul {\r\n    list-style-type: none;\r\n    padding-left: 0;\r\n    line-height: 1.7;\r\n  }\r\n  \r\n  #myFooter h5 {\r\n    font-size: 18px;\r\n    color: white;\r\n    font-weight: bold;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  #myFooter h2 a{\r\n    font-size: 50px;\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n  \r\n  #myFooter a {\r\n    color: #d2d1d1;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  #myFooter a:hover,\r\n  #myFooter a:focus {\r\n    text-decoration: none;\r\n    color: white;\r\n  }\r\n  \r\n  #myFooter .social-networks {\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    padding-bottom: 16px;\r\n  }\r\n  \r\n  #myFooter .social-networks a {\r\n    font-size: 32px;\r\n    color: #f9f9f9;\r\n    padding: 10px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n  }\r\n  \r\n  #myFooter .social-networks a:hover {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  #myFooter .facebook:hover {\r\n    color: #0077e2;\r\n  }\r\n  \r\n  #myFooter .google:hover {\r\n    color: #ef1a1a;\r\n  }\r\n  \r\n  #myFooter .twitter:hover {\r\n    color: #00aced;\r\n  }\r\n  \r\n  #myFooter .btn {\r\n    color: white;\r\n    background-color: #d84b6b;\r\n    border-radius: 20px;\r\n    border: none;\r\n    width: 150px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n    line-height: 25px;\r\n  }\r\n  \r\n  @media screen and (max-width: 767px) {\r\n    #myFooter {\r\n        text-align: center;\r\n    }\r\n  }\r\n  \r\n  /* CSS used for positioning the footers at the bottom of the page. */\r\n  \r\n  /* You can remove this. */\r\n  \r\n  html{\r\n    height: 100%;\r\n  }\r\n  \r\n  body{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  .content{\r\n   -webkit-box-flex: 1;\r\n       -ms-flex: 1 0 auto;\r\n           flex: 1 0 auto;\r\n   -webkit-flex: 1 0 auto;\r\n   min-height: 200px;\r\n  }\r\n  \r\n  #myFooter{\r\n   -webkit-box-flex: 0;\r\n       -ms-flex: 0 0 auto;\r\n           flex: 0 0 auto;\r\n   -webkit-flex: 0 0 auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"myFooter\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <h2 class=\"logo\"><a [routerLink]=\"['/inicio']\"><img src=\"../../../../assets/img/logo.png\" class=\"img-fluid\"> </a></h2>\n            </div>\n            <div class=\"col-sm-2\">\n                <h5>Servicios</h5>\n                <ul>\n                    <li><a href=\"#\">Home</a></li>\n                    <li><a href=\"#\">Iniciar sesión como cliente</a></li>\n                    <li><a href=\"#\">Iniciar sesión como personal</a></li>\n                    <li><a href=\"#\">HDI contigo</a></li>                    \n                </ul>\n            </div>\n            <div class=\"col-sm-2\">\n                <h5>Servicios</h5>\n                <ul>\n                    <li><a href=\"#\">Siniestro de HDI</a></li>\n                    <li><a href=\"#\">Pagar póliza</a></li>\n                    <li><a href=\"#\">Reviews</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-2\">\n                <h5>Support</h5>\n                <ul>\n                    <li><a href=\"#\">FAQ</a></li>\n                    <li><a href=\"#\">Help desk</a></li>\n                    <li><a href=\"#\">Forums</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"social-networks\">\n                    <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"#\" class=\"google\"><i class=\"fa fa-google-plus\"></i></a>\n                </div>\n                <button type=\"button\" class=\"btn btn-default\">Contact us</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-copyright\">\n        <p>© 2016 Copyright Text </p>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/layout/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/layout/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-custom {\r\n    background-color: white;\r\n    opacity: .9;\r\n}\r\n.navbar-custom ul li a{\r\n    color:black;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.navbar-light .navbar-toggler-icon {\r\n    /*background-image: url(\"data:image/svg+xml;..\");*/\r\n  }\r\n.navbar-toggler {\r\n    /*border-color:black;*/\r\n}\r\n.navbar-toggler-icon img{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.container{\r\nwidth:85%;\r\n}\r\n.example-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n.left\r\n{\r\n    padding-left: 0;\r\n}\r\n.flex\r\n{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n.separador\r\n{\r\n    margin-right: 30px;\r\n}\r\n.separador2\r\n{\r\n    margin-right: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"main-header\" color=\"primary\">\r\n    <button (click)=\"toggleSidenav.emit()\" mat-icon-button>\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <div class=\"branding\">\r\n      <div class=\"logo\"></div>      \r\n    </div>\r\n    <mat-icon>home</mat-icon>\r\n    <span class=\"separador\"></span>\r\n    <button mat-icon-button [routerLink]=\"['/casa']\">\r\n      Casa      \r\n    </button>\r\n    <span class=\"separador\"></span>\r\n    <button mat-icon-button [routerLink]=\"['/autos']\">\r\n      Autos      \r\n    </button>\r\n    <span class=\"separador\"></span>\r\n    <button mat-icon-button [routerLink]=\"['/about']\">\r\n      Acerca de HDI      \r\n    </button>\r\n    <span class=\"separador2\"></span>        \r\n    <button mat-button [matMenuTriggerFor]=\"menu\">Servicios</button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item [routerLink]=\"['/siniestro']\">Siniestros</button>\r\n      <button mat-menu-item [routerLink]=\"['/contacto']\">Contáctanos</button>\r\n      <button mat-menu-item [routerLink]=\"['/cotiza']\">Cotizador de autos</button>      \r\n\r\n    </mat-menu>\r\n\r\n   <span class=\"flex\"></span>\r\n\r\n    <button [matMenuTriggerFor]=\"user\" mat-icon-button class=\"ml-xs\">\r\n      <mat-icon>person</mat-icon>\r\n    </button>\r\n    <mat-menu #user=\"matMenu\" x-position=\"before\">      \r\n      <button mat-menu-item routerLink=\"/session/signin\">\r\n        <mat-icon>account_circle</mat-icon>\r\n        Iniciar sesión como cliente\r\n      </button>\r\n      <button mat-menu-item routerLink=\"/session/signin\">\r\n        <mat-icon>account_circle</mat-icon>\r\n        Iniciar sesión como personal\r\n      </button>\r\n    </mat-menu>\r\n  </mat-toolbar>\r\n  "

/***/ }),

/***/ "../../../../../src/app/layout/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/layout/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/cotiza/cotiza.component.html":
/***/ (function(module, exports) {

module.exports = "<div  fxFlexFill fxLayoutAlign=\"center center\" class=\"{{theme}}\" > <!-- from select  flex-container fxLayoutAlign=\"space-around center\"  -->\n  <div>\n\n  \n        <mat-card>\n            <mat-card-content>\n        <mat-card-title>Seleccione la marca de su auto</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <mat-select placeholder=\"Auto\"  [(ngModel)]=\"name\" >\n              <mat-option *ngFor=\"let auto of autos\" [value]=\"auto.make\" (click)=\"onClick(auto._id)\" (click)=\"onyear(auto._id)\" >\n                {{ auto.make }}\n              </mat-option>              \n            </mat-select>                       \n          </mat-form-field>\n          <br>\n          <mat-form-field>\n          <mat-select placeholder=\"Modelo\" [(ngModel)]=\"modelo\">\n              <mat-option *ngFor=\"let model of models\" [value]=\"model.slug\">\n                  {{ model.model }}\n                </mat-option>\n              </mat-select>\n          </mat-form-field>\n         <br>\n         <mat-form-field>\n                <mat-select placeholder=\"año\" [(ngModel)]=\"year\" >\n                     <mat-option *ngFor=\"let year of years\" [value]=\"year.year\">\n                  {{ year.year}}\n                </mat-option>\n              </mat-select>\n          </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button (click)=\"cotiza()\"> Cotizar </button>\n        </mat-card-actions>\n      </mat-card-content>\n        </mat-card>\n    </div>\n </div>"

/***/ }),

/***/ "../../../../../src/app/layout/cotiza/cotiza.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parallax_section {\n  height: 600px;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: 100% auto;\n  position: relative; }\n\n.color {\n  background-color: aqua; }\n\n.color2 {\n  background-color: aquamarine; }\n\n.color3 {\n  background-color: chartreuse; }\n\n.color4 {\n  background-color: green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/cotiza/cotiza.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogOverview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//import { log } from 'util';
var CotizaComponent = /** @class */ (function () {
    function CotizaComponent(router, http, dialog) {
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.name = "";
        this.theme = "color4";
    }
    CotizaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/cliente/auto').subscribe(function (dato) {
            _this.autos = dato;
        }, function (err) {
            console.log('some erro on the sisteme: ' + err);
        });
    };
    CotizaComponent.prototype.onClick = function (event) {
        var _this = this;
        console.log(event);
        var id = event;
        this.http.get('/cliente/auto/' + id).subscribe(function (dato) {
            _this.models = dato;
        }, function (err) {
            console.log('some erros: ' + err);
        });
        this.backgroundChange();
    };
    CotizaComponent.prototype.onyear = function (event) {
        var _this = this;
        var idmodel = event;
        console.log(idmodel);
        this.http.get('/cliente/model/' + idmodel).subscribe(function (dato) {
            _this.years = dato;
        }, function (err) {
            console.log('erro bitch: ' + err);
        });
    };
    CotizaComponent.prototype.backgroundChange = function () {
        if (this.name === "Audi") {
            this.theme = "color2";
        }
        else if (this.name === "Bentley") {
            this.theme = "color4";
        }
    };
    //generar precio y posiblemente email
    CotizaComponent.prototype.toPay = function () {
        if (this.year < 2000) {
            return 1500;
        }
        else if (this.year >= 2000 && this.year < 2005) {
            return 2500;
        }
        else if (this.year >= 2005 && this.year < 2012) {
            return 2700;
        }
        else if (this.year >= 2012 && this.year < 2018) {
            return 3000;
        }
    };
    CotizaComponent.prototype.cotiza = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverview, {
            width: '450px',
            data: { name: this.name, model: this.modelo, precio: this.toPay() }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('modal cerrado');
            _this.animal = result;
        });
    };
    CotizaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cotiza',
            template: __webpack_require__("../../../../../src/app/layout/cotiza/cotiza.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/cotiza/cotiza.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], CotizaComponent);
    return CotizaComponent;
}()); // end of my component

var DialogOverview = /** @class */ (function () {
    function DialogOverview(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverview.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverview = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'precio',
            template: __webpack_require__("../../../../../src/app/layout/cotiza/precio.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogOverview);
    return DialogOverview;
}());



/***/ }),

/***/ "../../../../../src/app/layout/cotiza/precio.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h1 mat-dialog-title>Auto: {{ data.name }} {{data.model}} </h1>\r\n<div mat-dialog-content>\r\n  <p>Se cotiza a: {{data.precio}}</p>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancelar</button>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Continuar</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cotiza_cotiza_component__ = __webpack_require__("../../../../../src/app/layout/cotiza/cotiza.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', redirectTo: 'inicio' },
            { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
            { path: 'autos', loadChildren: './autos/autos.module#AutosModule' },
            { path: 'casa', loadChildren: './casa/casa.module#CasaModule' },
            { path: 'about', loadChildren: './about/about.module#AboutModule' },
            { path: 'contacto', loadChildren: './hdicontigo/hdicontigo.module#HdicontigoModule' },
            { path: 'siniestro', loadChildren: './siniestro/siniestro.module#SiniestroModule' }
            //{path:'**', loadChildren:'not-found'}
        ]
    }, {
        path: 'cotiza',
        component: __WEBPACK_IMPORTED_MODULE_3__cotiza_cotiza_component__["a" /* CotizaComponent */]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /*@import \"node_modules/bootstrap/dist/css/bootstrap.min.css\";*/\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\r\n<app-navbar></app-navbar>\r\n<section>\r\n    <router-outlet></router-outlet>\r\n</section>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__ = __webpack_require__("../../../../../src/app/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/layout/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cotiza_cotiza_component__ = __webpack_require__("../../../../../src/app/layout/cotiza/cotiza.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { InicioComponent } from './inicio/inicio.component'




var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__["a" /* LayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["D" /* MatStepperModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__cotiza_cotiza_component__["b" /* DialogOverview */], __WEBPACK_IMPORTED_MODULE_9__cotiza_cotiza_component__["a" /* CotizaComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_9__cotiza_cotiza_component__["a" /* CotizaComponent */], __WEBPACK_IMPORTED_MODULE_9__cotiza_cotiza_component__["b" /* DialogOverview */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map