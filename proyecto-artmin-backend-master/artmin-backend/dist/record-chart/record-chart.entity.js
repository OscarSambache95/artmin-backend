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
exports.RecordChartEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const record_entity_1 = require("../record/record.entity");
const chart_entity_1 = require("../chart/chart.entity");
const medida_entity_1 = require("../medida/medida.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const album_entity_1 = require("../album/album.entity");
const video_entity_1 = require("../video/video.entity");
let RecordChartEntity = class RecordChartEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'bigint',
        name: 'cantidad-medida',
    }),
    __metadata("design:type", Number)
], RecordChartEntity.prototype, "cantidadMedida", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha_record',
    }),
    __metadata("design:type", String)
], RecordChartEntity.prototype, "fechaRecord", void 0);
__decorate([
    typeorm_1.ManyToOne(type => record_entity_1.RecordEntity, record => record.recordsChartCancionAlbumVideo),
    __metadata("design:type", Object)
], RecordChartEntity.prototype, "record", void 0);
__decorate([
    typeorm_1.ManyToOne(type => medida_entity_1.MedidaEntity, medida => medida.recordsChartMedida),
    __metadata("design:type", Object)
], RecordChartEntity.prototype, "medida", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.recordsCancion),
    __metadata("design:type", Object)
], RecordChartEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.recordsAlbum),
    __metadata("design:type", Object)
], RecordChartEntity.prototype, "album", void 0);
__decorate([
    typeorm_1.ManyToOne(type => video_entity_1.VideoEntity, video => video.recordsVideo),
    __metadata("design:type", Object)
], RecordChartEntity.prototype, "video", void 0);
__decorate([
    typeorm_1.ManyToOne(type => chart_entity_1.ChartEntity, chart => chart.recordsChartAlbumCancionArtistaVideo),
    __metadata("design:type", Object)
], RecordChartEntity.prototype, "chart", void 0);
RecordChartEntity = __decorate([
    typeorm_1.Entity('record-chart')
], RecordChartEntity);
exports.RecordChartEntity = RecordChartEntity;
//# sourceMappingURL=record-chart.entity.js.map