(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modulos-album-album-module~src-app-modulos-cancion-cancion-module~src-app-modulos-to~4a75f90b"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <p-autoComplete\n      [(ngModel)]=\"tipoCancionSeleccionado\"\n      [suggestions]=\"arregloTiposCancion\"\n      (completeMethod)=\"filtrarTiposCancion($event)\"\n      [size]=\"25\"\n      [minLength]=\"1\"\n      [placeholder]='\"Seleccione el tipo\"'\n      [emptyMessage]=\"'No hay registros'\"\n      (onSelect)=\"enviarTipoCancionSeleccionado($event)\"\n      [dropdown]=\"true\"\n      (onClear)=\"limpiarBusqueda()\"\n      (onUnselect)=\"deseleccionarTipoCancion()\"\n      [disabled]=\"deshabilitar\"\n      field=\"nombre\">\n      <ng-template let-tipoCancion pTemplate=\"item\">\n        {{tipoCancion.nombre}}\n      </ng-template>\n    </p-autoComplete>\n  </div>\n  <div class=\"col-sm-12\">\n    <small\n      id=\"busquedaRolHelp\"\n      class=\"form-text text-muted ayuda-span\">\n      {{'Filtre por tipo'}}\n    </small>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"formularioCancion\"\n>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <app-input-imagen\n        [pathImagen]=\"cargarImagenCancion()\"\n        [ocultarInput]=\"this.formularioCancion.disabled\"\n        [width]=\"width\"\n        (emitirImagen)=\"escucharEventoImagen($event)\"\n      ></app-input-imagen>\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"ui-fluid\">\n\n        <div class=\"p-field p-grid\">\n          <label for=\"artistas\" class=\"p-col-fixed\">Artista(s) *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-artista\n              [deshabilitar]=\"this.formularioCancion.disabled\"\n              id=\"artistas\"\n              [arregloidsArtista]=\"idsArtista\"\n              [multiple]=\"true\"\n              (emitirArtistaSeleccionado)=\"buscarCancionesPorArtista($event)\"\n            ></app-autocomplete-artista>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.artistas\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"albums\" class=\"p-col-fixed\">Album(s)</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-albums\n              [idsArtistas]=\"obtenerIdsArtistasSeleccionados()\"\n              [deshabilitar]=\"this.formularioCancion.disabled || this.deshabilitarAlbums\"\n              id=\"albums\"\n              [arregloidsAlbum]=\"idsAlbums\"\n              [multiple]=\"true\"\n              (emitirAlbumSeleccionado)=\"buscarCancionesPorAlbum($event)\"\n            ></app-autocomplete-albums>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.albums\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"nombre\" class=\"p-col-fixed\">Nombre *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"nombre\"\n              pInputText\n              type=\"text\"\n              formControlName=\"nombre\"\n              placeholder=\"Ingrese el nombre de la canción\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.nombre\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"fechaLanzamiento\" class=\"p-col-fixed\">Fecha de lanzamiento *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-calendar\n              id=\"fechaLanzamiento\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              [locale]=\"configuracionCalendario\"\n              yearRange=\"1920:2021\"\n              [showIcon]=\"true\"\n              dateFormat=\"yy-mm-dd\"\n              dataType=\"string\"\n              placeholder=\"Ingrese fecha de lanzamiento\"\n              formControlName='fechaLanzamiento'\n            ></p-calendar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.fechaLanzamiento\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"duracionSegundos\" class=\"p-col-fixed\">Duración(min) *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"duracionSegundos\"\n              pInputText\n              type=\"text\"\n              formControlName='duracionSegundos'\n              placeholder=\"Ingrese la duración de la cancíon en segundos\"\n              [textMask]=\"{mask: mask}\"\n            >\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.duracionSegundos\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"tipo\" class=\"p-col-fixed\">Tipo *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-tipo-cancion\n              id = \"tipo\"\n              [deshabilitar]=\"formularioCancion.disabled\"\n              [idTipoCancion]=\"idTipoCancion\"\n              (emitirTipoCancionSeleccionado)=\"escucharTipoCancionSeleccionado($event)\"\n            ></app-autocomplete-tipo-cancion>\n<!--            <p-dropdown-->\n<!--              id = \"tipo\"-->\n<!--              [options]=\"tipos\"-->\n<!--              placeholder=\"Seleccione un tipo\"-->\n<!--              [showClear]=\"true\"-->\n<!--              formControlName=\"tipo\"-->\n<!--            ></p-dropdown>-->\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.tipoCancion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"generos\" class=\"p-col-fixed\">Géneros *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-multiSelect\n              id=\"generos\"\n              formControlName='generos'\n              [maxSelectedLabels]=\"arregloGeneros.length\"\n              [options]=\"arregloGeneros\"\n              [optionLabel]=\"'nombre'\"\n              [panelStyle]=\"{minWidth:'12em'}\"\n              [defaultLabel]=\"'Seleccione los géneros de la canción'\"\n            ></p-multiSelect>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.generos\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"enlace\" class=\"p-col-fixed\">Enlace: </label>\n          <div class=\"p-col-12 p-md-12\">\n            <iframe\n              *ngIf=\"cancion && obtenerEnlace() && formularioCancion.disabled\"\n              [src]='obtenerEnlace() | safe'\n              style=\"width: 100%; height: 85px\"\n              allowtransparency=\"true\"\n              allow=\"encrypted-media\">\n            </iframe>\n            <input\n              *ngIf=\"!cancion || !formularioCancion.disabled\"\n              id=\"enlace\"\n              pInputText\n              type=\"text\"\n              formControlName=\"enlace\"\n              placeholder=\"Ingrese el enlace de la canción\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.enlace\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"descripcion\" class=\"p-col-fixed\">Descripción</label>\n          <div class=\"p-col-12 p-md-12\">\n            <textarea\n              id=\"descripcion\"\n              [rows]=\"5\"\n              [cols]=\"30\"\n              pInputTextarea\n              formControlName=\"descripcion\"\n              placeholder=\"Ingrese la descripción de la canción\"\n            ></textarea>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.descripcion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3\n  mat-dialog-title\n  class=\"text-center\"\n>\n  <span class=\"bold\">\n    {{\n    data.cancion ? 'EDITAR CANCIÓN' : 'REGISTRAR CANCIÓN'\n    }}</span>\n</h3>\n<hr>\n<div mat-dialog-content>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"descripcion-modal\">{{'Llene todos los campos que son obligatorios.'}}</p>\n    </div>\n    <div class=\"col-sm-12\">\n      <app-formulario-cancion\n        [deshabilitarAlbums]=\"data.deshabilitarAlbums\"\n        [idsAlbums]=\"data.idsAlbums\"\n        [idsArtista]=\"data.idsArtista\"\n        [album]=\"data.album\"\n        [cancion]=\"data.cancion\"\n        (cancionValidoEnviar)=\"validarFormularioCancion($event)\">\n      </app-formulario-cancion>\n    </div>\n  </div>\n</div>\n\n<mat-dialog-actions class=\"justify-content-end\">\n  <div class=\"row\">\n    <div class=\"d-flex flex-row-reverse\">\n      <div class=\"p-3\">\n        <app-boton-guardar\n          [deshabilitarBoton]=\"!formularioValido\"\n          (emitirEvento)=\"crearEditarCancion()\">\n        </app-boton-guardar>\n      </div>\n      <div class=\"p-3\">\n        <app-boton-cancelar\n          (emitirEvento)=\"cerrarModal()\"\n        ></app-boton-cancelar>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2F1dG9jb21wbGV0ZS10aXBvLWNhbmNpb24vYXV0b2NvbXBsZXRlLXRpcG8tY2FuY2lvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AutocompleteTipoCancionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteTipoCancionComponent", function() { return AutocompleteTipoCancionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_rest_tipo_cancion_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/rest/tipo-cancion-rest.service */ "./src/app/servicios/rest/tipo-cancion-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");





var AutocompleteTipoCancionComponent = /** @class */ (function () {
    function AutocompleteTipoCancionComponent(_tipoCancionService, _toasterService) {
        this._tipoCancionService = _tipoCancionService;
        this._toasterService = _toasterService;
        this.emitirTipoCancionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AutocompleteTipoCancionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idTipoCancion) {
            var consulta = {
                where: {
                    id: this.idTipoCancion
                }
            };
            this._tipoCancionService
                .findAll(JSON.stringify(consulta))
                .subscribe(function (respuestaTipoCancion) {
                _this.tipoCancionSeleccionado = respuestaTipoCancion[0][0];
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
            });
        }
    };
    AutocompleteTipoCancionComponent.prototype.filtrarTiposCancion = function (evento) {
        var _this = this;
        var busqueda = evento.query.trim();
        var consulta = {
            camposOr: [
                {
                    nombreCampo: 'nombre',
                    like: true,
                    valor: busqueda
                }
            ],
        };
        this._tipoCancionService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuestaTipoCancion) {
            _this.arregloTiposCancion = respuestaTipoCancion[0];
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
        });
    };
    AutocompleteTipoCancionComponent.prototype.enviarTipoCancionSeleccionado = function (tipoCancionSeleccionado) {
        this.emitirTipoCancionSeleccionado.emit(tipoCancionSeleccionado);
    };
    AutocompleteTipoCancionComponent.prototype.limpiarBusqueda = function () {
        this.emitirTipoCancionSeleccionado.emit(undefined);
    };
    AutocompleteTipoCancionComponent.prototype.deseleccionarTipoCancion = function () {
        this.emitirTipoCancionSeleccionado.emit(this.tipoCancionSeleccionado);
    };
    AutocompleteTipoCancionComponent.ctorParameters = function () { return [
        { type: _servicios_rest_tipo_cancion_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipoCancionRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], AutocompleteTipoCancionComponent.prototype, "idTipoCancion", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AutocompleteTipoCancionComponent.prototype, "deshabilitar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutocompleteTipoCancionComponent.prototype, "emitirTipoCancionSeleccionado", void 0);
    AutocompleteTipoCancionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete-tipo-cancion',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./autocomplete-tipo-cancion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./autocomplete-tipo-cancion.component.css */ "./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_tipo_cancion_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipoCancionRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], AutocompleteTipoCancionComponent);
    return AutocompleteTipoCancionComponent;
}());



/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AutocompleteTipoCancionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteTipoCancionModule", function() { return AutocompleteTipoCancionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _autocomplete_tipo_cancion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-tipo-cancion.component */ "./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.component.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");






var AutocompleteTipoCancionModule = /** @class */ (function () {
    function AutocompleteTipoCancionModule() {
    }
    AutocompleteTipoCancionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_autocomplete_tipo_cancion_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteTipoCancionComponent"]],
            exports: [
                _autocomplete_tipo_cancion_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteTipoCancionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], AutocompleteTipoCancionModule);
    return AutocompleteTipoCancionModule;
}());



/***/ }),

/***/ "./src/app/componentes/maskinput-module/maskinput-module.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/maskinput-module/maskinput-module.module.ts ***!
  \*************************************************************************/
/*! exports provided: MaskinputModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskinputModuleModule", function() { return MaskinputModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/__ivy_ngcc__/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__);




var MaskinputModuleModule = /** @class */ (function () {
    function MaskinputModuleModule() {
    }
    MaskinputModuleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["MaskedInputDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["MaskedInputDirective"],
            ]
        })
    ], MaskinputModuleModule);
    return MaskinputModuleModule;
}());



/***/ }),

/***/ "./src/app/constantes/tipos-cancion.ts":
/*!*********************************************!*\
  !*** ./src/app/constantes/tipos-cancion.ts ***!
  \*********************************************/
/*! exports provided: TIPOS_CANCIONES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPOS_CANCIONES", function() { return TIPOS_CANCIONES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TIPOS_CANCIONES = [
    { label: 'sencillo', value: 'sencillo' },
    { label: 'promocional', value: 'promocional' },
    { label: 'inedito', value: 'inedito' },
    { label: 'track', value: 'track' },
];


/***/ }),

/***/ "./src/app/constantes/validaciones-formulario/cancion.ts":
/*!***************************************************************!*\
  !*** ./src/app/constantes/validaciones-formulario/cancion.ts ***!
  \***************************************************************/
/*! exports provided: VALIDACION_NOMBRE_CANCION, MENSAJES_VALIDACION_NOMBRE_CANCION, VALIDACION_DESCRIPCION_CANCION, MENSAJES_VALIDACION_DESCRIPCION_CANCION, VALIDACION_FECHA_LANZAMIENTO_CANCION, MENSAJES_VALIDACION_FECHA_LANZAMIENTO_CANCION, VALIDACION_DURACION_SEGUNDOS_CANCION, MENSAJES_VALIDACION_DURACION_SEGUNDOS_CANCION, VALIDACION_GENEROS_CANCION, MENSAJES_VALIDACION_GENEROS_CANCION, VALIDACION_ARTISTAS_CANCION, VALIDACION_ALBUMS_CANCION, MENSAJES_VALIDACION_ARTISTAS_CANCION, VALIDACION_IMAGEN_CANCION, MENSAJES_VALIDACION_PATH_IMAGEN_CANCION, VALIDACION_TIPO_CANCION, MENSAJES_VALIDACION_TIPO_CANCION, MENSAJES_VALIDACION_ALBUMS_CANCION, VALIDACION_ENLACE_CANCION, MENSAJES_VALIDACION_ENLACE_CANCION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_NOMBRE_CANCION", function() { return VALIDACION_NOMBRE_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_NOMBRE_CANCION", function() { return MENSAJES_VALIDACION_NOMBRE_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_DESCRIPCION_CANCION", function() { return VALIDACION_DESCRIPCION_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_DESCRIPCION_CANCION", function() { return MENSAJES_VALIDACION_DESCRIPCION_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_FECHA_LANZAMIENTO_CANCION", function() { return VALIDACION_FECHA_LANZAMIENTO_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_FECHA_LANZAMIENTO_CANCION", function() { return MENSAJES_VALIDACION_FECHA_LANZAMIENTO_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_DURACION_SEGUNDOS_CANCION", function() { return VALIDACION_DURACION_SEGUNDOS_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_DURACION_SEGUNDOS_CANCION", function() { return MENSAJES_VALIDACION_DURACION_SEGUNDOS_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_GENEROS_CANCION", function() { return VALIDACION_GENEROS_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_GENEROS_CANCION", function() { return MENSAJES_VALIDACION_GENEROS_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_ARTISTAS_CANCION", function() { return VALIDACION_ARTISTAS_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_ALBUMS_CANCION", function() { return VALIDACION_ALBUMS_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_ARTISTAS_CANCION", function() { return MENSAJES_VALIDACION_ARTISTAS_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_IMAGEN_CANCION", function() { return VALIDACION_IMAGEN_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_PATH_IMAGEN_CANCION", function() { return MENSAJES_VALIDACION_PATH_IMAGEN_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_TIPO_CANCION", function() { return VALIDACION_TIPO_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_TIPO_CANCION", function() { return MENSAJES_VALIDACION_TIPO_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_ALBUMS_CANCION", function() { return MENSAJES_VALIDACION_ALBUMS_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_ENLACE_CANCION", function() { return VALIDACION_ENLACE_CANCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_ENLACE_CANCION", function() { return MENSAJES_VALIDACION_ENLACE_CANCION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


var VALIDACION_NOMBRE_CANCION = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
];
var MENSAJES_VALIDACION_NOMBRE_CANCION = {
    required: 'El campo nombre es obligatorio',
    minlength: 'El campo nombre debe tener mínimo 1 caracter',
    maxlength: 'El campo nombre no debe tener más de 50 caracteres'
};
var VALIDACION_DESCRIPCION_CANCION = [];
var MENSAJES_VALIDACION_DESCRIPCION_CANCION = {
    required: 'El campo descripción es obligatorio',
};
var VALIDACION_FECHA_LANZAMIENTO_CANCION = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_FECHA_LANZAMIENTO_CANCION = {
    required: 'El campo fecha de lanzamiento es obligatorio',
};
var VALIDACION_DURACION_SEGUNDOS_CANCION = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_DURACION_SEGUNDOS_CANCION = {
    required: 'El campo duración es obligatorio',
};
var VALIDACION_GENEROS_CANCION = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_GENEROS_CANCION = {
    required: 'El campo generos es obligatorio',
};
var VALIDACION_ARTISTAS_CANCION = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var VALIDACION_ALBUMS_CANCION = [
// Validators.required,
];
var MENSAJES_VALIDACION_ARTISTAS_CANCION = {
    required: 'El campo artistas es obligatorio',
};
var VALIDACION_IMAGEN_CANCION = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_PATH_IMAGEN_CANCION = {
    required: 'La portada es obligatoria',
};
var VALIDACION_TIPO_CANCION = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_TIPO_CANCION = {
    required: 'El campo tipo es obligatorio',
};
var MENSAJES_VALIDACION_ALBUMS_CANCION = {
    required: 'El campo albums es obligatorio',
};
var VALIDACION_ENLACE_CANCION = [];
var MENSAJES_VALIDACION_ENLACE_CANCION = {
    required: 'El campo enlace es obligatorio',
};


/***/ }),

/***/ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY2FuY2lvbi9jb21wb25lbnRlcy9mb3JtdWxhcmlvLWNhbmNpb24vZm9ybXVsYXJpby1jYW5jaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FormularioCancionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioCancionComponent", function() { return FormularioCancionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constantes/configuracion-calendario */ "./src/app/constantes/configuracion-calendario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../componentes/input-imagen/input-imagen.component */ "./src/app/componentes/input-imagen/input-imagen.component.ts");
/* harmony import */ var _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/rest/genero-rest.service */ "./src/app/servicios/rest/genero-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../funciones/generar-mensajes-error */ "./src/app/funciones/generar-mensajes-error.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constantes/validaciones-formulario/cancion */ "./src/app/constantes/validaciones-formulario/cancion.ts");
/* harmony import */ var _constantes_tipos_cancion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../constantes/tipos-cancion */ "./src/app/constantes/tipos-cancion.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");
/* harmony import */ var _funciones_mostrar_segundos_en_minutos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../funciones/mostrar-segundos-en-minutos */ "./src/app/funciones/mostrar-segundos-en-minutos.ts");
/* harmony import */ var _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../servicios/rest/album-rest.service */ "./src/app/servicios/rest/album-rest.service.ts");
















var FormularioCancionComponent = /** @class */ (function () {
    function FormularioCancionComponent(_generoRestService, _formBuilder, _toasterService, _artistaService, _albumRestService) {
        this._generoRestService = _generoRestService;
        this._formBuilder = _formBuilder;
        this._toasterService = _toasterService;
        this._artistaService = _artistaService;
        this._albumRestService = _albumRestService;
        this.configuracionCalendario = _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__["CONFIGURACIONES_CALENDARIO"];
        this.arregloGeneros = [];
        this.mensajesError = {
            nombre: [],
            descripcion: [],
            duracionSegundos: [],
            fechaLanzamiento: [],
            generos: [],
            imagen: [],
            artistas: [],
            albums: [],
            tipoCancion: [],
            enlace: []
        };
        this.subscribers = [];
        this.idsArtista = [];
        this.idsAlbums = [];
        this.cancionValidoEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tipos = _constantes_tipos_cancion__WEBPACK_IMPORTED_MODULE_12__["TIPOS_CANCIONES"];
        this.mask = [/[0-5]/, /\d/, ':', /[0-5]/, /\d/];
    }
    FormularioCancionComponent.prototype.ngOnInit = function () {
        this.cargarGeneros();
        this.iniciarFormulario();
    };
    FormularioCancionComponent.prototype.iniciarFormulario = function () {
        this.crearFormulario();
        if (this.cancion) {
            this.idTipoCancion = this.cancion.tipoCancion.id;
            if (!this.album) {
                this.formularioCancion.disable();
            }
        }
        else {
            if (this.idsArtista && this.idsArtista.length) {
                this.cargarMultiselectArtista();
            }
            if (this.idsAlbums && this.idsAlbums.length) {
                this.cargarMultiselectAlbums();
            }
        }
        this.verificarCamposFormulario();
        this.verificarFormulario();
    };
    FormularioCancionComponent.prototype.crearFormulario = function () {
        this.formularioCancion = this._formBuilder.group({
            nombre: [this.cancion ? this.cancion.nombre : '', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_NOMBRE_CANCION"]],
            descripcion: [this.cancion ? this.cancion.descripcion : '', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_DESCRIPCION_CANCION"]],
            fechaLanzamiento: [this.cargarFechaLanzamiento(), _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_FECHA_LANZAMIENTO_CANCION"]],
            duracionSegundos: [this.cancion ? Object(_funciones_mostrar_segundos_en_minutos__WEBPACK_IMPORTED_MODULE_14__["mostrarSegundosEnMinutos"])(this.cancion.duracionSegundos) : null, _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_DURACION_SEGUNDOS_CANCION"]],
            generos: [this.cancion ? this.cargarGenerosCancion() : [], _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_GENEROS_CANCION"]],
            artistas: [this.cancion ? this.cargarMultiselectArtista() : [], _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_ARTISTAS_CANCION"]],
            albums: [this.cancion ? this.cargarMultiselectAlbums() : [], _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_ALBUMS_CANCION"]],
            imagen: [this.cargarImagenCancion(), _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_IMAGEN_CANCION"]],
            tipoCancion: [this.cancion ? this.cancion.tipoCancion : null, _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_TIPO_CANCION"]],
            enlace: [this.cancion ? this.obtenerEnlace() : '', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["VALIDACION_ENLACE_CANCION"]]
        });
    };
    FormularioCancionComponent.prototype.verificarCamposFormulario = function () {
        this.verificarCampoFormControl('nombre', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_NOMBRE_CANCION"]);
        this.verificarCampoFormControl('descripcion', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_DESCRIPCION_CANCION"]);
        this.verificarCampoFormControl('fechaLanzamiento', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_FECHA_LANZAMIENTO_CANCION"]);
        this.verificarCampoFormControl('duracionSegundos', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_DURACION_SEGUNDOS_CANCION"]);
        this.verificarCampoFormControl('generos', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_GENEROS_CANCION"]);
        this.verificarCampoFormControl('artistas', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_ARTISTAS_CANCION"]);
        this.verificarCampoFormControl('tipoCancion', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_TIPO_CANCION"]);
        this.verificarCampoFormControl('albums', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_ALBUMS_CANCION"]);
        this.verificarCampoFormControl('enlace', _constantes_validaciones_formulario_cancion__WEBPACK_IMPORTED_MODULE_11__["MENSAJES_VALIDACION_ENLACE_CANCION"]);
    };
    FormularioCancionComponent.prototype.verificarCampoFormControl = function (campo, mensajeValidacion) {
        var _this = this;
        var campoFormControl = this.formularioCancion.get(campo);
        var subscriber = campoFormControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(1000))
            .subscribe(function (valor) {
            _this.mensajesError[campo] = Object(_funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_9__["generarMensajesError"])(campoFormControl, _this.mensajesError[campo], mensajeValidacion);
        });
        this.subscribers.push(subscriber);
    };
    FormularioCancionComponent.prototype.verificarFormulario = function () {
        var _this = this;
        var formularioFormGroup = this.formularioCancion;
        var subscriber = formularioFormGroup
            .valueChanges
            .subscribe(function (formulario) {
            var artistaValido = formularioFormGroup.valid;
            if (artistaValido) {
                _this.cancionValidoEnviar.emit(formulario);
            }
            else {
                _this.cancionValidoEnviar.emit(false);
            }
        });
        this.subscribers.push(subscriber);
    };
    FormularioCancionComponent.prototype.escucharEventoImagen = function (event) {
        this.imagenSeleccionada = event;
        this.formularioCancion.patchValue({
            imagen: this.imagenSeleccionada,
        });
    };
    FormularioCancionComponent.prototype.cargarGeneros = function () {
        var _this = this;
        this._generoRestService
            .findAll(JSON.stringify({}))
            .subscribe(function (respuestaGeneros) {
            _this.arregloGeneros = respuestaGeneros[0];
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["ToastErrorCargandoDatos"]);
        });
    };
    FormularioCancionComponent.prototype.cargarGenerosCancion = function () {
        return this.cancion.generosCancion.map(function (generoCancion) { return generoCancion.genero; });
    };
    FormularioCancionComponent.prototype.cargarImagenCancion = function () {
        if (this.cancion) {
            return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_13__["obtenerUrlImagenPrincipal"])(this.cancion, 'imagenesCancion');
        }
        else {
            if (this.album) {
                return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_13__["obtenerUrlImagenPrincipal"])(this.album, 'imagenesAlbum');
            }
            else {
                return '';
            }
        }
    };
    FormularioCancionComponent.prototype.deshabilitarFormulario = function () {
        this.formularioCancion.disable();
    };
    FormularioCancionComponent.prototype.buscarCancionesPorArtista = function (respuestaArtista) {
        this.formularioCancion.patchValue({
            artistas: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(respuestaArtista)
        });
    };
    FormularioCancionComponent.prototype.cargarMultiselectArtista = function () {
        var _this = this;
        var consulta = {
            camposIn: [
                {
                    nombreCampo: 'id',
                    valor: this.idsArtista
                }
            ],
            relations: [
                'imagenesArtista'
            ]
        };
        this._artistaService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuestaArtista) {
            _this.formularioCancion.patchValue({
                artistas: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(respuestaArtista[0])
            });
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["ToastErrorCargandoDatos"]);
        });
    };
    FormularioCancionComponent.prototype.cargarFechaLanzamiento = function () {
        if (this.cancion) {
            return this.cancion.fechaLanzamiento;
        }
        else {
            if (this.album) {
                return this.album.fechaLanzamiento;
            }
            else {
                return '';
            }
        }
    };
    FormularioCancionComponent.prototype.buscarCancionesPorAlbum = function (albumsSeleccionado) {
        this.formularioCancion.patchValue({
            albums: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(albumsSeleccionado)
        });
    };
    FormularioCancionComponent.prototype.cargarMultiselectAlbums = function () {
        var _this = this;
        if (this.idsAlbums && this.idsAlbums.length) {
            var consulta = {
                camposIn: [
                    {
                        nombreCampo: 'id',
                        valor: this.idsAlbums
                    }
                ],
                relations: [
                    'imagenesAlbum'
                ]
            };
            this._albumRestService
                .findAll(JSON.stringify(consulta))
                .subscribe(function (respuestaAlbum) {
                _this.formularioCancion.patchValue({
                    albums: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(respuestaAlbum[0])
                });
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["ToastErrorCargandoDatos"]);
            });
        }
        else {
            return [];
        }
    };
    FormularioCancionComponent.prototype.escucharTipoCancionSeleccionado = function (tipoCancionSeleccionado) {
        this.formularioCancion.patchValue({
            tipoCancion: tipoCancionSeleccionado,
        });
    };
    FormularioCancionComponent.prototype.obtenerIdsArtistasSeleccionados = function () {
        var existeCampoArtistas = this.formularioCancion.get('artistas').value;
        if (existeCampoArtistas) {
            return this.formularioCancion.get('artistas').value.map(function (artista) { return artista.id; });
        }
    };
    FormularioCancionComponent.prototype.volverFormularioInicial = function () {
        this.formularioCancion.patchValue({
            nombre: this.cancion.nombre,
            descripcion: this.cancion.descripcion,
            fechaLanzamiento: this.cancion.fechaLanzamiento,
            duracionSegundos: this.cancion.duracionSegundos,
            tipoCancion: this.cancion.tipoCancion,
            artistas: this.cargarMultiselectArtista(),
            albums: this.cargarMultiselectAlbums(),
            generos: this.cargarGeneros(),
            imagen: this.cargarImagenCancion(),
            enlace: this.obtenerEnlace(),
        });
        this.idTipoCancion = this.cancion.tipoCancion.id;
        this.componenteInputImagen.pathImagen = this.cargarImagenCancion();
        this.deshabilitarFormulario();
    };
    FormularioCancionComponent.prototype.obtenerEnlace = function () {
        if (this.cancion && this.cancion.enlacesCancion.length) {
            return this.cancion.enlacesCancion[0].url;
        }
    };
    FormularioCancionComponent.ctorParameters = function () { return [
        { type: _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_5__["GeneroRestService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_7__["ArtistaRestService"] },
        { type: _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_15__["AlbumRestService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioCancionComponent.prototype, "cancion", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], FormularioCancionComponent.prototype, "deshabilitarAlbums", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], FormularioCancionComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], FormularioCancionComponent.prototype, "idsArtista", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], FormularioCancionComponent.prototype, "idsAlbums", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioCancionComponent.prototype, "album", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormularioCancionComponent.prototype, "cancionValidoEnviar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_4__["InputImagenComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_4__["InputImagenComponent"])
    ], FormularioCancionComponent.prototype, "componenteInputImagen", void 0);
    FormularioCancionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-cancion',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formulario-cancion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formulario-cancion.component.css */ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_5__["GeneroRestService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_7__["ArtistaRestService"],
            _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_15__["AlbumRestService"]])
    ], FormularioCancionComponent);
    return FormularioCancionComponent;
}());



/***/ }),

/***/ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormularioCancionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioCancionModule", function() { return FormularioCancionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _formulario_cancion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario-cancion.component */ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _componentes_input_imagen_input_imagen_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/input-imagen/input-imagen.module */ "./src/app/componentes/input-imagen/input-imagen.module.ts");
/* harmony import */ var _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module */ "./src/app/componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module.ts");
/* harmony import */ var _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../componentes/autocomplete-artista/autocomplete-artista.module */ "./src/app/componentes/autocomplete-artista/autocomplete-artista.module.ts");
/* harmony import */ var _componentes_autocomplete_albums_autocomplete_albums_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../componentes/autocomplete-albums/autocomplete-albums.module */ "./src/app/componentes/autocomplete-albums/autocomplete-albums.module.ts");
/* harmony import */ var _componentes_autocomplete_tipo_cancion_autocomplete_tipo_cancion_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.module */ "./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.module.ts");
/* harmony import */ var _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../pipes/safe-pipe/safe-pipe.module */ "./src/app/pipes/safe-pipe/safe-pipe.module.ts");
/* harmony import */ var _componentes_maskinput_module_maskinput_module_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../componentes/maskinput-module/maskinput-module.module */ "./src/app/componentes/maskinput-module/maskinput-module.module.ts");













var FormularioCancionModule = /** @class */ (function () {
    function FormularioCancionModule() {
    }
    FormularioCancionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_formulario_cancion_component__WEBPACK_IMPORTED_MODULE_3__["FormularioCancionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["InputTextareaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["InputNumberModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["MultiSelectModule"],
                _componentes_input_imagen_input_imagen_module__WEBPACK_IMPORTED_MODULE_6__["InputImagenModule"],
                _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_7__["AlertaValidacionCampoFormularioModule"],
                _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteArtistaModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["InputMaskModule"],
                _componentes_autocomplete_albums_autocomplete_albums_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteAlbumsModule"],
                _componentes_autocomplete_tipo_cancion_autocomplete_tipo_cancion_module__WEBPACK_IMPORTED_MODULE_10__["AutocompleteTipoCancionModule"],
                _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_11__["SafePipeModule"],
                _componentes_maskinput_module_maskinput_module_module__WEBPACK_IMPORTED_MODULE_12__["MaskinputModuleModule"],
            ],
            exports: [
                _formulario_cancion_component__WEBPACK_IMPORTED_MODULE_3__["FormularioCancionComponent"]
            ]
        })
    ], FormularioCancionModule);
    return FormularioCancionModule;
}());



/***/ }),

/***/ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY2FuY2lvbi9tb2RhbGVzL2NyZWFyLWVkaXRhci1jYW5jaW9uL2NyZWFyLWVkaXRhci1jYW5jaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CrearEditarCancionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEditarCancionComponent", function() { return CrearEditarCancionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _componentes_formulario_cancion_formulario_cancion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentes/formulario-cancion/formulario-cancion.component */ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.ts");
/* harmony import */ var _funciones_convertir_minutos_segundos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../funciones/convertir-minutos-segundos */ "./src/app/funciones/convertir-minutos-segundos.ts");
/* harmony import */ var _funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../funciones/obtener-anio */ "./src/app/funciones/obtener-anio.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../servicios/rest/cancion-rest.service */ "./src/app/servicios/rest/cancion-rest.service.ts");










var CrearEditarCancionComponent = /** @class */ (function () {
    function CrearEditarCancionComponent(data, dialogo, _toasterService, _cargandoService, _cancionRestService) {
        this.data = data;
        this.dialogo = dialogo;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this._cancionRestService = _cancionRestService;
    }
    CrearEditarCancionComponent.prototype.ngOnInit = function () {
    };
    CrearEditarCancionComponent.prototype.validarFormularioCancion = function (cancion) {
        if (cancion) {
            this.formularioValido = true;
            this.cancionCrearEditar = cancion;
        }
        else {
            this.formularioValido = false;
        }
    };
    CrearEditarCancionComponent.prototype.cerrarModal = function () {
        this.dialogo.close();
    };
    CrearEditarCancionComponent.prototype.crearEditarCancion = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        this.cancionCrearEditar.anio = Object(_funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_7__["obtenerAnio"])(this.cancionCrearEditar.fechaLanzamiento);
        this.cancionCrearEditar.duracionSegundos = +Object(_funciones_convertir_minutos_segundos__WEBPACK_IMPORTED_MODULE_6__["convertirMinutosMascaraASegundos"])(this.cancionCrearEditar.duracionSegundos);
        var generos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.cancionCrearEditar.generos).map(function (genero) { return genero.id; });
        var artistas = this.obtenerArtistaPrincipal(this.cancionCrearEditar.artistas);
        var albumes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.cancionCrearEditar.albums).map(function (genero) { return genero.id; });
        var pathAlterno = typeof this.cancionCrearEditar.imagen === 'string' ? this.obtenerPathImagenAlbum() : null;
        var enlaces = [];
        if (this.cancionCrearEditar.enlace) {
            enlaces.push({
                cancion: this.data.cancion ? this.data.cancion.id : null,
                url: this.cancionCrearEditar.enlacesCancion,
                plataforma: 1
            });
        }
        if (this.data.cancion) {
            var imagenPrincipal = this.data.cancion.imagenesCancion.find(function (imagenCancion) { return imagenCancion.esPrincipal; });
            this._cancionRestService
                .editarCancion(this.cancionCrearEditar, this.data.cancion.id, generos, artistas, this.cancionCrearEditar.imagen, pathAlterno, albumes, enlaces, imagenPrincipal.id)
                .subscribe(function (respuestaCancionEditada) {
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
                _this.dialogo.close(respuestaCancionEditada);
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
            this._cargandoService.deshabiltarCargando();
        }
        else {
            this._cancionRestService
                .crearCancion(this.cancionCrearEditar, generos, artistas, this.cancionCrearEditar.imagen, pathAlterno, enlaces, albumes)
                .subscribe(function (respuestaCancionCreada) {
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
                _this.dialogo.close(respuestaCancionCreada);
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
    };
    CrearEditarCancionComponent.prototype.obtenerPathImagenAlbum = function () {
        var imagenPrincipal = this.data.album.imagenesAlbum.find(function (imagenAlbum) { return imagenAlbum.esPrincipal; });
        if (imagenPrincipal) {
            return imagenPrincipal.url;
        }
    };
    CrearEditarCancionComponent.prototype.obtenerArtistaPrincipal = function (artistas) {
        return artistas.map(function (artistaCancion, indice) {
            return {
                id: artistaCancion.id,
                esPrincipal: indice === 0 ? 1 : 0,
            };
        });
    };
    CrearEditarCancionComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] },
        { type: _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_9__["CancionRestService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_componentes_formulario_cancion_formulario_cancion_component__WEBPACK_IMPORTED_MODULE_5__["FormularioCancionComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _componentes_formulario_cancion_formulario_cancion_component__WEBPACK_IMPORTED_MODULE_5__["FormularioCancionComponent"])
    ], CrearEditarCancionComponent.prototype, "formularioCancionComponent", void 0);
    CrearEditarCancionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crear-editar-cancion',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-editar-cancion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-editar-cancion.component.css */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"],
            _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_9__["CancionRestService"]])
    ], CrearEditarCancionComponent);
    return CrearEditarCancionComponent;
}());



/***/ }),

/***/ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CrearEditarCancionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEditarCancionModule", function() { return CrearEditarCancionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-editar-cancion.component */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../componentes/boton-guardar/boton-guardar.module */ "./src/app/componentes/boton-guardar/boton-guardar.module.ts");
/* harmony import */ var _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/boton-cancelar/boton-cancelar.module */ "./src/app/componentes/boton-cancelar/boton-cancelar.module.ts");
/* harmony import */ var _componentes_formulario_cancion_formulario_cancion_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/formulario-cancion/formulario-cancion.module */ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.module.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");









var CrearEditarCancionModule = /** @class */ (function () {
    function CrearEditarCancionModule() {
    }
    CrearEditarCancionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_3__["CrearEditarCancionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _componentes_formulario_cancion_formulario_cancion_module__WEBPACK_IMPORTED_MODULE_7__["FormularioCancionModule"],
                _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_5__["BotonGuardarModule"],
                _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_6__["BotonCancelarModule"],
                primeng__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
            ],
            exports: [
                _crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_3__["CrearEditarCancionComponent"]
            ]
        })
    ], CrearEditarCancionModule);
    return CrearEditarCancionModule;
}());



/***/ }),

/***/ "./src/app/servicios/rest/tipo-cancion-rest.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/servicios/rest/tipo-cancion-rest.service.ts ***!
  \*************************************************************/
/*! exports provided: TipoCancionRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCancionRestService", function() { return TipoCancionRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var TipoCancionRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TipoCancionRestService, _super);
    function TipoCancionRestService(
    // tslint:disable-next-line:variable-name
    _http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'tipo-cancion';
        return _this;
    }
    TipoCancionRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    TipoCancionRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TipoCancionRestService);
    return TipoCancionRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ })

}]);
//# sourceMappingURL=default~src-app-modulos-album-album-module~src-app-modulos-cancion-cancion-module~src-app-modulos-to~4a75f90b.js.map