(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modulos-video-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <p-autoComplete\n      [(ngModel)]=\"tipoVideoSeleccionado\"\n      [suggestions]=\"arregloTiposVideo\"\n      (completeMethod)=\"filtrarTiposVideo($event)\"\n      [size]=\"25\"\n      [minLength]=\"1\"\n      [placeholder]='\"Seleccione el tipo\"'\n      [emptyMessage]=\"'No hay registros'\"\n      (onSelect)=\"enviarTipoVideoSeleccionado($event)\"\n      [dropdown]=\"true\"\n      (onClear)=\"limpiarBusqueda()\"\n      (onUnselect)=\"deseleccionarTipoVideo()\"\n      [disabled]=\"deshabilitar\"\n      field=\"nombre\">\n      <ng-template let-tipoVideo pTemplate=\"item\">\n        {{tipoVideo.nombre}}\n      </ng-template>\n    </p-autoComplete>\n  </div>\n  <div class=\"col-sm-12\">\n    <small\n      id=\"busquedaRolHelp\"\n      class=\"form-text text-muted ayuda-span\">\n      {{'Filtre por tipo'}}\n    </small>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/componentes/formulario-video/formulario-video.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/componentes/formulario-video/formulario-video.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"formularioVideo\"\n>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <div class=\"ui-fluid\">\n        <div class=\"p-field p-grid\">\n          <label for=\"enlace\" class=\"p-col-fixed\">Enlace *: </label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"enlace\"\n              pInputText\n              type=\"text\"\n              formControlName=\"enlace\"\n              placeholder=\"Ingrese el enlace del video\"/>\n            <br>\n            <br>\n            <div class=\"p-col-12 p-md-12\">\n              <app-alerta-validacion-campo-formulario\n                [mensajesError]=\"mensajesError.enlace\">\n              </app-alerta-validacion-campo-formulario>\n            </div>\n            <iframe\n              *ngIf=\"formularioVideo && formularioVideo.get('enlace').value\"\n              [src]=' formularioVideo.get(\"enlace\").value.trim() | safe'\n              style=\"width: 100%; height: 100%\"\n              allowtransparency=\"true\"\n              allow=\"encrypted-media\">\n            </iframe>\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"ui-fluid\">\n\n        <div class=\"p-field p-grid\">\n          <label for=\"nombre\" class=\"p-col-fixed\">Nombre *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"nombre\"\n              pInputText\n              type=\"text\"\n              formControlName=\"nombre\"\n              placeholder=\"Ingrese el nombre del video\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.nombre\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"fechaLanzamiento\" class=\"p-col-fixed\">Fecha de lanzamiento *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-calendar\n              id=\"fechaLanzamiento\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              [locale]=\"configuracionCalendario\"\n              yearRange=\"1920:2021\"\n              [showIcon]=\"true\"\n              dateFormat=\"yy-mm-dd\"\n              dataType=\"string\"\n              placeholder=\"Ingrese fecha de lanzamiento\"\n              formControlName='fechaLanzamiento'\n            ></p-calendar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.fechaLanzamiento\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"duracionSegundos\" class=\"p-col-fixed\">Duración(min) *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"duracionSegundos\"\n              pInputText\n              type=\"text\"\n              formControlName='duracionSegundos'\n              placeholder=\"Ingrese la duración del video en segundos\"\n              [textMask]=\"{mask: mask}\"\n            >\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.duracionSegundos\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"tipo\" class=\"p-col-fixed\">Tipo *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-tipo-video\n              id=\"tipo\"\n              [deshabilitar]=\"formularioVideo.disabled\"\n              [idTipoVideo]=\"idTipoVideo\"\n              (emitirTipoVideoSeleccionado)=\"escucharTipoVideoSeleccionado($event)\"\n            ></app-autocomplete-tipo-video>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.tipoVideo\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"cancion\" class=\"p-col-fixed\">Cancion *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-cancion\n              [idCancion]=\"video ? video.cancion.id : null\"\n              [idsArtistas]=\"idsArtistas\"\n              id='cancion'\n              (emitirCancionSeleccionado)=\"setearCancion($event)\"\n            ></app-autocomplete-cancion>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.cancion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"descripcion\" class=\"p-col-fixed\">Descripción</label>\n          <div class=\"p-col-12 p-md-12\">\n            <textarea\n              id=\"descripcion\"\n              [rows]=\"5\"\n              [cols]=\"30\"\n              pInputTextarea\n              formControlName=\"descripcion\"\n              placeholder=\"Ingrese la descripción del video\"\n            ></textarea>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.descripcion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3\n  mat-dialog-title\n  class=\"text-center\"\n>\n  <span class=\"bold\">\n    {{\n    data.video ? 'EDITAR VIDEO' : 'REGISTRAR VIDEO'\n    }}</span>\n</h3>\n<hr>\n\n<app-formulario-video\n  [video]=\"data.video\"\n  [idsArtistas]=\"data.idArtista ? [data.idArtista] : []\"\n  (videoValidoEnviar)=\"validarFormularioVideo($event)\">\n</app-formulario-video>\n\n<mat-dialog-actions class=\"justify-content-end\">\n  <div class=\"row\">\n    <div class=\"d-flex flex-row-reverse\">\n      <div class=\"p-3\">\n        <app-boton-guardar\n          [deshabilitarBoton]=\"!formularioValido\"\n          (emitirEvento)=\"crearEditarVideo()\">\n        </app-boton-guardar>\n      </div>\n      <div class=\"p-3\">\n        <app-boton-cancelar\n          (emitirEvento)=\"cerrarModal()\"\n        ></app-boton-cancelar>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-migas-pan\n      [arregloRutas]=\"arregloRutas\">\n    </app-migas-pan>\n  </div>\n</div>\n<br>\n\n<div class=\"container\">\n  <div class=\"row center\">\n    <div class=\"col-sm-12\">\n      <h1 class=\"text-center\">\n        <img\n          style=\"width:40px\"\n          [src]=\"rutaImagen\">\n        {{ (artista ? ('VIDEOS DE ' + artista.nombre) : 'GESTIÓN DE VIDEOS' )| uppercase}}\n      </h1>\n    </div>\n  </div>\n\n</div>\n<hr>\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-9\">\n    <app-input-buscar-boton\n      [busqueda]=\"busqueda\"\n      [placeholder]=\"'Ingrese el nombre o año de lanzamiento. EJ: Alice ó 2013'\"\n      [ayuda]=\"'Busque un video por su nombre o año de lanzamiento'\"\n      (emitirBusqueda)=\"escucharBusqueda($event)\">\n\n    </app-input-buscar-boton>\n  </div>\n  <div class=\"col-sm-3\">\n    <app-boton-nuevo\n      (emitirEvento)=\"abrirModalCrearEditarVideo()\"\n    ></app-boton-nuevo>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\" style=\"padding-left: 1%; padding-right: 1%\">\n  <div [ngClass]=\"!idArtistaParams ? 'col-sm-3' : ''\" >\n    <app-autocomplete-artista\n      *ngIf=\"!idArtistaParams\"\n      [idArtista]=\"idArtista\"\n      [multiple]=\"false\"\n      (emitirArtistaSeleccionado)=\"buscarVideosPorArtista($event)\"\n    ></app-autocomplete-artista>\n  </div>\n  <div class=\"col-sm-3\">\n    <app-autocomplete-albums\n      [idAlbum]=\"idAlbum\"\n      [idsArtistas]=\"idArtista ? [idArtista] : []\"\n      (emitirAlbumSeleccionado)=\"buscarVideosPorAlbum($event)\"\n    ></app-autocomplete-albums>\n  </div>\n  <div class=\"col-sm-3\">\n    <app-autocomplete-cancion\n      [idCancion]=\"idCancion\"\n      [idsArtistas]=\"idArtista ? [idArtista] : []\"\n      (emitirCancionSeleccionado)=\"buscarVideosPorCancion($event)\"\n    ></app-autocomplete-cancion>\n  </div>\n  <div class=\"col-sm-3\" >\n    <app-autocomplete-tipo-video\n      [idTipoVideo]=\"idTipoVideo\"\n      (emitirTipoVideoSeleccionado)=\"buscarVideosPorTipo($event)\"\n    ></app-autocomplete-tipo-video>\n  </div>\n</div>\n\n<br>\n<div class=\"row\">\n  <div class=\"col sm 12\" style=\"padding-left: 2%; padding-right: 2%\">\n    <p-table\n      #dt\n      [rows]=\"15\"\n      [paginator]=\"true\"\n      [columns]=\"columnasVideos\"\n      [value]=\"videos\"\n      styleClass=\"ui-table-customers\"\n      [responsive]=\"true\"\n    >\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n          <th\n            [pSortableColumn]=\"col.field\"\n            [style.width]=\"col.width\"\n            class=\"text-center\"\n            *ngFor=\"let col of columns\">\n            {{col.header}}\n            <p-sortIcon\n              *ngIf=\"col.header === 'Nombre' || col.header === 'fechaLanzamiento' || col.header === 'duracionSegundos' || col.header === 'Tipo'\"\n              [field]=\"col.field\"\n            >\n            </p-sortIcon>\n\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr>\n          <td [attr.colspan]=\"columns.length\">\n            No existen registros\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\">\n        <tr>\n          <td class=\"text-center\" *ngFor=\"let col of columns\">\n            <div *ngIf=\"col.field==='nombre'\">\n              {{rowData.nombre}}\n            </div>\n\n            <div *ngIf=\"col.field==='tipo'\">\n              {{rowData.tipoVideo.nombre}}\n            </div>\n            <div *ngIf=\"col.field==='fechaLanzamiento'\">\n              {{rowData.fechaLanzamiento}}\n            </div>\n            <div *ngIf=\"col.field==='artistas'\">\n              {{obtenerArtistasCancion(rowData.cancion.artistasCancion)}}\n            </div>\n            <div *ngIf=\"col.field==='albums'\">\n              {{obtenerAlbumesCancion(rowData.cancion.albumesCancion) === '' ? rowData.cancion.nombre : obtenerAlbumesCancion(rowData.cancion.albumesCancion)}}\n            </div>\n            <div *ngIf=\"col.field==='duracionSegundos'\">\n              {{rowData.duracionSegundos | minutosHoras}}\n            </div>\n            <div *ngIf=\"col.field === 'acciones'\">\n              <button\n                (click)=\"abrirModalCrearEditarVideo(\n                rowData,\n                index)\"\n                class=\"btn btn-primary\">\n                <i style=\"padding-right: 0%\" class=\"fas fa-pencil-alt\"></i>\n              </button>\n            </div>\n\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2F1dG9jb21wbGV0ZS10aXBvLXZpZGVvL2F1dG9jb21wbGV0ZS10aXBvLXZpZGVvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AutocompleteTipoVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteTipoVideoComponent", function() { return AutocompleteTipoVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_rest_tipo_video_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/rest/tipo-video-rest.service */ "./src/app/servicios/rest/tipo-video-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");





var AutocompleteTipoVideoComponent = /** @class */ (function () {
    function AutocompleteTipoVideoComponent(_tipoVideoService, _toasterService) {
        this._tipoVideoService = _tipoVideoService;
        this._toasterService = _toasterService;
        this.emitirTipoVideoSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AutocompleteTipoVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idTipoVideo) {
            var consulta = {
                where: {
                    id: this.idTipoVideo
                }
            };
            this._tipoVideoService
                .findAll(JSON.stringify(consulta))
                .subscribe(function (respuestaTipoVideo) {
                _this.tipoVideoSeleccionado = respuestaTipoVideo[0][0];
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
            });
        }
    };
    AutocompleteTipoVideoComponent.prototype.filtrarTiposVideo = function (evento) {
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
        this._tipoVideoService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuestaTipoVideo) {
            _this.arregloTiposVideo = respuestaTipoVideo[0];
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
        });
    };
    AutocompleteTipoVideoComponent.prototype.enviarTipoVideoSeleccionado = function (tipoVideoSeleccionado) {
        this.emitirTipoVideoSeleccionado.emit(tipoVideoSeleccionado);
    };
    AutocompleteTipoVideoComponent.prototype.limpiarBusqueda = function () {
        this.emitirTipoVideoSeleccionado.emit(undefined);
    };
    AutocompleteTipoVideoComponent.prototype.deseleccionarTipoVideo = function () {
        this.emitirTipoVideoSeleccionado.emit(this.tipoVideoSeleccionado);
    };
    AutocompleteTipoVideoComponent.ctorParameters = function () { return [
        { type: _servicios_rest_tipo_video_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipoVideoRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], AutocompleteTipoVideoComponent.prototype, "idTipoVideo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AutocompleteTipoVideoComponent.prototype, "deshabilitar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutocompleteTipoVideoComponent.prototype, "emitirTipoVideoSeleccionado", void 0);
    AutocompleteTipoVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete-tipo-video',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./autocomplete-tipo-video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./autocomplete-tipo-video.component.css */ "./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_tipo_video_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipoVideoRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], AutocompleteTipoVideoComponent);
    return AutocompleteTipoVideoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AutocompleteTipoVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteTipoVideoModule", function() { return AutocompleteTipoVideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _autocomplete_tipo_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-tipo-video.component */ "./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");






var AutocompleteTipoVideoModule = /** @class */ (function () {
    function AutocompleteTipoVideoModule() {
    }
    AutocompleteTipoVideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_autocomplete_tipo_video_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteTipoVideoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"]
            ],
            exports: [
                _autocomplete_tipo_video_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteTipoVideoComponent"]
            ]
        })
    ], AutocompleteTipoVideoModule);
    return AutocompleteTipoVideoModule;
}());



/***/ }),

/***/ "./src/app/constantes/validaciones-formulario/video.ts":
/*!*************************************************************!*\
  !*** ./src/app/constantes/validaciones-formulario/video.ts ***!
  \*************************************************************/
/*! exports provided: VALIDACION_NOMBRE_VIDEO, MENSAJES_VALIDACION_NOMBRE_VIDEO, VALIDACION_DESCRIPCION_VIDEO, MENSAJES_VALIDACION_DESCRIPCION_VIDEO, VALIDACION_FECHA_LANZAMIENTO_VIDEO, MENSAJES_VALIDACION_FECHA_LANZAMIENTO_VIDEO, VALIDACION_DURACION_SEGUNDOS_VIDEO, MENSAJES_VALIDACION_DURACION_SEGUNDOS_VIDEO, VALIDACION_CANCION_VIDEO, MENSAJES_VALIDACION_CANCION_VIDEO, VALIDACION_TIPO_VIDEO, MENSAJES_VALIDACION_TIPO_VIDEO, VALIDACION_ENLACE_VIDEO, MENSAJES_VALIDACION_ENLACE_VIDEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_NOMBRE_VIDEO", function() { return VALIDACION_NOMBRE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_NOMBRE_VIDEO", function() { return MENSAJES_VALIDACION_NOMBRE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_DESCRIPCION_VIDEO", function() { return VALIDACION_DESCRIPCION_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_DESCRIPCION_VIDEO", function() { return MENSAJES_VALIDACION_DESCRIPCION_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_FECHA_LANZAMIENTO_VIDEO", function() { return VALIDACION_FECHA_LANZAMIENTO_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_FECHA_LANZAMIENTO_VIDEO", function() { return MENSAJES_VALIDACION_FECHA_LANZAMIENTO_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_DURACION_SEGUNDOS_VIDEO", function() { return VALIDACION_DURACION_SEGUNDOS_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_DURACION_SEGUNDOS_VIDEO", function() { return MENSAJES_VALIDACION_DURACION_SEGUNDOS_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_CANCION_VIDEO", function() { return VALIDACION_CANCION_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_CANCION_VIDEO", function() { return MENSAJES_VALIDACION_CANCION_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_TIPO_VIDEO", function() { return VALIDACION_TIPO_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_TIPO_VIDEO", function() { return MENSAJES_VALIDACION_TIPO_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_ENLACE_VIDEO", function() { return VALIDACION_ENLACE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_ENLACE_VIDEO", function() { return MENSAJES_VALIDACION_ENLACE_VIDEO; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


var VALIDACION_NOMBRE_VIDEO = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
];
var MENSAJES_VALIDACION_NOMBRE_VIDEO = {
    required: 'El campo nombre es obligatorio',
    minlength: 'El campo nombre debe tener mínimo 1 caracter',
    maxlength: 'El campo nombre no debe tener más de 50 caracteres'
};
var VALIDACION_DESCRIPCION_VIDEO = [];
var MENSAJES_VALIDACION_DESCRIPCION_VIDEO = {
    required: 'El campo descripción es obligatorio',
};
var VALIDACION_FECHA_LANZAMIENTO_VIDEO = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_FECHA_LANZAMIENTO_VIDEO = {
    required: 'El campo fecha de lanzamiento es obligatorio',
};
var VALIDACION_DURACION_SEGUNDOS_VIDEO = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_DURACION_SEGUNDOS_VIDEO = {
    required: 'El campo duración es obligatorio',
};
var VALIDACION_CANCION_VIDEO = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_CANCION_VIDEO = {
    required: 'El campo canción es obligatorio',
};
var VALIDACION_TIPO_VIDEO = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_TIPO_VIDEO = {
    required: 'El campo tipo es obligatorio',
};
var VALIDACION_ENLACE_VIDEO = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_ENLACE_VIDEO = {
    required: 'El campo enlace es obligatorio',
};


/***/ }),

/***/ "./src/app/modulos/video/componentes/formulario-video/formulario-video.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/video/componentes/formulario-video/formulario-video.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdmlkZW8vY29tcG9uZW50ZXMvZm9ybXVsYXJpby12aWRlby9mb3JtdWxhcmlvLXZpZGVvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/video/componentes/formulario-video/formulario-video.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modulos/video/componentes/formulario-video/formulario-video.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FormularioVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioVideoComponent", function() { return FormularioVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constantes/configuracion-calendario */ "./src/app/constantes/configuracion-calendario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../funciones/generar-mensajes-error */ "./src/app/funciones/generar-mensajes-error.ts");
/* harmony import */ var _funciones_mostrar_segundos_en_minutos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../funciones/mostrar-segundos-en-minutos */ "./src/app/funciones/mostrar-segundos-en-minutos.ts");
/* harmony import */ var _servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../servicios/rest/video-rest.service */ "./src/app/servicios/rest/video-rest.service.ts");
/* harmony import */ var _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../constantes/validaciones-formulario/video */ "./src/app/constantes/validaciones-formulario/video.ts");
/* harmony import */ var _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../servicios/rest/cancion-rest.service */ "./src/app/servicios/rest/cancion-rest.service.ts");











var FormularioVideoComponent = /** @class */ (function () {
    function FormularioVideoComponent(_cancionRestService, _videoRestService, _formBuilder, _toasterService) {
        this._cancionRestService = _cancionRestService;
        this._videoRestService = _videoRestService;
        this._formBuilder = _formBuilder;
        this._toasterService = _toasterService;
        this.configuracionCalendario = _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__["CONFIGURACIONES_CALENDARIO"];
        this.arregloCanciones = [];
        this.mensajesError = {
            nombre: [],
            descripcion: [],
            duracionSegundos: [],
            fechaLanzamiento: [],
            cancion: [],
            tipoVideo: [],
            enlace: []
        };
        this.subscribers = [];
        this.videoValidoEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mask = [/[0-5]/, /\d/, ':', /[0-5]/, /\d/];
    }
    FormularioVideoComponent.prototype.ngOnInit = function () {
        this.iniciarFormulario();
    };
    FormularioVideoComponent.prototype.iniciarFormulario = function () {
        this.crearFormulario();
        if (this.video) {
            this.idTipoVideo = this.video.tipoVideo.id;
        }
        this.verificarCamposFormulario();
        this.verificarFormulario();
    };
    FormularioVideoComponent.prototype.crearFormulario = function () {
        this.formularioVideo = this._formBuilder.group({
            nombre: [this.video ? this.video.nombre : '', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["VALIDACION_NOMBRE_VIDEO"]],
            descripcion: [this.video ? this.video.descripcion : '', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["VALIDACION_DESCRIPCION_VIDEO"]],
            fechaLanzamiento: [this.video ? this.video.fechaLanzamiento : '', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["VALIDACION_FECHA_LANZAMIENTO_VIDEO"]],
            duracionSegundos: [this.video ? Object(_funciones_mostrar_segundos_en_minutos__WEBPACK_IMPORTED_MODULE_7__["mostrarSegundosEnMinutos"])(this.video.duracionSegundos) : null, _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["VALIDACION_DURACION_SEGUNDOS_VIDEO"]],
            cancion: [this.video ? this.video.cancion : null, _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["VALIDACION_CANCION_VIDEO"]],
            tipoVideo: [this.video ? this.video.tipoVideo : null, _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["VALIDACION_TIPO_VIDEO"]],
            enlace: [this.video ? this.obtenerEnlace() : null, _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["VALIDACION_ENLACE_VIDEO"]]
        });
    };
    FormularioVideoComponent.prototype.verificarCamposFormulario = function () {
        this.verificarCampoFormControl('nombre', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["MENSAJES_VALIDACION_NOMBRE_VIDEO"]);
        this.verificarCampoFormControl('descripcion', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["MENSAJES_VALIDACION_DESCRIPCION_VIDEO"]);
        this.verificarCampoFormControl('fechaLanzamiento', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["MENSAJES_VALIDACION_FECHA_LANZAMIENTO_VIDEO"]);
        this.verificarCampoFormControl('duracionSegundos', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["MENSAJES_VALIDACION_DURACION_SEGUNDOS_VIDEO"]);
        this.verificarCampoFormControl('cancion', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["MENSAJES_VALIDACION_CANCION_VIDEO"]);
        this.verificarCampoFormControl('tipoVideo', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["MENSAJES_VALIDACION_TIPO_VIDEO"]);
        this.verificarCampoFormControl('enlace', _constantes_validaciones_formulario_video__WEBPACK_IMPORTED_MODULE_9__["MENSAJES_VALIDACION_ENLACE_VIDEO"]);
    };
    FormularioVideoComponent.prototype.verificarCampoFormControl = function (campo, mensajeValidacion) {
        var _this = this;
        var campoFormControl = this.formularioVideo.get(campo);
        var subscriber = campoFormControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .subscribe(function (valor) {
            _this.mensajesError[campo] = Object(_funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_6__["generarMensajesError"])(campoFormControl, _this.mensajesError[campo], mensajeValidacion);
        });
        this.subscribers.push(subscriber);
    };
    FormularioVideoComponent.prototype.verificarFormulario = function () {
        var _this = this;
        var formularioFormGroup = this.formularioVideo;
        var subscriber = formularioFormGroup
            .valueChanges
            .subscribe(function (formulario) {
            var videoValido = formularioFormGroup.valid;
            if (videoValido) {
                _this.videoValidoEnviar.emit(formulario);
            }
            else {
                _this.videoValidoEnviar.emit(false);
            }
        });
        this.subscribers.push(subscriber);
    };
    FormularioVideoComponent.prototype.deshabilitarFormulario = function () {
        this.formularioVideo.disable();
    };
    FormularioVideoComponent.prototype.buscarCancionesPorArtista = function (respuestaArtista) {
        this.formularioVideo.patchValue({
            artistas: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(respuestaArtista)
        });
    };
    FormularioVideoComponent.prototype.escucharTipoVideoSeleccionado = function (tipoVideoSeleccionado) {
        this.formularioVideo.patchValue({
            tipoVideo: tipoVideoSeleccionado,
        });
    };
    FormularioVideoComponent.prototype.volverFormularioInicial = function () {
        this.formularioVideo.patchValue({
            nombre: this.video.nombre,
            descripcion: this.video.descripcion,
            fechaLanzamiento: this.video.fechaLanzamiento,
            duracionSegundos: this.video.duracionSegundos,
            tipoVideo: this.video.tipoVideo,
            cancion: this.video.cancion,
            enlace: this.obtenerEnlace(),
        });
        this.idTipoVideo = this.video.tipoVideo.id;
        this.deshabilitarFormulario();
    };
    FormularioVideoComponent.prototype.obtenerEnlace = function () {
        if (this.video && this.video.enlacesVideo.length) {
            return this.video.enlacesVideo[0].url;
        }
        else {
            return null;
        }
    };
    FormularioVideoComponent.prototype.setearCancion = function (cancionSeleccionada) {
        this.formularioVideo.patchValue({
            cancion: cancionSeleccionada
        });
    };
    FormularioVideoComponent.ctorParameters = function () { return [
        { type: _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_10__["CancionRestService"] },
        { type: _servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_8__["VideoRestService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioVideoComponent.prototype, "video", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormularioVideoComponent.prototype, "videoValidoEnviar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], FormularioVideoComponent.prototype, "idsArtistas", void 0);
    FormularioVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-video',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formulario-video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/componentes/formulario-video/formulario-video.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formulario-video.component.css */ "./src/app/modulos/video/componentes/formulario-video/formulario-video.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_10__["CancionRestService"],
            _servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_8__["VideoRestService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], FormularioVideoComponent);
    return FormularioVideoComponent;
}());



/***/ }),

/***/ "./src/app/modulos/video/componentes/formulario-video/formulario-video.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/video/componentes/formulario-video/formulario-video.module.ts ***!
  \***************************************************************************************/
/*! exports provided: FormularioVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioVideoModule", function() { return FormularioVideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _formulario_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario-video.component */ "./src/app/modulos/video/componentes/formulario-video/formulario-video.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _componentes_input_imagen_input_imagen_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/input-imagen/input-imagen.module */ "./src/app/componentes/input-imagen/input-imagen.module.ts");
/* harmony import */ var _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module */ "./src/app/componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module.ts");
/* harmony import */ var _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../pipes/safe-pipe/safe-pipe.module */ "./src/app/pipes/safe-pipe/safe-pipe.module.ts");
/* harmony import */ var _componentes_autocomplete_tipo_video_autocomplete_tipo_video_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../componentes/autocomplete-tipo-video/autocomplete-tipo-video.module */ "./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.module.ts");
/* harmony import */ var _componentes_autocomplete_cancion_autocomplete_cancion_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../componentes/autocomplete-cancion/autocomplete-cancion.module */ "./src/app/componentes/autocomplete-cancion/autocomplete-cancion.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/__ivy_ngcc__/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__);












var FormularioVideoModule = /** @class */ (function () {
    function FormularioVideoModule() {
    }
    FormularioVideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_formulario_video_component__WEBPACK_IMPORTED_MODULE_3__["FormularioVideoComponent"]],
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
                primeng__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["InputMaskModule"],
                _componentes_autocomplete_tipo_video_autocomplete_tipo_video_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteTipoVideoModule"],
                _componentes_autocomplete_cancion_autocomplete_cancion_module__WEBPACK_IMPORTED_MODULE_10__["AutocompleteCancionModule"],
                _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_8__["SafePipeModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__["TextMaskModule"]
            ],
            exports: [
                _formulario_video_component__WEBPACK_IMPORTED_MODULE_3__["FormularioVideoComponent"]
            ]
        })
    ], FormularioVideoModule);
    return FormularioVideoModule;
}());



/***/ }),

/***/ "./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdmlkZW8vbW9kYWxlcy9jcmVhci1lZGl0YXItdmlkZW8vY3JlYXItZWRpdGFyLXZpZGVvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CrearEditarVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEditarVideoComponent", function() { return CrearEditarVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/rest/video-rest.service */ "./src/app/servicios/rest/video-rest.service.ts");
/* harmony import */ var _funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../funciones/obtener-anio */ "./src/app/funciones/obtener-anio.ts");
/* harmony import */ var _funciones_convertir_minutos_segundos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../funciones/convertir-minutos-segundos */ "./src/app/funciones/convertir-minutos-segundos.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");









var CrearEditarVideoComponent = /** @class */ (function () {
    function CrearEditarVideoComponent(data, dialogo, _toasterService, _cargandoService, _vidoRestService) {
        this.data = data;
        this.dialogo = dialogo;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this._vidoRestService = _vidoRestService;
    }
    CrearEditarVideoComponent.prototype.ngOnInit = function () {
    };
    CrearEditarVideoComponent.prototype.crearEditarVideo = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        this.videoCrearEditar.anio = Object(_funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_6__["obtenerAnio"])(this.videoCrearEditar.fechaLanzamiento);
        this.videoCrearEditar.duracionSegundos = +Object(_funciones_convertir_minutos_segundos__WEBPACK_IMPORTED_MODULE_7__["convertirMinutosMascaraASegundos"])(this.videoCrearEditar.duracionSegundos.toString());
        var enlaces = [
            {
                url: this.videoCrearEditar.enlace,
                plataforma: 2
            }
        ];
        if (this.data.video) {
            this._vidoRestService
                .editarVideo(this.videoCrearEditar, enlaces, this.data.video.id)
                .subscribe(function (respuestaVideoEditado) {
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
                _this.dialogo.close(respuestaVideoEditado);
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
        else {
            this._vidoRestService
                .crearVideo(this.videoCrearEditar, enlaces)
                .subscribe(function (respuestaVideoCreado) {
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
                _this.dialogo.close(respuestaVideoCreado);
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
    };
    CrearEditarVideoComponent.prototype.validarFormularioVideo = function (video) {
        if (video) {
            this.formularioValido = true;
            this.videoCrearEditar = video;
        }
        else {
            this.formularioValido = false;
        }
    };
    CrearEditarVideoComponent.prototype.cerrarModal = function () {
        this.dialogo.close();
    };
    CrearEditarVideoComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] },
        { type: _servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_5__["VideoRestService"] }
    ]; };
    CrearEditarVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crear-editar-video',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-editar-video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-editar-video.component.css */ "./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"],
            _servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_5__["VideoRestService"]])
    ], CrearEditarVideoComponent);
    return CrearEditarVideoComponent;
}());



/***/ }),

/***/ "./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CrearEditarVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEditarVideoModule", function() { return CrearEditarVideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _crear_editar_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-editar-video.component */ "./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.ts");
/* harmony import */ var _componentes_formulario_video_formulario_video_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../componentes/formulario-video/formulario-video.module */ "./src/app/modulos/video/componentes/formulario-video/formulario-video.module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/boton-guardar/boton-guardar.module */ "./src/app/componentes/boton-guardar/boton-guardar.module.ts");
/* harmony import */ var _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../componentes/boton-cancelar/boton-cancelar.module */ "./src/app/componentes/boton-cancelar/boton-cancelar.module.ts");








var CrearEditarVideoModule = /** @class */ (function () {
    function CrearEditarVideoModule() {
    }
    CrearEditarVideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_crear_editar_video_component__WEBPACK_IMPORTED_MODULE_3__["CrearEditarVideoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _componentes_formulario_video_formulario_video_module__WEBPACK_IMPORTED_MODULE_4__["FormularioVideoModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_6__["BotonGuardarModule"],
                _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_7__["BotonCancelarModule"]
            ]
        })
    ], CrearEditarVideoModule);
    return CrearEditarVideoModule;
}());



/***/ }),

/***/ "./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdmlkZW8vcnV0YXMvcnV0YS1nZXN0aW9uLXZpZGVvcy9ydXRhLWdlc3Rpb24tdmlkZW9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RutaGestionVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaGestionVideosComponent", function() { return RutaGestionVideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../artista/rutas/definicion-rutas/rutas-artista */ "./src/app/modulos/artista/rutas/definicion-rutas/rutas-artista.ts");
/* harmony import */ var _definicion_rutas_rutas_videos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../definicion-rutas/rutas-videos */ "./src/app/modulos/video/rutas/definicion-rutas/rutas-videos.ts");
/* harmony import */ var _servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../servicios/rest/video-rest.service */ "./src/app/servicios/rest/video-rest.service.ts");
/* harmony import */ var _funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../funciones/obtener-objeto */ "./src/app/funciones/obtener-objeto.ts");
/* harmony import */ var _modales_crear_editar_video_crear_editar_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modales/crear-editar-video/crear-editar-video.component */ "./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.ts");














var RutaGestionVideosComponent = /** @class */ (function () {
    function RutaGestionVideosComponent(_videoRestService, dialog, _toasterService, _cargandoService, _artistaRestService, _router, _activatedRoute) {
        this._videoRestService = _videoRestService;
        this.dialog = dialog;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this._artistaRestService = _artistaRestService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.videos = [];
        this.queryParams = {};
        this.busqueda = '';
        this.rutaImagen = 'assets/imagenes/video.svg';
        this.columnasVideos = [
            {
                field: 'nombre',
                header: 'Nombre',
                width: '15%'
            },
            {
                field: 'artistas',
                header: 'Artista(s)',
                width: '15%'
            },
            {
                field: 'albums',
                header: 'Album',
                width: '15%'
            },
            {
                field: 'duracionSegundos',
                header: 'Duracion',
                width: '10%'
            },
            {
                field: 'fechaLanzamiento',
                header: 'Fecha Lanzamiento',
                width: '10%'
            },
            {
                field: 'tipo',
                header: 'Tipo',
                width: '10%'
            },
            {
                field: 'acciones',
                header: 'Acciones',
                width: '10%'
            },
        ];
    }
    RutaGestionVideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (params) {
            _this.idArtistaParams = params.idArtista ? +params.idArtista : undefined;
            _this.setearArregloRutasMigasPan();
            _this.seteoRutas();
            return _this._activatedRoute.queryParams;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (queryParams) {
            if (_this.idArtistaParams) {
                _this.idArtista = _this.idArtistaParams;
                _this._artistaRestService.findOne(_this.idArtista)
                    .subscribe(function (artista) {
                    _this.artista = artista;
                }, function (error) {
                    console.error(error);
                    _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["ToastErrorCargandoDatos"]);
                });
            }
            if (queryParams.consulta) {
                _this.queryParams.consulta = JSON.parse(queryParams.consulta);
                if (_this.queryParams.consulta.busqueda) {
                    _this.busqueda = _this.queryParams.consulta.busqueda;
                }
                if (_this.queryParams.consulta.idAlbum) {
                    _this.idAlbum = _this.queryParams.consulta.idAlbum;
                }
                if (_this.queryParams.consulta.idCancion) {
                    _this.idCancion = _this.queryParams.consulta.idCancion;
                }
                if (_this.queryParams.consulta.idTipoVideo) {
                    _this.idTipoVideo = _this.queryParams.consulta.idTipoVideo;
                }
                if (_this.queryParams.consulta.idArtista) {
                    _this.idArtistaQuery = _this.queryParams.consulta.idArtista;
                    _this.idArtista = _this.idArtistaQuery;
                }
                else {
                    _this.queryParams.consulta.idArtista = _this.idArtista;
                }
            }
            else {
                _this.queryParams.consulta = {
                    busqueda: '',
                    idArtista: _this.idArtista,
                    idAlbum: _this.idAlbum,
                    idCancion: _this.idCancion,
                    idTipoVideo: _this.idTipoVideo,
                };
            }
            _this._cargandoService.habilitarCargando();
            return _this._videoRestService.obtenerVideosPorCancionArtistaAlbumTipo(JSON.stringify(_this.queryParams.consulta));
        }))
            .subscribe(function (respuestaVideos) {
            _this.videos = respuestaVideos[0];
            console.log(_this.videos);
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_8__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    RutaGestionVideosComponent.prototype.setearArregloRutasMigasPan = function () {
        if (this.idArtistaParams) {
            this.arregloRutas = [
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_9__["RUTAS_ARTISTA"].rutaGestionArtistas(false, true),
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_9__["RUTAS_ARTISTA"].rutaVerEditarArtistas(false, true, [this.idArtistaParams]),
                _definicion_rutas_rutas_videos__WEBPACK_IMPORTED_MODULE_10__["RUTAS_VIDEO"].rutaGestionVideos(false, true, [this.idArtistaParams])
            ];
        }
        else {
            this.arregloRutas = [
                _definicion_rutas_rutas_videos__WEBPACK_IMPORTED_MODULE_10__["RUTAS_VIDEO"].rutaGestionVideos(false, true)
            ];
        }
    };
    RutaGestionVideosComponent.prototype.seteoRutas = function () {
        this.ruta = _definicion_rutas_rutas_videos__WEBPACK_IMPORTED_MODULE_10__["RUTAS_VIDEO"]
            .rutaGestionVideos(false, true, [this.idArtistaParams])
            .ruta;
    };
    RutaGestionVideosComponent.prototype.buscarVideosPorArtista = function (artistaSeleccionado) {
        this.idArtista = artistaSeleccionado ? artistaSeleccionado.id : undefined;
        this.buscarVideos();
    };
    RutaGestionVideosComponent.prototype.buscarVideosPorAlbum = function (albumSeleccionado) {
        this.idAlbum = albumSeleccionado ? albumSeleccionado.id : undefined;
        this.buscarVideos();
    };
    RutaGestionVideosComponent.prototype.escucharBusqueda = function (busqueda) {
        this.busqueda = busqueda;
        this.buscarVideos();
    };
    RutaGestionVideosComponent.prototype.obtenerArtistasCancion = function (artistasCancion) {
        return Object(_funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_12__["obtenerObjeto"])(artistasCancion, 'artista', 'nombre');
    };
    RutaGestionVideosComponent.prototype.obtenerAlbumesCancion = function (albumesCancion) {
        return Object(_funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_12__["obtenerObjeto"])(albumesCancion, 'album', 'nombre');
    };
    RutaGestionVideosComponent.prototype.buscarVideosPorCancion = function (cancionSeleccionada) {
        this.idCancion = cancionSeleccionada ? cancionSeleccionada.id : undefined;
        this.buscarVideos();
    };
    RutaGestionVideosComponent.prototype.buscarVideosPorTipo = function (tipoVideo) {
        this.idTipoVideo = tipoVideo ? tipoVideo.id : undefined;
        this.buscarVideos();
    };
    RutaGestionVideosComponent.prototype.buscarVideos = function () {
        var consulta = {
            busqueda: this.busqueda,
            idCancion: this.idCancion,
            idArtista: this.idArtista,
            idAlbum: this.idAlbum,
            idTipoVideo: this.idTipoVideo
        };
        this.queryParams.consulta = JSON.stringify(consulta);
        this._router
            .navigate(this.ruta, {
            queryParams: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.queryParams)
        });
    };
    RutaGestionVideosComponent.prototype.abrirModalCrearEditarVideo = function (video, id) {
        var _this = this;
        var dialogRef = this.dialog
            .open(_modales_crear_editar_video_crear_editar_video_component__WEBPACK_IMPORTED_MODULE_13__["CrearEditarVideoComponent"], {
            width: '1000px',
            data: {
                video: video,
                idArtista: this.idArtista
            },
        });
        var resultadoModal$ = dialogRef.afterClosed();
        resultadoModal$
            .subscribe(function (videoCreadaEditado) {
            if (videoCreadaEditado) {
                if (id === undefined) {
                    _this.videos.unshift(videoCreadaEditado);
                }
                else {
                    _this.videos[id] = videoCreadaEditado;
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    RutaGestionVideosComponent.ctorParameters = function () { return [
        { type: _servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_11__["VideoRestService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__["ArtistaRestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    RutaGestionVideosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta-gestion-videos',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ruta-gestion-videos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ruta-gestion-videos.component.css */ "./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_video_rest_service__WEBPACK_IMPORTED_MODULE_11__["VideoRestService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__["ArtistaRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], RutaGestionVideosComponent);
    return RutaGestionVideosComponent;
}());



/***/ }),

/***/ "./src/app/modulos/video/video-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modulos/video/video-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VideoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoRoutingModule", function() { return VideoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _rutas_ruta_gestion_videos_ruta_gestion_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutas/ruta-gestion-videos/ruta-gestion-videos.component */ "./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.ts");




var routes = [
    {
        path: 'gestion-videos',
        children: [
            {
                path: '',
                component: _rutas_ruta_gestion_videos_ruta_gestion_videos_component__WEBPACK_IMPORTED_MODULE_3__["RutaGestionVideosComponent"]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'gestion-videos',
        pathMatch: 'full',
    }
];
var VideoRoutingModule = /** @class */ (function () {
    function VideoRoutingModule() {
    }
    VideoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VideoRoutingModule);
    return VideoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modulos/video/video.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modulos/video/video.module.ts ***!
  \***********************************************/
/*! exports provided: VideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModule", function() { return VideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _video_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-routing.module */ "./src/app/modulos/video/video-routing.module.ts");
/* harmony import */ var _rutas_ruta_gestion_videos_ruta_gestion_videos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rutas/ruta-gestion-videos/ruta-gestion-videos.component */ "./src/app/modulos/video/rutas/ruta-gestion-videos/ruta-gestion-videos.component.ts");
/* harmony import */ var _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentes/migas-pan/migas-pan.module */ "./src/app/componentes/migas-pan/migas-pan.module.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module */ "./src/app/pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module.ts");
/* harmony import */ var _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../componentes/input-buscar-boton/input-buscar-boton.module */ "./src/app/componentes/input-buscar-boton/input-buscar-boton.module.ts");
/* harmony import */ var _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../componentes/autocomplete-artista/autocomplete-artista.module */ "./src/app/componentes/autocomplete-artista/autocomplete-artista.module.ts");
/* harmony import */ var _componentes_autocomplete_albums_autocomplete_albums_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../componentes/autocomplete-albums/autocomplete-albums.module */ "./src/app/componentes/autocomplete-albums/autocomplete-albums.module.ts");
/* harmony import */ var _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../componentes/boton-nuevo/boton-nuevo.module */ "./src/app/componentes/boton-nuevo/boton-nuevo.module.ts");
/* harmony import */ var _componentes_autocomplete_cancion_autocomplete_cancion_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../componentes/autocomplete-cancion/autocomplete-cancion.module */ "./src/app/componentes/autocomplete-cancion/autocomplete-cancion.module.ts");
/* harmony import */ var _componentes_autocomplete_tipo_video_autocomplete_tipo_video_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../componentes/autocomplete-tipo-video/autocomplete-tipo-video.module */ "./src/app/componentes/autocomplete-tipo-video/autocomplete-tipo-video.module.ts");
/* harmony import */ var _modales_crear_editar_video_crear_editar_video_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modales/crear-editar-video/crear-editar-video.module */ "./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.module.ts");
/* harmony import */ var _modales_crear_editar_video_crear_editar_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modales/crear-editar-video/crear-editar-video.component */ "./src/app/modulos/video/modales/crear-editar-video/crear-editar-video.component.ts");
















var VideoModule = /** @class */ (function () {
    function VideoModule() {
    }
    VideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_rutas_ruta_gestion_videos_ruta_gestion_videos_component__WEBPACK_IMPORTED_MODULE_4__["RutaGestionVideosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _video_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoRoutingModule"],
                _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_5__["MigasPanModule"],
                primeng__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_7__["SegundosAMinutosHorasPipeModule"],
                _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_8__["InputBuscarBotonModule"],
                _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteArtistaModule"],
                _componentes_autocomplete_cancion_autocomplete_cancion_module__WEBPACK_IMPORTED_MODULE_12__["AutocompleteCancionModule"],
                _componentes_autocomplete_albums_autocomplete_albums_module__WEBPACK_IMPORTED_MODULE_10__["AutocompleteAlbumsModule"],
                _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_11__["BotonNuevoModule"],
                _componentes_autocomplete_tipo_video_autocomplete_tipo_video_module__WEBPACK_IMPORTED_MODULE_13__["AutocompleteTipoVideoModule"],
                _modales_crear_editar_video_crear_editar_video_module__WEBPACK_IMPORTED_MODULE_14__["CrearEditarVideoModule"]
            ],
            exports: [
                _rutas_ruta_gestion_videos_ruta_gestion_videos_component__WEBPACK_IMPORTED_MODULE_4__["RutaGestionVideosComponent"]
            ],
            entryComponents: [
                _modales_crear_editar_video_crear_editar_video_component__WEBPACK_IMPORTED_MODULE_15__["CrearEditarVideoComponent"]
            ]
        })
    ], VideoModule);
    return VideoModule;
}());



/***/ }),

/***/ "./src/app/servicios/rest/tipo-video-rest.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/servicios/rest/tipo-video-rest.service.ts ***!
  \***********************************************************/
/*! exports provided: TipoVideoRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoVideoRestService", function() { return TipoVideoRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var TipoVideoRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TipoVideoRestService, _super);
    function TipoVideoRestService(
    // tslint:disable-next-line:variable-name
    _http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'tipo-video';
        return _this;
    }
    TipoVideoRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    TipoVideoRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TipoVideoRestService);
    return TipoVideoRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ })

}]);
//# sourceMappingURL=src-app-modulos-video-video-module.js.map