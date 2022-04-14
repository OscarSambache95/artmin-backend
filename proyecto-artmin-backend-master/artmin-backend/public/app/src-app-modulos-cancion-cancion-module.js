(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modulos-cancion-cancion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-migas-pan\n      [arregloRutas]=\"arregloRutas\">\n    </app-migas-pan>\n  </div>\n</div>\n<br>\n<div class=\"\" *ngIf=\"cancion\">\n  <div class=\"container\">\n    <div class=\"row center\">\n      <div class=\"col-sm-12\">\n        <h3 class=\"text-center\">\n          {{\n          cancion.nombre | uppercase\n          }}\n        </h3>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-1\"></div>\n    <div class=\"col-sm-10\">\n      <div\n        class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-sm-11\">\n            <h5 class=\"descripcion-modal\">{{'Información de la canción.'}}</h5>\n          </div>\n          <div class=\"col-sm-1 justify-content-end d-flex\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"row\">\n                  <div class=\"\" *ngIf=\"!(componenteFormularioCancion?.formularioCancion?.disabled)\">\n                    <div class=\"d-flex flex-row-reverse\">\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                        <button\n                          (click)=\"cancelarEdicion()\"\n                          class=\"btn btn-secondary\">\n                          <i style=\"padding-right: 1%\" class=\"fas fa-times\"></i>\n                        </button>\n                        <button\n                          [disabled]=\"!formularioValido\"\n                          (click)=\"editarCancion()\"\n                          class=\"btn btn-primary\">\n                          <i style=\"padding-right: 1%\" class=\"fas fa-upload\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"\" *ngIf=\"componenteFormularioCancion?.formularioCancion?.disabled\">\n                    <button\n                      (click)=\"habilitarFormularioEditarCancion()\"\n                      class=\"btn btn-primary\">\n                      <i style=\"padding-right: 1%\" class=\"fas fa-pencil-alt\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <hr>\n      <div\n        *ngIf=\"!(componenteFormularioCancion?.formularioCancion?.disabled)\"\n        class=\"col-md-12\">\n        <p class=\"descripcion-modal\">{{'Llene todos los campos que son obligatorios (*). '}}</p>\n      </div>\n      <div class=\"col-sm-12\">\n        <app-formulario-cancion\n          [width]=\"70\"\n          [cancion]=\"cancion\"\n          [idsArtista]=\"idsArtistas\"\n          [idsAlbums]=\"idsAlbum\"\n          (cancionValidoEnviar)=\"validarFormularioCancion($event)\"\n        >\n        </app-formulario-cancion>\n      </div>\n\n      <hr>\n      <app-carousel-opciones\n        [opciones]=\"opcionesCancion\"\n        (emitirEvento)=\"irAGestion($event)\"\n      ></app-carousel-opciones>\n\n    </div>\n    <div class=\"col-sm-1\"></div>\n  </div>\n  <br>\n</div>\n<div class=\"\" *ngIf=\"!cancion\">\n  <h5 class=\"text-center\">Cancion no encontrado</h5>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-migas-pan\n      [arregloRutas]=\"arregloRutas\">\n    </app-migas-pan>\n  </div>\n</div>\n<br>\n\n<div class=\"container\">\n  <div class=\"row center\">\n    <div class=\"col-sm-12\">\n      <h1 class=\"text-center\">\n        <img\n          style=\"width:40px\"\n          [src]=\"rutaImagen\">\n        {{ (artista ? ('CANCIONES DE ' + artista.nombre) : 'GESTIÓN DE CANCIONES' )| uppercase}}\n      </h1>\n    </div>\n  </div>\n\n</div>\n<hr>\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-9\">\n    <app-input-buscar-boton\n      [busqueda]=\"busqueda\"\n      [placeholder]=\"'Ingrese el nombre o año de lanzamiento. EJ: Alice ó 2013'\"\n      [ayuda]=\"'Busque una canción por su nombre o año de lanzamiento'\"\n      (emitirBusqueda)=\"escucharBusqueda($event)\">\n\n    </app-input-buscar-boton>\n  </div>\n  <div class=\"col-sm-3\">\n    <app-boton-nuevo\n      (emitirEvento)=\"abrirModalCrearEditarCancion()\"\n    ></app-boton-nuevo>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\" style=\"padding-left: 1%; padding-right: 1%\">\n  <div class=\"col-sm-3\">\n    <app-autcomplete-generos\n      [idGenero]=\"idGenero\"\n      (emitirGenroSeleccionado)=\"buscarCancionesPorGenero($event)\"\n    ></app-autcomplete-generos>\n  </div>\n  <div [ngClass]=\"!idArtistaParams ? 'col-sm-3' : ''\" >\n    <app-autocomplete-artista\n      *ngIf=\"!idArtistaParams\"\n      [idArtista]=\"idArtista\"\n      [multiple]=\"false\"\n      (emitirArtistaSeleccionado)=\"buscarCancionPorArtista($event)\"\n    ></app-autocomplete-artista>\n  </div>\n  <div class=\"col-sm-3\">\n    <app-autocomplete-albums\n      [idAlbum]=\"idAlbum\"\n      [idsArtistas]=\"idArtista ? [idArtista] : []\"\n      (emitirAlbumSeleccionado)=\"buscarCancionesPorAlbum($event)\"\n    ></app-autocomplete-albums>\n  </div>\n  <div class=\"col-sm-3\" >\n    <app-autocomplete-tipo-cancion\n      [idTipoCancion]=\"idTipoCancion\"\n      (emitirTipoCancionSeleccionado)=\"buscarCancionPorTipo($event)\"\n    ></app-autocomplete-tipo-cancion>\n  </div>\n</div>\n\n<br>\n<div class=\"row\">\n  <div class=\"col sm 12\" style=\"padding-left: 2%; padding-right: 2%\">\n    <p-table\n      #dt\n      [rows]=\"15\"\n      [paginator]=\"true\"\n      [columns]=\"columnasCanciones\"\n      [value]=\"canciones\"\n      styleClass=\"ui-table-customers\"\n      [responsive]=\"true\"\n    >\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n          <th\n            [pSortableColumn]=\"col.field\"\n            [style.width]=\"col.width\"\n            class=\"text-center\"\n            *ngFor=\"let col of columns\">\n            {{col.header}}\n            <p-sortIcon\n              *ngIf=\"col.header === 'Nombre' || col.header === 'fechaLanzamiento' || col.header === 'duracionSegundos' || col.header === 'Tipo'\"\n              [field]=\"col.field\"\n            >\n            </p-sortIcon>\n\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr>\n          <td [attr.colspan]=\"columns.length\">\n            No existen registros\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\">\n        <tr>\n          <td class=\"text-center\" *ngFor=\"let col of columns\">\n            <div *ngIf=\"col.field==='nombre'\">\n              {{rowData.nombre}}\n            </div>\n            <div *ngIf=\"col.field==='imagen'\">\n              <img\n                [src]=\"obtenerUrlPrincipal(rowData)\"\n                style=\"display:inline-block;\" width=\"30px\">\n            </div>\n            <div *ngIf=\"col.field==='tipo'\">\n              {{rowData.tipoCancion.nombre}}\n            </div>\n            <div *ngIf=\"col.field==='fechaLanzamiento'\">\n              {{rowData.fechaLanzamiento}}\n            </div>\n            <div *ngIf=\"col.field==='artistas'\">\n              {{obtenerArtistasCancion(rowData.artistasCancion)}}\n            </div>\n            <div *ngIf=\"col.field==='albums'\">\n              {{obtenerAlbumesCancion(rowData.albumesCancion) === '' ? rowData.nombre : obtenerAlbumesCancion(rowData.albumesCancion)}}\n            </div>\n            <div *ngIf=\"col.field==='generos'\">\n              {{obtenerGenerosCancion(rowData.generosCancion)}}\n            </div>\n            <div *ngIf=\"col.field==='duracionSegundos'\">\n              {{rowData.duracionSegundos | minutosHoras}}\n            </div>\n            <div *ngIf=\"col.field === 'acciones'\">\n              <button\n                (click)=\"irRutaEditarCancion(rowData)\"\n                class=\"btn btn-primary\">\n                <i style=\"padding-right: 0%\" class=\"fas fa-pencil-alt\"></i>\n              </button>\n            </div>\n\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/constantes/opciones-gestion-cancion.ts":
/*!********************************************************!*\
  !*** ./src/app/constantes/opciones-gestion-cancion.ts ***!
  \********************************************************/
/*! exports provided: OPCIONES_CANCION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPCIONES_CANCION", function() { return OPCIONES_CANCION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var OPCIONES_CANCION = [
    {
        texto: 'CHARTS',
        descripcion: 'descripcion',
        url: ['/empresa-modulo'],
        imagen: 'assets/imagenes/chart.svg',
    },
    {
        texto: 'EVENTOS',
        descripcion: 'descripcion',
        url: ['/empresa-modulo'],
        imagen: 'assets/imagenes/evento.svg',
    },
    {
        texto: 'PREMIOS Y NOMINACIONES',
        descripcion: 'descripcion',
        url: ['/empresa-modulo'],
        imagen: 'assets/imagenes/premio.svg',
    },
    {
        texto: 'IMAGENES',
        descripcion: 'descripcion',
        url: ['/empresa-modulo'],
        imagen: 'assets/imagenes/imagenes.svg',
    },
];


/***/ }),

/***/ "./src/app/modulos/cancion/cancion-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modulos/cancion/cancion-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CancionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancionRoutingModule", function() { return CancionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _rutas_ruta_gestion_canciones_ruta_gestion_canciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutas/ruta-gestion-canciones/ruta-gestion-canciones.component */ "./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.ts");
/* harmony import */ var _rutas_ruta_editar_cancion_ruta_editar_cancion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rutas/ruta-editar-cancion/ruta-editar-cancion.component */ "./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.ts");





var routes = [
    {
        path: 'gestion-canciones',
        children: [
            {
                path: '',
                component: _rutas_ruta_gestion_canciones_ruta_gestion_canciones_component__WEBPACK_IMPORTED_MODULE_3__["RutaGestionCancionesComponent"]
            },
            {
                path: 'editar-cancion/:idCancion',
                children: [
                    {
                        path: '',
                        component: _rutas_ruta_editar_cancion_ruta_editar_cancion_component__WEBPACK_IMPORTED_MODULE_4__["RutaEditarCancionComponent"],
                    },
                    {
                        path: 'video-modulo',
                        loadChildren: 'src/app/modulos/video/video.module#VideoModule',
                    },
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'gestion-canciones',
        pathMatch: 'full',
    }
];
var CancionRoutingModule = /** @class */ (function () {
    function CancionRoutingModule() {
    }
    CancionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CancionRoutingModule);
    return CancionRoutingModule;
}());



/***/ }),

/***/ "./src/app/modulos/cancion/cancion.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modulos/cancion/cancion.module.ts ***!
  \***************************************************/
/*! exports provided: CancionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancionModule", function() { return CancionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _rutas_ruta_gestion_canciones_ruta_gestion_canciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutas/ruta-gestion-canciones/ruta-gestion-canciones.component */ "./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.ts");
/* harmony import */ var _cancion_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cancion-routing.module */ "./src/app/modulos/cancion/cancion-routing.module.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module */ "./src/app/pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module.ts");
/* harmony import */ var _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/input-buscar-boton/input-buscar-boton.module */ "./src/app/componentes/input-buscar-boton/input-buscar-boton.module.ts");
/* harmony import */ var _componentes_autcomplete_generos_autcomplete_generos_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../componentes/autcomplete-generos/autcomplete-generos.module */ "./src/app/componentes/autcomplete-generos/autcomplete-generos.module.ts");
/* harmony import */ var _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../componentes/autocomplete-artista/autocomplete-artista.module */ "./src/app/componentes/autocomplete-artista/autocomplete-artista.module.ts");
/* harmony import */ var _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../componentes/boton-nuevo/boton-nuevo.module */ "./src/app/componentes/boton-nuevo/boton-nuevo.module.ts");
/* harmony import */ var _componentes_autocomplete_albums_autocomplete_albums_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../componentes/autocomplete-albums/autocomplete-albums.module */ "./src/app/componentes/autocomplete-albums/autocomplete-albums.module.ts");
/* harmony import */ var _modales_crear_editar_cancion_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modales/crear-editar-cancion/crear-editar-cancion.component */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.ts");
/* harmony import */ var _modales_crear_editar_cancion_crear_editar_cancion_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modales/crear-editar-cancion/crear-editar-cancion.module */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.module.ts");
/* harmony import */ var _componentes_autocomplete_tipo_cancion_autocomplete_tipo_cancion_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.module */ "./src/app/componentes/autocomplete-tipo-cancion/autocomplete-tipo-cancion.module.ts");
/* harmony import */ var _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../componentes/migas-pan/migas-pan.module */ "./src/app/componentes/migas-pan/migas-pan.module.ts");
/* harmony import */ var _rutas_ruta_editar_cancion_ruta_editar_cancion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rutas/ruta-editar-cancion/ruta-editar-cancion.component */ "./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.ts");
/* harmony import */ var _componentes_formulario_cancion_formulario_cancion_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/formulario-cancion/formulario-cancion.module */ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.module.ts");
/* harmony import */ var _componentes_carousel_opciones_carousel_opciones_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../componentes/carousel-opciones/carousel-opciones.module */ "./src/app/componentes/carousel-opciones/carousel-opciones.module.ts");



















var CancionModule = /** @class */ (function () {
    function CancionModule() {
    }
    CancionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_rutas_ruta_gestion_canciones_ruta_gestion_canciones_component__WEBPACK_IMPORTED_MODULE_3__["RutaGestionCancionesComponent"], _rutas_ruta_editar_cancion_ruta_editar_cancion_component__WEBPACK_IMPORTED_MODULE_16__["RutaEditarCancionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cancion_routing_module__WEBPACK_IMPORTED_MODULE_4__["CancionRoutingModule"],
                primeng__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_6__["SegundosAMinutosHorasPipeModule"],
                _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_7__["InputBuscarBotonModule"],
                _componentes_autcomplete_generos_autcomplete_generos_module__WEBPACK_IMPORTED_MODULE_8__["AutcompleteGenerosModule"],
                _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteArtistaModule"],
                _componentes_autocomplete_albums_autocomplete_albums_module__WEBPACK_IMPORTED_MODULE_11__["AutocompleteAlbumsModule"],
                _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_10__["BotonNuevoModule"],
                _modales_crear_editar_cancion_crear_editar_cancion_module__WEBPACK_IMPORTED_MODULE_13__["CrearEditarCancionModule"],
                _componentes_autocomplete_tipo_cancion_autocomplete_tipo_cancion_module__WEBPACK_IMPORTED_MODULE_14__["AutocompleteTipoCancionModule"],
                _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_15__["MigasPanModule"],
                _componentes_formulario_cancion_formulario_cancion_module__WEBPACK_IMPORTED_MODULE_17__["FormularioCancionModule"],
                _componentes_carousel_opciones_carousel_opciones_module__WEBPACK_IMPORTED_MODULE_18__["CarouselOpcionesModule"]
            ],
            entryComponents: [
                _modales_crear_editar_cancion_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_12__["CrearEditarCancionComponent"]
            ]
        })
    ], CancionModule);
    return CancionModule;
}());



/***/ }),

/***/ "./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY2FuY2lvbi9ydXRhcy9ydXRhLWVkaXRhci1jYW5jaW9uL3J1dGEtZWRpdGFyLWNhbmNpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RutaEditarCancionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaEditarCancionComponent", function() { return RutaEditarCancionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _componentes_formulario_cancion_formulario_cancion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../componentes/formulario-cancion/formulario-cancion.component */ "./src/app/modulos/cancion/componentes/formulario-cancion/formulario-cancion.component.ts");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/genero-rest.service */ "./src/app/servicios/rest/genero-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../servicios/rest/cancion-rest.service */ "./src/app/servicios/rest/cancion-rest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../artista/rutas/definicion-rutas/rutas-artista */ "./src/app/modulos/artista/rutas/definicion-rutas/rutas-artista.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../definicion-rutas/rutas-cancion */ "./src/app/modulos/cancion/rutas/definicion-rutas/rutas-cancion.ts");
/* harmony import */ var _funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../funciones/obtener-anio */ "./src/app/funciones/obtener-anio.ts");
/* harmony import */ var _funciones_convertir_minutos_segundos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../funciones/convertir-minutos-segundos */ "./src/app/funciones/convertir-minutos-segundos.ts");
/* harmony import */ var _constantes_opciones_gestion_cancion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../constantes/opciones-gestion-cancion */ "./src/app/constantes/opciones-gestion-cancion.ts");
/* harmony import */ var _video_rutas_definicion_rutas_rutas_videos__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../video/rutas/definicion-rutas/rutas-videos */ "./src/app/modulos/video/rutas/definicion-rutas/rutas-videos.ts");

















var RutaEditarCancionComponent = /** @class */ (function () {
    function RutaEditarCancionComponent(_cancionRestService, _cargandoService, dialog, _router, _activatedRoute, _generoRestService, _toasterService) {
        this._cancionRestService = _cancionRestService;
        this._cargandoService = _cargandoService;
        this.dialog = dialog;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._generoRestService = _generoRestService;
        this._toasterService = _toasterService;
        this.idsArtistas = [];
        this.idsAlbum = [];
        this.opcionesCancion = _constantes_opciones_gestion_cancion__WEBPACK_IMPORTED_MODULE_15__["OPCIONES_CANCION"];
    }
    RutaEditarCancionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (params) {
            _this.idCancion = +params.idCancion;
            _this.idArtista = +params.idArtista;
            _this.setearArregloRutasMigaPan();
            _this.ruta = _this.setearRuta();
            var consulta = {
                where: {
                    id: _this.idCancion
                },
                relations: [
                    'tipoCancion',
                    'imagenesCancion',
                    'artistasCancion',
                    'artistasCancion.artista',
                    'generosCancion',
                    'generosCancion.genero',
                    'albumesCancion',
                    'albumesCancion.album',
                    'enlacesCancion',
                ]
            };
            _this._cargandoService.habilitarCargando();
            return _this._cancionRestService.findAll(JSON.stringify(consulta));
        }))
            .subscribe(function (respuestaCancion) {
            _this.cancion = respuestaCancion[0][0];
            _this.idsArtistas = _this.cancion.artistasCancion.map(function (artistaCancion) { return artistaCancion.artista.id; });
            _this.idsAlbum = _this.cancion.albumesCancion.map(function (albumCancion) { return albumCancion.album.id; });
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    RutaEditarCancionComponent.prototype.cancelarEdicion = function () {
        this.componenteFormularioCancion.volverFormularioInicial();
    };
    RutaEditarCancionComponent.prototype.editarCancion = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        this.cancionCrearEditar.anio = Object(_funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_13__["obtenerAnio"])(this.cancionCrearEditar.fechaLanzamiento);
        this.cancionCrearEditar.duracionSegundos = +Object(_funciones_convertir_minutos_segundos__WEBPACK_IMPORTED_MODULE_14__["convertirMinutosMascaraASegundos"])(this.cancionCrearEditar.duracionSegundos);
        var generos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.cancionCrearEditar.generos).map(function (genero) { return genero.id; });
        var artistas = this.obtenerArtistaPrincipal(this.cancionCrearEditar.artistas);
        var albumes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.cancionCrearEditar.albums).map(function (genero) { return genero.id; });
        var imagenPrincipal = this.cancion.imagenesCancion.find(function (imagenCancion) { return imagenCancion.esPrincipal; });
        var enlaces = [];
        if (this.cancionCrearEditar.enlace) {
            if (this.cancion.enlacesCancion.length === 0) {
                enlaces.push({
                    url: this.cancionCrearEditar.enlace,
                    plataforma: 1
                });
            }
            else {
                this.cancion.enlacesCancion[0].url = this.cancionCrearEditar.enlace;
                enlaces.push(this.cancion.enlacesCancion[0]);
            }
        }
        this._cancionRestService
            .editarCancion(this.cancionCrearEditar, this.cancion.id, generos, artistas, this.cancionCrearEditar.imagen, null, albumes, enlaces, imagenPrincipal.id)
            .subscribe(function (respuestaCancionEditada) {
            _this.cancion = respuestaCancionEditada;
            _this.componenteFormularioCancion.cancion = respuestaCancionEditada;
            _this.componenteFormularioCancion.volverFormularioInicial();
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["toastExitoCrear"]);
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
        this._cargandoService.deshabiltarCargando();
    };
    RutaEditarCancionComponent.prototype.habilitarFormularioEditarCancion = function () {
        this.componenteFormularioCancion.formularioCancion.enable();
    };
    RutaEditarCancionComponent.prototype.validarFormularioCancion = function (cancion) {
        if (cancion) {
            this.formularioValido = true;
            this.cancionCrearEditar = cancion;
        }
        else {
            this.formularioValido = false;
        }
    };
    RutaEditarCancionComponent.prototype.setearArregloRutasMigaPan = function () {
        if (this.idArtista) {
            this.arregloRutas = [
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_10__["RUTAS_ARTISTA"].rutaGestionArtistas(false, true),
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_10__["RUTAS_ARTISTA"].rutaVerEditarArtistas(false, true, [this.idArtista]),
                _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_12__["RUTAS_CANCION"].rutaGestionCanciones(false, true, [this.idArtista]),
            ];
        }
        else {
            this.arregloRutas = [
                _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_12__["RUTAS_CANCION"].rutaGestionCanciones(false, true),
            ];
        }
        if (this.idCancion) {
            this.arregloRutas.push(_definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_12__["RUTAS_CANCION"].rutaEditarCancion(false, true));
        }
        else {
            this.arregloRutas.push(_definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_12__["RUTAS_CANCION"].rutaEditarCancion(false, true));
        }
    };
    RutaEditarCancionComponent.prototype.setearRuta = function () {
        if (this.idCancion) {
            return _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_12__["RUTAS_CANCION"].rutaEditarCancion(false, true, [this.idCancion, this.idArtista]).ruta;
        }
        else {
            return _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_12__["RUTAS_CANCION"].rutaEditarCancion(false, true, [this.idArtista]).ruta;
        }
    };
    RutaEditarCancionComponent.prototype.obtenerArtistaPrincipal = function (artistas) {
        return artistas.map(function (artistaCancion, indice) {
            return {
                id: artistaCancion.id,
                esPrincipal: indice === 0 ? 1 : 0,
            };
        });
    };
    RutaEditarCancionComponent.prototype.irAGestion = function (modulo) {
        console.log(modulo);
        if (modulo === 'VIDEOS') {
            return this._router.navigate(_video_rutas_definicion_rutas_rutas_videos__WEBPACK_IMPORTED_MODULE_16__["RUTAS_VIDEO"]
                .rutaGestionVideos(true, false, [this.idArtista, this.idCancion]));
        }
    };
    RutaEditarCancionComponent.ctorParameters = function () { return [
        { type: _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_8__["CancionRestService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__["CargandoService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__["GeneroRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_componentes_formulario_cancion_formulario_cancion_component__WEBPACK_IMPORTED_MODULE_2__["FormularioCancionComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _componentes_formulario_cancion_formulario_cancion_component__WEBPACK_IMPORTED_MODULE_2__["FormularioCancionComponent"])
    ], RutaEditarCancionComponent.prototype, "componenteFormularioCancion", void 0);
    RutaEditarCancionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta-editar-cancion',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ruta-editar-cancion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ruta-editar-cancion.component.css */ "./src/app/modulos/cancion/rutas/ruta-editar-cancion/ruta-editar-cancion.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_8__["CancionRestService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__["CargandoService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__["GeneroRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], RutaEditarCancionComponent);
    return RutaEditarCancionComponent;
}());



/***/ }),

/***/ "./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY2FuY2lvbi9ydXRhcy9ydXRhLWdlc3Rpb24tY2FuY2lvbmVzL3J1dGEtZ2VzdGlvbi1jYW5jaW9uZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RutaGestionCancionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaGestionCancionesComponent", function() { return RutaGestionCancionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../servicios/rest/cancion-rest.service */ "./src/app/servicios/rest/cancion-rest.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../servicios/rest/genero-rest.service */ "./src/app/servicios/rest/genero-rest.service.ts");
/* harmony import */ var _funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../funciones/obtener-objeto */ "./src/app/funciones/obtener-objeto.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");
/* harmony import */ var _modales_crear_editar_cancion_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modales/crear-editar-cancion/crear-editar-cancion.component */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.ts");
/* harmony import */ var _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../artista/rutas/definicion-rutas/rutas-artista */ "./src/app/modulos/artista/rutas/definicion-rutas/rutas-artista.ts");
/* harmony import */ var _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../definicion-rutas/rutas-cancion */ "./src/app/modulos/cancion/rutas/definicion-rutas/rutas-cancion.ts");
















var RutaGestionCancionesComponent = /** @class */ (function () {
    function RutaGestionCancionesComponent(_cancionRestService, dialog, _toasterService, _cargandoService, _artistaRestService, _router, _activatedRoute, _generoRestService) {
        this._cancionRestService = _cancionRestService;
        this.dialog = dialog;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this._artistaRestService = _artistaRestService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._generoRestService = _generoRestService;
        this.columnasCanciones = [
            {
                field: 'imagen',
                header: 'Imagen',
                width: '5%'
            },
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
                field: 'generos',
                header: 'Generos',
                width: '10%'
            },
            {
                field: 'acciones',
                header: 'Acciones',
                width: '10%'
            },
        ];
        this.busqueda = '';
        this.queryParams = {};
        this.ruta = [];
        this.rutaImagen = 'assets/imagenes/cancion.svg';
    }
    RutaGestionCancionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (params) {
            _this.idArtistaParams = params.idArtista ? +params.idArtista : undefined;
            _this.setearArregloRutasMigasPan();
            _this.seteoRutas();
            return _this._activatedRoute.queryParams;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (queryParams) {
            _this.idAlbum = +queryParams.idAlbum;
            if (_this.idArtistaParams) {
                _this.idArtista = _this.idArtistaParams;
                _this._artistaRestService.findOne(_this.idArtista)
                    .subscribe(function (artista) {
                    _this.artista = artista;
                }, function (error) {
                    console.error(error);
                    _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_7__["ToastErrorCargandoDatos"]);
                });
            }
            else {
                _this.ruta = [
                    '/cancion-modulo',
                    'gestion-canciones'
                ];
            }
            if (queryParams.consulta) {
                _this.queryParams.consulta = JSON.parse(queryParams.consulta);
                if (_this.queryParams.consulta.busqueda) {
                    _this.busqueda = _this.queryParams.consulta.busqueda;
                }
                if (_this.queryParams.consulta.idGenero) {
                    _this.idGenero = _this.queryParams.consulta.idGenero;
                }
                if (_this.queryParams.consulta.idAlbum) {
                    _this.idAlbum = _this.queryParams.consulta.idAlbum;
                }
                if (_this.queryParams.consulta.idTipoCancion) {
                    _this.idTipoCancion = _this.queryParams.consulta.idTipoCancion;
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
                    idGenero: _this.idGenero,
                    esImagenPrincipal: 1,
                    idArtista: _this.idArtista,
                    idAlbum: _this.idAlbum,
                    idTipoCancion: _this.idTipoCancion,
                };
            }
            _this._cargandoService.habilitarCargando();
            return _this._cancionRestService.obtenerCancionesPorGeneroArtista(JSON.stringify(_this.queryParams.consulta));
        }))
            .subscribe(function (respuestaCanciones) {
            _this.canciones = respuestaCanciones[0];
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_7__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    RutaGestionCancionesComponent.prototype.obtenerArtistasCancion = function (artistasCancion) {
        return Object(_funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_11__["obtenerObjeto"])(artistasCancion, 'artista', 'nombre');
    };
    RutaGestionCancionesComponent.prototype.obtenerAlbumesCancion = function (albumesCancion) {
        return Object(_funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_11__["obtenerObjeto"])(albumesCancion, 'album', 'nombre');
    };
    RutaGestionCancionesComponent.prototype.obtenerGenerosCancion = function (generosCancion) {
        return Object(_funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_11__["obtenerObjeto"])(generosCancion, 'genero', 'nombre');
    };
    RutaGestionCancionesComponent.prototype.obtenerUrlPrincipal = function (cancion) {
        if (cancion.imagenesCancion && cancion.imagenesCancion.length) {
            return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_12__["obtenerUrlImagenPrincipal"])(cancion, 'imagenesCancion');
        }
    };
    RutaGestionCancionesComponent.prototype.escucharBusqueda = function (busqueda) {
        this.busqueda = busqueda;
        this.buscarCanciones();
    };
    RutaGestionCancionesComponent.prototype.buscarCancionesPorGenero = function (generoSeleccionado) {
        this.idGenero = generoSeleccionado ? generoSeleccionado.id : undefined;
        this.buscarCanciones();
    };
    RutaGestionCancionesComponent.prototype.buscarCancionPorArtista = function (artistaSeleccionado) {
        this.idArtista = artistaSeleccionado ? artistaSeleccionado.id : undefined;
        this.buscarCanciones();
    };
    RutaGestionCancionesComponent.prototype.buscarCancionesPorAlbum = function (albumSeleccionado) {
        this.idAlbum = albumSeleccionado ? albumSeleccionado.id : undefined;
        this.buscarCanciones();
    };
    RutaGestionCancionesComponent.prototype.abrirModalCrearEditarCancion = function () {
        var _this = this;
        var dialogRef = this.dialog
            .open(_modales_crear_editar_cancion_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_13__["CrearEditarCancionComponent"], {
            width: '1000px',
            data: {
                idsArtista: this.idArtistaParams ? [this.idArtistaParams] : null,
            },
        });
        var resultadoModal$ = dialogRef.afterClosed();
        resultadoModal$
            .subscribe(function (cancionCreadaEditada) {
            if (cancionCreadaEditada) {
                _this.canciones.unshift(cancionCreadaEditada);
            }
        }, function (error) {
            console.error(error);
        });
    };
    RutaGestionCancionesComponent.prototype.buscarCancionPorTipo = function (tipoCancionSeleccionado) {
        this.idTipoCancion = tipoCancionSeleccionado ? tipoCancionSeleccionado.id : undefined;
        this.buscarCanciones();
    };
    RutaGestionCancionesComponent.prototype.buscarCanciones = function () {
        var consulta = {
            busqueda: this.busqueda,
            idGenero: this.idGenero,
            esImagenPrincipal: 1,
            idArtista: this.idArtista,
            idAlbum: this.idAlbum,
            idTipoCancion: this.idTipoCancion
        };
        this.queryParams.consulta = JSON.stringify(consulta);
        this._router
            .navigate(this.ruta, {
            queryParams: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.queryParams)
        });
    };
    RutaGestionCancionesComponent.prototype.setearArregloRutasMigasPan = function () {
        if (this.idArtistaParams) {
            this.arregloRutas = [
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_14__["RUTAS_ARTISTA"].rutaGestionArtistas(false, true),
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_14__["RUTAS_ARTISTA"].rutaVerEditarArtistas(false, true, [this.idArtistaParams]),
                _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_15__["RUTAS_CANCION"].rutaGestionCanciones(false, true, [this.idArtistaParams])
            ];
        }
        else {
            this.arregloRutas = [
                _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_15__["RUTAS_CANCION"].rutaGestionCanciones(false, true)
            ];
        }
    };
    RutaGestionCancionesComponent.prototype.seteoRutas = function () {
        this.ruta = _definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_15__["RUTAS_CANCION"]
            .rutaGestionCanciones(false, true, [this.idArtistaParams])
            .ruta;
    };
    RutaGestionCancionesComponent.prototype.irRutaEditarCancion = function (cancion) {
        this._router
            .navigate(_definicion_rutas_rutas_cancion__WEBPACK_IMPORTED_MODULE_15__["RUTAS_CANCION"]
            .rutaEditarCancion(true, false, [
            this.idArtista,
            cancion.id,
        ]));
    };
    RutaGestionCancionesComponent.ctorParameters = function () { return [
        { type: _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_2__["CancionRestService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__["CargandoService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_8__["ArtistaRestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_10__["GeneroRestService"] }
    ]; };
    RutaGestionCancionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta-gestion-canciones',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ruta-gestion-canciones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ruta-gestion-canciones.component.css */ "./src/app/modulos/cancion/rutas/ruta-gestion-canciones/ruta-gestion-canciones.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_2__["CancionRestService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__["CargandoService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_8__["ArtistaRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_10__["GeneroRestService"]])
    ], RutaGestionCancionesComponent);
    return RutaGestionCancionesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modulos-cancion-cancion-module.js.map