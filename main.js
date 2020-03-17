(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-diagram [model]='model' (nodeClicked)='setSelectedNode($event)'></app-diagram>\n<app-inspector [selectedNode]='selectedNode' [model]='model'></app-inspector>"

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
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.selectedNode = null;
        this.model = new gojs__WEBPACK_IMPORTED_MODULE_2__["TreeModel"]([
            { 'key': 1, 'name': 'Admin User', 'E-Mail': 'sriharsha@example.com' },
            { 'key': 2, 'name': 'Valentine Paoletti', 'E-Mail': '05akwvi4@test.com', 'parent': 1 },
            { 'key': 3, 'name': 'Nathan Ash', 'E-Mail': '0q0v6r11@test.com', 'parent': 1 },
            { 'key': 4, 'name': 'Lisbeth Dreher', 'E-Mail': '0o0akdh0@test.com', 'parent': 1 },
            { 'key': 5, 'name': 'Argelia Colclough', 'E-Mail': '0x154qnb@test.com', 'parent': 1 },
            { 'key': 6, 'name': 'Emelia Thoman', 'E-Mail': '00n26mys@test.com', 'parent': 1 },
            { 'key': 7, 'name': 'Dortha Lambrecht', 'E-Mail': '0jnrmpeg@test.com', 'parent': 1 },
            { 'key': 8, 'name': 'Jule Colclough', 'E-Mail': '0obiwmma@test.com', 'parent': 1 },
            { 'key': 9, 'name': 'Jule Thoman', 'E-Mail': '0u19xd68@test.com', 'parent': 1 },
            { 'key': 10, 'name': 'Marla Damewood', 'E-Mail': '0k9hjb72@test.com', 'parent': 1 },
            { 'key': 11, 'name': 'Delila Petrone', 'E-Mail': '0b9pbp1c@test.com', 'parent': 1 },
            { 'key': 12, 'name': 'Lisbeth Giancola', 'E-Mail': '01ww6995@test.com', 'parent': 1 },
            { 'key': 13, 'name': 'Jammie Petrone', 'E-Mail': '0me9dgw6@test.com', 'parent': 1 },
            { 'key': 14, 'name': 'Delila Paoletti', 'E-Mail': '05dwioun@test.com', 'parent': 1 },
            { 'key': 15, 'name': 'Krista Younker', 'E-Mail': '0c73oz28@test.com', 'parent': 1 },
            { 'key': 16, 'name': 'Bettyann Legrande', 'E-Mail': '0qddlyrf@test.com', 'parent': 1 },
            { 'key': 17, 'name': 'Marla Nickell', 'E-Mail': '0halgp4v@test.com', 'parent': 1 },
            { 'key': 18, 'name': 'Krista Yan', 'E-Mail': '0nqhsduv@test.com', 'parent': 1 },
            { 'key': 19, 'name': 'Gertrudis Parkhurst', 'E-Mail': '0liz8pf7@test.com', 'parent': 1 },
            { 'key': 20, 'name': 'Maricela Heenan', 'E-Mail': '05869ght@test.com', 'parent': 1 }
        ]);
    }
    AppComponent.prototype.setSelectedNode = function (node) {
        this.selectedNode = node;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diagram/diagram.component */ "./src/app/diagram/diagram.component.ts");
/* harmony import */ var _inspector_inspector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector/inspector.component */ "./src/app/inspector/inspector.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_5__["DiagramComponent"],
                _inspector_inspector_component__WEBPACK_IMPORTED_MODULE_6__["InspectorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/diagram/diagram.component.css":
/*!***********************************************!*\
  !*** ./src/app/diagram/diagram.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myDiagramDiv {\n  width: 1500px;\n  height: 500px;\n  border: 1px solid black;\n  background-color: #696969ea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteURpYWdyYW1EaXYge1xuICB3aWR0aDogMTUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5Njk2OWVhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/diagram/diagram.component.html":
/*!************************************************!*\
  !*** ./src/app/diagram/diagram.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='myDiagramDiv'></div>"

/***/ }),

/***/ "./src/app/diagram/diagram.component.ts":
/*!**********************************************!*\
  !*** ./src/app/diagram/diagram.component.ts ***!
  \**********************************************/
/*! exports provided: DiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramComponent", function() { return DiagramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);



var $ = gojs__WEBPACK_IMPORTED_MODULE_2__["GraphObject"].make;
var DiagramComponent = /** @class */ (function () {
    function DiagramComponent() {
        this.diagram = null;
        this.nodeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DiagramComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.diagram = $(gojs__WEBPACK_IMPORTED_MODULE_2__["Diagram"], 'myDiagramDiv', {
            layout: $(gojs__WEBPACK_IMPORTED_MODULE_2__["TreeLayout"], {
                isOngoing: true,
                treeStyle: gojs__WEBPACK_IMPORTED_MODULE_2__["TreeLayout"].StyleLastParents,
                arrangement: gojs__WEBPACK_IMPORTED_MODULE_2__["TreeLayout"].ArrangementHorizontal,
                // properties for most of the tree:
                angle: 90,
                layerSpacing: 35,
                // properties for the "last parents":
                alternateAngle: 90,
                alternateLayerSpacing: 35,
                alternateAlignment: gojs__WEBPACK_IMPORTED_MODULE_2__["TreeLayout"].AlignmentBus,
                alternateNodeSpacing: 20
            }),
            'undoManager.isEnabled': true
        });
        // define the Node template
        this.diagram.nodeTemplate =
            $(gojs__WEBPACK_IMPORTED_MODULE_2__["Node"], 'Auto', 
            // for sorting, have the Node.text be the data.name
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('text', 'name'), 
            // bind the Part.layerName to control the Node's layer depending on whether it isSelected
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('layerName', 'isSelected', function (sel) { return sel ? 'Foreground' : ''; }).ofObject(), 
            // define the node's outer shape
            $(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], 'Rectangle', {
                name: 'SHAPE', fill: 'lightblue', stroke: null,
                // set the port properties:
                portId: '', fromLinkable: true, toLinkable: true, cursor: 'pointer'
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('fill', '', function (node) {
                // modify the fill based on the tree depth level
                var levelColors = ['#AC193D', '#2672EC', '#8C0095', '#5133AB',
                    '#008299', '#D24726', '#008A00', '#094AB2'];
                var color = node.findObject('SHAPE').fill;
                var dia = node.diagram;
                if (dia && dia.layout.network) {
                    dia.layout.network.vertexes.each(function (v) {
                        if (v.node && v.node.key === node.data.key) {
                            var level = v.level % (levelColors.length);
                            color = levelColors[level];
                        }
                    });
                }
                return color;
            }).ofObject()), $(gojs__WEBPACK_IMPORTED_MODULE_2__["Panel"], 'Horizontal', $(gojs__WEBPACK_IMPORTED_MODULE_2__["Picture"], {
                name: 'Picture',
                desiredSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](39, 50),
                margin: new gojs__WEBPACK_IMPORTED_MODULE_2__["Margin"](6, 8, 6, 10)
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('source', 'key', function (key) {
                if (key < 0 || key > 20)
                    return ''; // There are only 16 images on the server
                return 'assets/HS' + key + '.png';
            })), 
            // define the panel where the text will appear
            $(gojs__WEBPACK_IMPORTED_MODULE_2__["Panel"], 'Table', {
                maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](150, 999),
                margin: new gojs__WEBPACK_IMPORTED_MODULE_2__["Margin"](6, 10, 0, 3),
                defaultAlignment: gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].Left
            }, $(gojs__WEBPACK_IMPORTED_MODULE_2__["RowColumnDefinition"], { column: 2, width: 4 }), $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], { font: '9pt  Segoe UI,sans-serif', stroke: 'white' }, // the name
            {
                row: 0, column: 0, columnSpan: 5,
                font: '12pt Segoe UI,sans-serif',
                editable: true, isMultiline: false,
                minSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](10, 16)
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('text', 'name').makeTwoWay()), $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], 'E-Mail: ', { font: '9pt  Segoe UI,sans-serif', stroke: 'white' }, { row: 1, column: 0 }), $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], { font: '9pt  Segoe UI,sans-serif', stroke: 'white' }, {
                row: 1, column: 1, columnSpan: 4,
                editable: true, isMultiline: false,
                minSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](10, 14),
                margin: new gojs__WEBPACK_IMPORTED_MODULE_2__["Margin"](0, 0, 0, 3)
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('text', 'E-Mail').makeTwoWay()), $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], { font: '9pt  Segoe UI,sans-serif', stroke: 'white' }, { row: 2, column: 0 }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('text', 'key', function (v) { return 'ID: ' + v; })), $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], { font: '9pt  Segoe UI,sans-serif', stroke: 'white' }, { name: 'boss', row: 2, column: 3 }, // we include a name so we can access this TextBlock when deleting Nodes/Links
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('text', 'parent', function (v) { return 'Boss: ' + v; })), $(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], { font: '9pt  Segoe UI,sans-serif', stroke: 'white' }, // the comments
            {
                row: 3, column: 0, columnSpan: 5,
                font: 'italic 9pt sans-serif',
                wrap: gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"].WrapFit,
                editable: true,
                minSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](10, 14)
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]('text', 'comments').makeTwoWay())) // end Table Panel
            ) // end Horizontal Panel
            ); // end Node
        this.diagram.model = this.model;
        // when the selection changes, emit event to app-component updating the selected node
        this.diagram.addDiagramListener('ChangedSelection', function (e) {
            var node = _this.diagram.selection.first();
            _this.nodeClicked.emit(node);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", gojs__WEBPACK_IMPORTED_MODULE_2__["Model"])
    ], DiagramComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiagramComponent.prototype, "nodeClicked", void 0);
    DiagramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diagram',
            template: __webpack_require__(/*! ./diagram.component.html */ "./src/app/diagram/diagram.component.html"),
            styles: [__webpack_require__(/*! ./diagram.component.css */ "./src/app/diagram/diagram.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiagramComponent);
    return DiagramComponent;
}());



/***/ }),

/***/ "./src/app/inspector/inspector.component.css":
/*!***************************************************!*\
  !*** ./src/app/inspector/inspector.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  margin: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nform {\n  background: lightgray;\n  border: 1px solid black;\n}\n\ninput {\n  clear: both;\n  display: inherit;\n  float: initial;\n  font-weight: 300;\n  border-radius: 10px;\n  background: white;\n}\n\ninput:focus {\n  border-radius: 10px;\n  outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zcGVjdG9yL2luc3BlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2luc3BlY3Rvci9pbnNwZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuZm9ybSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmlucHV0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZsb2F0OiBpbml0aWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/inspector/inspector.component.html":
/*!****************************************************!*\
  !*** ./src/app/inspector/inspector.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"selectedNode\" (ngSubmit)=\"onCommitForm()\">\n  Name: <input name=\"name\" [(ngModel)]=\"data.name\" />\n  Boss: <input name=\"parent\" [(ngModel)]=\"data.parent\" />\n  <button type=\"submit\">Commit</button>\n</form>"

/***/ }),

/***/ "./src/app/inspector/inspector.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inspector/inspector.component.ts ***!
  \**************************************************/
/*! exports provided: InspectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorComponent", function() { return InspectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);



var InspectorComponent = /** @class */ (function () {
    function InspectorComponent() {
        this.data = {
            name: null,
            parent: null
        };
    }
    Object.defineProperty(InspectorComponent.prototype, "selectedNode", {
        get: function () { return this._selectedNode; },
        set: function (node) {
            if (node && node != null) {
                this._selectedNode = node;
                this.data.name = this._selectedNode.data.name;
                this.data.parent = this._selectedNode.data.parent;
            }
            else {
                this._selectedNode = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    InspectorComponent.prototype.onCommitForm = function () {
        this.model.startTransaction();
        this.model.set(this.selectedNode.data, 'name', this.data.name);
        this.model.set(this.selectedNode.data, 'parent', this.data.parent);
        this.model.commitTransaction();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", gojs__WEBPACK_IMPORTED_MODULE_2__["Model"])
    ], InspectorComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", gojs__WEBPACK_IMPORTED_MODULE_2__["Node"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [gojs__WEBPACK_IMPORTED_MODULE_2__["Node"]])
    ], InspectorComponent.prototype, "selectedNode", null);
    InspectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inspector',
            template: __webpack_require__(/*! ./inspector.component.html */ "./src/app/inspector/inspector.component.html"),
            styles: [__webpack_require__(/*! ./inspector.component.css */ "./src/app/inspector/inspector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InspectorComponent);
    return InspectorComponent;
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

module.exports = __webpack_require__(/*! C:\Users\dragon\Desktop\WEBAPP\gojs-angular-video-sample-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map