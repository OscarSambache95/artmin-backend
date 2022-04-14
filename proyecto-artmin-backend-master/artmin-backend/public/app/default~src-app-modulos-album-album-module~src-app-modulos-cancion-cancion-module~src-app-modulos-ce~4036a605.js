(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modulos-album-album-module~src-app-modulos-cancion-cancion-module~src-app-modulos-ce~4036a605"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-albums/autocomplete-albums.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-albums/autocomplete-albums.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <p-autoComplete\n      [(ngModel)]=\"albumSeleccionado\"\n      [suggestions]=\"arregloAlbums\"\n      (completeMethod)=\"filtrarAlbums($event)\"\n      [size]=\"25\"\n      [minLength]=\"1\"\n      [placeholder]='\"Seleccione el album\"'\n      [emptyMessage]=\"'No hay registros'\"\n      (onSelect)=\"enviarAlbumSeleccionado($event)\"\n      [dropdown]=\"true\"\n      (onClear)=\"limpiarBusqueda()\"\n      (onUnselect)=\"deseleccionarAlbum()\"\n      [multiple]=\"multiple\"\n      [disabled]=\"deshabilitar\"\n      field=\"nombre\">\n      <ng-template let-album pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\n          <img\n            class=\"img thumb1\"\n            style=\"width:35px; display:inline-block; margin:5px 0 2px 5px\"\n            [src]=\"obtenerUrlPrincipal(album)\"/>\n          <div style=\"float:right;margin:10px 10px 0 0\">{{album.nombre}}</div>\n        </div>\n      </ng-template>\n    </p-autoComplete>\n  </div>\n  <div class=\"col-sm-12\">\n    <small\n      id=\"busquedaRolHelp\"\n      class=\"form-text text-muted ayuda-span\">\n      {{ multiple ? \"Selecione el album principal primero\"  : 'Filtre por album'}}\n    </small>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/componentes/autocomplete-albums/autocomplete-albums.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-albums/autocomplete-albums.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img{\n  display:block;\n  margin:auto;\n  border-radius: 50%;\n}\n\n.thumb1 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYXV0b2NvbXBsZXRlLWFsYnVtcy9hdXRvY29tcGxldGUtYWxidW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2F1dG9jb21wbGV0ZS1hbGJ1bXMvYXV0b2NvbXBsZXRlLWFsYnVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcbiAgZGlzcGxheTpibG9jaztcbiAgbWFyZ2luOmF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRodW1iMSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/componentes/autocomplete-albums/autocomplete-albums.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-albums/autocomplete-albums.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AutocompleteAlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteAlbumsComponent", function() { return AutocompleteAlbumsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/rest/album-rest.service */ "./src/app/servicios/rest/album-rest.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constantes/mensajes-toaster */ "./src/app/constantes/mensajes-toaster.ts");
/* harmony import */ var _funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../funciones/obtener-imagen-principal */ "./src/app/funciones/obtener-imagen-principal.ts");






var AutocompleteAlbumsComponent = /** @class */ (function () {
    function AutocompleteAlbumsComponent(_albumService, _toasterService) {
        this._albumService = _albumService;
        this._toasterService = _toasterService;
        this.arregloAlbums = [];
        this.emitirAlbumSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.arregloIdsAlbumsSeleccionados = [];
    }
    AutocompleteAlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idAlbum || (this.arregloidsAlbum && this.arregloidsAlbum.length)) {
            var consulta = void 0;
            if (this.idAlbum) {
                consulta = {
                    where: {
                        id: this.idAlbum
                    },
                    relations: [
                        'imagenesAlbum',
                        'artistasAlbum',
                        'artistasAlbum.artista'
                    ]
                };
            }
            else {
                if (this.arregloidsAlbum && this.arregloidsAlbum.length) {
                    consulta = {
                        camposIn: [
                            {
                                nombreCampo: 'id',
                                valor: this.arregloidsAlbum
                            }
                        ],
                        relations: [
                            'imagenesAlbum',
                            'artistasAlbum',
                            'artistasAlbum.artista'
                        ]
                    };
                }
            }
            this._albumService
                .findAll(JSON.stringify(consulta))
                .subscribe(function (album) {
                if (!_this.multiple) {
                    _this.albumSeleccionado = album[0][0];
                }
                else {
                    _this.albumSeleccionado = album[0];
                }
            }, function (error) {
                console.error(error);
                _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
            });
        }
    };
    AutocompleteAlbumsComponent.prototype.enviarAlbumSeleccionado = function (albumSeleccionado) {
        if (!this.multiple) {
            this.emitirAlbumSeleccionado.emit(albumSeleccionado);
        }
        else {
            this.emitirAlbumSeleccionado.emit(this.albumSeleccionado);
        }
    };
    AutocompleteAlbumsComponent.prototype.filtrarAlbums = function (event) {
        var _this = this;
        var busqueda = event.query.trim();
        var consulta = {
            camposOr: [
                {
                    nombreCampo: 'nombre',
                    like: true,
                    valor: busqueda
                }
            ],
            relations: [
                'imagenesAlbum',
                'artistasAlbum',
                'artistasAlbum.artista'
            ]
        };
        this._albumService
            .findAll(JSON.stringify(consulta))
            .subscribe(function (respuestaAlbum) {
            if (_this.idsArtistas && _this.idsArtistas.length) {
                respuestaAlbum[0] = respuestaAlbum[0].filter(function (album) {
                    return album.artistasAlbum.find(function (artistaAlbum) {
                        return _this.idsArtistas.find(function (idArtista) { return artistaAlbum.artista.id === idArtista; });
                    });
                });
            }
            _this.arregloAlbums = respuestaAlbum[0];
            if (_this.arregloIdsAlbumsSeleccionados && _this.arregloIdsAlbumsSeleccionados.length) {
                _this.arregloAlbums = _this.arregloAlbums
                    .filter(function (albumConsulta) {
                    return !_this.arregloIdsAlbumsSeleccionados.find(function (idAlbumSeleccionado) { return idAlbumSeleccionado === albumConsulta.id; });
                });
            }
        }, function (error) {
            console.error(error);
            _this._toasterService.pop(_constantes_mensajes_toaster__WEBPACK_IMPORTED_MODULE_4__["ToastErrorCargandoDatos"]);
        });
    };
    AutocompleteAlbumsComponent.prototype.obtenerUrlPrincipal = function (album) {
        return Object(_funciones_obtener_imagen_principal__WEBPACK_IMPORTED_MODULE_5__["obtenerUrlImagenPrincipal"])(album, 'imagenesAlbum');
    };
    AutocompleteAlbumsComponent.prototype.limpiarBusqueda = function () {
        this.emitirAlbumSeleccionado.emit(undefined);
    };
    AutocompleteAlbumsComponent.prototype.deseleccionarAlbum = function () {
        this.emitirAlbumSeleccionado.emit(this.albumSeleccionado);
    };
    AutocompleteAlbumsComponent.ctorParameters = function () { return [
        { type: _servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_2__["AlbumRestService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutocompleteAlbumsComponent.prototype, "emitirAlbumSeleccionado", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], AutocompleteAlbumsComponent.prototype, "idAlbum", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], AutocompleteAlbumsComponent.prototype, "idsArtistas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], AutocompleteAlbumsComponent.prototype, "arregloidsAlbum", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AutocompleteAlbumsComponent.prototype, "multiple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AutocompleteAlbumsComponent.prototype, "deshabilitar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AutocompleteAlbumsComponent.prototype, "arregloIdsAlbumsSeleccionados", void 0);
    AutocompleteAlbumsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete-albums',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./autocomplete-albums.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/autocomplete-albums/autocomplete-albums.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./autocomplete-albums.component.css */ "./src/app/componentes/autocomplete-albums/autocomplete-albums.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_rest_album_rest_service__WEBPACK_IMPORTED_MODULE_2__["AlbumRestService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], AutocompleteAlbumsComponent);
    return AutocompleteAlbumsComponent;
}());



/***/ }),

/***/ "./src/app/componentes/autocomplete-albums/autocomplete-albums.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/autocomplete-albums/autocomplete-albums.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AutocompleteAlbumsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteAlbumsModule", function() { return AutocompleteAlbumsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _autocomplete_albums_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-albums.component */ "./src/app/componentes/autocomplete-albums/autocomplete-albums.component.ts");
/* harmony import */ var primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng */ "./node_modules/primeng/__ivy_ngcc__/fesm5/primeng.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");






var AutocompleteAlbumsModule = /** @class */ (function () {
    function AutocompleteAlbumsModule() {
    }
    AutocompleteAlbumsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_autocomplete_albums_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteAlbumsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            exports: [
                _autocomplete_albums_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteAlbumsComponent"]
            ]
        })
    ], AutocompleteAlbumsModule);
    return AutocompleteAlbumsModule;
}());



/***/ }),

/***/ "./src/app/servicios/rest/album-rest.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/rest/album-rest.service.ts ***!
  \******************************************************/
/*! exports provided: AlbumRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumRestService", function() { return AlbumRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var AlbumRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlbumRestService, _super);
    function AlbumRestService(_http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'album';
        return _this;
    }
    AlbumRestService.prototype.crearAlbumImagen = function (album, generos, artistas, imagen) {
        var formData = new FormData();
        formData.append("imagen", imagen);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = { headers: headers };
        return this._http.post(this.url + ":" + this.port + "/" + this.segmento + "/crear-album-imagen-generos?datosAlbumGeneros=" + JSON.stringify({
            album: album,
            generos: generos,
            artistas: artistas
        }), formData, options);
    };
    AlbumRestService.prototype.editarAlbumArtistaGenerosImagen = function (album, generos, artistas, imagen, idAlbum, idImagen) {
        var formData = new FormData();
        formData.append("imagen", imagen);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = { headers: headers };
        return this._http.post(this.url + ":" + this.port + "/" + this.segmento + "/editar-album-artista-imagen-generos?datosAlbumGenerosImagenArtistas=" + JSON.stringify({
            album: album,
            generos: generos,
            artistas: artistas,
            idAlbum: idAlbum,
            idImagen: idImagen
        }), formData, options);
    };
    AlbumRestService.prototype.obtenerAlbumesPorGenero = function (datosConsultaAlbumesPorGenero) {
        return this._http.get(this.url +
            (":" + this.port + "/" + this.segmento + "/albumes-por-genero?datosConsulta=" + datosConsultaAlbumesPorGenero));
    };
    AlbumRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AlbumRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AlbumRestService);
    return AlbumRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ }),

/***/ "./src/app/servicios/rest/cancion-rest.service.ts":
/*!********************************************************!*\
  !*** ./src/app/servicios/rest/cancion-rest.service.ts ***!
  \********************************************************/
/*! exports provided: CancionRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancionRestService", function() { return CancionRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _rest_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-principal.service */ "./src/app/servicios/rest/rest-principal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var CancionRestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CancionRestService, _super);
    function CancionRestService(_http) {
        var _this = 
        // @ts-ignore
        _super.call(this, _http) || this;
        _this._http = _http;
        _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        _this.port = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].port;
        _this.segmento = 'cancion';
        return _this;
    }
    CancionRestService.prototype.crearCancion = function (cancion, generos, artistas, imagen, pathAlterno, enlaces, albums) {
        var formData = new FormData();
        formData.append("imagen", imagen);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = { headers: headers };
        return this._http.post(this.url + ":" + this.port + "/" + this.segmento + "/crear-cancion-artista-album-imagen-generos?datosCrearCancion=" + JSON.stringify({
            cancion: cancion,
            generos: generos,
            artistas: artistas,
            albums: albums,
            pathAlterno: pathAlterno,
            enlaces: enlaces
        }), formData, options);
    };
    CancionRestService.prototype.editarCancion = function (cancion, idCancion, generos, artistas, imagen, pathAlterno, albums, enlaces, idImagen) {
        var formData = new FormData();
        formData.append("imagen", imagen);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = { headers: headers };
        return this._http.post(this.url + ":" + this.port + "/" + this.segmento + "/editar-cancion-artista-album-imagen-generos?datosEditarCancion=" + JSON.stringify({
            cancion: cancion,
            generos: generos,
            idCancion: idCancion,
            artistas: artistas,
            albums: albums,
            pathAlterno: pathAlterno,
            idImagen: idImagen,
            enlaces: enlaces
        }), formData, options);
    };
    CancionRestService.prototype.obtenerCancionesPorGeneroArtista = function (datosConsultaCanciones) {
        return this._http.get(this.url +
            (":" + this.port + "/" + this.segmento + "/canciones-por-genero-artista?datosConsulta=" + datosConsultaCanciones));
    };
    CancionRestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CancionRestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CancionRestService);
    return CancionRestService;
}(_rest_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalRestService"]));



/***/ })

}]);
//# sourceMappingURL=default~src-app-modulos-album-album-module~src-app-modulos-cancion-cancion-module~src-app-modulos-ce~4036a605.js.map