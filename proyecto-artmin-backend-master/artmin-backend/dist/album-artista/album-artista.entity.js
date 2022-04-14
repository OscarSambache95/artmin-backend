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
exports.AlbumArtistaEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const artista_entity_1 = require("../artista/artista.entity");
const album_entity_1 = require("../album/album.entity");
let AlbumArtistaEntity = class AlbumArtistaEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'orden',
        default: 0
    }),
    __metadata("design:type", Number)
], AlbumArtistaEntity.prototype, "orden", void 0);
__decorate([
    typeorm_1.ManyToOne(type => artista_entity_1.ArtistaEntity, artista => artista.albumesArtista),
    __metadata("design:type", Object)
], AlbumArtistaEntity.prototype, "artista", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.artistasAlbum),
    __metadata("design:type", Object)
], AlbumArtistaEntity.prototype, "album", void 0);
AlbumArtistaEntity = __decorate([
    typeorm_1.Entity('album-artista')
], AlbumArtistaEntity);
exports.AlbumArtistaEntity = AlbumArtistaEntity;
//# sourceMappingURL=album-artista.entity.js.map