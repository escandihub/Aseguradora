webpackJsonp(["inicio.module.0"],{

/***/ "../../../../../src/app/dashboard/cliente/inicio/inicio-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/inicio/inicio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__inicio_component__["a" /* InicioComponent */]
    }
];
var InicioRoutingModule = /** @class */ (function () {
    function InicioRoutingModule() {
    }
    InicioRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], InicioRoutingModule);
    return InicioRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n      <mat-card class=\"card-widget mat-teal\">\r\n        <div mat-card-widget>\r\n          <div mat-card-float-icon>\r\n            <mat-icon>book</mat-icon>\r\n          </div>\r\n          <div class=\"pl-0\">\r\n            <h2 mat-card-widget-title>103</h2>\r\n            <p>Cantidad de pólizas contratadas</p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n      <mat-card class=\"card-widget mat-purple\">\r\n        <div mat-card-widget>\r\n          <div mat-card-float-icon>\r\n            <mat-icon>phone</mat-icon>\r\n          </div>\r\n          <div class=\"pl-0\">\r\n            <h2 mat-card-widget-title>961-12-13-345</h2>\r\n            <p>Número de la empresa</p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n   </div>\r\n   \r\n  \r\n  <div fxLayout=\"row wrap\">\r\n      <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n          <mat-card>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          Datos personales &nbsp; <mat-icon>account_circle</mat-icon>\r\n          <span fxFlex></span>\r\n          <button mat-icon-button mat-button-sm [matMenuTriggerFor]=\"card1\" aria-label=\"Open card menu\">\r\n            <span style=\"color:blue\">Editar</span>\r\n          </button>\r\n        </mat-card-subtitle>\r\n        \r\n              <mat-card-content>\r\n         \r\n        </mat-card-content>\r\n          </mat-card>\r\n      </div>\r\n      <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n          <mat-card>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          Yearly Sales &nbsp; <span class=\"font-weight-bold mat-text-warn\">-46,68</span>\r\n          <span fxFlex></span>\r\n          <button mat-icon-button mat-button-sm [matMenuTriggerFor]=\"card2\" aria-label=\"Open card menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n        </mat-card-subtitle>\r\n        <mat-menu #card2=\"matMenu\" x-position=\"before\">\r\n          <button mat-menu-item>\r\n            <mat-icon>settings</mat-icon>\r\n            Settings\r\n          </button>\r\n          <button mat-menu-item>\r\n            <mat-icon>more</mat-icon>\r\n            View More\r\n          </button>\r\n          <button mat-menu-item>\r\n            <mat-icon>notifications_off</mat-icon>\r\n            Disable notifications\r\n          </button>\r\n          <button mat-menu-item>\r\n            <mat-icon>exit_to_app</mat-icon>\r\n            Remove Panel\r\n          </button>\r\n        </mat-menu>\r\n              <mat-card-content>\r\n         \r\n        </mat-card-content>\r\n          </mat-card>\r\n      </div>\r\n      <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n          <mat-card>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          Sales Report &nbsp; <span class=\"font-weight-bold mat-text-accent\">+2,50%</span>\r\n          <span fxFlex></span>\r\n          <button mat-icon-button mat-button-sm [matMenuTriggerFor]=\"card3\" aria-label=\"Open card menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n        </mat-card-subtitle>\r\n        <mat-menu #card3=\"matMenu\" x-position=\"before\">\r\n          <button mat-menu-item>\r\n            <mat-icon>settings</mat-icon>\r\n            Settings\r\n          </button>\r\n          <button mat-menu-item>\r\n            <mat-icon>more</mat-icon>\r\n            View More\r\n          </button>\r\n          <button mat-menu-item>\r\n            <mat-icon>notifications_off</mat-icon>\r\n            Disable notifications\r\n          </button>\r\n          <button mat-menu-item>\r\n            <mat-icon>exit_to_app</mat-icon>\r\n            Remove Panel\r\n          </button>\r\n        </mat-menu>\r\n              <mat-card-content>\r\n         \r\n        </mat-card-content>\r\n          </mat-card>\r\n      </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/inicio/inicio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
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

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__("../../../../../src/app/dashboard/cliente/inicio/inicio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/cliente/inicio/inicio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/inicio/inicio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/cliente/inicio/inicio-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InicioModule = /** @class */ (function () {
    function InicioModule() {
    }
    InicioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__inicio_routing_module__["a" /* InicioRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["D" /* MatStepperModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__inicio_component__["a" /* InicioComponent */]]
        })
    ], InicioModule);
    return InicioModule;
}());



/***/ })

});
//# sourceMappingURL=inicio.module.0.chunk.js.map