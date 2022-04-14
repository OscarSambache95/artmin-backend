"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartAlbumCancionArtistaVideoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chart_album_cancion_artista_video_entity_1 = require("./chart-album-cancion-artista-video.entity");
const chart_album_cancion_artista_video_service_1 = require("./chart-album-cancion-artista-video.service");
const chart_album_cancion_artista_video_controller_1 = require("./chart-album-cancion-artista-video.controller");
let ChartAlbumCancionArtistaVideoModule = class ChartAlbumCancionArtistaVideoModule {
};
ChartAlbumCancionArtistaVideoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity], 'default')],
        controllers: [chart_album_cancion_artista_video_controller_1.ChartAlbumCancionArtistaVideoController],
        providers: [chart_album_cancion_artista_video_service_1.ChartAlbumCancionArtistaVideoService],
        exports: [chart_album_cancion_artista_video_service_1.ChartAlbumCancionArtistaVideoService],
    })
], ChartAlbumCancionArtistaVideoModule);
exports.ChartAlbumCancionArtistaVideoModule = ChartAlbumCancionArtistaVideoModule;
//# sourceMappingURL=chart-album-cancion-artista-video.module.js.map