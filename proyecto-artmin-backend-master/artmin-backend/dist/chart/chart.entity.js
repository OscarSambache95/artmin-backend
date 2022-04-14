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
exports.ChartEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const plataforma_entity_1 = require("../plataforma/plataforma.entity");
const chart_album_cancion_artista_video_entity_1 = require("../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity");
const lugar_entity_1 = require("../lugar/lugar.entity");
const unidad_album_cancion_video_entity_1 = require("../unidad-album-cancion-video/unidad-album-cancion-video.entity");
const record_chart_entity_1 = require("../record-chart/record-chart.entity");
const certificado_chart_entity_1 = require("../certificado-chart/certificado-chart.entity");
const certificado_entity_1 = require("../certificado/certificado.entity");
const record_entity_1 = require("../record/record.entity");
let ChartEntity = class ChartEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], ChartEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], ChartEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        name: 'tipo',
        enum: ['cancion', 'album', 'video']
    }),
    __metadata("design:type", String)
], ChartEntity.prototype, "tipo", void 0);
__decorate([
    typeorm_1.ManyToOne(type => plataforma_entity_1.PlataformaEntity, plataforma => plataforma.chartsPlataforma),
    __metadata("design:type", Object)
], ChartEntity.prototype, "plataforma", void 0);
__decorate([
    typeorm_1.OneToMany(type => chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity, chartAlbum => chartAlbum.chart),
    __metadata("design:type", Array)
], ChartEntity.prototype, "albumesCancionesVideosArtistasChart", void 0);
__decorate([
    typeorm_1.OneToMany(type => unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity, unidades => unidades.chart),
    __metadata("design:type", Array)
], ChartEntity.prototype, "unidadesAlbumCancionVideoArtista", void 0);
__decorate([
    typeorm_1.ManyToOne(type => lugar_entity_1.LugarEntity, lugar => lugar.chartsLugar),
    __metadata("design:type", Object)
], ChartEntity.prototype, "lugar", void 0);
__decorate([
    typeorm_1.OneToMany(type => certificado_chart_entity_1.CertificadoChartEntity, certicadoChart => certicadoChart.chart),
    __metadata("design:type", Array)
], ChartEntity.prototype, "certificadosChartAlbumCAncionArtistaVideo", void 0);
__decorate([
    typeorm_1.OneToMany(type => certificado_entity_1.CertificadoEntity, cerficado => cerficado.chart),
    __metadata("design:type", Array)
], ChartEntity.prototype, "certificadosChart", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_entity_1.RecordEntity, record => record.chart),
    __metadata("design:type", Array)
], ChartEntity.prototype, "recordsChart", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_chart_entity_1.RecordChartEntity, recordChart => recordChart.chart),
    __metadata("design:type", Array)
], ChartEntity.prototype, "recordsChartAlbumCancionArtistaVideo", void 0);
ChartEntity = __decorate([
    typeorm_1.Entity('chart')
], ChartEntity);
exports.ChartEntity = ChartEntity;
//# sourceMappingURL=chart.entity.js.map