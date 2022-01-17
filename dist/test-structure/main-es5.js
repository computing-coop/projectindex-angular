(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left></app-left>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/left-footer/left-footer.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/left-footer/left-footer.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n\n    <div id=\"footer-left\" *ngIf=\"project\">\n        <p><b>{{project.name}}</b></p>\n        <p><i>{{project.type}}</i></p>\n        <p><i>{{project.season}}</i></p>\n\n    </div>\n\n    <div id=\"footer-right\">\n        <p>Tiger Dingsun</p>\n        <p><a href=\"mailto:tiger.dingsun@gmail.com\">tiger.dingsun@gmail.com</a></p>\n        <p><a href=\"https://www.instagram.com/tiger.dingsun/?hl=en\">@tiger.dingsun</a></p>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/left/left.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/left/left.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n    <div id=\"about-container\" (click)=\"aboutClicked()\">\n        <p id=\"about-hook\">Tiger Dingsun</p>\n        <div class=\"blockquote\" *ngIf=\"showAbout\">\n            <p>Brown | RISD Dual Degree 2020</p>\n            <p>→ Sc.B Computer Science</p>\n            <p>→ BFA Graphic Design</p>\n            <br>\n            <p>Graphic Designer, Front-End Developer, Editor. <br>Interested in text of all forms and capacities.</p>\n            <br>\n            <a href=\"../../assets/tiger-dingsun-resume.pdf\" target=\"_blank\">Resume</a>\n            <p> </p>\n        </div>\n        \n    </div>\n    <div id=\"projects-container\">\n        <p>Projects</p>\n        <ul>\n                <li *ngFor=\"let project of projects\" \n                (click)=\"onSelect(project)\" \n                [class.selected]=\"project === selectedProject\">\n                    {{ project.name }}\n                    <app-project-description *ngIf=\"project === selectedProject\" [project]=project></app-project-description>\n\n                </li>\n        </ul>\n        \n    </div>\n   \n    <app-left-footer *ngIf=\"selectedProject\" [project]=\"selectedProject\"></app-left-footer>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-content/project-content.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-content/project-content.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"right\" *ngIf=\"project\">\n    <div *ngIf=\"project.hasVideo\">\n        <iframe  *ngFor=\"let link of project.videoLinks\" [src]=\"link | safe\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>\n    </div>\n\n    <app-static-img *ngFor=\"let img of project.imgs\" [imgroot]=project.imgRoot [img]=img [smallerImgs]=project.smallerImgs (click)=\"onClickImg(img)\"></app-static-img>\n\n    <button id=\"scrollUpBtn\" (click)=\"scrollUp()\">↑</button>\n</div>\n\n<div class=\"lightBox\" *ngIf=\"selectedImg\" (click)=\"onClickLightBox()\">\n    <img src=\"../../assets/{{project.imgRoot}}/{{selectedImg}}\" loading=\"lazy\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-description/project-description.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-description/project-description.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-description\" *ngIf=\"project && project.description\">\n    <p *ngFor=\"let p of project.description\" [innerHTML]=p></p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/start-images/start-images.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/start-images/start-images.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about-images\">\n    <!-- <img class=\"fixed\" src=\"./assets/about/1.png\">> -->\n    <img *ngFor=\"let img of aboutimgs\" src=\"./assets/about/{{img}}\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/static-img/static-img.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/static-img/static-img.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [ngClass]=\"{'small-img' : smallerImgs}\" appLazyload src=\"./assets/{{imgroot}}/{{img}}\">"

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: Animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var Animations = {
    inOutAnimation: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('inOutAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ])
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_content_project_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-content/project-content.component */ "./src/app/project-content/project-content.component.ts");
/* harmony import */ var _start_images_start_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start-images/start-images.component */ "./src/app/start-images/start-images.component.ts");





var routes = [
    { path: "project/:id", component: _project_content_project_content_component__WEBPACK_IMPORTED_MODULE_3__["ProjectContentComponent"], pathMatch: 'full' },
    { path: "index", component: _start_images_start_images_component__WEBPACK_IMPORTED_MODULE_4__["StartImagesComponent"], pathMatch: 'full' },
    { path: '', redirectTo: '/index', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100vw;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Tiger Dingsun';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _left_left_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./left/left.component */ "./src/app/left/left.component.ts");
/* harmony import */ var _left_footer_left_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./left-footer/left-footer.component */ "./src/app/left-footer/left-footer.component.ts");
/* harmony import */ var _project_description_project_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-description/project-description.component */ "./src/app/project-description/project-description.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _lazyload_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lazyload.directive */ "./src/app/lazyload.directive.ts");
/* harmony import */ var _static_img_static_img_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./static-img/static-img.component */ "./src/app/static-img/static-img.component.ts");
/* harmony import */ var _project_content_project_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-content/project-content.component */ "./src/app/project-content/project-content.component.ts");
/* harmony import */ var _start_images_start_images_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./start-images/start-images.component */ "./src/app/start-images/start-images.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _left_left_component__WEBPACK_IMPORTED_MODULE_7__["LeftComponent"],
                _left_footer_left_footer_component__WEBPACK_IMPORTED_MODULE_8__["LeftFooterComponent"],
                _project_description_project_description_component__WEBPACK_IMPORTED_MODULE_9__["ProjectDescriptionComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_10__["SafePipe"],
                _lazyload_directive__WEBPACK_IMPORTED_MODULE_11__["LazyloadDirective"],
                _static_img_static_img_component__WEBPACK_IMPORTED_MODULE_12__["StaticImgComponent"],
                _project_content_project_content_component__WEBPACK_IMPORTED_MODULE_13__["ProjectContentComponent"],
                _start_images_start_images_component__WEBPACK_IMPORTED_MODULE_14__["StartImagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/lazyload.directive.ts":
/*!***************************************!*\
  !*** ./src/app/lazyload.directive.ts ***!
  \***************************************/
/*! exports provided: LazyloadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyloadDirective", function() { return LazyloadDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LazyloadDirective = /** @class */ (function () {
    function LazyloadDirective(el) {
        this.el = el;
        this.srcAttr = null;
    }
    LazyloadDirective.prototype.ngOnChanges = function () {
        this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
    };
    LazyloadDirective.prototype.canLazyLoad = function () {
        return window && 'IntersectionObserver' in window;
    };
    LazyloadDirective.prototype.lazyLoadImage = function () {
        var _this = this;
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (_a) {
                var isIntersecting = _a.isIntersecting;
                if (isIntersecting) {
                    _this.loadImage();
                    obs.unobserve(_this.el.nativeElement);
                }
            });
        }, {
            rootMargin: '500px'
        });
        obs.observe(this.el.nativeElement);
    };
    LazyloadDirective.prototype.loadImage = function () {
        this.srcAttr = this.src;
    };
    LazyloadDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.src')
    ], LazyloadDirective.prototype, "srcAttr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LazyloadDirective.prototype, "src", void 0);
    LazyloadDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'img[appLazyload]'
        })
    ], LazyloadDirective);
    return LazyloadDirective;
}());



/***/ }),

/***/ "./src/app/left-footer/left-footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/left-footer/left-footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  width: 100%;\n}\n@media (max-width: 599px) {\n  #footer {\n    position: fixed;\n    bottom: 0;\n    background-color: gainsboro;\n    border-top-width: 1px;\n  }\n}\n#footer-left {\n  width: 50%;\n  min-height: 120px;\n  position: relative;\n  float: left;\n  border-width: 0 0 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 599px) {\n  #footer-left {\n    min-height: 100px;\n  }\n}\n#footer-right {\n  width: 50%;\n  min-height: 120px;\n  position: relative;\n  float: right;\n  border-width: 0 0 0 1px;\n  word-break: break-all;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 599px) {\n  #footer-right {\n    min-height: 100px;\n  }\n}\np {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL2FwcC9sZWZ0LWZvb3Rlci9sZWZ0LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGVmdC1mb290ZXIvbGVmdC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYnVmZmFsb2p1bmlvci9Eb2N1bWVudHMvR2l0SHViL3Byb2plY3RpbmRleC1hbmd1bGFyL3NyYy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7QUNHTTtFRkhOO0lBSVEsZUFBQTtJQUNBLFNBQUE7SUFDQSwyQkVQVztJRlFYLHFCQUFBO0VDQU47QUFDRjtBRElBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0RKO0FDaEJNO0VGU047SUFVUSxpQkFBQTtFQ0NOO0FBQ0Y7QURHQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0FKO0FDakNNO0VGd0JOO0lBV1EsaUJBQUE7RUNFTjtBQUNGO0FEQ0E7RUFDSSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sZWZ0LWZvb3Rlci9sZWZ0LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL21peGlucyc7XG5cbiNmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQGluY2x1ZGUgZm9yLXNpemUocGhvbmUtb25seSl7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgIH1cblxufVxuXG4jZm9vdGVyLWxlZnQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpe1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gICAgXG59XG5cbiNmb290ZXItcmlnaHQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItd2lkdGg6IDAgMCAwIDFweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KXtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG5wIHtcbiAgICBwYWRkaW5nOiA1cHg7XG59IiwiI2Zvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNmb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgfVxufVxuXG4jZm9vdGVyLWxlZnQge1xuICB3aWR0aDogNTAlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI2Zvb3Rlci1sZWZ0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4jZm9vdGVyLXJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItd2lkdGg6IDAgMCAwIDFweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI2Zvb3Rlci1yaWdodCB7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxucCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iLCIkbWFpbi1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG5cbkBtaXhpbiBmb3Itc2l6ZSgkc2l6ZSkge1xuICAgIEBpZiAkc2l6ZSA9PSBwaG9uZS1vbmx5IHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gdGFibGV0LXBvcnRyYWl0LXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gdGFibGV0LWxhbmRzY2FwZS11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IGRlc2t0b3AtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gYmlnLWRlc2t0b3AtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkgeyBAY29udGVudDsgfVxuICAgIH1cbiAgfVxuXG5AbWl4aW4gbWJveHNoYWRvdygkZGVwdGg6MSkge1xuICAgIEBpZiAkZGVwdGg9PTEge1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTIge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTMge1xuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09NCB7XG4gICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTUge1xuICAgICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICB9XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/left-footer/left-footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/left-footer/left-footer.component.ts ***!
  \******************************************************/
/*! exports provided: LeftFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftFooterComponent", function() { return LeftFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");



var LeftFooterComponent = /** @class */ (function () {
    function LeftFooterComponent(projectService) {
        this.projectService = projectService;
    }
    LeftFooterComponent.prototype.ngOnInit = function () {
    };
    LeftFooterComponent.ctorParameters = function () { return [
        { type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LeftFooterComponent.prototype, "project", void 0);
    LeftFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left-footer',
            template: __webpack_require__(/*! raw-loader!./left-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/left-footer/left-footer.component.html"),
            styles: [__webpack_require__(/*! ./left-footer.component.scss */ "./src/app/left-footer/left-footer.component.scss")]
        })
    ], LeftFooterComponent);
    return LeftFooterComponent;
}());



/***/ }),

/***/ "./src/app/left/left.component.scss":
/*!******************************************!*\
  !*** ./src/app/left/left.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  width: 35%;\n  height: 100vh;\n  position: fixed;\n  border-width: 0 1px 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 599px) {\n  #main {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n}\n.selected {\n  font-weight: bold;\n  letter-spacing: -0.5px;\n}\ndiv {\n  border-width: 0 0 1px 0;\n}\np {\n  border-width: 0;\n  padding: 5px;\n}\nul {\n  list-style: decimal;\n  margin: 0 0 10px 0;\n}\nli {\n  padding: 0.5px 0;\n}\nli:hover {\n  cursor: pointer;\n  font-weight: bold;\n  letter-spacing: -0.5px;\n}\n.blockquote {\n  padding-left: 35px;\n  border-width: 0;\n}\n#projects-container {\n  height: auto;\n  flex-grow: 2;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n@media (max-width: 599px) {\n  #projects-container {\n    height: auto;\n  }\n}\n#about-container:hover {\n  cursor: pointer;\n}\n#about-hook {\n  height: auto;\n}\n#about-hook:hover {\n  font-style: italic;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL2FwcC9sZWZ0L2xlZnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xlZnQvbGVmdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNESjtBQ0hNO0VGSE47SUFXUSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDRE47QUFDRjtBREtBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FES0E7RUFDSSx1QkFBQTtBQ0ZKO0FETUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0hKO0FETUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURNQTtFQUNJLGdCQUFBO0FDSEo7QURJSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDRlI7QURNQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FETUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNISjtBQ2xETTtFRmlETjtJQU9RLFlBQUE7RUNGTjtBQUNGO0FETUE7RUFDSSxlQUFBO0FDSEo7QURNQTtFQUNJLFlBQUE7QUNISjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9sZWZ0L2xlZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9taXhpbnMnO1xuXG4jbWFpbiB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3JkZXItd2lkdGg6IDAgMXB4IDAgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cbiAgICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxufVxuXG4uc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG59XG5cbmRpdiB7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG5cbn1cblxucCB7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG5saSB7XG4gICAgcGFkZGluZzogMC41cHggMDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICB9XG59XG5cbi5ibG9ja3F1b3RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4jcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxleC1ncm93OiAyO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KXtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxufVxuXG4jYWJvdXQtY29udGFpbmVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNhYm91dC1ob29rIHtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSIsIiNtYWluIHtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3JkZXItd2lkdGg6IDAgMXB4IDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5zZWxlY3RlZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xufVxuXG5kaXYge1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbn1cblxucCB7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxubGkge1xuICBwYWRkaW5nOiAwLjVweCAwO1xufVxubGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xufVxuXG4uYmxvY2txdW90ZSB7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4jcHJvamVjdHMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbGV4LWdyb3c6IDI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNwcm9qZWN0cy1jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4jYWJvdXQtY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWJvdXQtaG9vayB7XG4gIGhlaWdodDogYXV0bztcbn1cbiNhYm91dC1ob29rOmhvdmVyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiJG1haW4tY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4kYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuXG5AbWl4aW4gZm9yLXNpemUoJHNpemUpIHtcbiAgICBAaWYgJHNpemUgPT0gcGhvbmUtb25seSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IHRhYmxldC1wb3J0cmFpdC11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IHRhYmxldC1sYW5kc2NhcGUtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBkZXNrdG9wLXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IGJpZy1kZXNrdG9wLXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9XG4gIH1cblxuQG1peGluIG1ib3hzaGFkb3coJGRlcHRoOjEpIHtcbiAgICBAaWYgJGRlcHRoPT0xIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRlcHRoPT0yIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRlcHRoPT0zIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTQge1xuICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRlcHRoPT01IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgfVxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/left/left.component.ts":
/*!****************************************!*\
  !*** ./src/app/left/left.component.ts ***!
  \****************************************/
/*! exports provided: LeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftComponent", function() { return LeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LeftComponent = /** @class */ (function () {
    function LeftComponent(projectService, router, route) {
        this.projectService = projectService;
        this.router = router;
        this.route = route;
        this.projects = [];
        this.showAbout = false;
    }
    LeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects().subscribe({
            next: function (projects) {
                _this.projects = projects;
                _this.selectedProject = projects.find(function (p) { return p.imgRoot === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1); });
            }
        });
    };
    LeftComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
        this.router.navigate(["/project/" + project.imgRoot]);
    };
    LeftComponent.prototype.aboutClicked = function () {
        this.showAbout = !this.showAbout;
    };
    LeftComponent.ctorParameters = function () { return [
        { type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    LeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left',
            template: __webpack_require__(/*! raw-loader!./left.component.html */ "./node_modules/raw-loader/index.js!./src/app/left/left.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["Animations"].inOutAnimation],
            styles: [__webpack_require__(/*! ./left.component.scss */ "./src/app/left/left.component.scss")]
        })
    ], LeftComponent);
    return LeftComponent;
}());



/***/ }),

/***/ "./src/app/project-content/project-content.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/project-content/project-content.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#right {\n  float: right;\n  width: 65%;\n  border-width: 0 0 0 0;\n  font-size: 0px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 599px) {\n  #right {\n    float: none;\n    width: 100%;\n    height: auto;\n  }\n}\nimg {\n  width: 100%;\n  display: inline-block;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL2FwcC9wcm9qZWN0LWNvbnRlbnQvcHJvamVjdC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0LWNvbnRlbnQvcHJvamVjdC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2J1ZmZhbG9qdW5pb3IvRG9jdW1lbnRzL0dpdEh1Yi9wcm9qZWN0aW5kZXgtYW5ndWxhci9zcmMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDREo7QUNITTtFRkhOO0lBVVEsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDQU47QUFDRjtBREdBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1jb250ZW50L3Byb2plY3QtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL21peGlucyc7XG5cbiNyaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA2NSU7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgQGluY2x1ZGUgZm9yLXNpemUocGhvbmUtb25seSl7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4iLCIjcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA2NSU7XG4gIGJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgZm9udC1zaXplOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI3JpZ2h0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIiRtYWluLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xuJGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcblxuQG1peGluIGZvci1zaXplKCRzaXplKSB7XG4gICAgQGlmICRzaXplID09IHBob25lLW9ubHkge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7IEBjb250ZW50OyB9XG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB0YWJsZXQtcG9ydHJhaXQtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB0YWJsZXQtbGFuZHNjYXBlLXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gZGVza3RvcC11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBiaWctZGVza3RvcC11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfVxuICB9XG5cbkBtaXhpbiBtYm94c2hhZG93KCRkZXB0aDoxKSB7XG4gICAgQGlmICRkZXB0aD09MSB7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09MiB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09MyB7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRlcHRoPT00IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09NSB7XG4gICAgICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMzApLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project-content/project-content.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-content/project-content.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectContentComponent", function() { return ProjectContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectContentComponent = /** @class */ (function () {
    function ProjectContentComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
        this.project = null;
        this.selectedImg = null;
    }
    ProjectContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (val) {
            console.log(_this.route.snapshot.params['id']);
            _this.projectService.getProject(_this.route.snapshot.params['id']).subscribe({
                next: function (project) { return _this.project = project; }
            });
        });
    };
    ProjectContentComponent.prototype.onClickImg = function (img) {
        this.selectedImg = img;
    };
    ProjectContentComponent.prototype.onClickLightBox = function () {
        this.selectedImg = null;
    };
    ProjectContentComponent.prototype.scrollUp = function () {
        var posInterval = window.pageYOffset / 20;
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - posInterval); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    ProjectContentComponent.ctorParameters = function () { return [
        { type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ProjectContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-content',
            template: __webpack_require__(/*! raw-loader!./project-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-content/project-content.component.html"),
            styles: [__webpack_require__(/*! ./project-content.component.scss */ "./src/app/project-content/project-content.component.scss")]
        })
    ], ProjectContentComponent);
    return ProjectContentComponent;
}());



/***/ }),

/***/ "./src/app/project-description/project-description.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/project-description/project-description.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-description {\n  font-size: 1rem;\n  letter-spacing: 0px;\n  font-weight: normal;\n  width: 35vw;\n  padding: 10px 20px 10px 40px;\n  margin: 10px -40px;\n  transition: height 0.5s ease;\n  border-width: 1px 0 1px 0;\n}\n@media (max-width: 599px) {\n  .project-description {\n    height: auto;\n    max-height: 30vh;\n  }\n}\np {\n  border: none;\n  line-height: 1.3em;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL2FwcC9wcm9qZWN0LWRlc2NyaXB0aW9uL3Byb2plY3QtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3QtZGVzY3JpcHRpb24vcHJvamVjdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFNQSw0QkFBQTtFQUNBLHlCQUFBO0FDTko7QUNKTTtFRkhOO0lBUVEsWUFBQTtJQUNBLGdCQUFBO0VDR047QUFDRjtBREdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZGVzY3JpcHRpb24vcHJvamVjdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL21peGlucyc7XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHdpZHRoOiAzNXZ3O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDQwcHg7XG4gICAgbWFyZ2luOiAxMHB4IC00MHB4O1xuICAgIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpe1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMgZWFzZTtcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xufVxuXG5wIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSIsIi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB3aWR0aDogMzV2dztcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNDBweDtcbiAgbWFyZ2luOiAxMHB4IC00MHB4O1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBlYXNlO1xuICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogMzB2aDtcbiAgfVxufVxuXG5wIHtcbiAgYm9yZGVyOiBub25lO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSIsIiRtYWluLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xuJGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcblxuQG1peGluIGZvci1zaXplKCRzaXplKSB7XG4gICAgQGlmICRzaXplID09IHBob25lLW9ubHkge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7IEBjb250ZW50OyB9XG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB0YWJsZXQtcG9ydHJhaXQtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSB0YWJsZXQtbGFuZHNjYXBlLXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gZGVza3RvcC11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBiaWctZGVza3RvcC11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfVxuICB9XG5cbkBtaXhpbiBtYm94c2hhZG93KCRkZXB0aDoxKSB7XG4gICAgQGlmICRkZXB0aD09MSB7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09MiB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09MyB7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGRlcHRoPT00IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09NSB7XG4gICAgICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMzApLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project-description/project-description.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/project-description/project-description.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProjectDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDescriptionComponent", function() { return ProjectDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");



var ProjectDescriptionComponent = /** @class */ (function () {
    function ProjectDescriptionComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectDescriptionComponent.prototype.ngOnInit = function () {
    };
    ProjectDescriptionComponent.ctorParameters = function () { return [
        { type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProjectDescriptionComponent.prototype, "project", void 0);
    ProjectDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-description',
            template: __webpack_require__(/*! raw-loader!./project-description.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-description/project-description.component.html"),
            styles: [__webpack_require__(/*! ./project-description.component.scss */ "./src/app/project-description/project-description.component.scss")]
        })
    ], ProjectDescriptionComponent);
    return ProjectDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/project.service.ts":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectsUrl = 'api/project-list.json';
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProjectService.prototype.getProject = function (root) {
        return this.getProjects()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (projects) { return projects.find(function (p) { return p.imgRoot === root; }); }));
    };
    ProjectService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        })
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/start-images/start-images.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/start-images/start-images.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about-images {\n  padding: 5px;\n  width: 100%;\n  float: right;\n}\n#about-images img {\n  height: auto !important;\n  width: auto !important;\n  max-width: calc(100vw - 20px);\n  max-height: calc(100vh - 20px);\n  -o-object-fit: contain;\n     object-fit: contain;\n  float: right;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin: 5px;\n  border-radius: 10px;\n}\n#about-images .fixed {\n  position: fixed;\n  right: 0;\n  top: 0;\n  border-radius: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL2FwcC9zdGFydC1pbWFnZXMvc3RhcnQtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFydC1pbWFnZXMvc3RhcnQtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2J1ZmZhbG9qdW5pb3IvRG9jdW1lbnRzL0dpdEh1Yi9wcm9qZWN0aW5kZXgtYW5ndWxhci9zcmMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFlBQUE7RUVNRix3RUFBQTtFQWNGLHFEQUFBO0VGbEJJLFdBQUE7RUFDQSxtQkFBQTtBQ0FSO0FESUk7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQtaW1hZ2VzL3N0YXJ0LWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL21peGlucyc7XG5cbiNhYm91dC1pbWFnZXMge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAmIGltZyB7XG4gICAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBAaW5jbHVkZSBtYm94c2hhZG93KDEpO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIH1cblxuICAgICYgLmZpeGVkIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcblxuICAgIH1cbn0iLCIjYWJvdXQtaW1hZ2VzIHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuI2Fib3V0LWltYWdlcyBpbWcge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiNhYm91dC1pbWFnZXMgLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbn0iLCIkbWFpbi1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG5cbkBtaXhpbiBmb3Itc2l6ZSgkc2l6ZSkge1xuICAgIEBpZiAkc2l6ZSA9PSBwaG9uZS1vbmx5IHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gdGFibGV0LXBvcnRyYWl0LXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gdGFibGV0LWxhbmRzY2FwZS11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IGRlc2t0b3AtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gYmlnLWRlc2t0b3AtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkgeyBAY29udGVudDsgfVxuICAgIH1cbiAgfVxuXG5AbWl4aW4gbWJveHNoYWRvdygkZGVwdGg6MSkge1xuICAgIEBpZiAkZGVwdGg9PTEge1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTIge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTMge1xuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09NCB7XG4gICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTUge1xuICAgICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICB9XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/start-images/start-images.component.ts":
/*!********************************************************!*\
  !*** ./src/app/start-images/start-images.component.ts ***!
  \********************************************************/
/*! exports provided: StartImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartImagesComponent", function() { return StartImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartImagesComponent = /** @class */ (function () {
    function StartImagesComponent() {
        this.aboutimgs = [];
    }
    StartImagesComponent.prototype.ngOnInit = function () {
        this.shuffleImages();
    };
    StartImagesComponent.prototype.shuffleImages = function () {
        var _a;
        var array = [];
        array.push("1.png");
        for (var i = 1; i <= 18; i++) {
            array.push(i + ".jpg");
        }
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([array[j], array[i]], 2), array[i] = _a[0], array[j] = _a[1];
        }
        this.aboutimgs = array;
    };
    StartImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-images',
            template: __webpack_require__(/*! raw-loader!./start-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/start-images/start-images.component.html"),
            styles: [__webpack_require__(/*! ./start-images.component.scss */ "./src/app/start-images/start-images.component.scss")]
        })
    ], StartImagesComponent);
    return StartImagesComponent;
}());



/***/ }),

/***/ "./src/app/static-img/static-img.component.scss":
/*!******************************************************!*\
  !*** ./src/app/static-img/static-img.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 100%;\n  height: auto;\n  display: inline-block;\n}\n\n.small-img {\n  max-width: calc(100% - 100px);\n  max-height: calc(100vh - 100px);\n  margin: 50px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL2FwcC9zdGF0aWMtaW1nL3N0YXRpYy1pbWcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YXRpYy1pbWcvc3RhdGljLWltZy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9idWZmYWxvanVuaW9yL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdGluZGV4LWFuZ3VsYXIvc3JjL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNGSjs7QURLQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VFYUUsMEVBQUE7RUFRRixxREFBQTtFRmxCQSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zdGF0aWMtaW1nL3N0YXRpYy1pbWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJy4uLy4uL21peGlucyc7XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zbWFsbC1pbWcge1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gICAgbWFyZ2luOiA1MHB4O1xuICAgIFxuICAgIEBpbmNsdWRlIG1ib3hzaGFkb3coMyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zbWFsbC1pbWcge1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgbWFyZ2luOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIkbWFpbi1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG5cbkBtaXhpbiBmb3Itc2l6ZSgkc2l6ZSkge1xuICAgIEBpZiAkc2l6ZSA9PSBwaG9uZS1vbmx5IHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gdGFibGV0LXBvcnRyYWl0LXVwIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gdGFibGV0LWxhbmRzY2FwZS11cCB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9IEBlbHNlIGlmICRzaXplID09IGRlc2t0b3AtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBAY29udGVudDsgfVxuICAgIH0gQGVsc2UgaWYgJHNpemUgPT0gYmlnLWRlc2t0b3AtdXAge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkgeyBAY29udGVudDsgfVxuICAgIH1cbiAgfVxuXG5AbWl4aW4gbWJveHNoYWRvdygkZGVwdGg6MSkge1xuICAgIEBpZiAkZGVwdGg9PTEge1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTIge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTMge1xuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgfVxuICAgIEBlbHNlIGlmICRkZXB0aD09NCB7XG4gICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZGVwdGg9PTUge1xuICAgICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICB9XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/static-img/static-img.component.ts":
/*!****************************************************!*\
  !*** ./src/app/static-img/static-img.component.ts ***!
  \****************************************************/
/*! exports provided: StaticImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticImgComponent", function() { return StaticImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StaticImgComponent = /** @class */ (function () {
    function StaticImgComponent() {
    }
    StaticImgComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StaticImgComponent.prototype, "imgroot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StaticImgComponent.prototype, "img", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StaticImgComponent.prototype, "smallerImgs", void 0);
    StaticImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-img',
            template: __webpack_require__(/*! raw-loader!./static-img.component.html */ "./node_modules/raw-loader/index.js!./src/app/static-img/static-img.component.html"),
            styles: [__webpack_require__(/*! ./static-img.component.scss */ "./src/app/static-img/static-img.component.scss")]
        })
    ], StaticImgComponent);
    return StaticImgComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/buffalojunior/Documents/GitHub/projectindex-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map