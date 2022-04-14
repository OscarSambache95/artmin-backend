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
exports.AlbumCancionEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const album_entity_1 = require("../album/album.entity");
let AlbumCancionEntity = class AlbumCancionEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'posicion',
    }),
    __metadata("design:type", Number)
], AlbumCancionEntity.prototype, "posicion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.albumesCancion),
    __metadata("design:type", Object)
], AlbumCancionEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.cancionesAlbum),
    __metadata("design:type", Object)
], AlbumCancionEntity.prototype, "album", void 0);
AlbumCancionEntity = __decorate([
    typeorm_1.Entity('album-cancion')
], AlbumCancionEntity);
exports.AlbumCancionEntity = AlbumCancionEntity;
//# sourceMappingURL=album-cancion.entity.js.map