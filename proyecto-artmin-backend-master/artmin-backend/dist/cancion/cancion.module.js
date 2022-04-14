"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cancion_service_1 = require("./cancion.service");
const cancion_controller_1 = require("./cancion.controller");
const cancion_entity_1 = require("./cancion.entity");
const genero_artista_album_cancion_module_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.module");
const cancion_artista_module_1 = require("../cancion-artista/cancion-artista.module");
const imagen_module_1 = require("../imagen/imagen.module");
const album_cancion_module_1 = require("../album-cancion/album-cancion.module");
const enlace_album_cancion_artista_video_module_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.module");
let CancionModule = class CancionModule {
};
CancionModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([cancion_entity_1.CancionEntity], 'default'),
            imagen_module_1.ImagenModule,
            genero_artista_album_cancion_module_1.GeneroArtistaAlbumCancionModule,
            cancion_artista_module_1.CancionArtistaModule,
            album_cancion_module_1.AlbumCancionModule,
            enlace_album_cancion_artista_video_module_1.EnlaceAlbumCancionArtistaVideoModule
        ],
        controllers: [cancion_controller_1.CancionController],
        providers: [cancion_service_1.CancionService],
        exports: [cancion_service_1.CancionService],
    })
], CancionModule);
exports.CancionModule = CancionModule;
//# sourceMappingURL=cancion.module.js.map