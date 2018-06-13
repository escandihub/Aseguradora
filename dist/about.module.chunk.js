webpackJsonp(["about.module"],{

/***/ "../../../../../src/app/layout/about/about-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/layout/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]
    }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auto img\r\n{\r\n  margin-left: auto;\r\n\tmargin-right: auto;\r\n  display: block;\r\n  height: 100px;\r\n\r\n}\r\n.auto{\r\n  height: auto;  \r\n}\r\n#perro{\r\n  margin-left: auto;\r\n\tmargin-right: auto;\r\n  display: block;\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n.container-fluid\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;  \r\n  padding: 60px 50px;\r\n}\r\np{\r\n  font-size: 20px;\r\n}\r\n.auto img{\r\n  height: auto;\r\n  width: auto;\r\n}\r\n.center {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid\" style=\"text-align: center\">    \n      <p><img src=\"../../../assets/img/about/about1.png\" class=\"img-fluid\"></p>\n  </div>    \n  <div class=\"auto\" style=\"text-align: center\">\n    <h2>Somos el único seguro que te protegerá <br>a ti <strong style=\"color: green\">y a todas tus cosas</strong></h2>          \n  </div>  \n  <p style=\"text-align: center\">Tú, tu familia, tu auto, tu casa y tu empresa<br> siempre estarán protegidos</p>\n</header>\n\n<div class=\"container\" >    \n    <img src=\"../../../assets/img/about/about2.png\" class=\"img-fluid\">    \n</div>  <br><br>\n                  \n  \n  \n<div class=\"container\" style=\"text-align: center\">\n  <h2>¿Qué es lo <strong style=\"color: green\">que  nos motiva?</strong></h2>\n  <p>Queremos ser diferentes, por eso nos enfocamos en crear<br> los mejores productos para ti</p>\n</div>\n\n\n  \n<div class=\"container marketing\">\n    <div class=\"row\" style=\"text-align: center\">\n      <div class=\"col-lg-4\">\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/about/eco.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n        <h5>Eco-Ajustador</h5>\n        <p>Creamos una manera ecológica de<br>\n            atender accidentes automovilísticos<br>\n            más rápido</p>\n        \n      </div><!-- /.col-lg-4 -->\n    \n      <div class=\"col-lg-4\" layout-align=\"center center\">\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/about/mod.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n        <h5>Módulos</h5>\n        <p>Creamos beneficios extra para que<br>\n            puedas usar tu seguro sin<br>\n            necesidad de un accidente</p>\n        \n      </div><!-- /.col-lg-4 -->\n      \n      <div class=\"col-lg-4\">\n        <img class=\"rounded-circle center\" src=\"../../../assets/img/about/pymes.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n        <h5>Innovación</h5>\n        <p>Creamos productos dirigidos para ti,<br>\n            te escuchamos y conocemos lo<br>\n            que necesitas</p>       \n      </div>  \n    </div>\n    </div>\n    <br><br>\n\n\n\n\n\n    <div class=\"container\" style=\"text-align: center\">\n        <h2><strong style=\"color: green\">Nuestra experiencia</strong></h2>\n        <p>Hemos estado creciendo mucho desde que llegamos a<br> México y vamos a continuar haciéndolo</p>\n      </div>\n      \n      \n        \n      <div class=\"container marketing\">\n          <div class=\"row\" style=\"text-align: center\">\n            <div class=\"col-lg-4\">\n              <img class=\"rounded-circle center\" src=\"../../../assets/img/about/ninio.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n              <h5>7 años en el mercado, <br> aún somos jóvenes</h5>                      \n            </div><!-- /.col-lg-4 -->\n          \n            <div class=\"col-lg-4\" layout-align=\"center center\">\n              <img class=\"rounded-circle center\" src=\"../../../assets/img/about/multitud.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n              <h5>Más de 600 mil de<br>asegurados y queremos más</h5>                        \n            </div><!-- /.col-lg-4 -->\n            \n            <div class=\"col-lg-4\">\n              <img class=\"rounded-circle center\" src=\"../../../assets/img/about/logros.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n              <h5>30 premios y no son<br>suficientes para nosotros</h5>                   \n            </div>  \n          </div>\n          </div>\n        \n          <br><br>\n          <div class=\"container\" style=\"text-align: center\">\n              <h2>Encuentra tu <strong style=\"color: green\">seguro HDI</strong> ideal</h2>\n              <p>De todos nuestros productos, seguro encuentras alguno<br> que se adapte a ti</p>\n            </div>\n                                    \n            <div class=\"container marketing\">\n                <div class=\"row\" style=\"text-align: center\">\n                  <div class=\"col-6\">\n                    <img class=\"rounded-circle center\" src=\"../../../assets/img/about/auto.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n                    <h5><strong style=\"color: green\">HDI </strong> en mi <strong style=\"color: green\">casa </strong> </h5>                      \n                  </div><!-- /.col-lg-4 -->\n                \n                  <div class=\"col-6\" layout-align=\"center center\">\n                    <img class=\"rounded-circle center\" src=\"../../../assets/img/about/casa.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n                    <h5><strong style=\"color: green\">HDI </strong> en mi <strong style=\"color: green\">auto </strong> </h5>                      \n                  </div><!-- /.col-lg-4 -->\n                  \n                  \n                </div>\n                </div>"

/***/ }),

/***/ "../../../../../src/app/layout/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/layout/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_routing_module__ = __webpack_require__("../../../../../src/app/layout/about/about-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__("../../../../../src/app/layout/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__about_routing_module__["a" /* AboutRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

});
//# sourceMappingURL=about.module.chunk.js.map