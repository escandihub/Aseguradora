webpackJsonp(["casa.module"],{

/***/ "../../../../../src/app/layout/casa/casa-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__casa_component__ = __webpack_require__("../../../../../src/app/layout/casa/casa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__casa_component__["a" /* CasaComponent */]
    }
];
var CasaRoutingModule = /** @class */ (function () {
    function CasaRoutingModule() {
    }
    CasaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], CasaRoutingModule);
    return CasaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/casa/casa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auto img\r\n{\r\n  margin-left: auto;\r\n\tmargin-right: auto;\r\n  display: block;\r\n  height: 100px;\r\n\r\n}\r\n.auto{\r\n  height: auto; \r\n}\r\n.container-fluid {\r\n  padding: 60px 50px;\r\n}\r\n.container-fluid\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;  \r\n  \r\n}\r\np{\r\n  font-size: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/casa/casa.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid\">\n    <img src=\"../../../assets/img/casa/casa.svg\" class=\"img-fluid\">        \n  </div>\n  \n  <div class=\"auto\" style=\"text-align: center\">\n    <h2>No importa si <strong style=\"color: green\">rentas</strong> o eres<strong style=\"color: green\"> dueño</strong></h2>\n    <p>Tu casa estará protegida por menos de<br>\n      lo que pagas por tu seguro de auto</p>\n  </div>\n</header>\n\n<div class=\"container\" >    \n  <img src=\"../../../assets/img/casa/casa2.png\" class=\"img-fluid\">    \n</div>\n<br><br>\n<h4 style=\"text-align: center\">Con las coberturas de<strong style=\"color: green\"> HDI en mi Casa</strong> no tienes que <br>preocuparte por perder lo que más quieres</h4>\n\n<div class=\"container\" >    \n  <img src=\"../../../assets/img/casa/casa3.png\" class=\"img-fluid\">    \n</div>\n<br><br> \n\n<div class=\"auto\" style=\"text-align: center; background-color: #F2F2F2\"><br><br>\n  <h2>Contarás con <strong style=\"color: green\">más de 13 coberturas</strong></h2><br><br>\n</div>\n<br><br>\n\n<div class=\"auto\" style=\"text-align: center; background-color: #F2F2F2\"><br><br>\n  <h2>Sé el primero de tus amigos<br> en tener <strong style=\"color: green\">HDI en mi casa</strong></h2>\n  <a class=\"btn btn-success\" href=\"#\" role=\"button\"><strong>Cotiza ahora</strong></a><br><br>\n</div>\n<br>\n\n<div class=\"auto\" style=\"text-align: center\">\n  <h2>¿Eres de los que en verdad le importa su casa <br>y quieres beneficios extra?  <strong style=\"color: green\">Conoce nuestros Módulos</strong></h2>    \n</div>\n        \n<div class=\"container-fluid\"  style=\"text-align: right\" style=\"text-align: right\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <br><br><br><br>\n      <img src=\"../../../assets/img/casa/casa5.svg\" height=\"68px\" width=\"46px\"><strong style=\"font-size: 30px; color: green\">A Donde Vaya</strong> <br>\n      <strong><h2><strong>Dentro o fuera de tu casa<br>tus cosas estarán protegidas</strong></h2></strong>\n      <p style=\"text-align: right\">Tu celular, laptop y otras pertenencias estarán<br>protegidas en cualquier lugar, además contarás<br>con asistencia en viajes y viajes ejecutivos</p>            \n    </div>\n    \n    <div class=\"col-6\">\n      <img src=\"../../../assets/img/casa/casa4.jpg\" class=\"img-fluid\">\n    </div>\n  </div>\n</div>   \n\n<div class=\"container-fluid \">\n  <div class=\"row\">\n    <div class=\"col-6\" style=\"text-align: left\">\n      <img src=\"../../../assets/img/casa/casa6.jpg\" class=\"img-fluid\">            \n    </div>\n\n    <div class=\"col-6\">\n      <br><br><br><br>\n      <img src=\"../../../assets/img/casa/casa7.svg\" height=\"68px\" width=\"46px\"><strong style=\"font-size: 30px; color: green\">Me Siento Bien</strong> <br>            \n      <strong><h2><strong>Nos preocupamos por tu<br>bienestar y el de tu familia</strong></h2></strong>\n      <p style=\"text-align: left\">No importa si el accidente pasó fuera de tu casa,<br>tu familia estará protegida, además contarás con<br>asistencia médica y cobertura dental</p>                \n    </div>\n  </div>\n</div>  \n\n<div class=\"auto\" style=\"text-align: center; background-color: #F2F2F2\"><br><br>\n  <img src=\"../../../assets/img/casa/cotiza.png\">\n  <h2>Protege tu hogar con<strong style=\"color: green\">HDI en mi casa</strong></h2>\n  <a class=\"btn btn-success\" href=\"#\" role=\"button\"><strong>Cotiza ahora</strong></a><br><br>\n</div>\n<br>\n\n<div class=\"auto\" style=\"text-align: center\">\n    <h2>¿Ya eres cliente <strong style=\"color: green\">HDI</strong>?</h2>    \n    <a class=\"btn btn-success\" href=\"#\" role=\"button\"><strong>Inicia sesión</strong></a><br><br>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/casa/casa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasaComponent; });
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

var CasaComponent = /** @class */ (function () {
    function CasaComponent() {
    }
    CasaComponent.prototype.ngOnInit = function () {
    };
    CasaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-casa',
            template: __webpack_require__("../../../../../src/app/layout/casa/casa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/casa/casa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CasaComponent);
    return CasaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/casa/casa.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasaModule", function() { return CasaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__casa_routing_module__ = __webpack_require__("../../../../../src/app/layout/casa/casa-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__casa_component__ = __webpack_require__("../../../../../src/app/layout/casa/casa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CasaModule = /** @class */ (function () {
    function CasaModule() {
    }
    CasaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__casa_routing_module__["a" /* CasaRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__casa_component__["a" /* CasaComponent */]]
        })
    ], CasaModule);
    return CasaModule;
}());



/***/ })

});
//# sourceMappingURL=casa.module.chunk.js.map