webpackJsonp(["hdicontigo.module"],{

/***/ "../../../../../src/app/layout/hdicontigo/hdicontigo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HdicontigoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hdicontigo_component__ = __webpack_require__("../../../../../src/app/layout/hdicontigo/hdicontigo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__hdicontigo_component__["a" /* HdicontigoComponent */]
    }
];
var HdicontigoRoutingModule = /** @class */ (function () {
    function HdicontigoRoutingModule() {
    }
    HdicontigoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], HdicontigoRoutingModule);
    return HdicontigoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/hdicontigo/hdicontigo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auto img\r\n{\r\n  margin-left: auto;\r\n\tmargin-right: auto;\r\n  display: block;\r\n  height: 100px;\r\n\r\n}\r\n.auto{\r\n  height: auto; \r\n}\r\n.container-fluid {\r\n  padding: 60px 50px;\r\n}\r\n.container-fluid\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;  \r\n  \r\n}\r\np{\r\n  font-size: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/hdicontigo/hdicontigo.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container-fluid\">    \r\n  </div>\r\n  <div class=\"auto\" style=\"text-align: center\">\r\n    <h2>Queremos <strong style=\"color: green\">escucharte</strong></h2>\r\n    <p>Tu opinión es muy importante para nosotros, elige la opción adecuada y envíanos tu<br>\r\n      mensaje, nosotros nos pondremos en contacto contigo</p>\r\n  </div>\r\n</header><br><br>\r\n  \r\n<div class=\"container marketing\">\r\n    <div class=\"row\" style=\"text-align: center\">\r\n      <div class=\"col\">\r\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/contacto/hdi1.png\" alt=\"Generic placeholder image\" width=\"120\" height=\"120\">\r\n        <h5>Sugerencias</h5>\r\n        <p>Dejanos algún mensaje o <br>sugerencia, estamos<br> interesados en tu opinión</p>\r\n        <a href=\"#\"><h6 style=\"color: green\">Llenar reporte</h6></a>\r\n      </div><!-- /.col-lg-4 -->\r\n    \r\n      <div class=\"col\" layout-align=\"center center\">\r\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/contacto/hdi2.png\" alt=\"Generic placeholder image\" width=\"120\" height=\"120\">\r\n        <h5>¿Están fallando?</h5>\r\n        <p>Reporta cualquier incidente<br> durante el uso de<br> alguno de nuestros servicios</p>\r\n        <a href=\"#\"><h6 style=\"color: green\">Llenar reporte</h6></a>\r\n      </div><!-- /.col-lg-4 -->\r\n      \r\n      <div class=\"col\">\r\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/contacto/hdi3.png\" alt=\"Generic placeholder image\" width=\"120\" height=\"120\">\r\n        <h5>Laboral</h5>\r\n        <p>Reporta cualquier<br> irregularidad laborando en<br> HDI Seguros México</p>       \r\n        <a href=\"#\"><h6 style=\"color: green\">Llenar reporte</h6></a>\r\n      </div>  \r\n\r\n      <div class=\"col\">\r\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/contacto/hdi4.png\" alt=\"Generic placeholder image\" width=\"120\" height=\"120\">\r\n        <h5>Fraude</h5>\r\n        <p>Reporta cualquier situación<br> de fraude, corrupción o <br>ilegalidad que hayas<br> presenciado</p>       \r\n        <a href=\"#\"><h6 style=\"color: green\">Llenar reporte</h6></a>\r\n      </div>  \r\n    </div>\r\n    </div>\r\n    <br><br>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/hdicontigo/hdicontigo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HdicontigoComponent; });
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

var HdicontigoComponent = /** @class */ (function () {
    function HdicontigoComponent() {
    }
    HdicontigoComponent.prototype.ngOnInit = function () {
    };
    HdicontigoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hdicontigo',
            template: __webpack_require__("../../../../../src/app/layout/hdicontigo/hdicontigo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/hdicontigo/hdicontigo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HdicontigoComponent);
    return HdicontigoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/hdicontigo/hdicontigo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HdicontigoModule", function() { return HdicontigoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hdicontigo_routing_module__ = __webpack_require__("../../../../../src/app/layout/hdicontigo/hdicontigo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hdicontigo_component__ = __webpack_require__("../../../../../src/app/layout/hdicontigo/hdicontigo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HdicontigoModule = /** @class */ (function () {
    function HdicontigoModule() {
    }
    HdicontigoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__hdicontigo_routing_module__["a" /* HdicontigoRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__hdicontigo_component__["a" /* HdicontigoComponent */]]
        })
    ], HdicontigoModule);
    return HdicontigoModule;
}());



/***/ })

});
//# sourceMappingURL=hdicontigo.module.chunk.js.map