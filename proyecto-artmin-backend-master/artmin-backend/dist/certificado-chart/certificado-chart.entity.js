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
exports.CertificadoChartEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const chart_entity_1 = require("../chart/chart.entity");
const certificado_chart_fecha_entity_1 = require("../certificado-chart-fecha/certificado-chart-fecha.entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const album_entity_1 = require("../album/album.entity");
const video_entity_1 = require("../video/video.entity");
let CertificadoChartEntity = class CertificadoChartEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha_actualizacion',
        nullable: true,
    }),
    __metadata("design:type", String)
], CertificadoChartEntity.prototype, "fechaActualizacion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => chart_entity_1.ChartEntity, chart => chart.certificadosChartAlbumCAncionArtistaVideo),
    __metadata("design:type", Object)
], CertificadoChartEntity.prototype, "chart", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.certificadosCancion),
    __metadata("design:type", Object)
], CertificadoChartEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.certificadosAlbum),
    __metadata("design:type", Object)
], CertificadoChartEntity.prototype, "album", void 0);
__decorate([
    typeorm_1.ManyToOne(type => video_entity_1.VideoEntity, video => video.certificadosVideo),
    __metadata("design:type", Object)
], CertificadoChartEntity.prototype, "video", void 0);
__decorate([
    typeorm_1.OneToMany(type => certificado_chart_fecha_entity_1.CertificadoChartFechaEntity, certicadoChartFecha => certicadoChartFecha.certificadoChart),
    __metadata("design:type", Array)
], CertificadoChartEntity.prototype, "certificadosChartFecha", void 0);
CertificadoChartEntity = __decorate([
    typeorm_1.Entity('certificado-chart')
], CertificadoChartEntity);
exports.CertificadoChartEntity = CertificadoChartEntity;
//# sourceMappingURL=certificado-chart.entity.js.map