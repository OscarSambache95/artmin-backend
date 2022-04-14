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
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
const video_service_1 = require("./video.service");
let VideoController = class VideoController extends principal_controller_1.PrincipalAbstractController {
    constructor(_videoService) {
        super(_videoService);
        this._videoService = _videoService;
    }
    crearVideo(datosCrearVideo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                datosCrearVideo = JSON.parse(datosCrearVideo);
                return yield this._videoService.guardarVideo(datosCrearVideo.video, datosCrearVideo.enlaces);
            }
            catch (error) {
                console.error('Error al crear el video', error);
                throw new common_1.BadRequestException('Error al crear el video');
            }
        });
    }
    editarVideo(datosCrearVideo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                datosCrearVideo = JSON.parse(datosCrearVideo);
                delete datosCrearVideo.video.enlace;
                return yield this._videoService.editarVideo(datosCrearVideo.video, datosCrearVideo.enlaces, datosCrearVideo.idVideo);
            }
            catch (error) {
                console.error('Error al editar el video', error);
                throw new common_1.BadRequestException('Error al editar el video');
            }
        });
    }
    obtenervideos(datosConsultaVideos) {
        return __awaiter(this, void 0, void 0, function* () {
            const existeDatos = datosConsultaVideos;
            if (existeDatos) {
                return yield this._videoService.obtenerVideos(JSON.parse(datosConsultaVideos));
            }
            else {
                throw new common_1.BadRequestException('No envía parámetros');
            }
        });
    }
};
__decorate([
    common_1.Post('crear-video'),
    __param(0, common_1.Query('datosCrearVideo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "crearVideo", null);
__decorate([
    common_1.Post('editar-video'),
    __param(0, common_1.Query('datosEditarVideo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "editarVideo", null);
__decorate([
    common_1.Get('obtener-videos-por-cancion-artista-album-tipo'),
    __param(0, common_1.Query('datosConsulta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "obtenervideos", null);
VideoController = __decorate([
    common_1.Controller('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map