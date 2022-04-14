"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumArtistaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_artista_service_1 = require("./album-artista.service");
const album_artista_controller_1 = require("./album-artista.controller");
const album_artista_entity_1 = require("./album-artista.entity");
let AlbumArtistaModule = class AlbumArtistaModule {
};
AlbumArtistaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([album_artista_entity_1.AlbumArtistaEntity], 'default')],
        controllers: [album_artista_controller_1.AlbumArtistaController],
        providers: [album_artista_service_1.AlbumArtistaService],
        exports: [album_artista_service_1.AlbumArtistaService],
    })
], AlbumArtistaModule);
exports.AlbumArtistaModule = AlbumArtistaModule;
//# sourceMappingURL=album-artista.module.js.map