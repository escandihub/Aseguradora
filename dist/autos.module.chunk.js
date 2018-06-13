webpackJsonp(["autos.module"],{

/***/ "../../../../../src/app/layout/autos/autos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autos_component__ = __webpack_require__("../../../../../src/app/layout/autos/autos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__autos_component__["a" /* AutosComponent */]
    }
];
var AutosRoutingModule = /** @class */ (function () {
    function AutosRoutingModule() {
    }
    AutosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], AutosRoutingModule);
    return AutosRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/autos/autos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auto img\r\n{\r\n  margin-left: auto;\r\n\tmargin-right: auto;\r\n  display: block;\r\n  height: 100px;\r\n\r\n}\r\n.auto{\r\n  height: auto;  \r\n}\r\n#perro{\r\n  margin-left: auto;\r\n\tmargin-right: auto;\r\n  display: block;\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n.container-fluid {\r\n  padding: 60px 50px;\r\n}\r\n.container-fluid\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;  \r\n  \r\n}\r\np{\r\n  font-size: 20px;\r\n}\r\n.auto img{\r\n  height: auto;\r\n  width: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/autos/autos.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid\">\n    <img src=\"../../../assets/img/autos/auto.PNG\" id=\"perro\">    \n  </div>\n\n  <div class=\"auto\" style=\"text-align: center\">\n    <h2>Con nuestras <strong style=\"color: green\">coberturas y beneficios</strong><br>podrás estar tranquilo, tengas o no un accidente</h2>\n  </div>\n</header>\n\n<div class=\"container\" >    \n  <img src=\"../../../assets/img/autos/choque.png\" class=\"img-fluid\">    \n</div>\n\n<h4 style=\"text-align: center\"><strong>¿Eres de los que en verdad le importa su auto<br> y quieres beneficios extra?</strong><h1 style=\"color: green\">Conoce nuestros Módulos</h1></h4><hr>\n    \n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <img src=\"../../../assets/img/autos/auto1.jpg\" class=\"img-fluid\">\n    </div>\n  \n    <div class=\"col-6\">\n      <br><br><br><br>\n      <img src=\"../../../assets/img/autos/auto1_2.png\"><strong style=\"font-size: 30px; color: green\">Amante de los autos</strong> <br>\n      <strong><h2><strong>¿Te encanta tener tu auto <br>en óptimas condiciones?</strong></h2></strong>\n      <p style=\"text-align: left\">Obtén encerado estético, reparación en agencia, <br>reposición de auto partes, entre otros beneficios</p>\n    </div>\n  </div>\n</div>\n  \n  \n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-6\" style=\"text-align: right\">\n      <br><br><br><br>\n      <img src=\"../../../assets/img/autos/auto2_2.png\"><strong style=\"font-size: 30px; color: green\">Auto Siempre</strong> <br>\n      <strong><h2><strong>¿Siempre estás en movimiento?</strong></h2></strong>\n      <p>Obtén auto sustituto, asistencia vial sin límites,<br>Check Up de seguridad, entre otros beneficios</p>            \n    </div>\n    \n    <div class=\"col-6\">\n      <img src=\"../../../assets/img/autos/auto2.jpg\" class=\"img-fluid\">\n    </div>\n  </div>\n</div>\n\n\n<div class=\"auto\" style=\"text-align: center; background-color: #F2F2F2\">\n  <h2>¿Ya eres cliente<strong style=\"color: rgb(109, 167, 109)\"> HDI?</strong></h2>\n  <a class=\"btn btn-success\" href=\"#\" role=\"button\"><strong>Inicia sesión</strong></a><br><br>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-6\" style=\"text-align: right\">\n      <br><br><br><br>\n      <h2>¿Estás a punto de <br><strong style=\"font-size: 30px; color: green\">comprar auto?</strong> <br></h2>\n      <p>Nadie te ofrecerá tanto por menos, él merece<br>\n                  conservar su valor desde que<br>\n                  llega a tus manos, ¡Protégelo!<br>\n    </div>\n    \n    <div class=\"col-6\">\n      <img src=\"../../../assets/img/autos/auto3.png\" class=\"img-fluid\">\n    </div>\n  </div>\n</div>\n      \n\n<div class=\"auto\" style=\"text-align: center; background-color: #F2F2F2\">\n  <h2>Aprovecha tu seguro <strong style=\"color: green\">sin chocar</strong></h2>            \n  <a class=\"btn btn-success\" href=\"#\" role=\"button\"><strong>Contrátalo ahora</strong></a><br><br>\n</div><br><br>"

/***/ }),

/***/ "../../../../../src/app/layout/autos/autos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosComponent; });
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

var AutosComponent = /** @class */ (function () {
    function AutosComponent() {
    }
    AutosComponent.prototype.ngOnInit = function () {
    };
    AutosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-autos',
            template: __webpack_require__("../../../../../src/app/layout/autos/autos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/autos/autos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AutosComponent);
    return AutosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/autos/autos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosModule", function() { return AutosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autos_routing_module__ = __webpack_require__("../../../../../src/app/layout/autos/autos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autos_component__ = __webpack_require__("../../../../../src/app/layout/autos/autos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AutosModule = /** @class */ (function () {
    function AutosModule() {
    }
    AutosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__autos_routing_module__["a" /* AutosRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__autos_component__["a" /* AutosComponent */]]
        })
    ], AutosModule);
    return AutosModule;
}());



/***/ })

});
//# sourceMappingURL=autos.module.chunk.js.map