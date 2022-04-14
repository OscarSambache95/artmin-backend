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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnlaceAlbumCancionArtistaVideoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const artista_entity_1 = require("../artista/artista.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const album_entity_1 = require("../album/album.entity");
const video_entity_1 = require("../video/video.entity");
const plataforma_entity_1 = require("../plataforma/plataforma.entity");
let EnlaceAlbumCancionArtistaVideoEntity = class EnlaceAlbumCancionArtistaVideoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'url',
    }),
    __metadata("design:type", String)
], EnlaceAlbumCancionArtistaVideoEntity.prototype, "url", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        precision: 20,
        scale: 10,
        nullable: true,
        name: 'cantidad_seguidores'
    }),
    __metadata("design:type", Number)
], EnlaceAlbumCancionArtistaVideoEntity.prototype, "seguidores", void 0);
__decorate([
    typeorm_1.ManyToOne(type => artista_entity_1.ArtistaEntity, artista => artista.enlacesArtista),
    __metadata("design:type", Object)
], EnlaceAlbumCancionArtistaVideoEntity.prototype, "artista", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.enlacesCancion),
    __metadata("design:type", Object)
], EnlaceAlbumCancionArtistaVideoEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.enlacesAlbum),
    __metadata("design:type", Object)
], EnlaceAlbumCancionArtistaVideoEntity.prototype, "album", void 0);
__decorate([
    typeorm_1.ManyToOne(type => video_entity_1.VideoEntity, video => video.enlacesVideo),
    __metadata("design:type", Object)
], EnlaceAlbumCancionArtistaVideoEntity.prototype, "video", void 0);
__decorate([
    typeorm_1.ManyToOne(type => plataforma_entity_1.PlataformaEntity, plataforma => plataforma.enlacesPlataforma),
    __metadata("design:type", Object)
], EnlaceAlbumCancionArtistaVideoEntity.prototype, "plataforma", void 0);
EnlaceAlbumCancionArtistaVideoEntity = __decorate([
    typeorm_1.Entity('enlace-album-cancion-artista-video')
], EnlaceAlbumCancionArtistaVideoEntity);
exports.EnlaceAlbumCancionArtistaVideoEntity = EnlaceAlbumCancionArtistaVideoEntity;
//# sourceMappingURL=enlace-album-cancion-artista-video.entity.js.map