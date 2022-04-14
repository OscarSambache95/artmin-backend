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
exports.EnlaceAlbumCancionArtistaVideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const enlace_album_cancion_artista_video_entity_1 = require("./enlace-album-cancion-artista-video.entity");
let EnlaceAlbumCancionArtistaVideoService = class EnlaceAlbumCancionArtistaVideoService extends principal_service_1.PrincipalService {
    constructor(_enlaceAlbumCancionArtistaVideoRepository) {
        super(_enlaceAlbumCancionArtistaVideoRepository, enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity);
        this._enlaceAlbumCancionArtistaVideoRepository = _enlaceAlbumCancionArtistaVideoRepository;
    }
    guardarEnlaceArtistaAlbumCancionVideo(entidad, idEntidad, enlaces) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaEnlacessAntesEdicion = yield this.find({
                where: {
                    [entidad]: idEntidad
                }
            });
            const enlacesArtistaAlbumCancionVideoAntesEdicion = respuestaEnlacessAntesEdicion[0];
            const enlacesACrearEditar = enlaces
                .map((enlace) => {
                enlace[entidad] = idEntidad;
                return enlace;
            });
            yield this.createMany(enlacesACrearEditar);
            const idEnlaceAEliminar = enlacesArtistaAlbumCancionVideoAntesEdicion
                .map((enlace) => {
                const enlaceCreado = enlaces.find(enlaceAntesEdicion => {
                    return enlace.id === enlaceAntesEdicion.id;
                });
                if (!enlaceCreado) {
                    return enlace.id;
                }
            })
                .filter(idEnlaceAEliminar => idEnlaceAEliminar);
            if (idEnlaceAEliminar && idEnlaceAEliminar.length) {
                yield this.delete(idEnlaceAEliminar);
            }
        });
    }
};
EnlaceAlbumCancionArtistaVideoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EnlaceAlbumCancionArtistaVideoService);
exports.EnlaceAlbumCancionArtistaVideoService = EnlaceAlbumCancionArtistaVideoService;
//# sourceMappingURL=enlace-album-cancion-artista-video.service.js.map