"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancionController = void 0;
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
const cancion_service_1 = require("./cancion.service");
let CancionController = class CancionController extends principal_controller_1.PrincipalAbstractController {
    constructor(_cancionService) {
        super(_cancionService);
        this._cancionService = _cancionService;
    }
    crearCancion(file, datosCrearCancion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                datosCrearCancion = JSON.parse(datosCrearCancion);
                return yield this._cancionService.guardarCancionAlbumArtistasGenerosImagen(datosCrearCancion.cancion, datosCrearCancion.generos, datosCrearCancion.artistas, datosCrearCancion.albums, datosCrearCancion.enlaces, datosCrearCancion.pathAlterno, file);
            }
            catch (error) {
                console.error('Error al crear la canción', error);
                throw new common_1.BadRequestException('Error al crear la canción');
            }
        });
    }
    editarCancion(file, datosEditarCancion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                datosEditarCancion = JSON.parse(datosEditarCancion);
                delete datosEditarCancion.cancion.generos;
                delete datosEditarCancion.cancion.artistas;
                delete datosEditarCancion.cancion.albums;
                delete datosEditarCancion.cancion.imagen;
                delete datosEditarCancion.cancion.enlace;
                return yield this._cancionService.editarCancion(datosEditarCancion.cancion, datosEditarCancion.generos, datosEditarCancion.artistas, datosEditarCancion.albums, datosEditarCancion.enlaces, datosEditarCancion.idCancion, datosEditarCancion.pathAlterno, datosEditarCancion.idImagen, file);
            }
            catch (error) {
                console.error('Error al editar la canción', error);
                throw new common_1.BadRequestException('Error al editar la canción');
            }
        });
    }
    obtenerAlbumesPorGenero(datosConsultaCanciones) {
        return __awaiter(this, void 0, void 0, function* () {
            const existeDatos = datosConsultaCanciones;
            if (existeDatos) {
                return yield this._cancionService.obtenerCancionePorGeneroArtista(JSON.parse(datosConsultaCanciones));
            }
            else {
                throw new common_1.BadRequestException('No envía parámetros');
            }
        });
    }
};
__decorate([
    common_1.Post('crear-cancion-artista-album-imagen-generos'),
    common_1.UseInterceptors(common_1.FileInterceptor('imagen')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Query('datosCrearCancion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CancionController.prototype, "crearCancion", null);
__decorate([
    common_1.Post('editar-cancion-artista-album-imagen-generos'),
    common_1.UseInterceptors(common_1.FileInterceptor('imagen')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Query('datosEditarCancion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CancionController.prototype, "editarCancion", null);
__decorate([
    common_1.Get('canciones-por-genero-artista'),
    __param(0, common_1.Query('datosConsulta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CancionController.prototype, "obtenerAlbumesPorGenero", null);
CancionController = __decorate([
    common_1.Controller('cancion'),
    __metadata("design:paramtypes", [cancion_service_1.CancionService])
], CancionController);
exports.CancionController = CancionController;
//# sourceMappingURL=cancion.controller.js.map