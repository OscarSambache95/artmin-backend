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
exports.NominacionArtistaAlbumCancionVideoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const artista_entity_1 = require("../artista/artista.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const album_entity_1 = require("../album/album.entity");
const video_entity_1 = require("../video/video.entity");
const premio_anio_entity_1 = require("../premio-anio/premio-anio.entity");
const categoria_entity_1 = require("../categoria/categoria.entity");
let NominacionArtistaAlbumCancionVideoEntity = class NominacionArtistaAlbumCancionVideoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'enum',
        name: 'si_gano',
        enum: [0 | 1]
    }),
    __metadata("design:type", Number)
], NominacionArtistaAlbumCancionVideoEntity.prototype, "siGano", void 0);
__decorate([
    typeorm_1.ManyToOne(type => artista_entity_1.ArtistaEntity, artista => artista.nominacionesArtista),
    __metadata("design:type", Object)
], NominacionArtistaAlbumCancionVideoEntity.prototype, "artista", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.nominacionesCancion),
    __metadata("design:type", Object)
], NominacionArtistaAlbumCancionVideoEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.nominacionesAlbum),
    __metadata("design:type", Object)
], NominacionArtistaAlbumCancionVideoEntity.prototype, "album", void 0);
__decorate([
    typeorm_1.ManyToOne(type => video_entity_1.VideoEntity, video => video.nominacionesVideo),
    __metadata("design:type", Object)
], NominacionArtistaAlbumCancionVideoEntity.prototype, "video", void 0);
__decorate([
    typeorm_1.ManyToOne(type => premio_anio_entity_1.PremioAnioEntity, premioAnio => premioAnio.nominacionesPremioAnio),
    __metadata("design:type", Object)
], NominacionArtistaAlbumCancionVideoEntity.prototype, "premioAnio", void 0);
__decorate([
    typeorm_1.ManyToOne(type => categoria_entity_1.CategoriaEntity, categoria => categoria.nominacionesCategoria),
    __metadata("design:type", Object)
], NominacionArtistaAlbumCancionVideoEntity.prototype, "categoria", void 0);
NominacionArtistaAlbumCancionVideoEntity = __decorate([
    typeorm_1.Entity('nominacion-artista-album-cancion-video')
], NominacionArtistaAlbumCancionVideoEntity);
exports.NominacionArtistaAlbumCancionVideoEntity = NominacionArtistaAlbumCancionVideoEntity;
//# sourceMappingURL=nominacion-artista-album-cancion-video.entity.js.map