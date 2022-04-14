"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_service_1 = require("./album.service");
const album_controller_1 = require("./album.controller");
const album_entity_1 = require("./album.entity");
const imagen_module_1 = require("../imagen/imagen.module");
const genero_artista_album_cancion_module_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.module");
const album_artista_module_1 = require("../album-artista/album-artista.module");
let AlbumModule = class AlbumModule {
};
AlbumModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([album_entity_1.AlbumEntity], 'default'),
            imagen_module_1.ImagenModule,
            genero_artista_album_cancion_module_1.GeneroArtistaAlbumCancionModule,
            album_artista_module_1.AlbumArtistaModule
        ],
        controllers: [album_controller_1.AlbumController],
        providers: [album_service_1.AlbumService],
        exports: [album_service_1.AlbumService],
    })
], AlbumModule);
exports.AlbumModule = AlbumModule;
//# sourceMappingURL=album.module.js.map