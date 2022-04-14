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
exports.TipoAlbumEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const album_entity_1 = require("../album/album.entity");
let TipoAlbumEntity = class TipoAlbumEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], TipoAlbumEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true
    }),
    __metadata("design:type", String)
], TipoAlbumEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => album_entity_1.AlbumEntity, album => album.tipoAlbum),
    __metadata("design:type", Array)
], TipoAlbumEntity.prototype, "albumes", void 0);
TipoAlbumEntity = __decorate([
    typeorm_1.Entity('tipo-album')
], TipoAlbumEntity);
exports.TipoAlbumEntity = TipoAlbumEntity;
//# sourceMappingURL=tipo-album.entity.js.map