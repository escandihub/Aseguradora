webpackJsonp(["inicio.module"],{

/***/ "../../../../../src/app/layout/inicio/inicio-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_component__ = __webpack_require__("../../../../../src/app/layout/inicio/inicio.component.ts");
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

/***/ "../../../../../src/app/layout/inicio/inicio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n/* Padding below the footer and lighter body text */\r\nbody {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    \r\n  }\r\n/* CUSTOMIZE THE CAROUSEL\r\n  -------------------------------------------------- */\r\n/* Carousel base class */\r\n.carousel {\r\n    margin-bottom: 4rem;\r\n  }\r\n/* Since positioning the image, we need to help out the caption */\r\n.carousel-caption {\r\n    z-index: 10;\r\n    bottom: 3rem;\r\n  }\r\n/* Declare heights because of positioning of img element */\r\n.carousel-item {\r\n    height: 32rem;\r\n    background-color:white;\r\n  }\r\n.carousel-item > img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    height: 32rem;\r\n  }\r\n/* MARKETING CONTENT\r\n  -------------------------------------------------- */\r\n/* Center align the text within the three columns below the carousel */\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n  }\r\n.marketing h2 {\r\n    font-weight: normal;\r\n  }\r\n.marketing .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n  }\r\n/* Featurettes\r\n  ------------------------- */\r\n.featurette-divider {\r\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\r\n  }\r\n/* Thin out the marketing headings */\r\n.featurette-heading {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n  }\r\n/* RESPONSIVE CSS\r\n  -------------------------------------------------- */\r\n@media (min-width: 40em) {\r\n    /* Bump up size of carousel content */\r\n    .carousel-caption p {\r\n      margin-bottom: 1.25rem;\r\n      font-size: 1.25rem;\r\n      line-height: 1.4;\r\n    }\r\n  \r\n    .featurette-heading {\r\n      font-size: 50px;\r\n    }\r\n  }\r\n@media (min-width: 62em) {\r\n    .featurette-heading {\r\n      margin-top: 7rem;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    \r\n    <div class=\"carousel-item active\">\r\n      <img class=\"img-fluid\" src=\"../../assets/img/carousel/side2.png\" alt=\"First slide\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption d-none d-md-block text-left\">\r\n          <h1>Example headline.</h1>\r\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"carousel-item\">\r\n      <img class=\"img-fluid\" src=\"../../assets/img/carousel/side3.png\" alt=\"Second slide\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h1>Another example headline.</h1>\r\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"carousel-item\">\r\n      <img class=\"third-slide\" src=\"../../assets/img/carousel/side1.png\" alt=\"Third slide\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption d-none d-md-block text-right\">\r\n          <h1>One more for good measure.</h1>\r\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  \r\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"auto\" style=\"text-align: center; background-color: #F2F2F2\">\r\n  <h2>¿Qué hago en caso de accidente?</h2>\r\n  <p>Queremos apoyarte en todo momento<br>\r\n    <strong style=\"color: green\"> En caso de algún accidente sigue estos pasos:</strong></p>\r\n</div>\r\n<br><br>\r\n\r\n\r\n<div class=\"container marketing\" >  \r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <img class=\"rounded-circle\" src=\"../../../assets/img/inicio/inicio1.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h5><strong style=\"color: green\">1._</strong> Permanece en calma</h5>\r\n      <p>Cuando entras en pánico puedes <br>agravar el problema</p>      \r\n    </div>\r\n    \r\n    <div class=\"col-lg-4\">\r\n      <img class=\"rounded-circle\" src=\"../../../assets/img/inicio/inicio2.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h5><strong style=\"color: green\">2._</strong> Revisa si hay heridos</h5>\r\n      <p>Si es necesario<br>\r\n        llama a una ambulancia</p>      \r\n    </div><!-- /.col-lg-4 -->\r\n    \r\n    <div class=\"col-lg-4\">\r\n      <img class=\"rounded-circle\" src=\"../../../assets/img/inicio/inicio3.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h5><strong style=\"color: green\">3._</strong> Reporta tu accidente</h5>\r\n      <p>Llama a tu aseguradora y sigue las<br> indicaciones</p>      \r\n    </div><!-- /.col-lg-4 -->\r\n  </div><!-- /.row -->\r\n</div>\r\n\r\n\r\n<div class=\"auto\" style=\"text-align: center\">\r\n  <h2>¿Ya eres cliente <strong style=\"color: green\">HDI</strong>?</h2>    \r\n  <p>Si estás buscando más información acerca de tu seguro aquí puedes obtenerla</p>\r\n</div>\r\n\r\n\r\n<div class=\"container marketing\">\r\n  <div class=\"row\" style=\"text-align: center\">\r\n    <div class=\"col-6\">\r\n      <img class=\"rounded-circle center\" src=\"../../../assets/img/about/auto.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h5><strong style=\"color: green\">HDI </strong> en mi <strong style=\"color: green\">casa </strong> </h5>                      \r\n    </div><!-- /.col-lg-4 -->\r\n  \r\n    <div class=\"col-6\" layout-align=\"center center\">\r\n      <img class=\"rounded-circle center\" src=\"../../../assets/img/about/casa.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h5><strong style=\"color: green\">HDI </strong> en mi <strong style=\"color: green\">auto </strong> </h5>                      \r\n    </div><!-- /.col-lg-4 -->\r\n    \r\n    \r\n  </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/inicio/inicio.component.ts":
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
            template: __webpack_require__("../../../../../src/app/layout/inicio/inicio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/inicio/inicio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_routing_module__ = __webpack_require__("../../../../../src/app/layout/inicio/inicio-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_component__ = __webpack_require__("../../../../../src/app/layout/inicio/inicio.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__inicio_routing_module__["a" /* InicioRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__inicio_component__["a" /* InicioComponent */]]
        })
    ], InicioModule);
    return InicioModule;
}());



/***/ })

});
//# sourceMappingURL=inicio.module.chunk.js.map