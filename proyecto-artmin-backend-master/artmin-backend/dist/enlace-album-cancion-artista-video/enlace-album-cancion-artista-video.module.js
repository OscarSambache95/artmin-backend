"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnlaceAlbumCancionArtistaVideoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const enlace_album_cancion_artista_video_entity_1 = require("./enlace-album-cancion-artista-video.entity");
const enlace_album_cancion_artista_video_service_1 = require("./enlace-album-cancion-artista-video.service");
const enlace_album_cancion_artista_video_controller_1 = require("./enlace-album-cancion-artista-video.controller");
let EnlaceAlbumCancionArtistaVideoModule = class EnlaceAlbumCancionArtistaVideoModule {
};
EnlaceAlbumCancionArtistaVideoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity], 'default')],
        controllers: [enlace_album_cancion_artista_video_controller_1.EnlaceAlbumCancionArtistaVideoController],
        providers: [enlace_album_cancion_artista_video_service_1.EnlaceAlbumCancionArtistaVideoService],
        exports: [enlace_album_cancion_artista_video_service_1.EnlaceAlbumCancionArtistaVideoService],
    })
], EnlaceAlbumCancionArtistaVideoModule);
exports.EnlaceAlbumCancionArtistaVideoModule = EnlaceAlbumCancionArtistaVideoModule;
//# sourceMappingURL=enlace-album-cancion-artista-video.module.js.map