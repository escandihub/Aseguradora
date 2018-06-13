webpackJsonp(["siniestro.module"],{

/***/ "../../../../../src/app/layout/siniestro/siniestro-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiniestroRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__siniestro_component__ = __webpack_require__("../../../../../src/app/layout/siniestro/siniestro.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__siniestro_component__["a" /* SiniestroComponent */]
    }
];
var SiniestroRoutingModule = /** @class */ (function () {
    function SiniestroRoutingModule() {
    }
    SiniestroRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], SiniestroRoutingModule);
    return SiniestroRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/siniestro/siniestro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auto img\r\n{\r\n  margin-left: auto;\r\n\tmargin-right: auto;\r\n  display: block;\r\n  height: 100px;\r\n\r\n}\r\n.auto{\r\n  height: auto; \r\n}\r\n.container-fluid {\r\n  padding: 60px 50px;\r\n}\r\n.container-fluid\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;  \r\n  \r\n}\r\np{\r\n  font-size: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/siniestro/siniestro.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container-fluid\"  style=\"text-align: center\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <img src=\"../../../assets/img/siniestro/siniestro1.png\" class=\"img-fluid\">\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <br><br><br><br>            \r\n          <h2><strong>¿Qué hago en caso de<br> robo o accidente</strong></h2>\r\n          <p style=\"text-align: center\">¡Llámanos! Repórtalos de inmediato<br>\r\n          <strong style=\"color: green\">*HDI(434)</strong></p>\r\n          <p>¿Estás en casa?<br>\r\n            Marca sin costo al <strong style=\"color: green\">01 800 019 6000</strong><br>\r\n            Disponible las 24 horas y 365 días del año</p>\r\n        </div>\r\n        \r\n     \r\n      </div>\r\n    </div> \r\n</header> \r\n  \r\n<div class=\"container\" style=\"text-align: center\">\r\n  <h2> Te sugerimos <strong style=\"color: green\">seguir</strong> estos pasos</h2>     \r\n</div>\r\n                        \r\n<div class=\"container marketing\">\r\n    <div class=\"row\" style=\"text-align: center\">\r\n      <div class=\"col-lg-4\">\r\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/siniestro/siniestro2.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n        <h5>Tener tu póliza a la mano </h5>  \r\n        <p>Ubica tu número de póliza<br>\r\n            Consúltalo en HDI Contigo</p>                    \r\n      </div><!-- /.col-lg-4 -->\r\n    \r\n      <div class=\"col-lg-4\" layout-align=\"center center\">\r\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/siniestro/siniestro3.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n        <h5>¡No moverte! </h5>    \r\n        <p>Quédate en el lugar del accidente<br>\r\n            y mantén la calma</p>                  \r\n      </div><!-- /.col-lg-4 -->\r\n\r\n      <div class=\"col-lg-4\" layout-align=\"center center\">\r\n          <img class=\"rounded-circle center\" src=\"../../../assets/img/siniestro/siniestro4.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n          <h5>Espera al ajustador </h5>                      \r\n          <p>Evita hacer arreglos, nosotros<br>\r\n              resolveremos la situación</p>\r\n        </div><!-- /.col-lg-4 -->\r\n      \r\n      \r\n    </div>\r\n    </div><br><br>"

/***/ }),

/***/ "../../../../../src/app/layout/siniestro/siniestro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiniestroComponent; });
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

var SiniestroComponent = /** @class */ (function () {
    function SiniestroComponent() {
    }
    SiniestroComponent.prototype.ngOnInit = function () {
    };
    SiniestroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-siniestro',
            template: __webpack_require__("../../../../../src/app/layout/siniestro/siniestro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/siniestro/siniestro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiniestroComponent);
    return SiniestroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/siniestro/siniestro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiniestroModule", function() { return SiniestroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__siniestro_routing_module__ = __webpack_require__("../../../../../src/app/layout/siniestro/siniestro-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__siniestro_component__ = __webpack_require__("../../../../../src/app/layout/siniestro/siniestro.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SiniestroModule = /** @class */ (function () {
    function SiniestroModule() {
    }
    SiniestroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__siniestro_routing_module__["a" /* SiniestroRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__siniestro_component__["a" /* SiniestroComponent */]]
        })
    ], SiniestroModule);
    return SiniestroModule;
}());



/***/ })

});
//# sourceMappingURL=siniestro.module.chunk.js.map