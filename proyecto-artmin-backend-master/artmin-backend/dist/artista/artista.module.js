"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artista_service_1 = require("./artista.service");
const artista_controller_1 = require("./artista.controller");
const artista_entity_1 = require("./artista.entity");
const imagen_module_1 = require("../imagen/imagen.module");
const genero_artista_album_cancion_module_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.module");
const enlace_album_cancion_artista_video_module_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.module");
let ArtistaModule = class ArtistaModule {
};
ArtistaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([artista_entity_1.ArtistaEntity], 'default'),
            imagen_module_1.ImagenModule,
            genero_artista_album_cancion_module_1.GeneroArtistaAlbumCancionModule,
            enlace_album_cancion_artista_video_module_1.EnlaceAlbumCancionArtistaVideoModule
        ],
        controllers: [artista_controller_1.ArtistaController],
        providers: [artista_service_1.ArtistaService],
        exports: [artista_service_1.ArtistaService],
    })
], ArtistaModule);
exports.ArtistaModule = ArtistaModule;
//# sourceMappingURL=artista.module.js.map