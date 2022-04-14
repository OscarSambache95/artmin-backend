(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modulos-album-album-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <p-autoComplete\n      [(ngModel)]=\"tipoAlbumSeleccionado\"\n      [suggestions]=\"arregloTiposAlbum\"\n      (completeMethod)=\"filtrarTiposAlbum($event)\"\n      [size]=\"25\"\n      [minLength]=\"1\"\n      [placeholder]='\"Seleccione el tipo\"'\n      [emptyMessage]=\"'No hay registros'\"\n      (onSelect)=\"enviarTipoAlbumSeleccionado($event)\"\n      [dropdown]=\"true\"\n      (onClear)=\"limpiarBusqueda()\"\n      (onUnselect)=\"deseleccionarTipoAlbum()\"\n      [disabled]=\"deshabilitar\"\n      field=\"nombre\">\n      <ng-template let-tipoAlbum pTemplate=\"item\">\n        {{tipoAlbum.nombre}}\n      </ng-template>\n    </p-autoComplete>\n  </div>\n  <div class=\"col-sm-12\">\n    <small\n      id=\"busquedaRolHelp\"\n      class=\"form-text text-muted ayuda-span\">\n      {{'Filtre por tipo'}}\n    </small>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div\n    class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 justify-content-end d-flex\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"row\">\n              <div class=\"\" *ngIf=\"seEmpezoAEditar\">\n                <div\n                  class=\"d-flex flex-row-reverse\">\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <button\n                      *ngIf=\"album\"\n                      (click)=\"cancelarEdicion()\"\n                      class=\"btn btn-secondary\">\n                      <i style=\"padding-right: 0%\" class=\"fas fa-times\">\n\n                      </i>\n                    </button>\n                    <button\n                      (click)=\"guardarCancionesAlbum()\"\n                      [disabled]=\"cancionesAlbumSeleccionadas.length === 0\"\n                      class=\"btn btn-primary\">\n                      <i style=\"padding-right: 0%\" class=\"fas fa-upload\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"\" *ngIf=\"!seEmpezoAEditar\">\n                <button\n                  (click)=\"mostrarComponentesEditar()\"\n                  class=\"btn btn-primary\">\n                  <i style=\"padding-right: 1%\" class=\"fas fa-pencil-alt\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-5\" *ngIf=\"seEmpezoAEditar\">\n      <p-table\n        #dt\n        [rows]=\"5\"\n        [paginator]=\"true\"\n        [columns]=\"columnasCancionesDisponibles\"\n        [value]=\"cancionesDisponibleFiltradas\"\n        styleClass=\"ui-table-customers\"\n        [rowHover]=\"true\"\n        [responsive]=\"true\"\n      >\n        <ng-template pTemplate=\"caption\">\n          Canciones disponibles\n          <br>\n          <div style=\"padding-top: 10px\">\n            <input\n              class=\"input-res\"\n              type=\"text\"\n              pInputText\n              placeholder=\"Busque por nombre\"\n              (input)=\"filtrarCancionesDisponibles($event.target.value)\"\n            >\n          </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n          <tr>\n            <th\n              [style.width]=\"col.width\"\n              class=\"text-center\"\n              *ngFor=\"let col of columns\" pReorderableColumn>\n              {{col.header}}\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"emptymessage\" let-columns>\n          <tr>\n            <td [attr.colspan]=\"columns.length\">\n              No existen registros\n            </td>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\">\n          <tr>\n            <td class=\"text-center\" *ngFor=\"let col of columns\">\n              <div *ngIf=\"col.field==='informacion'\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 \" align=\"left\">\n                    <p-card>\n                      <div class=\"row\">\n                        <div class=\"col-sm-3\">\n                          <img\n                            [src]=\"obtenerUrlPrincipal(rowData)\"\n                            style=\"display:inline-block;\" width=\"120px\">\n\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <p>\n                            <strong>\n                              {{'Nombre: '}}\n                            </strong>\n                            <span>\n                          {{rowData.nombre}}\n                        </span>\n                          </p>\n                          <p>\n                            <strong>\n                              {{'Duración: '}}\n                            </strong>\n                            <span>\n                          {{rowData.duracionSegundos | minutosHoras}}\n                    </span>\n                          </p>\n                          <p>\n                            <strong>\n                              {{'Fecha lanzamiento: '}}\n                            </strong>\n                            <span>\n                          {{rowData.fechaLanzamiento}}\n                    </span>\n                          </p>\n                          <p>\n                            <strong>\n                              {{'Artista(s): '}}\n                            </strong>\n                            <span>\n                            {{obtenerArtistas(rowData.artistasCancion)}}\n                    </span>\n                          </p>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div\n                            style=\"padding-top: 50%\"\n                            class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                            <button\n                              (click)=\"agregarCancionSeleccionada(rowData, rowData.id)\"\n                              class=\"btn btn-success\">\n                              <i style=\"padding-right: 0%\" class=\"fas fa-arrow-right\">\n                              </i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n\n                    </p-card>\n                  </div>\n                </div>\n\n              </div>\n\n            </td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n\n    <div [ngClass]=\"seEmpezoAEditar ? 'col-sm-7' : 'col-sm-12'\" >\n      <p-table\n        [columns]=\"columnasCancionesSeleccionadas\"\n        [value]=\"cancionesAlbumSeleccionadas\"\n        [reorderableColumns]=\"true\"\n        [responsive]=\"true\"\n        [sortField]=\"'posicion'\"\n      >\n        <ng-template pTemplate=\"caption\">\n          <div class=\"ui-helper-clearfix\" style=\"text-align: center\">\n            Lista de Canciones\n            <button\n              *ngIf=\"seEmpezoAEditar\"\n              class=\"btn btn-success\"\n              (click)=\"abrirModalCrearEditarCancion()\"\n              style=\"float:right\">\n              <i style=\"padding-right: 0%;\" class=\"fas fa-plus-circle\">\n              </i>\n            </button>\n          </div>\n\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n          <tr>\n            <th\n              *ngIf=\"seEmpezoAEditar\"\n              [style.width]=\"5\"></th>\n            <th\n              [style.width]=\"col.width\"\n              class=\"text-center\"\n              *ngFor=\"let col of columns\" pReorderableColumn>\n              {{col.header}}\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"emptymessage\" let-columns>\n          <tr>\n            <td [attr.colspan]=\"seEmpezoAEditar ? columns.length + 1 : columns.length\">\n              No existen registros\n            </td>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\">\n          <tr [pReorderableRow]=\"index\">\n            <td *ngIf=\"seEmpezoAEditar\">\n              <i class=\"fas fa-arrows-alt-v\" style=\"display: flex;justify-content: center;\" pReorderableRowHandle></i>\n            </td>\n            <td class=\"text-center\" *ngFor=\"let col of columns\">\n              <div\n                *ngIf=\"col.field==='posicion'\">\n                {{index + 1}}\n              </div>\n              <div *ngIf=\"col.field==='nombre'\">\n                {{rowData.cancion.nombre}}\n              </div>\n              <div *ngIf=\"col.field==='artistas'\">\n                {{obtenerArtistas(rowData.cancion.artistasCancion)}}\n              </div>\n              <div *ngIf=\"col.field==='duracionSegundos'\">\n                {{rowData.cancion.duracionSegundos | minutosHoras}}\n              </div>\n              <div *ngIf=\"col.header==='Acciones'\">\n                <div\n                  class=\"\">\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <button\n                      [disabled]=\"!seEmpezoAEditar\"\n                      (click)=\"quitarCancionSeleccionada(rowData, index)\"\n                      class=\"btn btn-danger\">\n                      <i style=\"padding-right: 0%\" class=\"fas fa-arrow-left\">\n                      </i>\n                    </button>\n                    <button\n                      [disabled]=\"!seEmpezoAEditar\"\n                      (click)=\"abrirModalCrearEditarCancion(rowData.cancion, index)\"\n                      class=\"btn btn-primary\">\n                      <i style=\"padding-right: 0%\" class=\"fas fa-pencil-alt\"></i>\n                    </button>\n\n                  </div>\n                </div>\n              </div>\n\n            </td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  </div>\n\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/componentes/formulario-album/formulario-album.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/componentes/formulario-album/formulario-album.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  [formGroup]=\"formularioAlbum\"\n>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <app-input-imagen\n        [ocultarInput]=\"this.formularioAlbum.disabled\"\n        [pathImagen]=\"cargarImagenAlbum()\"\n        [width]=\"width\"\n        (emitirImagen)=\"escucharEventoImagen($event)\"\n      ></app-input-imagen>\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"ui-fluid\">\n\n        <div class=\"p-field p-grid\">\n          <label for=\"artistas\" class=\"p-col-fixed\">Artistas *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <app-autocomplete-artista\n              id=\"artistas\"\n              [deshabilitar]=\"this.formularioAlbum.disabled\"\n              [arregloidsArtista]=\"idsArtista\"\n              [multiple]=\"true\"\n              (emitirArtistaSeleccionado)=\"buscarAlbumesPorArtista($event)\"\n            ></app-autocomplete-artista>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.artistas\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"nombre\" class=\"p-col-fixed\">Nombre *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <input\n              id=\"nombre\"\n              pInputText\n              type=\"text\"\n              formControlName=\"nombre\"\n              placeholder=\"Ingrese el nombre del album\"/>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.nombre\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n\n        <div class=\"p-field p-grid\">\n          <label for=\"fechaLanzamiento\" class=\"p-col-fixed\">Fecha de lanzamiento *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-calendar\n              id=\"fechaLanzamiento\"\n              [monthNavigator]=\"true\"\n              [yearNavigator]=\"true\"\n              [locale]=\"configuracionCalendario\"\n              yearRange=\"1920:2021\"\n              [showIcon]=\"true\"\n              dateFormat=\"yy-mm-dd\"\n              dataType=\"string\"\n              placeholder=\"Ingrese fecha de lanzamiento\"\n              formControlName='fechaLanzamiento'\n            ></p-calendar>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.fechaLanzamiento\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"calificacion\" class=\"p-col-fixed\">Calificación *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-inputNumber\n              id=\"calificacion\"\n              [showButtons]=\"true\"\n              [min]=\"0\"\n              [max]=\"100\"\n              [step]=\"1\"\n              [useGrouping]=\"false\"\n              formControlName='calificacion'\n              placeholder=\"Ingrese la calificación del album\"\n            >\n            </p-inputNumber>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.calificacion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"descripcion\" class=\"p-col-fixed\">Descripción *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <textarea\n              id=\"descripcion\"\n              [rows]=\"5\"\n              [cols]=\"30\"\n              pInputTextarea\n              formControlName=\"descripcion\"\n              placeholder=\"Ingrese la descripción del album\"\n            ></textarea>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.descripcion\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"tipo\" class=\"p-col-fixed\">Tipo *</label>\n          <div class=\"p-col-12 p-md-12\">\n<!--            <p-dropdown-->\n<!--              id = \"tipo\"-->\n<!--              [options]=\"tipos\"-->\n<!--              placeholder=\"Seleccione un tipo\"-->\n<!--              [showClear]=\"true\"-->\n<!--              formControlName=\"tipo\"-->\n<!--            ></p-dropdown>-->\n            <app-autocomplete-tipo-album\n              id = \"tipo\"\n              [deshabilitar]=\"formularioAlbum.disabled\"\n              [idTipoAlbum]=\"idTipoAlbum\"\n              (emitirTipoAlbumSeleccionado)=\"escucharTipoAlbumSeleccionado($event)\"\n            ></app-autocomplete-tipo-album>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.tipoAlbum\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n\n        <div class=\"p-field p-grid\">\n          <label for=\"generos\" class=\"p-col-fixed\">Géneros *</label>\n          <div class=\"p-col-12 p-md-12\">\n            <p-multiSelect\n              id=\"generos\"\n              formControlName='generos'\n              [maxSelectedLabels]=\"arregloGeneros.length\"\n              [options]=\"arregloGeneros\"\n              [optionLabel]=\"'nombre'\"\n              [panelStyle]=\"{minWidth:'12em'}\"\n              [defaultLabel]=\"'Seleccione los géneros del album'\"\n            ></p-multiSelect>\n          </div>\n          <div class=\"p-col-12 p-md-12\">\n            <app-alerta-validacion-campo-formulario\n              [mensajesError]=\"mensajesError.generos\">\n            </app-alerta-validacion-campo-formulario>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-migas-pan\n      [arregloRutas]=\"arregloRutas\">\n    </app-migas-pan>\n  </div>\n</div>\n\n<div class=\"\">\n  <div class=\"container\">\n    <div class=\"row center\">\n      <div class=\"col-sm-12\">\n        <h3 class=\"text-center\">\n          {{\n          album ? 'EDITAR ALBUM' : 'CREAR ALBUM'\n          }}\n        </h3>\n      </div>\n    </div>\n  </div>\n  <hr>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-1\"></div>\n    <div class=\"col-sm-10\">\n      <mat-horizontal-stepper\n        [linear]=\"true\"\n        #stepper>\n        <mat-step\n          [completed]=\"album\">\n          <ng-template matStepLabel>Información del album</ng-template>\n          <div\n            class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 justify-content-end d-flex\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"row\">\n                      <div class=\"\" *ngIf=\"!(componenteFormularioAlbum?.formularioAlbum?.disabled)\">\n                        <div\n                          class=\"d-flex flex-row-reverse\">\n                          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                            <button\n                              *ngIf=\"album\"\n                              (click)=\"cancelarCreacionEdicion()\"\n                              class=\"btn btn-secondary\">\n                              <i style=\"padding-right: 0%\" class=\"fas fa-times\">\n\n                              </i>\n                            </button>\n                            <button\n                              [disabled]=\"!formularioValido\"\n                              (click)=\"crearEditarArtista(stepper)\"\n                              class=\"btn btn-primary\">\n                              <i style=\"padding-right: 0%\" class=\"fas fa-upload\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"\" *ngIf=\"componenteFormularioAlbum?.formularioAlbum?.disabled\">\n                        <button\n                          (click)=\"habilitarFormularioEditarAlbum()\"\n                          class=\"btn btn-primary\">\n                          <i style=\"padding-right: 1%\" class=\"fas fa-pencil-alt\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div\n            *ngIf=\"!(componenteFormularioAlbum?.formularioAlbum?.disabled)\"\n            class=\"col-md-12\">\n            <p class=\"descripcion-modal\">{{'Llene todos los campos que son obligatorios (*). '}}</p>\n          </div>\n          <div class=\"col-sm-12\">\n            <app-formulario-album\n              *ngIf=\"album\"\n              [idArtista]=\"idArtista\"\n              [idsArtista]=\"idsArtista\"\n              [width]=\"70\"\n              [album]=\"album\"\n              (artistaValidoEnviar)=\"validarFormulario($event)\"\n            >\n            </app-formulario-album>\n            <app-formulario-album\n              *ngIf=\"!album\"\n              [idArtista]=\"idArtista\"\n              [idsArtista]=\"idsArtista\"\n              [width]=\"70\"\n              (artistaValidoEnviar)=\"validarFormulario($event)\"\n            >\n            </app-formulario-album>\n          </div>\n        </mat-step>\n        <mat-step\n          [completed]=\"album\"\n        >\n          <ng-template matStepLabel>Lista de canciones</ng-template>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <app-drag-drop-canciones\n                *ngIf=\"idsArtista && idsArtista.length && album\"\n                [album]=\"album\"\n                [idArtista]=\"idArtista\"\n                [idsArtista]=\"idsArtista\"\n                [cancionesAlbumSeleccionadas]=\"cancionesAlbum\"\n              ></app-drag-drop-canciones>\n            </div>\n          </div>\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>Enlace</ng-template>\n          <div class=\"col-sm-12 justify-content-end d-flex\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"row\">\n                  <div class=\"\" *ngIf=\"mostrarInputEnlace\">\n                    <div\n                      class=\"d-flex flex-row-reverse\">\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                        <button\n                          (click)=\"cambiarValorMostrarInputEnlace()\"\n                          class=\"btn btn-secondary\">\n                          <i style=\"padding-right: 0%\" class=\"fas fa-times\">\n                          </i>\n                        </button>\n                        <button\n                          (click)=\"guardarEnlace()\"\n                          class=\"btn btn-primary\">\n                          <i style=\"padding-right: 0%\" class=\"fas fa-upload\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"\" *ngIf=\"!mostrarInputEnlace\">\n                    <button\n                      class=\"btn btn-primary\"\n                      (click)=\"cambiarValorMostrarInputEnlace()\">\n                      <i style=\"padding-right: 1%\" class=\"fas fa-pencil-alt\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"\">\n            <iframe\n              *ngIf=\"album && album.enlacesAlbum && album.enlacesAlbum.length && !mostrarInputEnlace\"\n              [src]='obtenerEnlace() | safe'\n              style=\"width: 100%; height: 800px\"\n              allowtransparency=\"true\"\n              allow=\"encrypted-media\">\n            </iframe>\n            <input\n              *ngIf=\"!album || mostrarInputEnlace\"\n              id=\"enlace\"\n              [(ngModel)]=\"inputEnlace\"\n              pInputText\n              style=\"width: 100%;\"\n              type=\"text\"\n              placeholder=\"Ingrese el enlace del album\"/>\n          </div>\n\n        </mat-step>\n        <ng-template matStepperIcon=\"edit\">\n          <mat-icon>insert_emoticon</mat-icon>\n        </ng-template>\n        <ng-template matStepperIcon=\"number\">\n          <mat-icon>library_music</mat-icon>\n        </ng-template>\n        <ng-template matStepperIcon=\"done\">\n          <mat-icon>insert_emoticon</mat-icon>\n        </ng-template>\n\n      </mat-horizontal-stepper>\n    </div>\n    <div class=\"col-sm-1\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-migas-pan\n      [arregloRutas]=\"arregloRutas\">\n    </app-migas-pan>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"row center\">\n    <div class=\"col-sm-12\">\n      <h1 class=\"text-center\">\n        <img\n          style=\"width:40px\"\n          [src]=\"rutaImagen\">\n        {{ (artista ? ('ALBUMES DE ' + artista.nombre) : 'GESTIÓN DE ALBUMES' )| uppercase}}\n      </h1>\n    </div>\n  </div>\n\n</div>\n<hr>\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-9\">\n    <app-input-buscar-boton\n      [busqueda]=\"busqueda\"\n      [placeholder]=\"'Ingrese el nombre del album. Ejemplo: Chromatica ó 2013'\"\n      [ayuda]=\"'Busque un album por su nombre o año de lanzamiento'\"\n      (emitirBusqueda)=\"escucharBusqueda($event)\">\n\n    </app-input-buscar-boton>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <app-boton-nuevo\n      (click)=\"irRutaCrearAlbum()\"\n    ></app-boton-nuevo>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\" style=\"padding-left: 1%; padding-right: 1%\">\n  <div class=\"col-sm-3\">\n    <app-autcomplete-generos\n      [idGenero]=\"idGenero\"\n      (emitirGenroSeleccionado)=\"buscarAlbumesPorGenero($event)\"\n    ></app-autcomplete-generos>\n  </div>\n  <div [ngClass]=\"!idArtistaParams ? 'col-sm-3' : ''\" >\n    <app-autocomplete-artista\n      *ngIf=\"!idArtistaParams\"\n      [idArtista]=\"idArtista\"\n      [multiple]=\"false\"\n      (emitirArtistaSeleccionado)=\"buscarAlbumesPorArtista($event)\"\n    ></app-autocomplete-artista>\n  </div>\n  <div class=\"col-sm-3\" >\n    <app-autocomplete-tipo-album\n      [idTipoAlbum]=\"idTipoAlbum\"\n      (emitirTipoAlbumSeleccionado)=\"buscarAlbumPorTipo($event)\"\n    ></app-autocomplete-tipo-album>\n  </div>\n\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div *ngIf=\"albumes.length > 0\"\n         class=\"p-grid\">\n      <div class=\"p-col-12 p-md-6 p-lg-3\" *ngFor=\"let album of albumes\">\n        <app-menu-item-cuadrado\n          [texto]=\"album.nombre\"\n          [descripcion]=\"''\"\n          [imagen]=\"obtenerUrlPrincipal(album)\"\n          [url]=\"obtenerRuta(album.id)\"\n        ></app-menu-item-cuadrado>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2F1dG9jb21wbGV0ZS10aXBvLWFsYnVtL2F1dG9jb21wbGV0ZS10aXBvLWFsYnVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AutocompleteTipoAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteTipoAlbumComponent", function() { return AutocompleteTipoAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_rest_tipo_album_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/rest/tipo-album-rest.service */ "./src/app/servicios/rest/tipo-album-rest.service.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");





var AutocompleteTipoAlbumComponent = /** @class */ (function () {
    function AutocompleteTipoAlbumComponent(_tipoAlbumService, _toasterService) {
        this._tipoAlbumService = _tipoAlbumService;
        this._toasterService = _toasterService;
        this.emitirTipoAlbumSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AutocompleteTipoAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idTipoAlbum) {
            var consulta = {
                where: {
                    id: this.idTipoAlbum
                }
            };
            this._tipoAlbumService
                .findAll(JSON.stringify(consulta))
                .subscribe(function (respuestaTipoAlbum) {
                _this.tipoAlbumSeleccionado = respuestaTipoAlbum[0][0];
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
            });
        }
    };
    AutocompleteTipoAlbumComponent.prototype.filtrarTiposAlbum = function (evento) {
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
        this._tipoAlbumService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuestaTipoAlbum) {
            _this.arregloTiposAlbum = respuestaTipoAlbum[0];
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
        });
    };
    AutocompleteTipoAlbumComponent.prototype.enviarTipoAlbumSeleccionado = function (tipoAlbumSeleccionado) {
        this.emitirTipoAlbumSeleccionado.emit(tipoAlbumSeleccionado);
    };
    AutocompleteTipoAlbumComponent.prototype.limpiarBusqueda = function () {
        this.emitirTipoAlbumSeleccionado.emit(undefined);
    };
    AutocompleteTipoAlbumComponent.prototype.deseleccionarTipoAlbum = function () {
        this.emitirTipoAlbumSeleccionado.emit(this.tipoAlbumSeleccionado);
    };
    AutocompleteTipoAlbumComponent.ctorParameters = function () { return [
        { type: _servicios_rest_tipo_album_rest_service__WEBPACK_IMPORTED_MODULE_3__["TipoAlbumRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], AutocompleteTipoAlbumComponent.prototype, "idTipoAlbum", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AutocompleteTipoAlbumComponent.prototype, "deshabilitar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutocompleteTipoAlbumComponent.prototype, "emitirTipoAlbumSeleccionado", void 0);
    AutocompleteTipoAlbumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete-tipo-album',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./autocomplete-tipo-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./autocomplete-tipo-album.component.css */ "./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_tipo_album_rest_service__WEBPACK_IMPORTED_MODULE_3__["TipoAlbumRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], AutocompleteTipoAlbumComponent);
    return AutocompleteTipoAlbumComponent;
}());



/***/ }),

/***/ "./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AutocompleteTipoAlbumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteTipoAlbumModule", function() { return AutocompleteTipoAlbumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _autocomplete_tipo_album_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-tipo-album.component */ "./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.component.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");






var AutocompleteTipoAlbumModule = /** @class */ (function () {
    function AutocompleteTipoAlbumModule() {
    }
    AutocompleteTipoAlbumModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_autocomplete_tipo_album_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteTipoAlbumComponent"]],
            exports: [
                _autocomplete_tipo_album_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteTipoAlbumComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], AutocompleteTipoAlbumModule);
    return AutocompleteTipoAlbumModule;
}());



/***/ }),

/***/ "./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RyYWctZHJvcC1jYW5jaW9uZXMvZHJhZy1kcm9wLWNhbmNpb25lcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DragDropCancionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropCancionesComponent", function() { return DragDropCancionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/rest/cancion-rest.service */ "./src/app/servicios/rest/cancion-rest.service.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _modulos_cancion_modales_crear_editar_cancion_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _servicios_rest_album_cancion_rest_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../servicios/rest/album-cancion-rest.service */ "./src/app/servicios/rest/album-cancion-rest.service.ts");
/* harmony import */ var _funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../funciones/obtener-objeto */ "./src/app/funciones/obtener-objeto.ts");











var DragDropCancionesComponent = /** @class */ (function () {
    function DragDropCancionesComponent(_cancionRestService, dialog, _toasterService, _cargandoService, _albumCancionRestService) {
        this._cancionRestService = _cancionRestService;
        this.dialog = dialog;
        this._toasterService = _toasterService;
        this._cargandoService = _cargandoService;
        this._albumCancionRestService = _albumCancionRestService;
        this.idsArtista = [];
        this.cancionesAlbumSeleccionadas = [];
        this.cancionesDisponible = [];
        this.cancionesDisponibleFiltradas = [];
        this.columnasCancionesSeleccionadas = [
            {
                field: 'posicion',
                header: '#',
                width: '5%'
            },
            {
                field: 'nombre',
                header: 'Nombre',
                width: '35%'
            },
            {
                field: 'artistas',
                header: 'Artista(s)',
                width: '30%'
            },
            {
                field: 'duracionSegundos',
                header: 'Duracion',
                width: '10%'
            },
            {
                field: 'acciones',
                header: 'Acciones',
                width: '15%'
            },
        ];
        this.columnasCancionesDisponibles = [
            {
                field: 'informacion',
                header: 'Información',
                width: '100%'
            },
        ];
        this.cancionesAlbumSeleccionadasOriginal = [];
        this.cancionesFiltradasOriginal = [];
    }
    DragDropCancionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var consulta = {
            where: {},
            relations: [
                'tipoCancion',
                'imagenesCancion',
                'artistasCancion',
                'artistasCancion.artista',
                'generosCancion',
                'generosCancion.genero',
                'enlacesCancion',
            ]
        };
        this._cancionRestService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuestaCancion) {
            _this.cancionesDisponible = respuestaCancion[0].filter(function (cancion) {
                var cancionYaEstaEnAlbum = _this.cancionesAlbumSeleccionadas.find(function (cancionAlbumSeleccionada) { return cancionAlbumSeleccionada.cancion.id === cancion.id; });
                return !cancionYaEstaEnAlbum;
            });
            _this.cancionesAlbumSeleccionadasOriginal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.cancionesAlbumSeleccionadas);
            _this.cancionesDisponibleFiltradas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.cancionesDisponible).filter(function (cancion) {
                return cancion.artistasCancion
                    .find(function (artistaCancion) {
                    return _this.idsArtista
                        .find(function (idArtista) { return artistaCancion.artista.id === idArtista; });
                });
            });
            _this.cancionesFiltradasOriginal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.cancionesDisponibleFiltradas);
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["ToastErrorCargandoDatos"]);
        });
    };
    DragDropCancionesComponent.prototype.obtenerUrlPrincipal = function (cancion) {
        if (cancion.imagenesCancion && cancion.imagenesCancion.length) {
            return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_7__["obtenerUrlImagenPrincipal"])(cancion, 'imagenesCancion');
        }
    };
    DragDropCancionesComponent.prototype.abrirModalCrearEditarCancion = function (cancion, indice) {
        var _this = this;
        var idsArtista = this.idsArtista;
        if (cancion && cancion.artistasCancion) {
            idsArtista = cancion.artistasCancion.map(function (artistaCancion) { return artistaCancion.artista.id; });
        }
        var dialogRef = this.dialog
            .open(_modulos_cancion_modales_crear_editar_cancion_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_6__["CrearEditarCancionComponent"], {
            width: '1000px',
            data: {
                idsArtista: idsArtista,
                idsAlbums: [this.album.id],
                album: this.album,
                cancion: cancion,
                deshabilitarAlbums: true
            },
        });
        var resultadoModal$ = dialogRef.afterClosed();
        resultadoModal$
            .subscribe(function (cancionCreadaEditada) {
            if (cancionCreadaEditada) {
                var cancionAlbumCreadaEditada = cancionCreadaEditada.albumesCancion.find(function (cancionAlbum) { return cancionAlbum.album.id === _this.album.id; });
                if (cancionAlbumCreadaEditada) {
                    if (!cancion) {
                        _this.cancionesAlbumSeleccionadas.push(cancionAlbumCreadaEditada);
                    }
                    else {
                        _this.cancionesAlbumSeleccionadas[indice] = cancionAlbumCreadaEditada;
                    }
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    DragDropCancionesComponent.prototype.agregarCancionSeleccionada = function (cancion, id) {
        var indiceArregloFiltradoCancion = this.cancionesDisponibleFiltradas.indexOf(cancion);
        var indiceCancion = this.cancionesDisponible.indexOf(cancion);
        this.cancionesDisponible.splice(indiceCancion, 1);
        this.cancionesDisponibleFiltradas.splice(indiceArregloFiltradoCancion, 1);
        var cancionAlbumACrear = {
            posicion: this.cancionesAlbumSeleccionadas.length + 1,
            cancion: cancion,
            album: this.album,
        };
        this.cancionesAlbumSeleccionadas.push(cancionAlbumACrear);
    };
    DragDropCancionesComponent.prototype.quitarCancionSeleccionada = function (cancionAlbum, indice) {
        this.cancionesDisponibleFiltradas.unshift(cancionAlbum.cancion);
        this.cancionesDisponible.unshift(cancionAlbum.cancion);
        this.cancionesAlbumSeleccionadas.splice(indice, 1);
    };
    DragDropCancionesComponent.prototype.filtrarCancionesDisponibles = function (busqueda) {
        var _this = this;
        this.busqueda = busqueda.trim();
        this.cancionesDisponibleFiltradas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.cancionesDisponible).filter(function (cancionDisponible) {
            return cancionDisponible.nombre
                .toString()
                .toLowerCase()
                .includes((_this.busqueda)
                .toLowerCase()
                .trim());
        });
    };
    DragDropCancionesComponent.prototype.obtenerArtistas = function (artistasCancion) {
        return Object(_funciones_obtener_objeto__WEBPACK_IMPORTED_MODULE_10__["obtenerObjeto"])(artistasCancion, 'artista', 'nombre');
    };
    DragDropCancionesComponent.prototype.guardarCancionesAlbum = function () {
        var _this = this;
        this.seEmpezoAEditar = true;
        var cancionesAlbum = this.cancionesAlbumSeleccionadas.map(function (cancionSeleccionada, indice) {
            return {
                posicion: indice + 1,
                idCancion: cancionSeleccionada.cancion.id,
            };
        });
        this._cargandoService.habilitarCargando();
        this._albumCancionRestService
            .guardarCancionesAlbumCancion(this.album.id, cancionesAlbum)
            .subscribe(function (respuestaCancionesAlbum) {
            _this.cancionesAlbumSeleccionadas = respuestaCancionesAlbum[0];
            _this._cargandoService.deshabiltarCargando();
            _this.seEmpezoAEditar = false;
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_5__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    DragDropCancionesComponent.prototype.mostrarComponentesEditar = function () {
        this.seEmpezoAEditar = true;
    };
    DragDropCancionesComponent.prototype.cancelarEdicion = function () {
        this.seEmpezoAEditar = false;
        this.cancionesAlbumSeleccionadas = this.cancionesAlbumSeleccionadasOriginal;
        this.cancionesDisponibleFiltradas = this.cancionesFiltradasOriginal;
    };
    DragDropCancionesComponent.ctorParameters = function () { return [
        { type: _servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_4__["CancionRestService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_8__["CargandoService"] },
        { type: _servicios_rest_album_cancion_rest_service__WEBPACK_IMPORTED_MODULE_9__["AlbumCancionRestService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], DragDropCancionesComponent.prototype, "idArtista", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], DragDropCancionesComponent.prototype, "idsArtista", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DragDropCancionesComponent.prototype, "album", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], DragDropCancionesComponent.prototype, "cancionesAlbumSeleccionadas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], DragDropCancionesComponent.prototype, "cancionesDisponible", void 0);
    DragDropCancionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drag-drop-canciones',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./drag-drop-canciones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./drag-drop-canciones.component.css */ "./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_cancion_rest_service__WEBPACK_IMPORTED_MODULE_4__["CancionRestService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_8__["CargandoService"],
            _servicios_rest_album_cancion_rest_service__WEBPACK_IMPORTED_MODULE_9__["AlbumCancionRestService"]])
    ], DragDropCancionesComponent);
    return DragDropCancionesComponent;
}());



/***/ }),

/***/ "./src/app/componentes/drag-drop-canciones/drag-drop-canciones.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/drag-drop-canciones/drag-drop-canciones.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DragDropCancionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropCancionesModule", function() { return DragDropCancionesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _drag_drop_canciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop-canciones.component */ "./src/app/componentes/drag-drop-canciones/drag-drop-canciones.component.ts");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/picklist */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng-picklist.js");
/* harmony import */ var _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module */ "./src/app/pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module.ts");
/* harmony import */ var _modulos_cancion_modales_crear_editar_cancion_crear_editar_cancion_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.module */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.module.ts");
/* harmony import */ var _modulos_cancion_modales_crear_editar_cancion_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component */ "./src/app/modulos/cancion/modales/crear-editar-cancion/crear-editar-cancion.component.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");










var DragDropCancionesModule = /** @class */ (function () {
    function DragDropCancionesModule() {
    }
    DragDropCancionesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_drag_drop_canciones_component__WEBPACK_IMPORTED_MODULE_3__["DragDropCancionesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_picklist__WEBPACK_IMPORTED_MODULE_4__["PickListModule"],
                _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_5__["SegundosAMinutosHorasPipeModule"],
                _modulos_cancion_modales_crear_editar_cancion_crear_editar_cancion_module__WEBPACK_IMPORTED_MODULE_6__["CrearEditarCancionModule"],
                primeng__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                primeng__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
                primeng__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            exports: [
                _drag_drop_canciones_component__WEBPACK_IMPORTED_MODULE_3__["DragDropCancionesComponent"],
            ],
            entryComponents: [
                _modulos_cancion_modales_crear_editar_cancion_crear_editar_cancion_component__WEBPACK_IMPORTED_MODULE_7__["CrearEditarCancionComponent"]
            ]
        })
    ], DragDropCancionesModule);
    return DragDropCancionesModule;
}());



/***/ }),

/***/ "./src/app/constantes/tipos-album.ts":
/*!*******************************************!*\
  !*** ./src/app/constantes/tipos-album.ts ***!
  \*******************************************/
/*! exports provided: TIPOS_ALBUMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPOS_ALBUMES", function() { return TIPOS_ALBUMES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TIPOS_ALBUMES = [
    { label: 'studio', value: 'studio' },
    { label: 'lp', value: 'lp' },
    { label: 'ep', value: 'ep' },
    { label: 'deluxe', value: 'deluxe' },
    { label: 'soundtrack', value: 'soundtrack' },
    { label: 're-edition', value: 're-edition' },
    { label: 'live', value: 'live' },
];


/***/ }),

/***/ "./src/app/constantes/validaciones-formulario/album.ts":
/*!*************************************************************!*\
  !*** ./src/app/constantes/validaciones-formulario/album.ts ***!
  \*************************************************************/
/*! exports provided: VALIDACION_NOMBRE_ALBUM, MENSAJES_VALIDACION_NOMBRE_ALBUM, VALIDACION_DESCRIPCION_ALBUM, MENSAJES_VALIDACION_DESCRIPCION_ALBUM, VALIDACION_FECHA_LANZAMIENTO_ALBUM, MENSAJES_VALIDACION_FECHA_LANZAMIENTO_ALBUM, VALIDACION_CALIFICACION_ALBUM, MENSAJES_VALIDACION_CALIFICACION_ALBUM, VALIDACION_GENEROS_ALBUM, MENSAJES_VALIDACION_GENEROS_ALBUM, VALIDACION_ARTISTAS_ALBUM, MENSAJES_VALIDACION_ARTISTAS_ALBUM, VALIDACION_IMAGEN_ALBUM, MENSAJES_VALIDACION_OATH_LOGO_ALBUM, VALIDACION_TIPO_ALBUM, MENSAJES_VALIDACION_TIPO_ALBUM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_NOMBRE_ALBUM", function() { return VALIDACION_NOMBRE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_NOMBRE_ALBUM", function() { return MENSAJES_VALIDACION_NOMBRE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_DESCRIPCION_ALBUM", function() { return VALIDACION_DESCRIPCION_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_DESCRIPCION_ALBUM", function() { return MENSAJES_VALIDACION_DESCRIPCION_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_FECHA_LANZAMIENTO_ALBUM", function() { return VALIDACION_FECHA_LANZAMIENTO_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_FECHA_LANZAMIENTO_ALBUM", function() { return MENSAJES_VALIDACION_FECHA_LANZAMIENTO_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_CALIFICACION_ALBUM", function() { return VALIDACION_CALIFICACION_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_CALIFICACION_ALBUM", function() { return MENSAJES_VALIDACION_CALIFICACION_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_GENEROS_ALBUM", function() { return VALIDACION_GENEROS_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_GENEROS_ALBUM", function() { return MENSAJES_VALIDACION_GENEROS_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_ARTISTAS_ALBUM", function() { return VALIDACION_ARTISTAS_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_ARTISTAS_ALBUM", function() { return MENSAJES_VALIDACION_ARTISTAS_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_IMAGEN_ALBUM", function() { return VALIDACION_IMAGEN_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_OATH_LOGO_ALBUM", function() { return MENSAJES_VALIDACION_OATH_LOGO_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDACION_TIPO_ALBUM", function() { return VALIDACION_TIPO_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENSAJES_VALIDACION_TIPO_ALBUM", function() { return MENSAJES_VALIDACION_TIPO_ALBUM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


var VALIDACION_NOMBRE_ALBUM = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
];
var MENSAJES_VALIDACION_NOMBRE_ALBUM = {
    required: 'El campo nombre es obligatorio',
    minlength: 'El campo nombre debe tener mínimo 1 caracter',
    maxlength: 'El campo nombre no debe tener más de 50 caracteres'
};
var VALIDACION_DESCRIPCION_ALBUM = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_DESCRIPCION_ALBUM = {
    required: 'El campo descripción es obligatorio',
};
var VALIDACION_FECHA_LANZAMIENTO_ALBUM = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_FECHA_LANZAMIENTO_ALBUM = {
    required: 'El campo fecha de lanzamiento es obligatorio',
};
var VALIDACION_CALIFICACION_ALBUM = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_CALIFICACION_ALBUM = {
    required: 'El campo calificación es obligatorio',
};
var VALIDACION_GENEROS_ALBUM = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_GENEROS_ALBUM = {
    required: 'El campo generos es obligatorio',
};
var VALIDACION_ARTISTAS_ALBUM = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_ARTISTAS_ALBUM = {
    required: 'El campo artistas es obligatorio',
};
var VALIDACION_IMAGEN_ALBUM = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_OATH_LOGO_ALBUM = {
    required: 'El logo  es obligatorio',
};
var VALIDACION_TIPO_ALBUM = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
];
var MENSAJES_VALIDACION_TIPO_ALBUM = {
    required: 'El campo tipo es obligatorio',
};


/***/ }),

/***/ "./src/app/modulos/album/album-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modulos/album/album-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AlbumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumRoutingModule", function() { return AlbumRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _rutas_ruta_gestion_albumes_ruta_gestion_albumes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutas/ruta-gestion-albumes/ruta-gestion-albumes.component */ "./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.ts");
/* harmony import */ var _rutas_ruta_crear_editar_album_ruta_crear_editar_album_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rutas/ruta-crear-editar-album/ruta-crear-editar-album.component */ "./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.ts");





var routes = [
    {
        path: 'gestion-albumes',
        children: [
            {
                path: '',
                component: _rutas_ruta_gestion_albumes_ruta_gestion_albumes_component__WEBPACK_IMPORTED_MODULE_3__["RutaGestionAlbumesComponent"]
            },
            {
                path: 'crear-album',
                component: _rutas_ruta_crear_editar_album_ruta_crear_editar_album_component__WEBPACK_IMPORTED_MODULE_4__["RutaCrearEditarAlbumComponent"]
            },
            {
                path: 'editar-album/:idAlbum',
                component: _rutas_ruta_crear_editar_album_ruta_crear_editar_album_component__WEBPACK_IMPORTED_MODULE_4__["RutaCrearEditarAlbumComponent"]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'gestion-albumes',
        pathMatch: 'full',
    }
];
var AlbumRoutingModule = /** @class */ (function () {
    function AlbumRoutingModule() {
    }
    AlbumRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AlbumRoutingModule);
    return AlbumRoutingModule;
}());



/***/ }),

/***/ "./src/app/modulos/album/album.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modulos/album/album.module.ts ***!
  \***********************************************/
/*! exports provided: AlbumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumModule", function() { return AlbumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _album_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album-routing.module */ "./src/app/modulos/album/album-routing.module.ts");
/* harmony import */ var _rutas_ruta_gestion_albumes_ruta_gestion_albumes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rutas/ruta-gestion-albumes/ruta-gestion-albumes.component */ "./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.ts");
/* harmony import */ var _componentes_menu_item_cuadrado_menu_item_cuadrado_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentes/menu-item-cuadrado/menu-item-cuadrado.module */ "./src/app/componentes/menu-item-cuadrado/menu-item-cuadrado.module.ts");
/* harmony import */ var _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../componentes/input-buscar-boton/input-buscar-boton.module */ "./src/app/componentes/input-buscar-boton/input-buscar-boton.module.ts");
/* harmony import */ var _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentes/boton-nuevo/boton-nuevo.module */ "./src/app/componentes/boton-nuevo/boton-nuevo.module.ts");
/* harmony import */ var _componentes_autcomplete_generos_autcomplete_generos_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../componentes/autcomplete-generos/autcomplete-generos.module */ "./src/app/componentes/autcomplete-generos/autcomplete-generos.module.ts");
/* harmony import */ var _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../componentes/autocomplete-artista/autocomplete-artista.module */ "./src/app/componentes/autocomplete-artista/autocomplete-artista.module.ts");
/* harmony import */ var _rutas_ruta_crear_editar_album_ruta_crear_editar_album_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rutas/ruta-crear-editar-album/ruta-crear-editar-album.component */ "./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.ts");
/* harmony import */ var _componentes_formulario_album_formulario_album_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/formulario-album/formulario-album.module */ "./src/app/modulos/album/componentes/formulario-album/formulario-album.module.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/stepper.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _componentes_drag_drop_canciones_drag_drop_canciones_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../componentes/drag-drop-canciones/drag-drop-canciones.module */ "./src/app/componentes/drag-drop-canciones/drag-drop-canciones.module.ts");
/* harmony import */ var _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module */ "./src/app/pipes/segundos-a-minutos-horas-pipe/segundos-a-minutos-horas-pipe.module.ts");
/* harmony import */ var _componentes_autocomplete_tipo_album_autocomplete_tipo_album_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../componentes/autocomplete-tipo-album/autocomplete-tipo-album.module */ "./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.module.ts");
/* harmony import */ var _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../componentes/migas-pan/migas-pan.module */ "./src/app/componentes/migas-pan/migas-pan.module.ts");
/* harmony import */ var _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../pipes/safe-pipe/safe-pipe.module */ "./src/app/pipes/safe-pipe/safe-pipe.module.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");





















var AlbumModule = /** @class */ (function () {
    function AlbumModule() {
    }
    AlbumModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _rutas_ruta_gestion_albumes_ruta_gestion_albumes_component__WEBPACK_IMPORTED_MODULE_4__["RutaGestionAlbumesComponent"],
                _rutas_ruta_crear_editar_album_ruta_crear_editar_album_component__WEBPACK_IMPORTED_MODULE_10__["RutaCrearEditarAlbumComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _album_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlbumRoutingModule"],
                _componentes_menu_item_cuadrado_menu_item_cuadrado_module__WEBPACK_IMPORTED_MODULE_5__["MenuItemCuadradoModule"],
                _componentes_input_buscar_boton_input_buscar_boton_module__WEBPACK_IMPORTED_MODULE_6__["InputBuscarBotonModule"],
                _componentes_boton_nuevo_boton_nuevo_module__WEBPACK_IMPORTED_MODULE_7__["BotonNuevoModule"],
                _componentes_autcomplete_generos_autcomplete_generos_module__WEBPACK_IMPORTED_MODULE_8__["AutcompleteGenerosModule"],
                _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteArtistaModule"],
                _componentes_formulario_album_formulario_album_module__WEBPACK_IMPORTED_MODULE_11__["FormularioAlbumModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _componentes_drag_drop_canciones_drag_drop_canciones_module__WEBPACK_IMPORTED_MODULE_14__["DragDropCancionesModule"],
                _pipes_segundos_a_minutos_horas_pipe_segundos_a_minutos_horas_pipe_module__WEBPACK_IMPORTED_MODULE_15__["SegundosAMinutosHorasPipeModule"],
                _componentes_autocomplete_tipo_album_autocomplete_tipo_album_module__WEBPACK_IMPORTED_MODULE_16__["AutocompleteTipoAlbumModule"],
                _componentes_migas_pan_migas_pan_module__WEBPACK_IMPORTED_MODULE_17__["MigasPanModule"],
                _pipes_safe_pipe_safe_pipe_module__WEBPACK_IMPORTED_MODULE_18__["SafePipeModule"],
                primeng__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"]
            ]
        })
    ], AlbumModule);
    return AlbumModule;
}());



/***/ }),

/***/ "./src/app/modulos/album/componentes/formulario-album/formulario-album.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/album/componentes/formulario-album/formulario-album.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvYWxidW0vY29tcG9uZW50ZXMvZm9ybXVsYXJpby1hbGJ1bS9mb3JtdWxhcmlvLWFsYnVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modulos/album/componentes/formulario-album/formulario-album.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modulos/album/componentes/formulario-album/formulario-album.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FormularioAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioAlbumComponent", function() { return FormularioAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constantes/configuracion-calendario */ "./src/app/constantes/configuracion-calendario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/rest/genero-rest.service */ "./src/app/servicios/rest/genero-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../funciones/generar-mensajes-error */ "./src/app/funciones/generar-mensajes-error.ts");
/* harmony import */ var _componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../componentes/input-imagen/input-imagen.component */ "./src/app/componentes/input-imagen/input-imagen.component.ts");
/* harmony import */ var _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constantes/validaciones-formulario/album */ "./src/app/constantes/validaciones-formulario/album.ts");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var _constantes_tipos_album__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../constantes/tipos-album */ "./src/app/constantes/tipos-album.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");














var FormularioAlbumComponent = /** @class */ (function () {
    function FormularioAlbumComponent(_generoRestService, _formBuilder, _toasterService, _artistaService) {
        this._generoRestService = _generoRestService;
        this._formBuilder = _formBuilder;
        this._toasterService = _toasterService;
        this._artistaService = _artistaService;
        this.configuracionCalendario = _constantes_configuracion_calendario__WEBPACK_IMPORTED_MODULE_2__["CONFIGURACIONES_CALENDARIO"];
        this.arregloGeneros = [];
        this.mensajesError = {
            nombre: [],
            descripcion: [],
            calificacion: [],
            fechaLanzamiento: [],
            generos: [],
            imagen: [],
            artistas: [],
            tipoAlbum: []
        };
        this.subscribers = [];
        this.tipos = _constantes_tipos_album__WEBPACK_IMPORTED_MODULE_12__["TIPOS_ALBUMES"];
        this.artistaValidoEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormularioAlbumComponent.prototype.ngOnInit = function () {
        this.cargarGeneros();
        this.iniciarFormulario();
    };
    FormularioAlbumComponent.prototype.iniciarFormulario = function () {
        this.crearFormulario();
        if (this.album) {
            this.idTipoAlbum = this.album.tipoAlbum.id;
            this.deshabilitarFormulario();
        }
        else {
            if (this.idsArtista && this.idsArtista.length) {
                this.cargarMultiselectArtista();
            }
        }
        this.verificarCamposFormulario();
        this.verificarFormulario();
    };
    FormularioAlbumComponent.prototype.crearFormulario = function () {
        this.formularioAlbum = this._formBuilder.group({
            nombre: [this.album ? this.album.nombre : '', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["VALIDACION_NOMBRE_ALBUM"]],
            descripcion: [this.album ? this.album.descripcion : '', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["VALIDACION_DESCRIPCION_ALBUM"]],
            fechaLanzamiento: [this.album ? this.album.fechaLanzamiento : '', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["VALIDACION_FECHA_LANZAMIENTO_ALBUM"]],
            calificacion: [this.album ? this.album.calificacion : null, _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["VALIDACION_CALIFICACION_ALBUM"]],
            generos: [this.album ? this.cargarGenerosAlbum() : [], _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["VALIDACION_GENEROS_ALBUM"]],
            artistas: [this.album ? this.cargarArtistasAlbum() : [], _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["VALIDACION_ARTISTAS_ALBUM"]],
            imagen: [this.album ? this.cargarImagenAlbum() : '', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["VALIDACION_IMAGEN_ALBUM"]],
            tipoAlbum: [this.album ? this.album.tipoAlbum : null, _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["VALIDACION_TIPO_ALBUM"]]
        });
    };
    FormularioAlbumComponent.prototype.verificarCamposFormulario = function () {
        this.verificarCampoFormControl('nombre', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["MENSAJES_VALIDACION_NOMBRE_ALBUM"]);
        this.verificarCampoFormControl('descripcion', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["MENSAJES_VALIDACION_DESCRIPCION_ALBUM"]);
        this.verificarCampoFormControl('fechaLanzamiento', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["MENSAJES_VALIDACION_FECHA_LANZAMIENTO_ALBUM"]);
        this.verificarCampoFormControl('calificacion', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["MENSAJES_VALIDACION_CALIFICACION_ALBUM"]);
        this.verificarCampoFormControl('generos', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["MENSAJES_VALIDACION_GENEROS_ALBUM"]);
        this.verificarCampoFormControl('artistas', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["MENSAJES_VALIDACION_ARTISTAS_ALBUM"]);
        this.verificarCampoFormControl('tipoAlbum', _constantes_validaciones_formulario_album__WEBPACK_IMPORTED_MODULE_10__["MENSAJES_VALIDACION_TIPO_ALBUM"]);
    };
    FormularioAlbumComponent.prototype.verificarCampoFormControl = function (campo, mensajeValidacion) {
        var _this = this;
        var campoFormControl = this.formularioAlbum.get(campo);
        var subscriber = campoFormControl
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(1000))
            .subscribe(function (valor) {
            _this.mensajesError[campo] = Object(_funciones_generar_mensajes_error__WEBPACK_IMPORTED_MODULE_8__["generarMensajesError"])(campoFormControl, _this.mensajesError[campo], mensajeValidacion);
        });
        this.subscribers.push(subscriber);
    };
    FormularioAlbumComponent.prototype.verificarFormulario = function () {
        var _this = this;
        var formularioFormGroup = this.formularioAlbum;
        var subscriber = formularioFormGroup
            .valueChanges
            .subscribe(function (formulario) {
            var artistaValido = formularioFormGroup.valid;
            if (artistaValido) {
                _this.artistaValidoEnviar.emit(formulario);
            }
            else {
                _this.artistaValidoEnviar.emit(false);
            }
        });
        this.subscribers.push(subscriber);
    };
    FormularioAlbumComponent.prototype.escucharEventoImagen = function (event) {
        this.imagenSeleccionada = event;
        this.formularioAlbum.patchValue({
            imagen: this.imagenSeleccionada,
        });
    };
    FormularioAlbumComponent.prototype.cargarGeneros = function () {
        var _this = this;
        this._generoRestService
            .findAll(JSON.stringify({}))
            .subscribe(function (respuestaGeneros) {
            _this.arregloGeneros = respuestaGeneros[0];
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_6__["ToastErrorCargandoDatos"]);
        });
    };
    FormularioAlbumComponent.prototype.cargarGenerosAlbum = function () {
        return this.album.generosAlbum.map(function (generoAlbum) { return generoAlbum.genero; });
    };
    FormularioAlbumComponent.prototype.cargarImagenAlbum = function () {
        if (this.album) {
            return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_13__["obtenerUrlImagenPrincipal"])(this.album, 'imagenesAlbum');
        }
    };
    FormularioAlbumComponent.prototype.deshabilitarFormulario = function () {
        this.formularioAlbum.disable();
    };
    FormularioAlbumComponent.prototype.buscarAlbumesPorArtista = function (respuestaArtista) {
        this.formularioAlbum.patchValue({
            artistas: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(respuestaArtista)
        });
    };
    FormularioAlbumComponent.prototype.cargarMultiselectArtista = function () {
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
            _this.formularioAlbum.patchValue({
                artistas: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(respuestaArtista[0])
            });
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_6__["ToastErrorCargandoDatos"]);
        });
    };
    FormularioAlbumComponent.prototype.cargarArtistasAlbum = function () {
        return this.album.artistasAlbum.map(function (artistaAlbum) { return artistaAlbum.artista; });
    };
    FormularioAlbumComponent.prototype.volverFormularioInicial = function () {
        this.formularioAlbum.patchValue({
            nombre: this.album.nombre,
            descripcion: this.album.descripcion,
            fechaLanzamiento: this.album.fechaLanzamiento,
            calificacion: this.album.calificacion,
            tipoAlbum: this.album.tipoAlbum,
            artistas: this.cargarArtistasAlbum(),
            generos: this.cargarGenerosAlbum(),
            imagen: this.cargarImagenAlbum(),
        });
        this.idTipoAlbum = this.album.tipoAlbum.id;
        this.componenteInputImagen.pathImagen = this.cargarImagenAlbum();
        this.deshabilitarFormulario();
    };
    FormularioAlbumComponent.prototype.escucharTipoAlbumSeleccionado = function (tipoAlbumSeleccionado) {
        this.formularioAlbum.patchValue({
            tipoAlbum: tipoAlbumSeleccionado,
        });
    };
    FormularioAlbumComponent.ctorParameters = function () { return [
        { type: _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_4__["GeneroRestService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_11__["ArtistaRestService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormularioAlbumComponent.prototype, "album", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], FormularioAlbumComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], FormularioAlbumComponent.prototype, "idArtista", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], FormularioAlbumComponent.prototype, "idsArtista", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormularioAlbumComponent.prototype, "artistaValidoEnviar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_9__["InputImagenComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _componentes_input_imagen_input_imagen_component__WEBPACK_IMPORTED_MODULE_9__["InputImagenComponent"])
    ], FormularioAlbumComponent.prototype, "componenteInputImagen", void 0);
    FormularioAlbumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario-album',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formulario-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/componentes/formulario-album/formulario-album.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formulario-album.component.css */ "./src/app/modulos/album/componentes/formulario-album/formulario-album.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_4__["GeneroRestService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_11__["ArtistaRestService"]])
    ], FormularioAlbumComponent);
    return FormularioAlbumComponent;
}());



/***/ }),

/***/ "./src/app/modulos/album/componentes/formulario-album/formulario-album.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/album/componentes/formulario-album/formulario-album.module.ts ***!
  \***************************************************************************************/
/*! exports provided: FormularioAlbumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioAlbumModule", function() { return FormularioAlbumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _formulario_album_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario-album.component */ "./src/app/modulos/album/componentes/formulario-album/formulario-album.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _componentes_input_imagen_input_imagen_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../componentes/input-imagen/input-imagen.module */ "./src/app/componentes/input-imagen/input-imagen.module.ts");
/* harmony import */ var _componentes_alerta_validacion_campo_formulario_alerta_validacion_campo_formulario_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module */ "./src/app/componentes/alerta-validacion-campo-formulario/alerta-validacion-campo-formulario.module.ts");
/* harmony import */ var _componentes_autocomplete_artista_autocomplete_artista_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../componentes/autocomplete-artista/autocomplete-artista.module */ "./src/app/componentes/autocomplete-artista/autocomplete-artista.module.ts");
/* harmony import */ var _componentes_autocomplete_tipo_album_autocomplete_tipo_album_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../componentes/autocomplete-tipo-album/autocomplete-tipo-album.module */ "./src/app/componentes/autocomplete-tipo-album/autocomplete-tipo-album.module.ts");










var FormularioAlbumModule = /** @class */ (function () {
    function FormularioAlbumModule() {
    }
    FormularioAlbumModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _formulario_album_component__WEBPACK_IMPORTED_MODULE_3__["FormularioAlbumComponent"]
            ],
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
                _componentes_autocomplete_tipo_album_autocomplete_tipo_album_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteTipoAlbumModule"]
            ],
            exports: [
                _formulario_album_component__WEBPACK_IMPORTED_MODULE_3__["FormularioAlbumComponent"]
            ]
        })
    ], FormularioAlbumModule);
    return FormularioAlbumModule;
}());



/***/ }),

/***/ "./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvYWxidW0vcnV0YXMvcnV0YS1jcmVhci1lZGl0YXItYWxidW0vcnV0YS1jcmVhci1lZGl0YXItYWxidW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RutaCrearEditarAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaCrearEditarAlbumComponent", function() { return RutaCrearEditarAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../servicios/rest/album-rest.service */ "./src/app/servicios/rest/album-rest.service.ts");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../servicios/rest/genero-rest.service */ "./src/app/servicios/rest/genero-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _componentes_formulario_album_formulario_album_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../componentes/formulario-album/formulario-album.component */ "./src/app/modulos/album/componentes/formulario-album/formulario-album.component.ts");
/* harmony import */ var _funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../funciones/obtener-anio */ "./src/app/funciones/obtener-anio.ts");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../artista/rutas/definicion-rutas/rutas-artista */ "./src/app/modulos/artista/rutas/definicion-rutas/rutas-artista.ts");
/* harmony import */ var _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../definicion-rutas/rutas-album */ "./src/app/modulos/album/rutas/definicion-rutas/rutas-album.ts");
/* harmony import */ var _servicios_rest_enlace_album_cancion_artista_video_rest_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../servicios/rest/enlace-album-cancion-artista-video-rest.service */ "./src/app/servicios/rest/enlace-album-cancion-artista-video-rest.service.ts");

















var RutaCrearEditarAlbumComponent = /** @class */ (function () {
    function RutaCrearEditarAlbumComponent(_albumRestService, _artistaRestService, _cargandoService, dialog, _router, _activatedRoute, _generoRestService, _toasterService, _enlaceAlbumCancionArtistaVideoRestService) {
        this._albumRestService = _albumRestService;
        this._artistaRestService = _artistaRestService;
        this._cargandoService = _cargandoService;
        this.dialog = dialog;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._generoRestService = _generoRestService;
        this._toasterService = _toasterService;
        this._enlaceAlbumCancionArtistaVideoRestService = _enlaceAlbumCancionArtistaVideoRestService;
        this.idsArtista = [];
        this.ruta = [];
        this.cancionesAlbum = [];
    }
    RutaCrearEditarAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["mergeMap"])(function (params) {
            _this.idAlbum = +params.idAlbum;
            _this.idArtista = +params.idArtista;
            _this.setearArregloRutasMigaPan();
            _this.ruta = _this.setearRuta();
            if (_this.idAlbum) {
                var consulta = {
                    where: {
                        id: _this.idAlbum
                    },
                    relations: [
                        'imagenesAlbum',
                        'generosAlbum',
                        'generosAlbum.genero',
                        'artistasAlbum',
                        'artistasAlbum.artista',
                        'cancionesAlbum',
                        'cancionesAlbum.cancion',
                        'cancionesAlbum.cancion.tipoCancion',
                        'cancionesAlbum.cancion.imagenesCancion',
                        'cancionesAlbum.cancion.artistasCancion',
                        'cancionesAlbum.cancion.artistasCancion.artista',
                        'cancionesAlbum.cancion.generosCancion',
                        'cancionesAlbum.cancion.generosCancion.genero',
                        'cancionesAlbum.cancion.enlacesCancion',
                        'tipoAlbum',
                        'enlacesAlbum'
                    ]
                };
                _this._cargandoService.habilitarCargando();
                return _this._albumRestService.findAll(JSON.stringify(consulta));
            }
            else {
                _this.idsArtista.push(_this.idArtista);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])([], 0);
            }
        }))
            .subscribe(function (respuestaAlbum) {
            if (respuestaAlbum && respuestaAlbum[0] && respuestaAlbum[0][0]) {
                _this.album = respuestaAlbum[0][0];
                _this.idsArtista = _this.album.artistasAlbum.map(function (artistaAlbum) { return artistaAlbum.artista.id; });
                _this.cancionesAlbum = _this.album.cancionesAlbum;
                if (_this.album.enlacesAlbum.length) {
                    _this.inputEnlace = _this.album.enlacesAlbum[0].url;
                }
            }
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    RutaCrearEditarAlbumComponent.prototype.validarFormulario = function (album) {
        if (album) {
            this.formularioValido = true;
            this.albumCrearEditar = album;
        }
        else {
            this.formularioValido = false;
        }
    };
    RutaCrearEditarAlbumComponent.prototype.cancelarCreacionEdicion = function () {
        this.componenteFormularioAlbum.volverFormularioInicial();
    };
    RutaCrearEditarAlbumComponent.prototype.crearEditarArtista = function (stepper) {
        var _this = this;
        this._cargandoService.habilitarCargando();
        this.albumCrearEditar.anio = Object(_funciones_obtener_anio__WEBPACK_IMPORTED_MODULE_10__["obtenerAnio"])(this.albumCrearEditar.fechaLanzamiento);
        var generos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.albumCrearEditar.generos).map(function (genero) { return genero.id; });
        var artistas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.albumCrearEditar.artistas).map(function (genero) { return genero.id; });
        if (this.album) {
            var imagenPrincipal = this.album.imagenesAlbum.find(function (imagenAlbum) { return imagenAlbum.esPrincipal; });
            this._albumRestService
                .editarAlbumArtistaGenerosImagen(this.albumCrearEditar, generos, artistas, this.albumCrearEditar.imagen, this.album.id, imagenPrincipal.id)
                .subscribe(function (respuestaAlbumEditado) {
                _this.album = respuestaAlbumEditado;
                _this.idsArtista = _this.album.artistasAlbum.map(function (artistaAlbum) { return artistaAlbum.artista.id; });
                _this.componenteFormularioAlbum.album = respuestaAlbumEditado;
                _this.componenteFormularioAlbum.volverFormularioInicial();
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["toastExitoEditar"]);
                _this._cargandoService.deshabiltarCargando();
                _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_15__["RUTAS_ALBUM"]
                    .rutaEditarAlbum(true, false, [_this.idArtista, _this.album.id]);
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
        else {
            this._albumRestService
                .crearAlbumImagen(this.albumCrearEditar, generos, artistas, this.albumCrearEditar.imagen)
                .subscribe(function (respuestaAlbumCreado) {
                _this.album = respuestaAlbumCreado;
                _this.cancionesAlbum = _this.album.cancionesAlbum;
                _this.idsArtista = _this.album.artistasAlbum.map(function (artistaAlbum) { return artistaAlbum.artista.id; });
                _this.componenteFormularioAlbum.album = respuestaAlbumCreado;
                _this.componenteFormularioAlbum.volverFormularioInicial();
                _this.cambiarSiguienteStep(stepper);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["ToastErrorCargandoDatos"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
    };
    RutaCrearEditarAlbumComponent.prototype.habilitarFormularioEditarAlbum = function () {
        this.componenteFormularioAlbum.formularioAlbum.enable();
    };
    RutaCrearEditarAlbumComponent.prototype.cambiarSiguienteStep = function (steper) {
        setTimeout(function () {
            steper.next();
        }, 800);
    };
    RutaCrearEditarAlbumComponent.prototype.setearArregloRutasMigaPan = function () {
        if (this.idArtista) {
            this.arregloRutas = [
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_14__["RUTAS_ARTISTA"].rutaGestionArtistas(false, true),
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_14__["RUTAS_ARTISTA"].rutaVerEditarArtistas(false, true, [this.idArtista]),
                _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_15__["RUTAS_ALBUM"].rutaGestionAlbumes(false, true, [this.idArtista]),
            ];
        }
        else {
            this.arregloRutas = [
                _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_15__["RUTAS_ALBUM"].rutaGestionAlbumes(false, true),
            ];
        }
        if (this.idAlbum) {
            this.arregloRutas.push(_definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_15__["RUTAS_ALBUM"].rutaEditarAlbum(false, true));
        }
        else {
            this.arregloRutas.push(_definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_15__["RUTAS_ALBUM"].rutaCrearTour(false, true));
        }
    };
    RutaCrearEditarAlbumComponent.prototype.setearRuta = function () {
        if (this.idAlbum) {
            return _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_15__["RUTAS_ALBUM"].rutaEditarAlbum(false, true, [this.idAlbum, this.idArtista]).ruta;
        }
        else {
            return _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_15__["RUTAS_ALBUM"].rutaCrearTour(false, true, [this.idArtista]).ruta;
        }
    };
    RutaCrearEditarAlbumComponent.prototype.obtenerEnlace = function () {
        if (this.album && this.album.enlacesAlbum.length) {
            return this.album.enlacesAlbum[0].url;
        }
    };
    RutaCrearEditarAlbumComponent.prototype.cambiarValorMostrarInputEnlace = function () {
        this.mostrarInputEnlace = !this.mostrarInputEnlace;
    };
    RutaCrearEditarAlbumComponent.prototype.guardarEnlace = function () {
        var _this = this;
        this._cargandoService.habilitarCargando();
        if (this.album && this.album.enlacesAlbum && this.album.enlacesAlbum.length) {
            var idEnlace = this.album.enlacesAlbum[0].id;
            this._enlaceAlbumCancionArtistaVideoRestService
                .updateOne(idEnlace, {
                url: this.inputEnlace
            })
                .subscribe(function (enlaceEditado) {
                _this.album.enlacesAlbum[0] = enlaceEditado;
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["toastExitoEditar"]);
                _this._cargandoService.deshabiltarCargando();
                _this.mostrarInputEnlace = false;
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["toastErrorEditar"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
        else {
            var enlaceACrear = {
                url: this.inputEnlace,
                album: this.album.id
            };
            this._enlaceAlbumCancionArtistaVideoRestService
                .create(enlaceACrear)
                .subscribe(function (enlaceCreado) {
                _this.album.enlacesAlbum[0] = enlaceCreado;
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["toastExitoCrear"]);
                _this._cargandoService.deshabiltarCargando();
                _this.mostrarInputEnlace = false;
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_11__["toastErrorCrear"]);
                _this._cargandoService.deshabiltarCargando();
            });
        }
    };
    RutaCrearEditarAlbumComponent.ctorParameters = function () { return [
        { type: _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_2__["AlbumRestService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_3__["ArtistaRestService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_7__["GeneroRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
        { type: _servicios_rest_enlace_album_cancion_artista_video_rest_service__WEBPACK_IMPORTED_MODULE_16__["EnlaceAlbumCancionArtistaVideoRestService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_componentes_formulario_album_formulario_album_component__WEBPACK_IMPORTED_MODULE_9__["FormularioAlbumComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _componentes_formulario_album_formulario_album_component__WEBPACK_IMPORTED_MODULE_9__["FormularioAlbumComponent"])
    ], RutaCrearEditarAlbumComponent.prototype, "componenteFormularioAlbum", void 0);
    RutaCrearEditarAlbumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta-crear-editar-album',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ruta-crear-editar-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ruta-crear-editar-album.component.css */ "./src/app/modulos/album/rutas/ruta-crear-editar-album/ruta-crear-editar-album.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_2__["AlbumRestService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_3__["ArtistaRestService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_4__["CargandoService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_7__["GeneroRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterService"],
            _servicios_rest_enlace_album_cancion_artista_video_rest_service__WEBPACK_IMPORTED_MODULE_16__["EnlaceAlbumCancionArtistaVideoRestService"]])
    ], RutaCrearEditarAlbumComponent);
    return RutaCrearEditarAlbumComponent;
}());



/***/ }),

/***/ "./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvYWxidW0vcnV0YXMvcnV0YS1nZXN0aW9uLWFsYnVtZXMvcnV0YS1nZXN0aW9uLWFsYnVtZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RutaGestionAlbumesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaGestionAlbumesComponent", function() { return RutaGestionAlbumesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../servicios/rest/artista-rest.service */ "./src/app/servicios/rest/artista-rest.service.ts");
/* harmony import */ var _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../servicios/cargando-service */ "./src/app/servicios/cargando-service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../servicios/rest/genero-rest.service */ "./src/app/servicios/rest/genero-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../servicios/rest/album-rest.service */ "./src/app/servicios/rest/album-rest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");
/* harmony import */ var _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../artista/rutas/definicion-rutas/rutas-artista */ "./src/app/modulos/artista/rutas/definicion-rutas/rutas-artista.ts");
/* harmony import */ var _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../definicion-rutas/rutas-album */ "./src/app/modulos/album/rutas/definicion-rutas/rutas-album.ts");














var RutaGestionAlbumesComponent = /** @class */ (function () {
    function RutaGestionAlbumesComponent(_albumRestService, _artistaRestService, _cargandoService, dialog, _router, _activatedRoute, _generoRestService, _toasterService) {
        this._albumRestService = _albumRestService;
        this._artistaRestService = _artistaRestService;
        this._cargandoService = _cargandoService;
        this.dialog = dialog;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._generoRestService = _generoRestService;
        this._toasterService = _toasterService;
        this.albumes = [];
        this.busqueda = '';
        this.queryParams = {};
        this.rutaImagen = 'assets/imagenes/album.svg';
    }
    RutaGestionAlbumesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (params) {
            _this.idArtistaParams = params.idArtista ? +params.idArtista : undefined;
            _this.setearArregloRutasMigasPan();
            _this.seteoRutas();
            return _this._activatedRoute.queryParams;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (queryParams) {
            if (_this.idArtistaParams) {
                _this.idArtista = _this.idArtistaParams;
                _this._artistaRestService.findOne(_this.idArtista)
                    .subscribe(function (artista) {
                    _this.artista = artista;
                }, function (error) {
                    console.error(error);
                    _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["ToastErrorCargandoDatos"]);
                });
            }
            if (queryParams.consulta) {
                _this.queryParams.consulta = JSON.parse(queryParams.consulta);
                if (_this.queryParams.consulta.busqueda) {
                    _this.busqueda = _this.queryParams.consulta.busqueda;
                }
                if (_this.queryParams.consulta.idGenero) {
                    _this.idGenero = _this.queryParams.consulta.idGenero;
                }
                if (_this.queryParams.consulta.idTipoAlbum) {
                    _this.idTipoAlbum = _this.queryParams.consulta.idTipoAlbum;
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
                };
            }
            _this._cargandoService.habilitarCargando();
            return _this._albumRestService.obtenerAlbumesPorGenero(JSON.stringify(_this.queryParams.consulta));
        }))
            .subscribe(function (respuestaAlbumes) {
            _this.albumes = respuestaAlbumes[0];
            _this._cargandoService.deshabiltarCargando();
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_10__["ToastErrorCargandoDatos"]);
            _this._cargandoService.deshabiltarCargando();
        });
    };
    RutaGestionAlbumesComponent.prototype.obtenerUrlPrincipal = function (album) {
        return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_11__["obtenerUrlImagenPrincipal"])(album, 'imagenesAlbum');
    };
    RutaGestionAlbumesComponent.prototype.escucharBusqueda = function (busqueda) {
        this.busqueda = busqueda;
        this.buscarAlbums();
    };
    RutaGestionAlbumesComponent.prototype.buscarAlbumesPorGenero = function (generoSeleccionado) {
        this.idGenero = generoSeleccionado ? generoSeleccionado.id : undefined;
        this.buscarAlbums();
    };
    RutaGestionAlbumesComponent.prototype.buscarAlbumesPorArtista = function (artistaSeleccionado) {
        this.idArtista = artistaSeleccionado ? artistaSeleccionado.id : undefined;
        this.buscarAlbums();
    };
    RutaGestionAlbumesComponent.prototype.irRutaCrearAlbum = function () {
        this._router
            .navigate(_definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_13__["RUTAS_ALBUM"]
            .rutaCrearTour(true, false, [this.idArtistaParams]));
    };
    RutaGestionAlbumesComponent.prototype.obtenerRuta = function (idAlbum) {
        return _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_13__["RUTAS_ALBUM"]
            .rutaEditarAlbum(true, false, [this.idArtistaParams, idAlbum]);
    };
    RutaGestionAlbumesComponent.prototype.buscarAlbumPorTipo = function (tipoAlbumSeleccionado) {
        this.idTipoAlbum = tipoAlbumSeleccionado ? tipoAlbumSeleccionado.id : undefined;
        this.buscarAlbums();
    };
    RutaGestionAlbumesComponent.prototype.buscarAlbums = function () {
        var consulta = {
            busqueda: this.busqueda,
            idGenero: this.idGenero,
            esImagenPrincipal: 1,
            idArtista: this.idArtista,
            idTipoAlbum: this.idTipoAlbum
        };
        this.queryParams.consulta = JSON.stringify(consulta);
        this._router
            .navigate(this.ruta, {
            queryParams: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.queryParams)
        });
    };
    RutaGestionAlbumesComponent.prototype.setearArregloRutasMigasPan = function () {
        if (this.idArtistaParams) {
            this.arregloRutas = [
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_12__["RUTAS_ARTISTA"].rutaGestionArtistas(false, true),
                _artista_rutas_definicion_rutas_rutas_artista__WEBPACK_IMPORTED_MODULE_12__["RUTAS_ARTISTA"].rutaVerEditarArtistas(false, true, [this.idArtistaParams]),
                _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_13__["RUTAS_ALBUM"].rutaGestionAlbumes(false, true, [this.idArtistaParams])
            ];
        }
        else {
            this.arregloRutas = [
                _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_13__["RUTAS_ALBUM"].rutaGestionAlbumes(false, true)
            ];
        }
    };
    RutaGestionAlbumesComponent.prototype.seteoRutas = function () {
        this.ruta = _definicion_rutas_rutas_album__WEBPACK_IMPORTED_MODULE_13__["RUTAS_ALBUM"]
            .rutaGestionAlbumes(false, true, [this.idArtistaParams]).ruta;
    };
    RutaGestionAlbumesComponent.ctorParameters = function () { return [
        { type: _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_8__["AlbumRestService"] },
        { type: _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_2__["ArtistaRestService"] },
        { type: _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__["CargandoService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__["GeneroRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }
    ]; };
    RutaGestionAlbumesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta-gestion-albumes',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ruta-gestion-albumes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ruta-gestion-albumes.component.css */ "./src/app/modulos/album/rutas/ruta-gestion-albumes/ruta-gestion-albumes.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_8__["AlbumRestService"],
            _servicios_rest_artista_rest_service__WEBPACK_IMPORTED_MODULE_2__["ArtistaRestService"],
            _servicios_cargando_service__WEBPACK_IMPORTED_MODULE_3__["CargandoService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _servicios_rest_genero_rest_service__WEBPACK_IMPORTED_MODULE_6__["GeneroRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], RutaGestionAlbumesComponent);
    return RutaGestionAlbumesComponent;
}());



/***/ }),

/***/ "./src/app/servicios/rest/album-cancion-rest.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/servicios/rest/album-cancion-rest.service.ts ***!
  \**************************************************************/
/*! exports provided: AlbumCancionRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumCancionRestService", function() { return AlbumCancionRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var AlbumCancionRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlbumCancionRestService, _super);
    function AlbumCancionRestService(_http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'album-cancion';
        return _this;
    }
    AlbumCancionRestService.prototype.guardarCancionesAlbumCancion = function (idAlbum, idsCanciones) {
        return this._http.post(this.url + ":" + this.port + "/" + this.segmento + "/guardar-canciones-albums", {
            idAlbum: idAlbum,
            idsCanciones: idsCanciones
        });
    };
    AlbumCancionRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AlbumCancionRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AlbumCancionRestService);
    return AlbumCancionRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ }),

/***/ "./src/app/servicios/rest/tipo-album-rest.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/servicios/rest/tipo-album-rest.service.ts ***!
  \***********************************************************/
/*! exports provided: TipoAlbumRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoAlbumRestService", function() { return TipoAlbumRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var TipoAlbumRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TipoAlbumRestService, _super);
    function TipoAlbumRestService(
    // tslint:disable-next-line:variable-name
    _http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'tipo-album';
        return _this;
    }
    TipoAlbumRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    TipoAlbumRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TipoAlbumRestService);
    return TipoAlbumRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ })

}]);
//# sourceMappingURL=src-app-modulos-album-album-module.js.map