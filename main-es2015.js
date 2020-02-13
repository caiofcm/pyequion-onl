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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div id=\"page-container\">\n  <div class=\"toolbar\" role=\"banner\">\n    <img width=\"40\" alt=\"Angular Logo\" src=\"./assets/pyequion_logo.png\" />\n    <h1 style=\"margin: 0; font-size: 1.5rem;\">PyEquIon Speciation</h1>\n    <div class=\"spacer\"></div>\n    <div style=\"background-color: white; height: 40.33px;\">\n      <img style=\"margin: 0;\" width=\"80\" alt=\"Nidf Logo\" src=\"./assets/nidflogo-300x150.png\" />\n    </div>\n    <img width=\"125\" alt=\"Atoms Logo\" src=\"./assets/atoms_logo.png\" />\n  </div>\n\n  <div class=\"content\" role=\"main\">\n\n    <div style=\"margin: 0 15%;\" *ngFor=\"let i of numbersCases\">\n      <app-stepper></app-stepper>\n    </div>\n\n    <br>\n    <div style=\"display: flex; justify-content: flex-end;\">\n      <button style=\"margin-right: 5px;\" mat-stroked-button color=\"primary\" (click)=\"handleAddMoreCases()\">\n        Add Case\n      </button>\n    </div>\n  </div>\n\n  <!-- <router-outlet></router-outlet> -->\n\n\n  <!-- Footer -->\n  <footer>\n    <div>\n      Author: Caio Curitiba Marcellos, Researcher at ATOMS/UFRJ/BR - Any bug or suggestion? Contact me at:\n      caiocuritiba@gmail.com.\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/autocomplete-compound/autocomplete-compound.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autocomplete-compound/autocomplete-compound.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Compound\" aria-label=\"Number\" matInput [formControl]=\"control\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/equilibrium-calculation/equilibrium-calculation.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equilibrium-calculation/equilibrium-calculation.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: flex; justify-content: center; flex-direction: column;\">\n  <div style=\"display: flex; justify-content: flex-start; flex-grow: 1;\">\n    <div style=\"flex-basis: 50%;\">\n      <div *ngIf=\"!pyequionStore.isLoading; else loading\">\n        <div [appMath]=\"pyequionStore.reactionsLatexAsConcatenatedString$ | async\"></div>\n        <h5>Possible Solid Reactions:</h5>\n        <!-- <div *ngFor=\"let reaction of pyequionStore.solidReactionsLatex$ | async\"> -->\n            <!-- <div [appMath]=\"{latex: '$' + reaction + '$'}\"></div>  -->\n            <div [appMath]=\"pyequionStore.solidReactionsLatexAsConcatenatedString$ | async\"></div>\n        <!-- </div> -->\n        <br>\n      </div>\n    </div>\n    <form [formGroup]=\"equilibriumCalcForm\" style=\"flex-basis: 50%;\">\n      <h4 style=\"margin-bottom: 3px;\">Concentrations (mM):</h4>\n      <div formArrayName=\"concentrations\">\n        <div *ngFor=\"let conc of equilibriumCalcForm.get('concentrations').controls; let i=index\">\n          <mat-form-field>\n            <input matInput [formControl]=\"conc\" [placeholder]=\"compoundsInputForm.get('compounds').controls[i].value\" type=\"number\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput formControlName=\"temperature\" placeholder=\"Temperature [&#176;C]\" type=\"number\">\n        </mat-form-field>\n      </div>\n      <div *ngIf=\"compoundsInputForm.get('closingEqType').value !== mapCloseEquationEnumTmplt['NONE']\">\n        <mat-form-field>\n          <input matInput formControlName=\"extraParameter\"\n            [placeholder]=\"mapCloseEquationLabel[compoundsInputForm.get('closingEqType').value]\" type=\"number\">\n        </mat-form-field>\n      </div>\n      <mat-slide-toggle formControlName=\"allowPrecipitation\">Allow Precipitation</mat-slide-toggle>\n      <div style=\"padding-top: 20px;\">\n        <mat-form-field>\n          <mat-label>Nonideality Model</mat-label>\n          <mat-select formControlName=\"nonidealityType\">\n            <mat-option *ngFor=\"let nonIdeality of nonIdealitiesTypes\" [value]=\"nonIdeality.value\">\n              {{nonIdeality.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </form>\n  </div>\n  <br>\n  <div>\n    <button style=\"margin-right: 5px;\" mat-raised-button matStepperPrevious>Back</button>\n    <button mat-raised-button matStepperNext\n      [disabled]=\"(!pyequionStore.eqSystem$) && (equilibriumCalcForm.invalid)\"\n      (click)=\"handleCalculateEquilibrium()\">\n      Calculate and Advance\n    </button>\n  </div>\n</div>\n\n<!-- Strang way to include this spinner... -->\n<div style=\"text-align: center;\">\n  <ng-template #loading>\n    <div style=\"text-align: center;\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/solution-results-step/solution-results-step.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/solution-results-step/solution-results-step.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"((!pyequionStore.isLoading)); else loading\">\n  <div *ngIf=\"pyequionStore.solutionResult$ | async as solutionResult\">\n\n    <div style=\"display: flex; justify-content: space-between;\">\n      <p><b>pH:</b> {{solutionResult.pH | number: '1.3-3'}}</p>\n      <p><b>I:</b> {{solutionResult.I*1e3 | number: '1.3-3'}} mM</p>\n      <p><b>SC:</b> {{solutionResult.sc*1e6 | number: '1.3-3'}}\n        <span appMath>$\\mu$</span>\n        S/cm\n      </p>\n      <p><b>DIC:</b> {{solutionResult.DIC*1e3 | number: '1.3-3'}} mM</p>\n    </div>\n    <div style=\"display: flex; flex-direction: row;\">\n      <div style=\"flex-basis: 50%;\">\n        <b>Species:</b>\n        <ul>\n          <li *ngFor=\"let species of speciesDisplay$ | async\">\n            <b>{{species.name}}:</b> {{species.conc*1e3 | number: '1.3-3'}} mM\n          </li>\n        </ul>\n      </div>\n      <div style=\"flex-basis: 50%;\">\n        <div>\n          <b>Saturation Index:</b>\n          <ul>\n            <li *ngFor=\"let solidName of objectKeys(solutionResult.saturation_index)\">\n              {{solidName}}: {{solutionResult.saturation_index[solidName] | number: '1.3-3'}}\n            </li>\n          </ul>\n        </div>\n        <div *ngIf=\"precipitatedDisplay$ | async as precipitatedDisplay\">\n          <b>Precipitation Concentration:</b>\n          <ul>\n            <li *ngFor=\"let solidName of precipitatedDisplay\">\n              <span *ngIf=\"solutionResult.preciptation_conc[solidName]\">\n                {{solidName}}: {{solutionResult.preciptation_conc[solidName]*1e3 | number: '1.3-3'}} mM\n              </span>\n            </li>\n          </ul>\n        </div>\n        <div>\n          <b>Ionic Activity Product and log(Ksp):</b>\n          <ul>\n            <li *ngFor=\"let solidName of objectKeys(solutionResult.ionic_activity_prod)\">\n              <span *ngIf=\"solutionResult.ionic_activity_prod[solidName]\">\n                {{solidName}}: {{solutionResult.ionic_activity_prod[solidName].toPrecision(4) }};\n                Ksp = {{solutionResult.log_K_solubility[solidName] | number: '1.3-3'}}\n              </span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Strang way to include this spinner... -->\n<div style=\"text-align: center;\">\n  <ng-template #loading>\n    <div style=\"text-align: center;\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/species-input-step/species-input-step.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/species-input-step/species-input-step.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"compoundsInputForm\">\n  <div style=\"display: flex;\">\n    <div formArrayName=\"compounds\" style=\"flex-basis: 50%;\">\n      <div *ngFor=\"let compound of compoundsInput.controls; let i=index\" class=\"compound-input\">\n        <app-autocomplete-compound [control]=\"compound\"></app-autocomplete-compound>\n        <button *ngIf=\"(i+1) === compoundsInput.length\" mat-icon-button (click)=\"handleMoreInputCompound()\">\n          <mat-icon>add_circle</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"handleRemoveCompound(i)\">\n          <mat-icon>remove_circle</mat-icon>\n        </button>\n      </div>\n    </div>\n    <div style=\"flex-basis: 50%; display: flex; flex-direction: column;\">\n      <mat-form-field>\n        <mat-label>Closing Equation Type</mat-label>\n        <mat-select formControlName=\"closingEqType\">\n          <mat-option *ngFor=\"let closingType of closingEquationTypes\" [value]=\"closingType.value\">\n            {{closingType.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"initial_feed_mass_balance\" placeholder=\"Species direct from Feed\"\n          type=\"text\">\n      </mat-form-field>\n    </div>\n  </div>\n  <div>\n    <button mat-raised-button matStepperNext [disabled]=\"!compoundsInputForm.valid\"\n      (click)=\"onClickCreateEquilibrium.emit($event)\">\n      Create System ></button>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stepper/stepper.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stepper/stepper.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"compoundsInputForm\">\n    <ng-template matStepLabel>Chemical Species</ng-template>\n    <app-species-input-step\n      [compoundsInputForm]=\"compoundsInputForm\"\n      [equilibriumCalcForm]=\"equilibriumCalcForm\"\n      (onClickCreateEquilibrium)=\"handleCreateEquilibrium()\"\n    >\n    </app-species-input-step>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <ng-template matStepLabel>Equilibrium Calculation</ng-template>\n    <app-equilibrium-calculation\n      [compoundsInputForm]=\"compoundsInputForm\"\n      [equilibriumCalcForm]=\"equilibriumCalcForm\"\n    >\n    </app-equilibrium-calculation>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Solution Results</ng-template>\n    <app-solution-results-step>\n    </app-solution-results-step>\n    <div>\n      <button style=\"margin-right: 5px;\" mat-raised-button matStepperPrevious>Back</button>\n      <button mat-raised-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<div style=\"text-align: center;\">\n  <ng-template #loading>\n    <div style=\"text-align: center;\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </ng-template>\n</div>\n<!-- </div> -->\n\n\n\n<!--\n<h3>Form Input Compounds</h3>\n<p>\n  Form Status: {{ compoundsInputForm.status }}\n</p>\n\n<h3>Equlibrium Calculation Form</h3>\n<p>\n  Form Status: {{ equilibriumCalcForm.status }}\n</p>\n-->\n\n<!-- <p>\n  {{equilibriumCalcForm.value | json}}\n</p> -->\n\n<!-- <p>\n  {{compoundsInputForm.value | json}}\n</p> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table-species/table-species.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-species/table-species.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\n.spacer {\n  flex: 1;\n}\n\n.toolbar {\n  height: 60px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  padding: 10px;\n}\n\n.toolbar img {\n  margin: 0 16px;\n}\n\n.content {\n  padding: 0 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\na,\na:visited,\na:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\n\na:hover {\n  color: #125699;\n}\n\nfooter {\n  margin-top: auto;\n  height: 2.5rem;\n  width: 100%;\n  padding: 10px;\n  background-color: #1976d2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #1976d2;\n  color: white;\n}\n\n#page-container {\n  min-height: 100%;\n  height: 100vh;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW8vUHJvamVjdHMvQ2FyYm9uYXRlRGVwb3NpdGlvbi9SZXBvc2l0b3JpZXMvcHllcXVpb24tdmlld2VyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwwSkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FDQUY7O0FER0E7Ozs7OztFQU1FLGFBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7QUNBRjs7QURHQTtFQUNFLE9BQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNERjs7QURLQTtFQUNFLGNBQUE7QUNGRjs7QURLQTtFQUVFLGVBQUE7RUFHQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0xGOztBRFdBOzs7RUFHRSxjQUFBO0VBQ0EscUJBQUE7QUNSRjs7QURXQTtFQUNFLGNBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1JGOztBRFdBO0VBR0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ1ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4udG9vbGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgLy8gbWFyZ2luOiAtOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5jb250ZW50IHtcbiAgLy8gbWFyZ2luOiAzMnB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMzJweDtcbiAgLy8gbWF4LXdpZHRoOiA5NjBweDtcbiAgLy8gbWF4LXdpZHRoOiA5NjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTI1Njk5O1xufVxuXG5mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNwYWdlLWNvbnRhaW5lciB7XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiIsIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6aG92ZXIge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxMjU2OTk7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3BhZ2UtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pyequion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pyequion.service */ "./src/app/pyequion.service.ts");



let AppComponent = class AppComponent {
    constructor(pyequionService) {
        this.pyequionService = pyequionService;
        this.title = 'speciation-app';
        this.numberCasesShow = 1;
    }
    ngOnInit() {
        console.log('App loaded');
        this.pyequionService.startUp().subscribe(resp => {
            return null;
        });
        // this.pyequionService.createEquilibrium().subscribe(resp => {
        //   console.log(resp, '')
        // })
    }
    handleAddMoreCases() {
        this.numberCasesShow += 1;
    }
    get numbersCases() {
        return Array(this.numberCasesShow).fill(0); // .map((x,i)=> i)
    }
};
AppComponent.ctorParameters = () => [
    { type: _pyequion_service__WEBPACK_IMPORTED_MODULE_2__["PyequionService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules_aux */ "./src/app/modules_aux.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _table_species_table_species_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-species/table-species.component */ "./src/app/table-species/table-species.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/stepper/stepper.component.ts");
/* harmony import */ var _autocomplete_compound_autocomplete_compound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete-compound/autocomplete-compound.component */ "./src/app/autocomplete-compound/autocomplete-compound.component.ts");
/* harmony import */ var ngx_mathjax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mathjax */ "./node_modules/ngx-mathjax/fesm2015/ngx-mathjax.js");
/* harmony import */ var _math_math_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math/math.module */ "./src/app/math/math.module.ts");
/* harmony import */ var _equilibrium_calculation_equilibrium_calculation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./equilibrium-calculation/equilibrium-calculation.component */ "./src/app/equilibrium-calculation/equilibrium-calculation.component.ts");
/* harmony import */ var _solution_results_step_solution_results_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./solution-results-step/solution-results-step.component */ "./src/app/solution-results-step/solution-results-step.component.ts");
/* harmony import */ var _species_input_step_species_input_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./species-input-step/species-input-step.component */ "./src/app/species-input-step/species-input-step.component.ts");







// import { MathjaxComponent } from './mathjax/mathjax.component';





// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
const moduleListImport = [..._modules_aux__WEBPACK_IMPORTED_MODULE_2__["default"],
    ngx_mathjax__WEBPACK_IMPORTED_MODULE_7__["MathJaxModule"].forRoot({
        version: '2.7.5',
        config: 'TeX-AMS_HTML',
        hostname: 'cdnjs.cloudflare.com'
    }),
    _math_math_module__WEBPACK_IMPORTED_MODULE_8__["MathModule"].forRoot()
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _table_species_table_species_component__WEBPACK_IMPORTED_MODULE_4__["TableSpeciesComponent"],
            _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__["StepperComponent"],
            _autocomplete_compound_autocomplete_compound_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteCompoundComponent"],
            _equilibrium_calculation_equilibrium_calculation_component__WEBPACK_IMPORTED_MODULE_9__["EquilibriumCalculationComponent"],
            _solution_results_step_solution_results_step_component__WEBPACK_IMPORTED_MODULE_10__["SolutionResultsStepComponent"],
            _species_input_step_species_input_step_component__WEBPACK_IMPORTED_MODULE_11__["SpeciesInputStepComponent"],
        ],
        imports: moduleListImport,
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/autocomplete-compound/autocomplete-compound.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/autocomplete-compound/autocomplete-compound.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG9jb21wbGV0ZS1jb21wb3VuZC9hdXRvY29tcGxldGUtY29tcG91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/autocomplete-compound/autocomplete-compound.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/autocomplete-compound/autocomplete-compound.component.ts ***!
  \**************************************************************************/
/*! exports provided: AutocompleteCompoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteCompoundComponent", function() { return AutocompleteCompoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_compounds_input_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/compounds-input.json */ "./src/data/compounds-input.json");
var _data_compounds_input_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/compounds-input.json */ "./src/data/compounds-input.json", 1);



 //'../data/compounds-input.json'

let AutocompleteCompoundComponent = class AutocompleteCompoundComponent {
    constructor() {
        // myControl = new FormControl();
        this.options = _data_compounds_input_json__WEBPACK_IMPORTED_MODULE_3__.compounds;
    }
    ngOnInit() {
        this.filteredOptions = this.control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AutocompleteCompoundComponent.prototype, "control", void 0);
AutocompleteCompoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-autocomplete-compound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./autocomplete-compound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/autocomplete-compound/autocomplete-compound.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./autocomplete-compound.component.scss */ "./src/app/autocomplete-compound/autocomplete-compound.component.scss")).default]
    })
], AutocompleteCompoundComponent);



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: mapCloseEquationEnum, mapCloseEquationInverse, pCO2_ref, closingEquationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapCloseEquationEnum", function() { return mapCloseEquationEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapCloseEquationInverse", function() { return mapCloseEquationInverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pCO2_ref", function() { return pCO2_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closingEquationTypes", function() { return closingEquationTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const mapCloseEquationEnum = {
    'OPEN': 0,
    'CARBON_TOTAL': 1,
    'PH': 2,
    'NONE': 3,
};
const mapCloseEquationInverse = {
    0: 'OPEN',
    1: 'CARBON_TOTAL',
    2: 'PH',
    3: 'NONE',
};
const pCO2_ref = 0.0003908408957924021;
const closingEquationTypes = [
    { label: 'Open', value: 0 },
    { label: 'Closed', value: 1 },
    { label: 'pH', value: 2 },
    { label: 'None', value: mapCloseEquationEnum['NONE'] },
];


/***/ }),

/***/ "./src/app/equilibrium-calculation/equilibrium-calculation.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/equilibrium-calculation/equilibrium-calculation.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlsaWJyaXVtLWNhbGN1bGF0aW9uL2VxdWlsaWJyaXVtLWNhbGN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/equilibrium-calculation/equilibrium-calculation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/equilibrium-calculation/equilibrium-calculation.component.ts ***!
  \******************************************************************************/
/*! exports provided: EquilibriumCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquilibriumCalculationComponent", function() { return EquilibriumCalculationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pyequion_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pyequion-store.service */ "./src/app/pyequion-store.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");





let EquilibriumCalculationComponent = class EquilibriumCalculationComponent {
    constructor(fb, pyequionStore) {
        this.fb = fb;
        this.pyequionStore = pyequionStore;
        // @Input() isLoading
        this.mapCloseEquationEnumTmplt = _constants__WEBPACK_IMPORTED_MODULE_4__["mapCloseEquationEnum"];
        // equilibriumCalcForm: FormGroup;
        this.mapCloseEquationLabel = {
            0: 'CO2 Pressure (atm)',
            1: 'Total Carbone (mM??)',
            2: 'pH',
            3: null,
        };
        this.nonIdealitiesTypes = [
            { label: 'Debye-Huckel (B-dot)', value: 'DEBYE' },
            { label: 'Pitzer', value: 'PITZER' },
            { label: 'Bromley', value: 'BROMLEY' },
            { label: 'SIT', value: 'SIT' },
        ];
    }
    ngOnInit() {
        // this.equilibriumCalcForm = this.fb.group({
        //   // secondCtrl: ['', Validators.required],
        //   concentrations: this.fb.array([
        //     this.fb.control(1.0, Validators.required)
        //   ]),
        //   temperature: [25.0, Validators.required],
        //   extraParameter: [null],
        //   allowPrecipitation: [false, Validators.required],
        //   nonidealityType: ['DEBYE', Validators.required],
        // });
        // this.setupFormFromInputs()
        this.pyequionStore.eqSystem$.subscribe((eqSys) => {
            this.setupFormFromInputs();
        });
    }
    setupFormFromInputs() {
        const extraPrmtrCtrl = this.equilibriumCalcForm.get('extraParameter');
        const concVals = this.equilibriumCalcForm.get('concentrations').value;
        const closeVal = this.compoundsInputForm.get('closingEqType').value;
        const compoundsVals = this.compoundsInput;
        if (_constants__WEBPACK_IMPORTED_MODULE_4__["mapCloseEquationInverse"][closeVal] == 'OPEN')
            extraPrmtrCtrl.setValue(_constants__WEBPACK_IMPORTED_MODULE_4__["pCO2_ref"]);
        else if (_constants__WEBPACK_IMPORTED_MODULE_4__["mapCloseEquationInverse"][closeVal] == 'PH')
            extraPrmtrCtrl.setValue(7.0);
        else if (_constants__WEBPACK_IMPORTED_MODULE_4__["mapCloseEquationInverse"][closeVal] == 'CARBON_TOTAL') {
            const idxCarbon = concVals.map((v, i) => {
                const splt = compoundsVals[i].split(/(?=[A-Z])/);
                const ck = splt.includes('C');
                return ck ? i : undefined;
            }).filter(x => x !== undefined);
            if (concVals) {
                let sm = 0.0;
                for (let index = 0; index < concVals.length; index++) {
                    const conc = concVals[index];
                    if (idxCarbon.includes(index))
                        sm += conc;
                }
                extraPrmtrCtrl.setValue(sm);
            }
            console.log('depois');
        }
    }
    handleCalculateEquilibrium() {
        this.pyequionStore.emitValueSolutionResults(null);
        const calcEqInputsFromForm = this.equilibriumCalcForm.value;
        const sysEqSerialized = this.pyequionStore.getValueEqSystem().sys_eq;
        const inputToEqCalc = Object.assign({}, calcEqInputsFromForm, { sys_eq: sysEqSerialized });
        this.pyequionStore.calculateEquilibrium(inputToEqCalc);
        console.log('aow');
    }
};
EquilibriumCalculationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _pyequion_store_service__WEBPACK_IMPORTED_MODULE_3__["PyequionStoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EquilibriumCalculationComponent.prototype, "compoundsInputForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EquilibriumCalculationComponent.prototype, "equilibriumCalcForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EquilibriumCalculationComponent.prototype, "eqSys", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EquilibriumCalculationComponent.prototype, "compoundsInput", void 0);
EquilibriumCalculationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-equilibrium-calculation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./equilibrium-calculation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/equilibrium-calculation/equilibrium-calculation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./equilibrium-calculation.component.scss */ "./src/app/equilibrium-calculation/equilibrium-calculation.component.scss")).default]
    })
], EquilibriumCalculationComponent);



/***/ }),

/***/ "./src/app/math/math.directive.ts":
/*!****************************************!*\
  !*** ./src/app/math/math.directive.ts ***!
  \****************************************/
/*! exports provided: MathDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathDirective", function() { return MathDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _math_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.service */ "./src/app/math/math.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MathDirective = class MathDirective {
    constructor(service, el) {
        this.service = service;
        this.el = el;
        this.alive$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._el = el.nativeElement;
    }
    ngOnInit() {
        this.service
            .ready()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.alive$)).subscribe(res => {
            this.service.render(this._el, this.appMath);
        });
    }
    ngOnChanges(changes) {
        console.log(changes);
    }
    ngOnDestroy() {
        this.alive$.next(false);
    }
};
MathDirective.ctorParameters = () => [
    { type: _math_service__WEBPACK_IMPORTED_MODULE_2__["MathServiceImpl"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MathDirective.prototype, "appMath", void 0);
MathDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appMath]'
    })
], MathDirective);



/***/ }),

/***/ "./src/app/math/math.module.ts":
/*!*************************************!*\
  !*** ./src/app/math/math.module.ts ***!
  \*************************************/
/*! exports provided: MathModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathModule", function() { return MathModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _math_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.service */ "./src/app/math/math.service.ts");
/* harmony import */ var _math_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.directive */ "./src/app/math/math.directive.ts");
var MathModule_1;




let MathModule = MathModule_1 = class MathModule {
    constructor(mathService) {
        console.log(`constructor module`);
        // see https://docs.mathjax.org/en/latest/advanced/dynamic.html
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML';
        script.async = true;
        document.getElementsByTagName('head')[0].appendChild(script);
        // const script2 = document.createElement('script') as HTMLScriptElement;
        // script2.type = 'text/javascript';
        // script2.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.3.2";
        // script2.async = true;
        // document.getElementsByTagName('head')[0].appendChild(script2);
        const config = document.createElement('script');
        config.type = 'text/x-mathjax-config';
        config.text = `
    MathJax.Ajax.config.path["mhchem"] = "https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.3.2";
    MathJax.Hub.Config({
        skipStartupTypeset: true,
        tex2jax: { inlineMath: [["$", "$"]],displayMath:[["$$", "$$"]] },
        TeX: {
          extensions: ["[mhchem]/mhchem.js"]
        }
      });
      MathJax.Hub.Register.StartupHook('End', () => {
        window.hubReady.next();
        window.hubReady.complete();
      });
    `;
        document.getElementsByTagName('head')[0].appendChild(config);
    }
    static forRoot() {
        console.log(`for root`);
        return {
            ngModule: MathModule_1,
            providers: [{ provide: _math_service__WEBPACK_IMPORTED_MODULE_2__["MathServiceImpl"], useClass: _math_service__WEBPACK_IMPORTED_MODULE_2__["MathServiceImpl"] }]
        };
    }
};
MathModule.ctorParameters = () => [
    { type: _math_service__WEBPACK_IMPORTED_MODULE_2__["MathServiceImpl"] }
];
MathModule = MathModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_math_directive__WEBPACK_IMPORTED_MODULE_3__["MathDirective"]],
        exports: [_math_directive__WEBPACK_IMPORTED_MODULE_3__["MathDirective"]]
    })
], MathModule);



/***/ }),

/***/ "./src/app/math/math.service.ts":
/*!**************************************!*\
  !*** ./src/app/math/math.service.ts ***!
  \**************************************/
/*! exports provided: MathServiceImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathServiceImpl", function() { return MathServiceImpl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MathServiceImpl = class MathServiceImpl {
    constructor() {
        console.log(`service constructor`);
        this.notifier = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        window.hubReady = this.notifier;
    }
    ready() {
        return this.notifier;
    }
    render(element, math) {
        if (math) {
            if (math.latex) {
                element.innerText = math.latex;
            }
            else {
                element.innerHTML = math.mathml;
            }
        }
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
    }
};
MathServiceImpl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], MathServiceImpl);



/***/ }),

/***/ "./src/app/modules_aux.ts":
/*!********************************!*\
  !*** ./src/app/modules_aux.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");






//Angular Material Components






























const a = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
];
/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "./src/app/pyequion-store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/pyequion-store.service.ts ***!
  \*******************************************/
/*! exports provided: PyequionStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PyequionStoreService", function() { return PyequionStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pyequion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pyequion.service */ "./src/app/pyequion.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PyequionStoreService = class PyequionStoreService {
    constructor(pyequionService) {
        this.pyequionService = pyequionService;
        this.eqSystemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.eqSystem$ = this.eqSystemSubject.asObservable();
        this.isLoading = false;
        this.solutionResultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.solutionResult$ = this.solutionResultSubject.asObservable();
        this.reactionsLatex$ = this.eqSystem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(eqSystem => {
            if (!eqSystem)
                return null;
            const convertedReacs = eqSystem.reactionsLatex.map(this.fixReactionLatex());
            return convertedReacs;
        }));
        this.reactionsLatexAsConcatenatedString$ = this.eqSystem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(eqSystem => {
            if (!eqSystem)
                return null;
            const convertedReacs = eqSystem.reactionsLatex.map(this.fixReactionLatex());
            // return convertedReacs
            // return '$a^2$'
            return { latex: '$' + convertedReacs.join('\\\\ ') + '$' };
        }));
        this.solidReactionsLatex$ = this.eqSystem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(eqSystem => {
            if (!eqSystem)
                return null;
            const convertedReacs = eqSystem.solidReactionsLatex.map(this.fixReactionLatex());
            if (convertedReacs.length == 1 && convertedReacs[0] == "\\ce <=}")
                return null; //some kind of bug... (fix backend?)
            console.log(convertedReacs);
            return convertedReacs;
        }));
        this.solidReactionsLatexAsConcatenatedString$ = this.eqSystem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(eqSystem => {
            if (!eqSystem)
                return null;
            const convertedReacs = eqSystem.solidReactionsLatex.map(this.fixReactionLatex());
            if (convertedReacs.length == 1 && convertedReacs[0] == "\\ce <=}")
                return null; //some kind of bug... (fix backend?)
            // console.log(convertedReacs);
            // return convertedReacs
            return { latex: '$' + convertedReacs.join('\\\\ ') + '$' };
        }));
    }
    fixReactionLatex() {
        return reac => {
            if (reac.includes('irrev')) {
                const aux1 = 'a';
            }
            else if (reac.includes('__')) {
                const aux1 = reac.split('__');
                const aux2 = aux1[1].split('^');
                const solidName = aux2[0];
                const newStr = reac.replace('__' + solidName, `_\{${solidName}\}`);
                return newStr;
            }
            else {
                return reac;
            }
        };
    }
    createEquilibrium(inputCompounds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            const respRPC = yield this.pyequionService.createEquilibrium(inputCompounds).toPromise();
            this.isLoading = false;
            const eqSystem = respRPC.result;
            this.eqSystemSubject.next(eqSystem);
        });
    }
    calculateEquilibrium(inputEqCalculation) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            const respRPC = yield this.pyequionService.calculateEquilibrium(inputEqCalculation).toPromise();
            const solutionResult = respRPC.result;
            this.isLoading = false;
            this.solutionResultSubject.next(solutionResult);
        });
    }
    emitValueEqSystem(val) {
        this.eqSystemSubject.next(val);
    }
    getValueEqSystem() {
        return this.eqSystemSubject.getValue();
    }
    emitValueSolutionResults(val) {
        this.solutionResultSubject.next(val);
    }
};
PyequionStoreService.ctorParameters = () => [
    { type: _pyequion_service__WEBPACK_IMPORTED_MODULE_2__["PyequionService"] }
];
PyequionStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PyequionStoreService);



/***/ }),

/***/ "./src/app/pyequion.service.ts":
/*!*************************************!*\
  !*** ./src/app/pyequion.service.ts ***!
  \*************************************/
/*! exports provided: PyequionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PyequionService", function() { return PyequionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlBackend;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let PyequionService = class PyequionService {
    // private reactionsSubject = new BehaviorSubject<any>(null);
    // public reactions$ = this.reactionsSubject.asObservable();
    constructor(http) {
        this.http = http;
        // // Test only
        // this.createEquilibrium().subscribe(resp => {
        //   console.log(resp)
        // })
    }
    // public emitSimDataBeforeRun(v: any) {
    //   this.reactionsSubject.next(v);
    // }
    startUp() {
        const body = {
            "jsonrpc": "2.0",
            "method": "App.startup",
            "params": {},
            "id": "3"
        };
        return this.http.post(URL, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((payload) => this.log(`startup`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(resp => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(resp)), //(resp => of(resp)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => {
            console.log('HIT MAP in Startup');
            if (!resp) {
                throw new Error('Request for pyequion backend failed');
            }
            if ('error' in resp) {
                throw new Error(resp.error.message);
            }
            return resp;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('startUp')));
    }
    createEquilibrium(inputCompounds) {
        const body = {
            "jsonrpc": "2.0",
            "method": "App.create_equilibrium",
            "params": inputCompounds,
            "id": "1"
        };
        return this.http.post(URL, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((newHero) => this.log(`posted`)), 
        // debounceTime(1000),
        // distinctUntilChanged(), //RETURN ME AFTER CHECKING WITH ASYNC SERVER (G CLOUD)
        // exhaustMap(resp => of(resp)), //(resp => of(resp)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => {
            console.log('HIT MAP in Post CREATE');
            if (!resp) {
                throw new Error('Request for pyequion backend failed');
            }
            if ('error' in resp) {
                throw new Error(resp.error.message);
            }
            return resp;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('createEq')));
    }
    calculateEquilibrium(inputEqCalculation) {
        const body = {
            "jsonrpc": "2.0",
            "method": "App.solve_equilibrium",
            "params": inputEqCalculation,
            "id": "1"
        };
        return this.http.post(URL, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((newHero) => this.log(`posted`)), 
        // debounceTime(1000),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(resp => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(resp)), //(resp => of(resp)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => {
            console.log('HIT MAP in Post SOLVE');
            if (!resp) {
                throw new Error('Request for pyequion backend failed');
            }
            if ('error' in resp) {
                throw new Error(resp.error.message);
            }
            return resp;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('createEq')));
    }
    // return this.http.post<JSONRPCModel>(URL, body, httpOptions).pipe(
    //   tap((newHero: JSONRPCModel) => this.log(`posted`)),
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(msg) {
        console.log(msg);
    }
};
PyequionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PyequionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PyequionService);



/***/ }),

/***/ "./src/app/solution-results-step/solution-results-step.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/solution-results-step/solution-results-step.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbHV0aW9uLXJlc3VsdHMtc3RlcC9zb2x1dGlvbi1yZXN1bHRzLXN0ZXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/solution-results-step/solution-results-step.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/solution-results-step/solution-results-step.component.ts ***!
  \**************************************************************************/
/*! exports provided: SolutionResultsStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionResultsStepComponent", function() { return SolutionResultsStepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pyequion_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pyequion-store.service */ "./src/app/pyequion-store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let SolutionResultsStepComponent = class SolutionResultsStepComponent {
    constructor(pyequionStore) {
        this.pyequionStore = pyequionStore;
        this.objectKeys = Object.keys;
        this.speciesDisplay$ = this.pyequionStore.solutionResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(solRst => {
            if (!solRst)
                return null;
            const collection = solRst.specie_names.map((v, i) => {
                return {
                    name: v,
                    conc: solRst.c_molal[i]
                };
            }).filter(val => val.name !== 'H2O' && (!val.name.includes('g')));
            return collection;
        }));
        this.precipitatedDisplay$ = this.pyequionStore.solutionResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(solRst => {
            if (!solRst)
                return null;
            const greaterZero = Object.keys(solRst.preciptation_conc).filter(key => {
                return solRst.preciptation_conc[key] > 1e-20;
            });
            return greaterZero;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(names => {
            if (!names)
                return null;
            return (!!names.length);
        }));
    }
    ngOnInit() {
    }
};
SolutionResultsStepComponent.ctorParameters = () => [
    { type: _pyequion_store_service__WEBPACK_IMPORTED_MODULE_2__["PyequionStoreService"] }
];
SolutionResultsStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solution-results-step',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./solution-results-step.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/solution-results-step/solution-results-step.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./solution-results-step.component.scss */ "./src/app/solution-results-step/solution-results-step.component.scss")).default]
    })
], SolutionResultsStepComponent);



/***/ }),

/***/ "./src/app/species-input-step/species-input-step.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/species-input-step/species-input-step.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-horizontal-stepper {\n  width: 100%;\n}\n\n.compound-input {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW8vUHJvamVjdHMvQ2FyYm9uYXRlRGVwb3NpdGlvbi9SZXBvc2l0b3JpZXMvcHllcXVpb24tdmlld2VyL3NyYy9hcHAvc3BlY2llcy1pbnB1dC1zdGVwL3NwZWNpZXMtaW5wdXQtc3RlcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3BlY2llcy1pbnB1dC1zdGVwL3NwZWNpZXMtaW5wdXQtc3RlcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3BlY2llcy1pbnB1dC1zdGVwL3NwZWNpZXMtaW5wdXQtc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ob3Jpem9udGFsLXN0ZXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbXBvdW5kLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiIsIm1hdC1ob3Jpem9udGFsLXN0ZXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbXBvdW5kLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/species-input-step/species-input-step.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/species-input-step/species-input-step.component.ts ***!
  \********************************************************************/
/*! exports provided: SpeciesInputStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesInputStepComponent", function() { return SpeciesInputStepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");




let SpeciesInputStepComponent = class SpeciesInputStepComponent {
    constructor(fb) {
        this.fb = fb;
        this.onClickCreateEquilibrium = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closingEquationTypes = [
            { label: 'Open - CO2(g)', value: 0 },
            { label: 'Total Inorganic Carbon', value: 1 },
            { label: 'pH (to do)', value: 2 },
            { label: 'None', value: _constants__WEBPACK_IMPORTED_MODULE_3__["mapCloseEquationEnum"]['NONE'] },
        ];
    }
    ngOnInit() {
    }
    handleMoreInputCompound() {
        this.compoundsInput.push(this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        this.concentrations.push(this.fb.control(1.0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
    }
    handleRemoveCompound(i) {
        if (!this.compoundsInput.length)
            return;
        if (this.compoundsInput.length == 1) {
            this.compoundsInput.controls[i].setValue('');
            return;
        }
        if ((i + 1) === this.compoundsInput.length) {
            this.compoundsInput.controls[i].setValue('');
        }
        this.compoundsInput.controls.splice(i, 1);
        this.concentrations.controls.splice(i, 1);
    }
    get compoundsInput() {
        return this.compoundsInputForm.get('compounds');
    }
    get concentrations() {
        return this.equilibriumCalcForm.get('concentrations');
    }
    get closingEqType() {
        return this.compoundsInputForm.get('closingEqType');
    }
};
SpeciesInputStepComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpeciesInputStepComponent.prototype, "compoundsInputForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpeciesInputStepComponent.prototype, "equilibriumCalcForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SpeciesInputStepComponent.prototype, "onClickCreateEquilibrium", void 0);
SpeciesInputStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-species-input-step',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./species-input-step.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/species-input-step/species-input-step.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./species-input-step.component.scss */ "./src/app/species-input-step/species-input-step.component.scss")).default]
    })
], SpeciesInputStepComponent);



/***/ }),

/***/ "./src/app/stepper/stepper.component.scss":
/*!************************************************!*\
  !*** ./src/app/stepper/stepper.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-horizontal-stepper {\n  width: 100%;\n}\n\n.compound-input {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW8vUHJvamVjdHMvQ2FyYm9uYXRlRGVwb3NpdGlvbi9SZXBvc2l0b3JpZXMvcHllcXVpb24tdmlld2VyL3NyYy9hcHAvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ob3Jpem9udGFsLXN0ZXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbXBvdW5kLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiIsIm1hdC1ob3Jpem9udGFsLXN0ZXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbXBvdW5kLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/stepper/stepper.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stepper/stepper.component.ts ***!
  \**********************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pyequion_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pyequion-store.service */ "./src/app/pyequion-store.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _pyequion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pyequion.service */ "./src/app/pyequion.service.ts");






let StepperComponent = class StepperComponent {
    // reactionsDisplay$: Observable<string> = this.pyequionStore.reactionsLatex$.pipe(
    //   map(this.mergeLatexReactions())
    // )
    // solidReactionsDisplay$: Observable<string> = this.pyequionStore.solidReactionsLatex$.pipe(
    //   map(this.mergeLatexReactions())
    // )
    // speciesDisplay$: Observable<any[]> = this.pyequionStore.solutionResult$.pipe(
    //   map(solRst => {
    //     if (!solRst)
    //       return null
    //     const collection = solRst.specie_names.map((v,i) => {
    //       return {
    //         name: v,
    //         conc: solRst.c_molal[i]
    //       }
    //     }).filter(val => val.name !== 'H2O' && (!val.name.includes('g')))
    //     return collection
    //   })
    // )
    // precipitatedDisplay$: Observable<any[]> = this.pyequionStore.solutionResult$.pipe(
    //   map(solRst => {
    //     if (!solRst)
    //       return null
    //     const greaterZero = Object.keys(solRst.preciptation_conc).filter(key => {
    //       return solRst.preciptation_conc[key] > 1e-20
    //     })
    //     return greaterZero
    //   }),
    //   filter(names => {
    //     if (!names)
    //       return null
    //     return(!!names.length)
    //   }
    // ))
    constructor(fb, pyequionStore) {
        this.fb = fb;
        this.pyequionStore = pyequionStore;
        this.objectKeys = Object.keys;
        this.NONE = _constants__WEBPACK_IMPORTED_MODULE_4__["mapCloseEquationEnum"]['NONE'];
        this.isLinear = false;
    }
    ngOnInit() {
        this.compoundsInputForm = this.fb.group({
            compounds: this.fb.array([
                this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            ]),
            closingEqType: [_constants__WEBPACK_IMPORTED_MODULE_4__["mapCloseEquationEnum"]['NONE'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            initial_feed_mass_balance: [''],
        });
        this.equilibriumCalcForm = this.fb.group({
            concentrations: this.fb.array([
                this.fb.control(1.0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            ]),
            temperature: [25.0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            extraParameter: [null],
            allowPrecipitation: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nonidealityType: ['DEBYE', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get compoundsInput() {
        return this.compoundsInputForm.get('compounds');
    }
    handleCreateEquilibrium() {
        this.pyequionStore.emitValueEqSystem(null);
        let initialFromFeed = null;
        if (this.compoundsInputForm.value.initial_feed_mass_balance.trim() != '')
            initialFromFeed = this.compoundsInputForm.value.initial_feed_mass_balance.split(';');
        const compInput = Object.assign({}, this.compoundsInputForm.value, { initial_feed_mass_balance: initialFromFeed });
        this.pyequionStore.createEquilibrium(compInput);
    }
    ngOnDestroy() {
        // this.eqSystemSubject.unsubscribe()
    }
};
StepperComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _pyequion_store_service__WEBPACK_IMPORTED_MODULE_3__["PyequionStoreService"] }
];
StepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stepper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stepper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stepper/stepper.component.html")).default,
        providers: [_pyequion_store_service__WEBPACK_IMPORTED_MODULE_3__["PyequionStoreService"], _pyequion_service__WEBPACK_IMPORTED_MODULE_5__["PyequionService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stepper.component.scss */ "./src/app/stepper/stepper.component.scss")).default]
    })
], StepperComponent);



/***/ }),

/***/ "./src/app/table-species/table-species-datasource.ts":
/*!***********************************************************!*\
  !*** ./src/app/table-species/table-species-datasource.ts ***!
  \***********************************************************/
/*! exports provided: TableSpeciesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSpeciesDataSource", function() { return TableSpeciesDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the TableSpecies view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class TableSpeciesDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor() {
        super();
        this.data = EXAMPLE_DATA;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/table-species/table-species.component.scss":
/*!************************************************************!*\
  !*** ./src/app/table-species/table-species.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW8vUHJvamVjdHMvQ2FyYm9uYXRlRGVwb3NpdGlvbi9SZXBvc2l0b3JpZXMvcHllcXVpb24tdmlld2VyL3NyYy9hcHAvdGFibGUtc3BlY2llcy90YWJsZS1zcGVjaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWJsZS1zcGVjaWVzL3RhYmxlLXNwZWNpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWJsZS1zcGVjaWVzL3RhYmxlLXNwZWNpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/table-species/table-species.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/table-species/table-species.component.ts ***!
  \**********************************************************/
/*! exports provided: TableSpeciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSpeciesComponent", function() { return TableSpeciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _table_species_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-species-datasource */ "./src/app/table-species/table-species-datasource.ts");






let TableSpeciesComponent = class TableSpeciesComponent {
    constructor() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    ngOnInit() {
        this.dataSource = new _table_species_datasource__WEBPACK_IMPORTED_MODULE_5__["TableSpeciesDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], TableSpeciesComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], TableSpeciesComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
], TableSpeciesComponent.prototype, "table", void 0);
TableSpeciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-species',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-species.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table-species/table-species.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-species.component.scss */ "./src/app/table-species/table-species.component.scss")).default]
    })
], TableSpeciesComponent);



/***/ }),

/***/ "./src/data/compounds-input.json":
/*!***************************************!*\
  !*** ./src/data/compounds-input.json ***!
  \***************************************/
/*! exports provided: compounds, compounds_all, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"compounds\":[\"CdCl2\",\"Cu(OH)2\",\"Fe(OH)2\",\"NaHSO4\",\"AlF3\",\"CaHPO4\",\"Fe(OH)3\",\"BaCO3\",\"ZnBr2\",\"SrCO3\",\"MgCO3\",\"CaSO4\",\"CaCO3\",\"KOH\",\"PbBr2\",\"PbSO4\",\"MnCl2\",\"ZnCl2\",\"Na2CO3\",\"H2Sg\",\"FeF3\",\"MgCl2\",\"CdBr2\",\"CdF2\",\"FeCl3\",\"Al2(SO4)3\",\"BaCl2\",\"MgSO4\",\"ZnSO4\",\"CaCl2\",\"CdCO3\",\"BaSO4\",\"CuCl2\",\"H3BO3\",\"SrSO4\",\"Cd(OH)2\",\"NH3\",\"MnCO3\",\"MgHPO4\",\"Fe(HS)2\",\"CO2(g)\",\"CuSO4\",\"CH4\",\"Pb(HS)2\",\"NaF\",\"FeCO3\",\"FeSO4\",\"Pb(OH)2\",\"H2O\",\"Al(OH)3\",\"NaHCO3\",\"N2\",\"H4SiO4\",\"CdOHCl\",\"CdSO4\",\"O2\",\"H2\",\"Cd(HS)2\",\"PbCO3\",\"Zn(OH)2\",\"PbCl2\",\"CuCO3\",\"KCl\",\"FeHPO4\",\"K2SO4\",\"H2S\",\"Zn(HS)2\",\"ZnCO3\",\"ZnOHCl\",\"H3PO4\",\"CO2\",\"MnSO4\",\"NaCl\",\"HF\",\"NaOH\",\"Mn(NO3)2\",\"PbF2\"],\"compounds_all\":[\"Pb(OH)4--\",\"CaOH+\",\"FeH2PO4++\",\"FeOH++\",\"CdCl2\",\"CdHS+\",\"Cu(OH)2\",\"Fe(OH)2\",\"Pb++\",\"Pb3(OH)4++\",\"NaHSO4\",\"Cu(CO3)2--\",\"PbF4--\",\"NH4+\",\"Fe(SO4)2-\",\"MnF+\",\"AlF3\",\"AlF++\",\"CuHCO3+\",\"CaHPO4\",\"Cd(OH)3-\",\"BF3OH-\",\"ZnF+\",\"CO3--\",\"H2PO4-\",\"Fe(OH)3\",\"BaCO3\",\"Fe3(OH)4+++++\",\"PbNO3+\",\"ZnBr2\",\"BF4-\",\"SiF6--\",\"SrCO3\",\"F-\",\"FeOH+\",\"Zn(SO4)2--\",\"HSO4-\",\"H3SiO4-\",\"Mg++\",\"NaHPO4-\",\"BaOH+\",\"MgCO3\",\"CdBr+\",\"CaSO4\",\"CaCO3\",\"FeHSO4+\",\"CdHCO3+\",\"H2BO3-\",\"KOH\",\"Ca++\",\"PbBr2\",\"FeSO4+\",\"PbSO4\",\"FeH2PO4+\",\"Cd(HS)3-\",\"FeF+\",\"Cd2OH+++\",\"FeHSO4++\",\"CuOH+\",\"PO4---\",\"CuCl2-\",\"H+\",\"MnCl2\",\"ZnCl2\",\"LiSO4-\",\"Na2CO3\",\"MnCl3-\",\"CuF+\",\"PbCl+\",\"NH4SO4-\",\"H2Sg\",\"CdNO3+\",\"FeHCO3+\",\"Pb(SO4)2--\",\"FeF3\",\"MgCl2\",\"HCO3-\",\"Mn(OH)3-\",\"FeCl+\",\"Al(OH)2+\",\"Zn(CO3)2--\",\"CdBr2\",\"FeCl++\",\"Sr++\",\"HPO4--\",\"CdF2\",\"AlOH++\",\"FeCl3\",\"Pb(CO3)2--\",\"Pb(OH)3-\",\"Pb(HS)3-\",\"Al2(SO4)3\",\"BaCl2\",\"MgSO4\",\"FeHPO4+\",\"Fe+++\",\"ZnSO4\",\"CaCl2\",\"Al(OH)4-\",\"CdCO3\",\"BF(OH)3-\",\"ZnCl3-\",\"H2SiO4--\",\"BaSO4\",\"MgOH+\",\"SO4--\",\"MnOH+\",\"AlHSO4++\",\"BaHCO3+\",\"CuCl3--\",\"Li+\",\"CuCl2\",\"BF2(OH)2-\",\"Cu2(OH)2++\",\"PbF+\",\"ZnHCO3+\",\"MgH2PO4+\",\"OH-\",\"Zn(HS)3-\",\"PbCl3-\",\"Fe(OH)3-\",\"AlSO4+\",\"HS-\",\"Zn(OH)3-\",\"SrHCO3+\",\"NaCO3-\",\"Cd++\",\"CdF+\",\"H3BO3\",\"MnHCO3+\",\"SrSO4\",\"K+\",\"PbHCO3+\",\"Cd(OH)2\",\"Zn++\",\"Fe(HS)3-\",\"Fe2(OH)2++++\",\"NH3\",\"KHPO4-\",\"MnCO3\",\"MgHPO4\",\"NO3-\",\"Fe(HS)2\",\"Al(SO4)2-\",\"Na+\",\"CO2(g)\",\"CuSO4\",\"FeF2+\",\"FeCl2+\",\"SrOH+\",\"CH4\",\"NaSO4-\",\"MgHCO3+\",\"MgPO4-\",\"MgF+\",\"Cu(HS)3-\",\"Pb(HS)2\",\"Cl-\",\"PbCl4--\",\"NaF\",\"Cd(SO4)2--\",\"Cu(OH)4--\",\"CdOH+\",\"FeCO3\",\"HF2-\",\"Mn+++\",\"FeSO4\",\"Pb(OH)2\",\"H2O\",\"CaPO4-\",\"Al(OH)3\",\"NaHCO3\",\"AlF2+\",\"N2\",\"H4SiO4\",\"CaH2PO4+\",\"CdOHCl\",\"CuCl3-\",\"CdCl+\",\"CdSO4\",\"Cd(HS)4--\",\"O2\",\"H2\",\"Fe(OH)4-\",\"PbOH+\",\"HSg-\",\"Cd(HS)2\",\"KSO4-\",\"Fe++\",\"Mn++\",\"Fe(OH)2+\",\"PbCO3\",\"Zn(OH)2\",\"PbCl2\",\"MnCl+\",\"ZnCl4--\",\"CaHSO4+\",\"Cu++\",\"ZnBr+\",\"CuCO3\",\"PbF3-\",\"CdCl3-\",\"KCl\",\"FeHPO4\",\"AlF4-\",\"Pb2OH+++\",\"K2SO4\",\"FeF++\",\"Cu(OH)3-\",\"H2S\",\"ZnOH+\",\"Zn(HS)2\",\"Cd(CO3)2--\",\"ZnCO3\",\"Cd(OH)4--\",\"Zn(OH)4--\",\"ZnOHCl\",\"H3PO4\",\"CO2\",\"Br-\",\"MnSO4\",\"CuCl4--\",\"NaCl\",\"Cu+\",\"HF\",\"NaOH\",\"ZnCl+\",\"Mn(NO3)2\",\"S--\",\"NO2-\",\"PbF2\",\"Ba++\",\"CuCl+\",\"PbBr+\",\"CaHCO3+\",\"Al+++\"]}");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    // urlBackend: 'http://localhost:5000/api'
    urlBackend: 'https://us-central1-datalab-260621.cloudfunctions.net/function-pyequion'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/caio/Projects/CarbonateDeposition/Repositories/pyequion-viewer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map