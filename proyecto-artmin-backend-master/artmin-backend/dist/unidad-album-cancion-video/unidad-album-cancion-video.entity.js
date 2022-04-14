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
exports.UnidadAlbumCancionVideoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const medida_entity_1 = require("../medida/medida.entity");
const chart_entity_1 = require("../chart/chart.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const album_entity_1 = require("../album/album.entity");
const video_entity_1 = require("../video/video.entity");
let UnidadAlbumCancionVideoEntity = class UnidadAlbumCancionVideoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'unidades_debut',
        nullable: true,
    }),
    __metadata("design:type", Number)
], UnidadAlbumCancionVideoEntity.prototype, "unidadesDebut", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'unidades_reales',
        nullable: true,
    }),
    __metadata("design:type", Number)
], UnidadAlbumCancionVideoEntity.prototype, "unidadesReales", void 0);
__decorate([
    typeorm_1.ManyToOne(type => medida_entity_1.MedidaEntity, medida => medida.unidadesChartMedida),
    __metadata("design:type", Object)
], UnidadAlbumCancionVideoEntity.prototype, "medida", void 0);
__decorate([
    typeorm_1.ManyToOne(type => chart_entity_1.ChartEntity, chart => chart.unidadesAlbumCancionVideoArtista),
    __metadata("design:type", Object)
], UnidadAlbumCancionVideoEntity.prototype, "chart", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.unidadesCancion),
    __metadata("design:type", Object)
], UnidadAlbumCancionVideoEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.unidadesAlbum),
    __metadata("design:type", Object)
], UnidadAlbumCancionVideoEntity.prototype, "album", void 0);
__decorate([
    typeorm_1.ManyToOne(type => video_entity_1.VideoEntity, video => video.unidadesVideo),
    __metadata("design:type", Object)
], UnidadAlbumCancionVideoEntity.prototype, "video", void 0);
UnidadAlbumCancionVideoEntity = __decorate([
    typeorm_1.Entity('unidad-album-cancion-video')
], UnidadAlbumCancionVideoEntity);
exports.UnidadAlbumCancionVideoEntity = UnidadAlbumCancionVideoEntity;
//# sourceMappingURL=unidad-album-cancion-video.entity.js.map