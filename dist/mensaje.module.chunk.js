webpackJsonp(["mensaje.module"],{

/***/ "../../../../../src/app/dashboard/cliente/mensaje/mensaje-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mensaje_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/mensaje/mensaje.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__mensaje_component__["a" /* MensajeComponent */]
    }
];
var MensajeRoutingModule = /** @class */ (function () {
    function MensajeRoutingModule() {
    }
    MensajeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], MensajeRoutingModule);
    return MensajeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/mensaje/mensaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <form>\r\n        <mat-form-field >\r\n            <mat-label>Sugerencia</mat-label>\r\n            <textarea  matInput placeholder=\"Sugerencia\" rows=\"10\" required></textarea>\r\n            <mat-icon matSuffix style=\"color: green\">message</mat-icon>                          \r\n          </mat-form-field>\r\n          <div>\r\n              <button mat-raised-button color=\"primary\" type=\"submit\">Enviar</button>\r\n          </div>                        \r\n        </form> \r\n        \r\n        \r\n\r\n\r\n       \r\n          \r\n      </div>\r\n    "

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/mensaje/mensaje.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/mensaje/mensaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajeComponent; });
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

var MensajeComponent = /** @class */ (function () {
    function MensajeComponent() {
    }
    MensajeComponent.prototype.ngOnInit = function () {
    };
    MensajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mensaje',
            template: __webpack_require__("../../../../../src/app/dashboard/cliente/mensaje/mensaje.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/cliente/mensaje/mensaje.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MensajeComponent);
    return MensajeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/mensaje/mensaje.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeModule", function() { return MensajeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mensaje_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/mensaje/mensaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mensaje_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/cliente/mensaje/mensaje-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MensajeModule = /** @class */ (function () {
    function MensajeModule() {
    }
    MensajeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__mensaje_routing_module__["a" /* MensajeRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mensaje_component__["a" /* MensajeComponent */]]
        })
    ], MensajeModule);
    return MensajeModule;
}());



/***/ })

});
//# sourceMappingURL=mensaje.module.chunk.js.map