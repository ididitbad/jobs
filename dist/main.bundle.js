webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_component__ = __webpack_require__("../../../../../src/app/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contract_component__ = __webpack_require__("../../../../../src/app/contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_component__ = __webpack_require__("../../../../../src/app/location.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/**
 * Created by KirK on 09.07.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/employee', pathMatch: 'full' },
    { path: 'employee', component: __WEBPACK_IMPORTED_MODULE_2__employee_component__["a" /* EmployeeComponent */] },
    { path: 'contract', component: __WEBPACK_IMPORTED_MODULE_3__contract_component__["a" /* ContractComponent */] },
    { path: 'location', component: __WEBPACK_IMPORTED_MODULE_4__location_component__["a" /* LocationComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<md-toolbar color=\"primary\">\n  <span>Header</span>\n  <md-toolbar-row>\n    <span>\n      <button md-button (click)=\"sidenav.open()\">\n        Tables\n      </button>\n    </span>\n  </md-toolbar-row>\n</md-toolbar>\n\n<md-sidenav-container>\n  <md-sidenav #sidenav style=\"padding: 20px\">\n    <nav>\n      <p><a routerLink=\"/employee\" routerLinkActive=\"active\">Employees</a></p>\n      <p><a routerLink=\"/contract\" routerLinkActive=\"active\">Contracts</a></p>\n      <p><a routerLink=\"/location\" routerLinkActive=\"active\">Locations</a></p>\n    </nav>\n  </md-sidenav>\n  <router-outlet></router-outlet>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employee_component__ = __webpack_require__("../../../../../src/app/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contract_component__ = __webpack_require__("../../../../../src/app/contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__location_component__ = __webpack_require__("../../../../../src/app/location.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__employee_component__["a" /* EmployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contract_component__["a" /* ContractComponent */],
            __WEBPACK_IMPORTED_MODULE_10__location_component__["a" /* LocationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdTableModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdPaginatorModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_cdk__["a" /* CdkTableModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contract.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <!--<h3>\r\n   {{updated}}\r\n </h3>-->\r\n  <ngx-datatable\r\n    #mydatatable\r\n    class=\"material\"\r\n    [headerHeight]=\"50\"\r\n    [limit]=\"10\"\r\n    [columnMode]=\"'force'\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [rows]=\"rows\">\r\n    <ngx-datatable-column name=\"Id\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n        {{value}}\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Name\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-name'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-name']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'name', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-name']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Price\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-price'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-price']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'price', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-price']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"\">\r\n      <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n        <button md-raised-button (click)=\"deleteRow($event, row)\">Delete</button>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ngx-datatable>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContractComponent = (function () {
    function ContractComponent() {
        var _this = this;
        this.updated = "";
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    ContractComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "http://localhost:8080/contract");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    ContractComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
        this.updated = JSON.stringify(row);
        var rep = new XMLHttpRequest();
        rep.open('POST', "http://localhost:8080/contract/update");
        rep.send(JSON.stringify(row));
    };
    ContractComponent.prototype.deleteRow = function (event, row) {
        var id = row.id;
        this.rows.splice(row.$$index, 1);
        this.updated = id;
        var red = new XMLHttpRequest();
        red.open('POST', "http://localhost:8080/contract/delete");
        red.send(id);
    };
    return ContractComponent;
}());
ContractComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contract',
        template: __webpack_require__("../../../../../src/app/contract.component.html")
    }),
    __metadata("design:paramtypes", [])
], ContractComponent);

//# sourceMappingURL=contract.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <!--<h3>\r\n   {{updated}}\r\n </h3>-->\r\n  <ngx-datatable\r\n    #mydatatable\r\n    class=\"material\"\r\n    [headerHeight]=\"50\"\r\n    [limit]=\"10\"\r\n    [columnMode]=\"'force'\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [rows]=\"rows\">\r\n    <ngx-datatable-column name=\"Id\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n        {{value}}\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Name\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-name'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-name']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'name', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-name']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Surname\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-surname'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-surname']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'surname', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-surname']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Birth\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-birth'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-birth']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'birth', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-birth']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"City\">\r\n      <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n             <span\r\n               title=\"Double click to edit\"\r\n               (click)=\"editing[row.$$index + '-city'] = true\"\r\n               *ngIf=\"!editing[row.$$index + '-city']\">\r\n              {{value}}\r\n            </span>\r\n      <select\r\n        *ngIf=\"editing[row.$$index + '-city']\"\r\n        (change)=\"updateValue($event, 'city', value, row)\"\r\n        [value]=\"value\">\r\n        <option value=1>1</option>\r\n        <option value=2>2</option>\r\n        <option value=3>3</option>\r\n        <option value=4>4</option>\r\n        <option value=5>5</option>\r\n      </select>\r\n    </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Phone\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-phone'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-phone']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'phone', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-phone']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Active\">\r\n      <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n             <span\r\n               title=\"Double click to edit\"\r\n               (click)=\"editing[row.$$index + '-active'] = true\"\r\n               *ngIf=\"!editing[row.$$index + '-active']\">\r\n              {{value}}\r\n            </span>\r\n        <select\r\n          *ngIf=\"editing[row.$$index + '-active']\"\r\n          (change)=\"updateValue($event, 'active', value, row)\"\r\n          [value]=\"value\">\r\n          <option value=0>0</option>\r\n          <option value=1>1</option>\r\n        </select>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Group\">\r\n      <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n             <span\r\n               title=\"Double click to edit\"\r\n               (click)=\"editing[row.$$index + '-group'] = true\"\r\n               *ngIf=\"!editing[row.$$index + '-group']\">\r\n              {{value}}\r\n            </span>\r\n        <select\r\n          *ngIf=\"editing[row.$$index + '-group']\"\r\n          (change)=\"updateValue($event, 'group', value, row)\"\r\n          [value]=\"value\">\r\n          <option value=null>null</option>\r\n          <option value=0>0</option>\r\n          <option value=1>1</option>\r\n          <option value=2>2</option>\r\n          <option value=3>3</option>\r\n          <option value=4>4</option>\r\n        </select>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"\">\r\n      <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n        <button md-raised-button (click)=\"deleteRow($event, row)\">Delete</button>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ngx-datatable>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeComponent = (function () {
    function EmployeeComponent() {
        var _this = this;
        this.updated = "";
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    EmployeeComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "http://localhost:8080/employee");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    EmployeeComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
        this.updated = JSON.stringify(row);
        var rep = new XMLHttpRequest();
        rep.open('POST', "http://localhost:8080/employee/update");
        rep.send(JSON.stringify(row));
    };
    EmployeeComponent.prototype.deleteRow = function (event, row) {
        var id = row.id;
        this.rows.splice(row.$$index, 1);
        this.updated = id;
        var red = new XMLHttpRequest();
        red.open('POST', "http://localhost:8080/employee/delete");
        red.send(id);
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'employee',
        template: __webpack_require__("../../../../../src/app/employee.component.html")
    }),
    __metadata("design:paramtypes", [])
], EmployeeComponent);

//# sourceMappingURL=employee.component.js.map

/***/ }),

/***/ "../../../../../src/app/location.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <!--<h3>\r\n    {{updated}}\r\n  </h3>-->\r\n  <ngx-datatable\r\n    #mydatatable\r\n    class=\"material\"\r\n    [headerHeight]=\"50\"\r\n    [limit]=\"10\"\r\n    [columnMode]=\"'force'\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [rows]=\"rows\">\r\n    <ngx-datatable-column name=\"Id\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n        {{value}}\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Name\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-name'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-name']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'name', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-name']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Square\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-square'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-square']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'square', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-square']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Contract\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span\r\n              title=\"Double click to edit\"\r\n              (click)=\"editing[row.$$index + '-contract'] = true\"\r\n              *ngIf=\"!editing[row.$$index + '-contract']\">\r\n              {{value}}\r\n            </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'contract', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-contract']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"\">\r\n      <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n        <button md-raised-button (click)=\"deleteRow($event, row)\">Delete</button>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ngx-datatable>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationComponent = (function () {
    function LocationComponent() {
        var _this = this;
        this.updated = "";
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    LocationComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "http://localhost:8080/location");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    LocationComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
        this.updated = JSON.stringify(row);
        var rep = new XMLHttpRequest();
        rep.open('POST', "http://localhost:8080/location/update");
        rep.send(JSON.stringify(row));
    };
    LocationComponent.prototype.deleteRow = function (event, row) {
        var id = row.id;
        this.rows.splice(row.$$index, 1);
        this.updated = id;
        var red = new XMLHttpRequest();
        red.open('POST', "http://localhost:8080/location/delete");
        red.send(id);
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'location',
        template: __webpack_require__("../../../../../src/app/location.component.html")
    }),
    __metadata("design:paramtypes", [])
], LocationComponent);

//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map