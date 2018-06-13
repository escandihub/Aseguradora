webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../cliente/inicio/inicio.module": [
		"../../../../../src/app/dashboard/cliente/inicio/inicio.module.ts",
		"inicio.module.0"
	],
	"./about/about.module": [
		"../../../../../src/app/layout/about/about.module.ts",
		"about.module"
	],
	"./autos/autos.module": [
		"../../../../../src/app/layout/autos/autos.module.ts",
		"autos.module"
	],
	"./casa/casa.module": [
		"../../../../../src/app/layout/casa/casa.module.ts",
		"casa.module"
	],
	"./dashboard/cliente/cliente.module": [
		"../../../../../src/app/dashboard/cliente/cliente.module.ts",
		"cliente.module"
	],
	"./hdicontigo/hdicontigo.module": [
		"../../../../../src/app/layout/hdicontigo/hdicontigo.module.ts",
		"hdicontigo.module"
	],
	"./inicio/inicio.module": [
		"../../../../../src/app/layout/inicio/inicio.module.ts",
		"inicio.module"
	],
	"./layout/layout.module": [
		"../../../../../src/app/layout/layout.module.ts",
		"layout.module"
	],
	"./mensaje/mensaje.module": [
		"../../../../../src/app/dashboard/cliente/mensaje/mensaje.module.ts",
		"mensaje.module"
	],
	"./polizas/polizas.module": [
		"../../../../../src/app/dashboard/cliente/polizas/polizas.module.ts",
		"polizas.module"
	],
	"./registrarpoliza/registrarpoliza.module": [
		"../../../../../src/app/dashboard/cliente/registrarpoliza/registrarpoliza.module.ts",
		"registrarpoliza.module"
	],
	"./session/session.module": [
		"../../../../../src/app/session/session.module.ts",
		"session.module"
	],
	"./siniestro/siniestro.module": [
		"../../../../../src/app/layout/siniestro/siniestro.module.ts",
		"siniestro.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_loading_bar_router__ = __webpack_require__("../../../../@ngx-loading-bar/router/@ngx-loading-bar/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes__ = __webpack_require__("../../../../../src/app/componentes/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//import  de los modulos de la carpeta componentes

//import  de los modulos de la carpeta layout
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            //exports: [MatSidenavModule]
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__componentes__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_17__componentes__["b" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_17__componentes__["c" /* SidebarComponent */]
                //CotizaComponent  //cotizacion 
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                //    ComponetesModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9__ngx_loading_bar_router__["a" /* LoadingBarRouterModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'YOURAPIKEY' }),
                __WEBPACK_IMPORTED_MODULE_10_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentes_auth_auth_component__ = __webpack_require__("../../../../../src/app/componentes/auth/auth.component.ts");
//import { AdminLayoutComponent, AuthLayoutComponent } from './core';


var AppRoutes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'dashboard/cliente', loadChildren: './dashboard/cliente/cliente.module#ClienteModule' },
    {
        path: 'menu',
        component: __WEBPACK_IMPORTED_MODULE_0__componentes_menu_menu_component__["a" /* MenuComponent */],
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__componentes_auth_auth_component__["a" /* AuthComponent */],
        children: [{
                path: 'session',
                loadChildren: './session/session.module#SessionModule'
            }]
    }, {
        path: '**',
        redirectTo: 'session/404'
    }
];


/***/ }),

/***/ "../../../../../src/app/componentes/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <router-outlet></router-outlet>\n  </mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/componentes/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .mat-drawer-content {\n  padding: 0; }\n\n.mat-drawer-container {\n  z-index: 1000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/componentes/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/componentes/sidebar/sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebar_sidebar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__menu_menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__ = __webpack_require__("../../../../../src/app/componentes/auth/auth.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a"]; });





/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"main-header\" color=\"primary\">\n          <span>Custom Toolbar</span>\n                <button  mat-button class=\"ml-xs\">\n                    <a href=\"javascrip(void(0))\"></a>\n                    <mat-icon>exit_to_app</mat-icon>\n                        Sign Out\n                </button>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.toggleNotificationSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "toggleNotificationSidenav", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"app-inner\">\r\n       <mat-sidenav></mat-sidenav>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/componentes/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.showFiller = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/componentes/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/componentes/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map