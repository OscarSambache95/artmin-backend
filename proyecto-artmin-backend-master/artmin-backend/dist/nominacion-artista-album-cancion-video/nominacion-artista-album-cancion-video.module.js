"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominacionArtistaAlbumCancionVideoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nominacion_artista_album_cancion_video_entity_1 = require("./nominacion-artista-album-cancion-video.entity");
const nominacion_artista_album_cancion_video_service_1 = require("./nominacion-artista-album-cancion-video.service");
const nominacion_artista_album_cancion_video_controller_1 = require("./nominacion-artista-album-cancion-video.controller");
let NominacionArtistaAlbumCancionVideoModule = class NominacionArtistaAlbumCancionVideoModule {
};
NominacionArtistaAlbumCancionVideoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity], 'default')],
        controllers: [nominacion_artista_album_cancion_video_controller_1.NominacionArtistaAlbumCancionVideoController],
        providers: [nominacion_artista_album_cancion_video_service_1.NominacionArtistaAlbumCancionVideoService],
        exports: [nominacion_artista_album_cancion_video_service_1.NominacionArtistaAlbumCancionVideoService],
    })
], NominacionArtistaAlbumCancionVideoModule);
exports.NominacionArtistaAlbumCancionVideoModule = NominacionArtistaAlbumCancionVideoModule;
//# sourceMappingURL=nominacion-artista-album-cancion-video.module.js.map