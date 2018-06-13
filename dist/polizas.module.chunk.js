webpackJsonp(["polizas.module"],{

/***/ "../../../../../src/app/dashboard/cliente/polizas/polizas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolizasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polizas_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/polizas/polizas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__polizas_component__["a" /* PolizasComponent */]
    }
];
var PolizasRoutingModule = /** @class */ (function () {
    function PolizasRoutingModule() {
    }
    PolizasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], PolizasRoutingModule);
    return PolizasRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/polizas/polizas.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center none\"  style=\"width: 100%\" >\r\n<table id=\"customers\" style=\"text-align: center\">\r\n        <thead>\r\n            <tr>     \r\n                <th>Número de póliza</th>\r\n                <th>Tipo de seguro</th>\r\n                <th>Vigencia</th>\r\n                <th>Fecha de contratación</th>\r\n                <th>Agente</th>\r\n                <th>Acciones</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>                            \t\t\t\t\r\n            <tr>   \r\n                <td>Martin Blank</td>\r\n                <td>martinblank@mail.com</td>\r\n                <td>Via Monte Bianco 34, Turin, Italy</td>\r\n                <td>(480) 631-2097</td>\r\n                <td>(480) 631-2097</td>\r\n                <td><mat-icon>visibility</mat-icon></td>\r\n            </tr> \r\n        </tbody>\r\n      </table>\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/polizas/polizas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#customers {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%; }\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px; }\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n#customers tr:hover {\n  background-color: #ddd; }\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: #4CAF50;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/polizas/polizas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolizasComponent; });
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

var PolizasComponent = /** @class */ (function () {
    function PolizasComponent() {
    }
    PolizasComponent.prototype.ngOnInit = function () {
    };
    PolizasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-polizas',
            template: __webpack_require__("../../../../../src/app/dashboard/cliente/polizas/polizas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/cliente/polizas/polizas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PolizasComponent);
    return PolizasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/cliente/polizas/polizas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolizasModule", function() { return PolizasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polizas_component__ = __webpack_require__("../../../../../src/app/dashboard/cliente/polizas/polizas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polizas_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/cliente/polizas/polizas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PolizasModule = /** @class */ (function () {
    function PolizasModule() {
    }
    PolizasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__polizas_routing_module__["a" /* PolizasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
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
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatStepperModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__polizas_component__["a" /* PolizasComponent */]]
        })
    ], PolizasModule);
    return PolizasModule;
}());



/***/ })

});
//# sourceMappingURL=polizas.module.chunk.js.map