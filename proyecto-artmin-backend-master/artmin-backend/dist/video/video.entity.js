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
exports.VideoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const tipo_video_entity_1 = require("../tipo-video/tipo-video.entity");
const enlace_album_cancion_artista_video_entity_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity");
const nominacion_artista_album_cancion_video_entity_1 = require("../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity");
const chart_album_cancion_artista_video_entity_1 = require("../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity");
const unidad_album_cancion_video_entity_1 = require("../unidad-album-cancion-video/unidad-album-cancion-video.entity");
const certificado_chart_entity_1 = require("../certificado-chart/certificado-chart.entity");
const record_chart_entity_1 = require("../record-chart/record-chart.entity");
let VideoEntity = class VideoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], VideoEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true
    }),
    __metadata("design:type", String)
], VideoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'duracion',
    }),
    __metadata("design:type", Number)
], VideoEntity.prototype, "duracionSegundos", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha_lanzamiento',
    }),
    __metadata("design:type", String)
], VideoEntity.prototype, "fechaLanzamiento", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio',
    }),
    __metadata("design:type", Number)
], VideoEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.videoCancion),
    __metadata("design:type", Object)
], VideoEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipo_video_entity_1.TipoVideoEntity, tipoVideo => tipoVideo.videos),
    __metadata("design:type", Object)
], VideoEntity.prototype, "tipoVideo", void 0);
__decorate([
    typeorm_1.OneToMany(type => enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity, enlaceVideo => enlaceVideo.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "enlacesVideo", void 0);
__decorate([
    typeorm_1.OneToMany(type => nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity, nominacionVideo => nominacionVideo.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "nominacionesVideo", void 0);
__decorate([
    typeorm_1.OneToMany(type => chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity, chartVideo => chartVideo.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "chartsVideo", void 0);
__decorate([
    typeorm_1.OneToMany(type => unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity, unidad => unidad.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "unidadesVideo", void 0);
__decorate([
    typeorm_1.OneToMany(type => certificado_chart_entity_1.CertificadoChartEntity, certificado => certificado.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "certificadosVideo", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_chart_entity_1.RecordChartEntity, record => record.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "recordsVideo", void 0);
VideoEntity = __decorate([
    typeorm_1.Entity('video')
], VideoEntity);
exports.VideoEntity = VideoEntity;
//# sourceMappingURL=video.entity.js.map