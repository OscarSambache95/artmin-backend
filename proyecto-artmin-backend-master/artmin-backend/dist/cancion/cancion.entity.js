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
exports.CancionEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const album_cancion_entity_1 = require("../album-cancion/album-cancion.entity");
const cancion_artista_entity_1 = require("../cancion-artista/cancion-artista.entity");
const genero_artista_album_cancion_entity_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.entity");
const chart_album_cancion_artista_video_entity_1 = require("../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity");
const setlist_entity_1 = require("../setlist/setlist.entity");
const nominacion_artista_album_cancion_video_entity_1 = require("../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity");
const imagen_entity_1 = require("../imagen/imagen.entity");
const video_entity_1 = require("../video/video.entity");
const enlace_album_cancion_artista_video_entity_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity");
const tipo_cancion_entity_1 = require("../tipo-cancion/tipo-cancion.entity");
const unidad_album_cancion_video_entity_1 = require("../unidad-album-cancion-video/unidad-album-cancion-video.entity");
const certificado_chart_entity_1 = require("../certificado-chart/certificado-chart.entity");
const record_chart_entity_1 = require("../record-chart/record-chart.entity");
let CancionEntity = class CancionEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], CancionEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], CancionEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'duracion',
    }),
    __metadata("design:type", Number)
], CancionEntity.prototype, "duracionSegundos", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha_lanzamiento',
    }),
    __metadata("design:type", String)
], CancionEntity.prototype, "fechaLanzamiento", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio',
        nullable: true,
    }),
    __metadata("design:type", Number)
], CancionEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipo_cancion_entity_1.TipoCancionEntity, tipoCancion => tipoCancion.canciones),
    __metadata("design:type", Object)
], CancionEntity.prototype, "tipoCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => album_cancion_entity_1.AlbumCancionEntity, albumCancion => albumCancion.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "albumesCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => cancion_artista_entity_1.CancionArtistaEntity, cancionArtista => cancionArtista.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "artistasCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => genero_artista_album_cancion_entity_1.GeneroArtistaAlbumCancionEntity, generoCancion => generoCancion.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "generosCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity, chartCancion => chartCancion.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "chartsCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => setlist_entity_1.SetlistEntity, setlist => setlist.cancionesSetlistTour),
    __metadata("design:type", Array)
], CancionEntity.prototype, "setlistsCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity, nominacionCancion => nominacionCancion.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "nominacionesCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => imagen_entity_1.ImagenEntity, imagen => imagen.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "imagenesCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => video_entity_1.VideoEntity, video => video.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "videoCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity, enlaceCancion => enlaceCancion.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "enlacesCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity, unidad => unidad.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "unidadesCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => certificado_chart_entity_1.CertificadoChartEntity, certificado => certificado.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "certificadosCancion", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_chart_entity_1.RecordChartEntity, record => record.cancion),
    __metadata("design:type", Array)
], CancionEntity.prototype, "recordsCancion", void 0);
CancionEntity = __decorate([
    typeorm_1.Entity('cancion')
], CancionEntity);
exports.CancionEntity = CancionEntity;
//# sourceMappingURL=cancion.entity.js.map