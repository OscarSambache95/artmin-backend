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
exports.ChartAlbumCancionArtistaVideoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const album_entity_1 = require("../album/album.entity");
const video_entity_1 = require("../video/video.entity");
const chart_posicion_entity_1 = require("../chart-posicion/chart-posicion.entity");
const chart_entity_1 = require("../chart/chart.entity");
let ChartAlbumCancionArtistaVideoEntity = class ChartAlbumCancionArtistaVideoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha_debut',
    }),
    __metadata("design:type", String)
], ChartAlbumCancionArtistaVideoEntity.prototype, "fechaDebut", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha_peak',
        nullable: true,
    }),
    __metadata("design:type", String)
], ChartAlbumCancionArtistaVideoEntity.prototype, "fechaPeak", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio',
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'peak',
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "peak", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_semanas',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "numeroSemanas", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_dias',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "numeroDias", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_semanas_peak',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "numeroSemanasPeak", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_dias_peak',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "numeroDiasPeak", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_semanas_top_5',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "numeroSemanasTop5", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_dias_top_5',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "numeroDiasTop5", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_semanas_top_10',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "numeroSemanasTop10", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_dias_top_10',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "numeroDiasTop10", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'posicion_debut',
    }),
    __metadata("design:type", Number)
], ChartAlbumCancionArtistaVideoEntity.prototype, "posicionDebut", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true
    }),
    __metadata("design:type", String)
], ChartAlbumCancionArtistaVideoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.chartsCancion),
    __metadata("design:type", Object)
], ChartAlbumCancionArtistaVideoEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => album_entity_1.AlbumEntity, album => album.chartsAlbum),
    __metadata("design:type", Object)
], ChartAlbumCancionArtistaVideoEntity.prototype, "album", void 0);
__decorate([
    typeorm_1.ManyToOne(type => video_entity_1.VideoEntity, video => video.chartsVideo),
    __metadata("design:type", Object)
], ChartAlbumCancionArtistaVideoEntity.prototype, "video", void 0);
__decorate([
    typeorm_1.ManyToOne(type => chart_entity_1.ChartEntity, chart => chart.albumesCancionesVideosArtistasChart),
    __metadata("design:type", Object)
], ChartAlbumCancionArtistaVideoEntity.prototype, "chart", void 0);
__decorate([
    typeorm_1.OneToMany(type => chart_posicion_entity_1.ChartPosicionEntity, chartPosicion => chartPosicion.chartAlbumCancionArtistaVideo),
    __metadata("design:type", Array)
], ChartAlbumCancionArtistaVideoEntity.prototype, "posicionesChartAlbumCAncionArtistaVideo", void 0);
ChartAlbumCancionArtistaVideoEntity = __decorate([
    typeorm_1.Entity('chart-album-cancion-artista-video')
], ChartAlbumCancionArtistaVideoEntity);
exports.ChartAlbumCancionArtistaVideoEntity = ChartAlbumCancionArtistaVideoEntity;
//# sourceMappingURL=chart-album-cancion-artista-video.entity.js.map