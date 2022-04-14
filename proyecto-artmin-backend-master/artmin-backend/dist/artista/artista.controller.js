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
exports.ArtistaController = void 0;
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
const artista_service_1 = require("./artista.service");
let ArtistaController = class ArtistaController extends principal_controller_1.PrincipalAbstractController {
    constructor(_artistaService) {
        super(_artistaService);
        this._artistaService = _artistaService;
    }
    crearArtista(file, datosArtistaGeneros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                datosArtistaGeneros = JSON.parse(datosArtistaGeneros.datosArtistaGeneros);
                return yield this._artistaService.guardarArtistaImagen(datosArtistaGeneros.artista, datosArtistaGeneros.generos, datosArtistaGeneros.enlaces, file);
            }
            catch (error) {
                console.error('Error al crear el artista', error);
                throw new common_1.BadRequestException('Error al crear el archivo');
            }
        });
    }
    editarArtista(file, datosArtistaGeneros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                datosArtistaGeneros = JSON.parse(datosArtistaGeneros.datosArtistaGeneros);
                delete datosArtistaGeneros.artista.imagen;
                delete datosArtistaGeneros.artista.enlacesArtista;
                delete datosArtistaGeneros.artista.generos;
                return yield this._artistaService.editarArtistaImagen(datosArtistaGeneros.artista, datosArtistaGeneros.generos, datosArtistaGeneros.enlaces, datosArtistaGeneros.idArtista, datosArtistaGeneros.idImagen, file);
            }
            catch (error) {
                console.error('Error al editar el artista', error);
                throw new common_1.BadRequestException('Error al editar el archivo');
            }
        });
    }
    obtenerArtistasPorGenero(datosArtistasPorGenero) {
        return __awaiter(this, void 0, void 0, function* () {
            const existeDatos = datosArtistasPorGenero;
            if (existeDatos) {
                return yield this._artistaService.obtenerArtistasPorGenero(JSON.parse(datosArtistasPorGenero));
            }
            else {
                throw new common_1.BadRequestException('No envía parámetros');
            }
        });
    }
};
__decorate([
    common_1.Post('crear-artista-imagen-generos'),
    common_1.UseInterceptors(common_1.FileInterceptor('imagen')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArtistaController.prototype, "crearArtista", null);
__decorate([
    common_1.Post('editar-artista-imagen-generos'),
    common_1.UseInterceptors(common_1.FileInterceptor('imagen')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArtistaController.prototype, "editarArtista", null);
__decorate([
    common_1.Get('artistas-por-genero'),
    __param(0, common_1.Query('datosConsulta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArtistaController.prototype, "obtenerArtistasPorGenero", null);
ArtistaController = __decorate([
    common_1.Controller('artista'),
    __metadata("design:paramtypes", [artista_service_1.ArtistaService])
], ArtistaController);
exports.ArtistaController = ArtistaController;
//# sourceMappingURL=artista.controller.js.map