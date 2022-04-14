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
exports.ImagenEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const artista_entity_1 = require("../artista/artista.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const album_entity_1 = require("../album/album.entity");
const plataforma_entity_1 = require("../plataforma/plataforma.entity");
const tour_entity_1 = require("../tour/tour.entity");
const lugar_entity_1 = require("../lugar/lugar.entity");
let ImagenEntity = class ImagenEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'url',
    }),
    __metadata("design:type", String)
], ImagenEntity.prototype, "url", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'ancho',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ImagenEntity.prototype, "ancho", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'largo',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ImagenEntity.prototype, "largo", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], ImagenEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        name: 'es_principal',
        enum: [1, 0]
    }),
    __metadata("design:type", Number)
], ImagenEntity.prototype, "esPrincipal", void 0);
__decorate([
    typeorm_1.ManyToOne(type => artista_entity_1.ArtistaEntity, artista => artista.imagenesArtista),
    __metadata("design:type", Object)
], ImagenEntity.prototype, "artista", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.imagenesCancion),
    __metadata("design:type", Object)
], ImagenEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.imagenesAlbum),
    __metadata("design:type", Object)
], ImagenEntity.prototype, "album", void 0);
__decorate([
    typeorm_1.ManyToOne(type => plataforma_entity_1.PlataformaEntity, plataforma => plataforma.imagenesPlataforma),
    __metadata("design:type", Object)
], ImagenEntity.prototype, "plataforma", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tour_entity_1.TourEntity, tour => tour.imagenesTour),
    __metadata("design:type", Object)
], ImagenEntity.prototype, "tour", void 0);
__decorate([
    typeorm_1.ManyToOne(type => lugar_entity_1.LugarEntity, lugar => lugar.imagenesLugar),
    __metadata("design:type", Object)
], ImagenEntity.prototype, "lugar", void 0);
ImagenEntity = __decorate([
    typeorm_1.Entity('imagen')
], ImagenEntity);
exports.ImagenEntity = ImagenEntity;
//# sourceMappingURL=imagen.entity.js.map