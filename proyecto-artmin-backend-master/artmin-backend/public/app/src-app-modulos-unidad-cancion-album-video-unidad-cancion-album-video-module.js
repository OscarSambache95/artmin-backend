(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modulos-unidad-cancion-album-video-unidad-cancion-album-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"formularioUnidad\"\n>\n  <div class=\"row\">\n    <div\n      class=\"col-sm-12\">\n      <div class=\"ui-fluid\">\n\n\n        <div\n          *ngIf=\"tipo === 'cancion'\"\n          class=\"p-field p-grid\">\n          <label for=\"cancion\" class=\"p-col-fixed\">Cancion *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-cancion\n              [arregloidsCancionesSeleccionadas]=\"idsCancionesAlbumesVideos\"\n              [idCancion]=\"unidad ? unidad.cancion.id : null\"\n              [idsArtistas]=\"idArtista ? [idArtista] : []\"\n              id='cancion'\n              (emitirCancionSeleccionado)=\"setearCancion($event)\"\n            ></app-autocomplete-cancion>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.cancion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div\n          *ngIf=\"tipo === 'album'\"\n          class=\"p-field p-grid\">\n          <label for=\"albums\" class=\"p-col-fixed\">Album</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-albums\n              [arregloIdsAlbumsSeleccionados]=\"idsCancionesAlbumesVideos\"\n              [idsArtistas]=\"idArtista ? [idArtista] : []\"\n              id=\"albums\"\n              [idAlbum]=\"unidad ? unidad.album.id : null\"\n              (emitirAlbumSeleccionado)=\"setearAlbum($event)\"\n            ></app-autocomplete-albums>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.album\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div\n          *ngIf=\"tipo === 'video'\"\n          class=\"p-field p-grid\">\n          <label for=\"video\" class=\"p-col-fixed\">Video:</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-video\n              [arregloIdsVideosSeleccionados]=\"idsCancionesAlbumesVideos\"\n              [idsArtistas]=\"idArtista ? [idArtista] : []\"\n              id=\"video\"\n              [idVideo]=\"unidad ? unidad.video.id : null\"\n              (emitirVideoSeleccionado)=\"setearVideo($event)\"\n            ></app-autocomplete-video>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.video\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div\n          class=\"p-field p-grid\">\n          <label for=\"medida\" class=\"p-col-fixed\">Medida *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-medida\n              [idsMedidasAsignadas]=\"unidad ? [unidad.medida.id] : []\"\n              id='medida'\n              (emitirMedidaSeleccionada)=\"setearMedida($event)\"\n            ></app-autocomplete-medida>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.medida\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"unidadesDebut\" class=\"p-col-fixed\">Unidades Debut:</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"unidadesDebut\"\n              [step]=\"1\"\n              mode=\"decimal\"\n              [useGrouping]=\"true\"\n              [min]=\"0\"\n              formControlName='unidadesDebut'\n              [placeholder]=\"'Ingrese las unidades debut ' + placeHolderTipo\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.unidadesDebut\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"unidadesReales\" class=\"p-col-fixed\">Unidades Reales:</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"unidadesReales\"\n              [step]=\"1\"\n              [useGrouping]=\"true\"\n              [min]=\"0\"\n              formControlName='unidadesReales'\n              [placeholder]=\"'Ingrese las unidades reales ' + placeHolderTipo\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.unidadesReales\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3\n  mat-dialog-title\n  class=\"text-center\"\n>\n  <span class=\"bold\">{{data.unidad ? 'Editar' : 'Registrar'}} Unidad</span>\n</h3>\n<hr>\n<div mat-dialog-content>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"descripcion-modal\">{{'Llene todos los campos que son obligatorios.'}}</p>\n    </div>\n    <div class=\"col-sm-12\">\n      <app-formulario-unidad\n        [idsCancionesAlbumesVideos]=\"data.idsCancionesAlbumesVideos\"\n        [idArtista]=\"data.idArtista\"\n        [tipo]=\"data.tipo\"\n        [unidad]=\"data.unidad\"\n        (unidadValidoEnviar)=\"validarFormulario($event)\"\n      ></app-formulario-unidad>\n    </div>\n  </div>\n</div>\n\n<mat-dialog-actions class=\"justify-content-end\">\n  <div class=\"row\">\n    <div class=\"d-flex flex-row-reverse\">\n      <div class=\"p-3\">\n        <app-boton-guardar\n          [deshabilitarBoton]=\"!formularioValido\"\n          (emitirEvento)=\"crearEditarUnidad()\">\n        </app-boton-guardar>\n      </div>\n      <div class=\"p-3\">\n        <app-boton-cancelar\n          (emitirEvento)=\"cerrarModal()\"\n        ></app-boton-cancelar>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-migas-pan\n      [arregloRutas]=\"arregloRutas\">\n    </app-migas-pan>\n  </div>\n</div>\n<br>\n\n<div class=\"container\">\n  <div class=\"row center\">\n    <div class=\"col-sm-12\">\n      <h1 class=\"text-center\">\n        <img\n          style=\"width:40px\"\n          [src]=\"rutaImagen\">\n        {{ 'UNIDADES - ' + (artista?.nombre  + ' - ' + chart?.nombre) | uppercase}}\n      </h1>\n    </div>\n  </div>\n\n</div>\n<hr>\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-9\">\n    <app-input-buscar-boton\n      [busqueda]=\"busqueda\"\n      [placeholder]=\"'Ingrese el nombre . EJ: Bad romance'\"\n      [ayuda]=\"'Busque una canción por su nombre'\"\n      (emitirBusqueda)=\"escucharBusqueda($event)\">\n\n    </app-input-buscar-boton>\n  </div>\n  <div class=\"col-sm-3\">\n    <app-boton-nuevo\n      (emitirEvento)=\"abrirModalCrearEditarUnidad()\"\n    ></app-boton-nuevo>\n  </div>\n</div>\n\n<br>\n\n<br>\n<div class=\"row\">\n  <div class=\"col sm 12\" style=\"padding-left: 2%; padding-right: 2%\">\n    <p-table\n      #dt\n      [columns]=\"columnasUnidades\"\n      [value]=\"unidades\"\n      styleClass=\"ui-table-customers\"\n      [responsive]=\"true\"\n      [sortField]=\"'unidadesReales'\"\n    >\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n          <th\n            [pSortableColumn]=\"col.field\"\n            [style.width]=\"col.width\"\n            class=\"text-center\"\n            *ngFor=\"let col of columns\">\n            {{col.header}}\n            <p-sortIcon\n              *ngIf=\"col.header === 'Nombre' || col.header === 'Tipo'\"\n              [field]=\"col.field\"\n            >\n            </p-sortIcon>\n\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr>\n          <td [attr.colspan]=\"columns.length\">\n            No existen registros\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\">\n        <tr>\n          <td class=\"text-center\" *ngFor=\"let col of columns\">\n            <div *ngIf=\"col.field==='nombre'\">\n              <img\n                *ngIf=\"tipo === 'cancion' || tipo === 'album'\"\n                [src]=\"obtenerUrlPrincipal(rowData[tipo])\"\n                style=\"display:inline-block;\" width=\"120px\">\n              <div class=\"\">\n                {{rowData[tipo].nombre}}\n              </div>\n            </div>\n            <div *ngIf=\"col.field==='unidadesDebut'\">\n              {{rowData[col.field] ? (rowData[col.field] | number) : '-'}}\n            </div>\n            <div *ngIf=\"col.field==='unidadesReales'\">\n              {{rowData[col.field] ? (rowData[col.field] | number) : '-'}}\n            </div>\n            <div *ngIf=\"col.field==='medida'\">\n              {{rowData[col.field].nombre}}\n            </div>\n            <div *ngIf=\"col.field === 'acciones'\">\n              <button\n                (click)=\"abrirModalCrearEditarUnidad(rowData, index)\"\n                class=\"btn btn-primary\">\n                <i style=\"padding-right: 0%\" class=\"fas fa-pencil-alt\"></i>\n              </button>\n            </div>\n\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/constantes/validaciones-formulario/unidad.ts":
/*!**************************************************************!*\
  !*** ./src/app/constantes/validaciones-formulario/unidad.ts ***!
  \**************************************************************/
/*! exports provided: VALIDACION_UNIDADES_DEBUT_UNIDAD, MENSAJES_VALIDACION_UNIDADES_DEBUT_UNIDAD, VALIDACION_UNIDADES_REAL_UNIDAD, MENSAJES_VALIDACION_UNIDADES_REAL_UNIDAD, VALIDACION_MEDIDA_UNIDAD, MENSAJES_VALIDACION_MEDIDA_UNIDAD, MENSAJES_VALIDACION_CANCION_UNIDAD, MENSAJES_VALIDACION_ALBUM_UNIDAD, MENSAJES_VALIDACION_VIDEO_UNIDAD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_UNIDADES_DEBUT_UNIDAD", function() { return VALIDACION_UNIDADES_DEBUT_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_UNIDADES_DEBUT_UNIDAD", function() { return MENSAJES_VALIDACION_UNIDADES_DEBUT_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_UNIDADES_REAL_UNIDAD", function() { return VALIDACION_UNIDADES_REAL_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_UNIDADES_REAL_UNIDAD", function() { return MENSAJES_VALIDACION_UNIDADES_REAL_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_MEDIDA_UNIDAD", function() { return VALIDACION_MEDIDA_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_MEDIDA_UNIDAD", function() { return MENSAJES_VALIDACION_MEDIDA_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_CANCION_UNIDAD", function() { return MENSAJES_VALIDACION_CANCION_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_ALBUM_UNIDAD", function() { return MENSAJES_VALIDACION_ALBUM_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_VIDEO_UNIDAD", function() { return MENSAJES_VALIDACION_VIDEO_UNIDAD; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


var VALIDACION_UNIDADES_DEBUT_UNIDAD = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_UNIDADES_DEBUT_UNIDAD = {
    required: 'El campo unidades debut es obligatorio',
};
var VALIDACION_UNIDADES_REAL_UNIDAD = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_UNIDADES_REAL_UNIDAD = {
    required: 'El campo unidades real es obligatorio',
};
var VALIDACION_MEDIDA_UNIDAD = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_MEDIDA_UNIDAD = {
    required: 'El campo medida es obligatorio',
};
var MENSAJES_VALIDACION_CANCION_UNIDAD = {
    required: 'El campo canción es obligatorio',
};
var MENSAJES_VALIDACION_ALBUM_UNIDAD = {
    required: 'El campo album es obligatorio',
};
var MENSAJES_VALIDACION_VIDEO_UNIDAD = {
    required: 'El campo video es obligatorio',
};


/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.css ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdW5pZGFkLWNhbmNpb24tYWxidW0tdmlkZW8vY29tcG9uZW50ZXMvZm9ybXVsYXJpby11bmlkYWQvZm9ybXVsYXJpby11bmlkYWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FormularioUnidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioUnidadComponent", function() { return FormularioUnidadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../funciones/generar-mensajes-error */ "./src/app/funciones/generar-mensajes-error.ts");
/* harmony import */ var _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constantes/validaciones-formulario/unidad */ "./src/app/constantes/validaciones-formulario/unidad.ts");







var FormularioUnidadComponent = /** @class */ (function () {
    function FormularioUnidadComponent(_formBuilder, _toasterService) {
        this._formBuilder = _formBuilder;
        this._toasterService = _toasterService;
        this.mensajesError = {
            unidadesDebut: [],
            unidadesReales: [],
            medida: [],
            cancion: [],
            album: [],
            video: [],
        };
        this.subscribers = [];
        this.unidadValidoEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.idsCancionesAlbumesVideos = [];
        this.placeHolderTipo = '';
    }
    FormularioUnidadComponent.prototype.ngOnInit = function () {
        this.iniciarFormulario();
    };
    FormularioUnidadComponent.prototype.iniciarFormulario = function () {
        this.setearPlaceholderTipo();
        this.crearFormulario();
        this.verificarCamposFormulario();
        this.verificarFormulario();
    };
    FormularioUnidadComponent.prototype.crearFormulario = function () {
        this.formularioUnidad = this._formBuilder.group({
            unidadesDebut: [this.unidad ? this.unidad.unidadesDebut : null, _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["VALIDACION_UNIDADES_DEBUT_UNIDAD"]],
            unidadesReales: [this.unidad ? this.unidad.unidadesReales : null, _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["VALIDACION_UNIDADES_REAL_UNIDAD"]],
            medida: [this.unidad ? this.unidad.medida : null, _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["VALIDACION_MEDIDA_UNIDAD"]],
            cancion: [this.unidad ? this.unidad.cancion : null, this.tipo === 'cancion' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : []],
            album: [this.unidad ? this.unidad.album : null, this.tipo === 'album' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : []],
            video: [this.unidad ? this.unidad.video : null, this.tipo === 'video' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : []],
        });
    };
    FormularioUnidadComponent.prototype.verificarCamposFormulario = function () {
        this.verificarCampoFormControl('unidadesDebut', _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["MENSAJES_VALIDACION_UNIDADES_DEBUT_UNIDAD"]);
        this.verificarCampoFormControl('unidadesReales', _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["MENSAJES_VALIDACION_UNIDADES_REAL_UNIDAD"]);
        this.verificarCampoFormControl('medida', _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["MENSAJES_VALIDACION_MEDIDA_UNIDAD"]);
        this.verificarCampoFormControl('cancion', _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["MENSAJES_VALIDACION_CANCION_UNIDAD"]);
        this.verificarCampoFormControl('album', _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["MENSAJES_VALIDACION_ALBUM_UNIDAD"]);
        this.verificarCampoFormControl('video', _constantes_validaciones_formulario_unidad__WEBPACK_IMPORTED_MODULE_6__["MENSAJES_VALIDACION_VIDEO_UNIDAD"]);
    };
    FormularioUnidadComponent.prototype.verificarCampoFormControl = function (campo, mensajeValidacion) {
        var _this = this;
        var campoFormControl = this.formularioUnidad.get(campo);
        var subscriber = campoFormControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000))
            .subscribe(function (valor) {
            _this.mensajesError[campo] = Object(_funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_5__["generarMensajesError"])(campoFormControl, _this.mensajesError[campo], mensajeValidacion);
        });
        this.subscribers.push(subscriber);
    };
    FormularioUnidadComponent.prototype.verificarFormulario = function () {
        var _this = this;
        var formularioFormGroup = this.formularioUnidad;
        var subscriber = formularioFormGroup
            .valueChanges
            .subscribe(function (formulario) {
            var enlaceValido = formularioFormGroup.valid;
            if (enlaceValido) {
                _this.unidadValidoEnviar.emit(formulario);
            }
            else {
                _this.unidadValidoEnviar.emit(false);
            }
        });
        this.subscribers.push(subscriber);
    };
    FormularioUnidadComponent.prototype.setearMedida = function (medidaSeleccioanda) {
        this.formularioUnidad.patchValue({
            medida: medidaSeleccioanda
        });
    };
    FormularioUnidadComponent.prototype.setearCancion = function (cancionSeleccionada) {
        this.formularioUnidad.patchValue({
            cancion: cancionSeleccionada
        });
    };
    FormularioUnidadComponent.prototype.setearAlbum = function (albumSeleccionado) {
        this.formularioUnidad.patchValue({
            album: albumSeleccionado
        });
    };
    FormularioUnidadComponent.prototype.setearVideo = function (videoSeleccionado) {
        this.formularioUnidad.patchValue({
            video: videoSeleccionado
        });
    };
    FormularioUnidadComponent.prototype.setearPlaceholderTipo = function () {
        if (this.tipo === 'video') {
            this.placeHolderTipo = ' del video';
        }
        if (this.tipo === 'album') {
            this.placeHolderTipo = ' del album';
        }
        if (this.tipo === 'cancion') {
            this.placeHolderTipo = ' de la cancion';
        }
    };
    FormularioUnidadComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormularioUnidadComponent.prototype, "unidadValidoEnviar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioUnidadComponent.prototype, "unidad", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormularioUnidadComponent.prototype, "tipo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioUnidadComponent.prototype, "idsCancionesAlbumesVideos", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], FormularioUnidadComponent.prototype, "idArtista", void 0);
    FormularioUnidadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-unidad',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formulario-unidad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formulario-unidad.component.css */ "./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], FormularioUnidadComponent);
    return FormularioUnidadComponent;
}());



/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FormularioUnidadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioUnidadModule", function() { return FormularioUnidadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _formulario_unidad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario-unidad.component */ "./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _componentes_autocomplete_medida_autocomplete_medida_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/autocomplete-medida/autocomplete-medida.module */ "./src/app/componentes/autocomplete-medida/autocomplete-medida.module.ts");
/* harmony import */ var _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module */ "./src/app/componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module.ts");
/* harmony import */ var _componentes_autocomplete_cancion_autocomplete_cancion_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../componentes/autocomplete-cancion/autocomplete-cancion.module */ "./src/app/componentes/autocomplete-cancion/autocomplete-cancion.module.ts");
/* harmony import */ var _componentes_autocomplete_albums_autocomplete_albums_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../componentes/autocomplete-albums/autocomplete-albums.module */ "./src/app/componentes/autocomplete-albums/autocomplete-albums.module.ts");
/* harmony import */ var _componentes_autocomplete_video_autocomplete_video_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../componentes/autocomplete-video/autocomplete-video.module */ "./src/app/componentes/autocomplete-video/autocomplete-video.module.ts");











var FormularioUnidadModule = /** @class */ (function () {
    function FormularioUnidadModule() {
    }
    FormularioUnidadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_formulario_unidad_component__WEBPACK_IMPORTED_MODULE_3__["FormularioUnidadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["InputNumberModule"],
                _componentes_autocomplete_medida_autocomplete_medida_module__WEBPACK_IMPORTED_MODULE_6__["AutocompleteMedidaModule"],
                _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_7__["AlertaValidacionCampoFormularioModule"],
                _componentes_autocomplete_cancion_autocomplete_cancion_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteCancionModule"],
                _componentes_autocomplete_albums_autocomplete_albums_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteAlbumsModule"],
                _componentes_autocomplete_video_autocomplete_video_module__WEBPACK_IMPORTED_MODULE_10__["AutocompleteVideoModule"]
            ],
            exports: [
                _formulario_unidad_component__WEBPACK_IMPORTED_MODULE_3__["FormularioUnidadComponent"]
            ]
        })
    ], FormularioUnidadModule);
    return FormularioUnidadModule;
}());



/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.css ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdW5pZGFkLWNhbmNpb24tYWxidW0tdmlkZW8vbW9kYWxlcy9tb2RhbC1jcmVhci1lZGl0YXItdW5pZGFkL21vZGFsLWNyZWFyLWVkaXRhci11bmlkYWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ModalCrearEditarUnidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCrearEditarUnidadComponent", function() { return ModalCrearEditarUnidadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _servicios_rest_unidad_cancion_album_video_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/unidad-cancion-album-video-rest.service */ "./src/app/servicios/rest/unidad-cancion-album-video-rest.service.ts");







var ModalCrearEditarUnidadComponent = /** @class */ (function () {
    function ModalCrearEditarUnidadComponent(data, dialogo, _unidadRestService, _toasterService, _cargandoService) {
        this.data = data;
        this.dialogo = dialogo;
        this._unidadRestService = _unidadRestService;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
    }
    ModalCrearEditarUnidadComponent.prototype.ngOnInit = function () {
    };
    ModalCrearEditarUnidadComponent.prototype.crearEditarUnidad = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        if (this.data.unidad) {
            this._unidadRestService
                .updateOne(this.data.unidad.id, this.unidadACrearEditar)
                .subscribe(function (respuestaChartEditado) {
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["toastExitoEditar"]);
                _this._cargandoService.deshabiltarCargando();
                _this.dialogo.close(respuestaChartEditado);
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
            this._cargandoService.deshabiltarCargando();
        }
        else {
            this.unidadACrearEditar.chart = this.data.chart;
            this._unidadRestService
                .create(this.unidadACrearEditar)
                .subscribe(function (respuestaChartCreado) {
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
                _this.dialogo.close(respuestaChartCreado);
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
    };
    ModalCrearEditarUnidadComponent.prototype.cerrarModal = function () {
        this.dialogo.close();
    };
    ModalCrearEditarUnidadComponent.prototype.validarFormulario = function (unidad) {
        if (unidad) {
            this.formularioValido = true;
            this.unidadACrearEditar = unidad;
        }
        else {
            this.formularioValido = false;
        }
    };
    ModalCrearEditarUnidadComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _servicios_rest_unidad_cancion_album_video_rest_service__WEBPACK_IMPORTED_MODULE_6__["UnidadCancionAlbumVideoRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] }
    ]; };
    ModalCrearEditarUnidadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-crear-editar-unidad',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-crear-editar-unidad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-crear-editar-unidad.component.css */ "./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _servicios_rest_unidad_cancion_album_video_rest_service__WEBPACK_IMPORTED_MODULE_6__["UnidadCancionAlbumVideoRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"]])
    ], ModalCrearEditarUnidadComponent);
    return ModalCrearEditarUnidadComponent;
}());



/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ModalCrearEditarUnidadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCrearEditarUnidadModule", function() { return ModalCrearEditarUnidadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modal_crear_editar_unidad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-crear-editar-unidad.component */ "./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.ts");
/* harmony import */ var _componentes_formulario_unidad_formulario_unidad_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../componentes/formulario-unidad/formulario-unidad.module */ "./src/app/modulos/unidad-cancion-album-video/componentes/formulario-unidad/formulario-unidad.module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/boton-guardar/boton-guardar.module */ "./src/app/componentes/boton-guardar/boton-guardar.module.ts");
/* harmony import */ var _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../componentes/boton-cancelar/boton-cancelar.module */ "./src/app/componentes/boton-cancelar/boton-cancelar.module.ts");








var ModalCrearEditarUnidadModule = /** @class */ (function () {
    function ModalCrearEditarUnidadModule() {
    }
    ModalCrearEditarUnidadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_modal_crear_editar_unidad_component__WEBPACK_IMPORTED_MODULE_3__["ModalCrearEditarUnidadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _componentes_formulario_unidad_formulario_unidad_module__WEBPACK_IMPORTED_MODULE_4__["FormularioUnidadModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _componentes_boton_guardar_boton_guardar_module__WEBPACK_IMPORTED_MODULE_6__["BotonGuardarModule"],
                _componentes_boton_cancelar_boton_cancelar_module__WEBPACK_IMPORTED_MODULE_7__["BotonCancelarModule"]
            ]
        })
    ], ModalCrearEditarUnidadModule);
    return ModalCrearEditarUnidadModule;
}());



/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvdW5pZGFkLWNhbmNpb24tYWxidW0tdmlkZW8vcnV0YXMvZ2VzdGlvbi11bmlkYWRlcy9nZXN0aW9uLXVuaWRhZGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GestionUnidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionUnidadesComponent", function() { return GestionUnidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var _servicios_rest_chart_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/chart-rest.service */ "./src/app/servicios/rest/chart-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../artista/rutas/definicion-rutas/rutas-artista */ "./src/app/modulos/artista/rutas/definicion-rutas/rutas-artista.ts");
/* harmony import */ var _chart_rutas_definicion_rutas_rutas_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../chart/rutas/definicion-rutas/rutas-charts */ "./src/app/modulos/chart/rutas/definicion-rutas/rutas-charts.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");
/* harmony import */ var _servicios_rest_unidad_cancion_album_video_rest_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../servicios/rest/unidad-cancion-album-video-rest.service */ "./src/app/servicios/rest/unidad-cancion-album-video-rest.service.ts");
/* harmony import */ var _definicion_rutas_rutas_unidades__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../definicion-rutas/rutas-unidades */ "./src/app/modulos/unidad-cancion-album-video/rutas/definicion-rutas/rutas-unidades.ts");
/* harmony import */ var _modales_modal_crear_editar_unidad_modal_crear_editar_unidad_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component */ "./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.ts");
















var GestionUnidadesComponent = /** @class */ (function () {
    function GestionUnidadesComponent(_unidadRestService, dialog, _toasterService, _cargandoService, _artistaRestService, _chartRestService, _router, _activatedRoute) {
        this._unidadRestService = _unidadRestService;
        this.dialog = dialog;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this._artistaRestService = _artistaRestService;
        this._chartRestService = _chartRestService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.columnasUnidades = [
            {
                field: 'nombre',
                header: 'Nombre',
            },
            {
                field: 'unidadesDebut',
                header: 'Unidades Debut',
            },
            {
                field: 'unidadesReales',
                header: 'Unidades Reales',
            },
            {
                field: 'medida',
                header: 'Medida',
            },
            {
                field: 'acciones',
                header: 'Acciones',
            },
        ];
        this.busqueda = '';
        this.queryParams = {};
        this.ruta = [];
        this.rutaImagen = '';
        this.tipo = '';
        this.arregloidsCancionesAlbumesVideosSeleccionadas = [];
    }
    GestionUnidadesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (params) {
            _this.idArtista = +params.idArtista;
            _this.idChart = +params.idChart;
            _this.setearArregloRutasMigasPan();
            _this.seteoRutas();
            return _this._activatedRoute.queryParams;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (queryParams) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var promesaArtista, _a, promesaChart, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.idArtista) return [3 /*break*/, 2];
                        promesaArtista = this._artistaRestService.findOne(this.idArtista)
                            .toPromise();
                        _a = this;
                        return [4 /*yield*/, promesaArtista];
                    case 1:
                        _a.artista = _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!this.idChart) return [3 /*break*/, 4];
                        promesaChart = this._chartRestService.findOne(this.idChart)
                            .toPromise();
                        _b = this;
                        return [4 /*yield*/, promesaChart];
                    case 3:
                        _b.chart = _c.sent();
                        this.tipo = this.chart.tipo;
                        _c.label = 4;
                    case 4:
                        if (queryParams.consulta) {
                            this.queryParams.consulta = JSON.parse(queryParams.consulta);
                            if (this.queryParams.consulta.busqueda) {
                                this.busqueda = this.queryParams.consulta.busqueda;
                            }
                        }
                        else {
                            this.queryParams.consulta = {
                                busqueda: '',
                                idChart: this.idChart,
                                idArtista: this.idArtista,
                                tipo: this.tipo,
                            };
                        }
                        this._cargandoService.habilitarCargando();
                        return [2 /*return*/, this._unidadRestService.obtenerUnidades(JSON.stringify(this.queryParams.consulta)).toPromise()];
                }
            });
        }); }))
            .subscribe(function (respuestaUnidades) {
            _this.unidades = respuestaUnidades[0];
            _this.arregloidsCancionesAlbumesVideosSeleccionadas = _this.unidades
                .map(function (chartCancionAlbumVideo) {
                return chartCancionAlbumVideo[_this.tipo].id;
            });
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_9__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    GestionUnidadesComponent.prototype.escucharBusqueda = function (busqueda) {
        this.busqueda = busqueda;
        this.buscarUnidades();
    };
    GestionUnidadesComponent.prototype.buscarUnidades = function () {
        var consulta = {
            busqueda: this.busqueda,
            idChart: this.idChart,
            idArtista: this.idArtista,
            tipo: this.tipo,
        };
        this.queryParams.consulta = JSON.stringify(consulta);
        this._router
            .navigate(this.ruta, {
            queryParams: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.queryParams)
        });
    };
    GestionUnidadesComponent.prototype.setearArregloRutasMigasPan = function () {
        this.arregloRutas = [
            _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_10__["RUTAS_ARTISTA"].rutaGestionArtistas(false, true),
            _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_10__["RUTAS_ARTISTA"].rutaVerEditarArtistas(false, true, [this.idArtista]),
            _chart_rutas_definicion_rutas_rutas_charts__WEBPACK_IMPORTED_MODULE_11__["RUTAS_CHART"].rutaGestionCharts(false, true, [this.idArtista]),
            _definicion_rutas_rutas_unidades__WEBPACK_IMPORTED_MODULE_14__["RUTAS_UNIDADES"].rutaGestionUnidades(false, true, [
                this.idArtista,
                this.idChart
            ])
        ];
    };
    GestionUnidadesComponent.prototype.seteoRutas = function () {
        this.ruta = _definicion_rutas_rutas_unidades__WEBPACK_IMPORTED_MODULE_14__["RUTAS_UNIDADES"]
            .rutaGestionUnidades(false, true, [
            this.idArtista,
            this.idChart
        ])
            .ruta;
    };
    GestionUnidadesComponent.prototype.abrirModalCrearEditarUnidad = function (unidad, indice) {
        var _this = this;
        var dialogRef = this.dialog
            .open(_modales_modal_crear_editar_unidad_modal_crear_editar_unidad_component__WEBPACK_IMPORTED_MODULE_15__["ModalCrearEditarUnidadComponent"], {
            width: '600px',
            data: {
                unidad: unidad,
                idArtista: this.idArtista,
                tipo: this.tipo,
                chart: this.idChart,
                idsCancionesAlbumesVideos: this.arregloidsCancionesAlbumesVideosSeleccionadas,
            },
        });
        var resultadoModal$ = dialogRef.afterClosed();
        resultadoModal$
            .subscribe(function (unidadCreadaEditada) {
            if (unidadCreadaEditada) {
                var consulta = {
                    where: {
                        id: unidadCreadaEditada.id
                    },
                    relations: [
                        'chart',
                        'medida',
                        'cancion',
                        'cancion.imagenesCancion',
                        'album',
                        'album.imagenesAlbum',
                        'video',
                        'video.cancion'
                    ]
                };
                _this._unidadRestService
                    .findAll(JSON.stringify(consulta))
                    .subscribe(function (respuestaUnidad) {
                    if (indice || indice === 0) {
                        _this.unidades[indice] = respuestaUnidad[0][0];
                    }
                    else {
                        _this.unidades.push(respuestaUnidad[0][0]);
                    }
                    _this.unidades = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.unidades);
                    _this.arregloidsCancionesAlbumesVideosSeleccionadas = _this.unidades
                        .map(function (chartCancionAlbumVideo) {
                        return chartCancionAlbumVideo[_this.tipo].id;
                    });
                    _this._cargandoService.deshabiltarCargando();
                }, function (error) {
                    console.error(error);
                    _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_9__["ToastErrorCargandoDatos"]);
                    _this._cargandoService.deshabiltarCargando();
                });
            }
        }, function (error) {
            console.error(error);
        });
    };
    GestionUnidadesComponent.prototype.obtenerUrlPrincipal = function (objeto) {
        var campo;
        if (this.tipo === 'cancion') {
            campo = 'imagenesCancion';
        }
        if (this.tipo === 'album') {
            campo = 'imagenesAlbum';
        }
        if (objeto[campo] && objeto[campo].length) {
            return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_12__["obtenerUrlImagenPrincipal"])(objeto, campo);
        }
    };
    GestionUnidadesComponent.ctorParameters = function () { return [
        { type: _servicios_rest_unidad_cancion_album_video_rest_service__WEBPACK_IMPORTED_MODULE_13__["UnidadCancionAlbumVideoRestService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__["ArtistaRestService"] },
        { type: _servicios_rest_chart_rest_service__WEBPACK_IMPORTED_MODULE_6__["ChartRestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    GestionUnidadesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gestion-unidades',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gestion-unidades.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gestion-unidades.component.css */ "./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_unidad_cancion_album_video_rest_service__WEBPACK_IMPORTED_MODULE_13__["UnidadCancionAlbumVideoRestService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_5__["ArtistaRestService"],
            _servicios_rest_chart_rest_service__WEBPACK_IMPORTED_MODULE_6__["ChartRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], GestionUnidadesComponent);
    return GestionUnidadesComponent;
}());



/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/unidad-cancion-album-video-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/unidad-cancion-album-video-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: UnidadCancionAlbumVideoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadCancionAlbumVideoRoutingModule", function() { return UnidadCancionAlbumVideoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _rutas_gestion_unidades_gestion_unidades_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutas/gestion-unidades/gestion-unidades.component */ "./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.ts");




var routes = [
    {
        path: 'gestion-unidades',
        children: [
            {
                path: '',
                component: _rutas_gestion_unidades_gestion_unidades_component__WEBPACK_IMPORTED_MODULE_3__["GestionUnidadesComponent"]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'gestion-chart-cancion-album-artista-video',
        pathMatch: 'full',
    }
];
var UnidadCancionAlbumVideoRoutingModule = /** @class */ (function () {
    function UnidadCancionAlbumVideoRoutingModule() {
    }
    UnidadCancionAlbumVideoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UnidadCancionAlbumVideoRoutingModule);
    return UnidadCancionAlbumVideoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modulos/unidad-cancion-album-video/unidad-cancion-album-video.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/unidad-cancion-album-video/unidad-cancion-album-video.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: UnidadCancionAlbumVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadCancionAlbumVideoModule", function() { return UnidadCancionAlbumVideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _unidad_cancion_album_video_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unidad-cancion-album-video-routing.module */ "./src/app/modulos/unidad-cancion-album-video/unidad-cancion-album-video-routing.module.ts");
/* harmony import */ var _rutas_gestion_unidades_gestion_unidades_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rutas/gestion-unidades/gestion-unidades.component */ "./src/app/modulos/unidad-cancion-album-video/rutas/gestion-unidades/gestion-unidades.component.ts");
/* harmony import */ var _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentes/migas-pan/migas-pan.module */ "./src/app/componentes/migas-pan/migas-pan.module.ts");
/* harmony import */ var _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../componentes/input-buscar-boton/input-buscar-boton.module */ "./src/app/componentes/input-buscar-boton/input-buscar-boton.module.ts");
/* harmony import */ var _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/boton-nuevo/boton-nuevo.module */ "./src/app/componentes/boton-nuevo/boton-nuevo.module.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _modales_modal_crear_editar_unidad_modal_crear_editar_unidad_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modales/modal-crear-editar-unidad/modal-crear-editar-unidad.module */ "./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.module.ts");
/* harmony import */ var _modales_modal_crear_editar_unidad_modal_crear_editar_unidad_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component */ "./src/app/modulos/unidad-cancion-album-video/modales/modal-crear-editar-unidad/modal-crear-editar-unidad.component.ts");












var UnidadCancionAlbumVideoModule = /** @class */ (function () {
    function UnidadCancionAlbumVideoModule() {
    }
    UnidadCancionAlbumVideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_rutas_gestion_unidades_gestion_unidades_component__WEBPACK_IMPORTED_MODULE_4__["GestionUnidadesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _unidad_cancion_album_video_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnidadCancionAlbumVideoRoutingModule"],
                _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_5__["MigasPanModule"],
                _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_6__["InputBuscarBotonModule"],
                _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_7__["BotonNuevoModule"],
                primeng__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _modales_modal_crear_editar_unidad_modal_crear_editar_unidad_module__WEBPACK_IMPORTED_MODULE_10__["ModalCrearEditarUnidadModule"]
            ],
            exports: [
                _rutas_gestion_unidades_gestion_unidades_component__WEBPACK_IMPORTED_MODULE_4__["GestionUnidadesComponent"]
            ],
            entryComponents: [
                _modales_modal_crear_editar_unidad_modal_crear_editar_unidad_component__WEBPACK_IMPORTED_MODULE_11__["ModalCrearEditarUnidadComponent"]
            ]
        })
    ], UnidadCancionAlbumVideoModule);
    return UnidadCancionAlbumVideoModule;
}());



/***/ }),

/***/ "./src/app/servicios/rest/unidad-cancion-album-video-rest.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/servicios/rest/unidad-cancion-album-video-rest.service.ts ***!
  \***************************************************************************/
/*! exports provided: UnidadCancionAlbumVideoRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadCancionAlbumVideoRestService", function() { return UnidadCancionAlbumVideoRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var UnidadCancionAlbumVideoRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UnidadCancionAlbumVideoRestService, _super);
    function UnidadCancionAlbumVideoRestService(
    // tslint:disable-next-line:variable-name
    _http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'unidad-album-cancion-video';
        return _this;
    }
    UnidadCancionAlbumVideoRestService.prototype.obtenerUnidades = function (datosConsultaUnidades) {
        return this._http.get(this.url +
            (":" + this.port + "/" + this.segmento + "/obtener-unidades-canciones-albums-videos?datosConsulta=" + datosConsultaUnidades));
    };
    UnidadCancionAlbumVideoRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UnidadCancionAlbumVideoRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UnidadCancionAlbumVideoRestService);
    return UnidadCancionAlbumVideoRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ })

}]);
//# sourceMappingURL=src-app-modulos-unidad-cancion-album-video-unidad-cancion-album-video-module.js.map