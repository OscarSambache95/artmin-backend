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
exports.AlbumController = void 0;
const album_service_1 = require("./album.service");
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
let AlbumController = class AlbumController extends principal_controller_1.PrincipalAbstractController {
    constructor(_albumService) {
        super(_albumService);
        this._albumService = _albumService;
    }
    crearAlbum(file, datosAlbumGeneros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                datosAlbumGeneros = JSON.parse(datosAlbumGeneros.datosAlbumGeneros);
                return yield this._albumService.guardarAlbumArtistasGenerosImagen(datosAlbumGeneros.album, datosAlbumGeneros.generos, datosAlbumGeneros.artistas, file);
            }
            catch (error) {
                console.error('Error al crear el album', error);
                throw new common_1.BadRequestException('Error al crear el album');
            }
        });
    }
    editarArtista(file, datosAlbumGenerosImagenArtistas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                datosAlbumGenerosImagenArtistas = JSON.parse(datosAlbumGenerosImagenArtistas.datosAlbumGenerosImagenArtistas);
                delete datosAlbumGenerosImagenArtistas.album.imagen;
                delete datosAlbumGenerosImagenArtistas.album.artistas;
                delete datosAlbumGenerosImagenArtistas.album.generos;
                return yield this._albumService.editarAlbumArtistaImagenGeneros(datosAlbumGenerosImagenArtistas.album, datosAlbumGenerosImagenArtistas.generos, datosAlbumGenerosImagenArtistas.artistas, datosAlbumGenerosImagenArtistas.idAlbum, datosAlbumGenerosImagenArtistas.idImagen, file);
            }
            catch (error) {
                console.error('Error al editar el album', error);
                throw new common_1.BadRequestException('Error al editar el album');
            }
        });
    }
    obtenerAlbumesPorGenero(datosAlbumsPorGenero) {
        return __awaiter(this, void 0, void 0, function* () {
            const existeDatos = datosAlbumsPorGenero;
            if (existeDatos) {
                return yield this._albumService.obtenerAlbumesPorGenero(JSON.parse(datosAlbumsPorGenero));
            }
            else {
                throw new common_1.BadRequestException('No envía parámetros');
            }
        });
    }
};
__decorate([
    common_1.Post('crear-album-imagen-generos'),
    common_1.UseInterceptors(common_1.FileInterceptor('imagen')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "crearAlbum", null);
__decorate([
    common_1.Post('editar-album-artista-imagen-generos'),
    common_1.UseInterceptors(common_1.FileInterceptor('imagen')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "editarArtista", null);
__decorate([
    common_1.Get('albumes-por-genero'),
    __param(0, common_1.Query('datosConsulta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "obtenerAlbumesPorGenero", null);
AlbumController = __decorate([
    common_1.Controller('album'),
    __metadata("design:paramtypes", [album_service_1.AlbumService])
], AlbumController);
exports.AlbumController = AlbumController;
//# sourceMappingURL=album.controller.js.map