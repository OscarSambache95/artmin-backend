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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominacionArtistaAlbumCancionVideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const nominacion_artista_album_cancion_video_entity_1 = require("./nominacion-artista-album-cancion-video.entity");
let NominacionArtistaAlbumCancionVideoService = class NominacionArtistaAlbumCancionVideoService extends principal_service_1.PrincipalService {
    constructor(_nominacionArtistaAlbumCancionVideoRepository) {
        super(_nominacionArtistaAlbumCancionVideoRepository, nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity);
        this._nominacionArtistaAlbumCancionVideoRepository = _nominacionArtistaAlbumCancionVideoRepository;
    }
};
NominacionArtistaAlbumCancionVideoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NominacionArtistaAlbumCancionVideoService);
exports.NominacionArtistaAlbumCancionVideoService = NominacionArtistaAlbumCancionVideoService;
//# sourceMappingURL=nominacion-artista-album-cancion-video.service.js.map