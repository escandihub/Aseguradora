webpackJsonp(["cliente.module"],{

/***/ "../../../../../src/app/dashboard/cliente/cliente-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/cliente.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__cliente_component__["a" /* ClienteComponent */],
        children: [
            //{path:''}
            { path: 'inicioo', redirectTo: '' },
            { path: '', loadChildren: '../cliente/inicio/inicio.module#InicioModule' },
            { path: 'registrar_poliza', loadChildren: './registrarpoliza/registrarpoliza.module#RegistrarpolizaModule' },
            { path: 'mis_polizas', loadChildren: './polizas/polizas.module#PolizasModule' },
            { path: 'sugerencias', loadChildren: './mensaje/mensaje.module#MensajeModule' }
        ]
    }
];
var ClienteRoutingModule = /** @class */ (function () {
    function ClienteRoutingModule() {
    }
    ClienteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], ClienteRoutingModule);
    return ClienteRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<mat-drawer-container class=\"example-container\">\r\n  <mat-drawer mode=\"side\" opened=\"true\" class=\"prueba\">\r\n    <mat-nav-list style=\"width: 100%;\">\r\n      <a mat-list-item [routerLink]=\"['inicioo']\" routerLinkActive=\"active-link\">\r\n        <mat-icon>home</mat-icon>  \r\n          <span class=\"flex2\"></span>\r\n          <span>Inicio</span>\r\n      </a>\r\n      <a mat-list-item [routerLink]=\"['registrar_poliza']\">\r\n        <mat-icon style=\"color:red\">create</mat-icon>  \r\n        <span class=\"flex2\"></span>\r\n        <span>Registrar póliza</span>\r\n      </a>\r\n      <a mat-list-item [routerLink]=\"['mis_polizas']\">\r\n        <mat-icon style=\"color:blue\">visibility</mat-icon>  \r\n        <span class=\"flex2\"></span>\r\n        <span>Ver Pólizas</span>\r\n      </a>\r\n      <a mat-list-item [routerLink]=\"['sugerencias']\">\r\n        <mat-icon style=\"color:green\">message</mat-icon>  \r\n        <span class=\"flex2\"></span>\r\n        <span>Enviar sugerencia</span>\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-drawer>\r\n  <mat-drawer-content >   \r\n    <mat-card style=\"background-color: white;\" class=\"tam-card\">                        \r\n      <mat-toolbar>Bienvenido</mat-toolbar>                             \r\n      <mat-card-content>                    \r\n        <router-outlet></router-outlet>                                                                  \r\n      </mat-card-content>                     \r\n    </mat-card>\r\n  </mat-drawer-content>        \r\n</mat-drawer-container>\r\n\r\n\r\n    \r\n     "

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/cliente.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0; }\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.prueba {\n  width: 250px;\n  min-width: 250px;\n  min-height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.tam-card {\n  max-width: 100%;\n  min-height: 100%; }\n\n.example-container2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-container2 > * {\n  width: 100%; }\n\n.flex2 {\n  margin-right: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteComponent; });
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

var ClienteComponent = /** @class */ (function () {
    function ClienteComponent() {
    }
    ClienteComponent.prototype.ngOnInit = function () {
    };
    ClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cliente',
            template: __webpack_require__("../../../../../src/app/dashboard/cliente/cliente.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/cliente/cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/cliente.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModule", function() { return ClienteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cliente_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/cliente/cliente-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cliente_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/dashboard/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__side_side_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/side/side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ClienteModule = /** @class */ (function () {
    function ClienteModule() {
    }
    ClienteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__cliente_routing_module__["a" /* ClienteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["D" /* MatStepperModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__cliente_component__["a" /* ClienteComponent */], __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_6__side_side_component__["a" /* SideComponent */]]
        })
    ], ClienteModule);
    return ClienteModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/side/side.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/side/side.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/side/side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideComponent; });
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

var SideComponent = /** @class */ (function () {
    function SideComponent() {
    }
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side',
            template: __webpack_require__("../../../../../src/app/dashboard/cliente/side/side.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/cliente/side/side.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideComponent);
    return SideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <i class=\"flex\"></i>\r\n    <button [matMenuTriggerFor]=\"user\" mat-icon-button class=\"ml-xs\">\r\n        <mat-icon>person</mat-icon>\r\n    </button>    \r\n      <mat-menu #user=\"matMenu\" x-position=\"before\">              \r\n        <button mat-menu-item>\r\n          <mat-icon>exit_to_app</mat-icon>\r\n          Sign Out\r\n        </button>\r\n      </mat-menu>          \r\n</mat-toolbar>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/navbar/navbar.component.ts":
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
            template: __webpack_require__("../../../../../src/app/dashboard/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ })

});
//# sourceMappingURL=cliente.module.chunk.js.map