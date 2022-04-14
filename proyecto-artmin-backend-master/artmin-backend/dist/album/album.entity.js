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
exports.AlbumEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const album_artista_entity_1 = require("../album-artista/album-artista.entity");
const album_cancion_entity_1 = require("../album-cancion/album-cancion.entity");
const genero_artista_album_cancion_entity_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.entity");
const enlace_album_cancion_artista_video_entity_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity");
const imagen_entity_1 = require("../imagen/imagen.entity");
const nominacion_artista_album_cancion_video_entity_1 = require("../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity");
const chart_album_cancion_artista_video_entity_1 = require("../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity");
const tipo_album_entity_1 = require("../tipo-album/tipo-album.entity");
const unidad_album_cancion_video_entity_1 = require("../unidad-album-cancion-video/unidad-album-cancion-video.entity");
const certificado_chart_entity_1 = require("../certificado-chart/certificado-chart.entity");
const record_chart_entity_1 = require("../record-chart/record-chart.entity");
let AlbumEntity = class AlbumEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], AlbumEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], AlbumEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'duracion',
        default: 0,
    }),
    __metadata("design:type", Number)
], AlbumEntity.prototype, "duracionSegundos", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha_lanzamiento',
    }),
    __metadata("design:type", String)
], AlbumEntity.prototype, "fechaLanzamiento", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio',
    }),
    __metadata("design:type", Number)
], AlbumEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'calificacion',
    }),
    __metadata("design:type", Number)
], AlbumEntity.prototype, "calificacion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipo_album_entity_1.TipoAlbumEntity, tipoAlbum => tipoAlbum.albumes),
    __metadata("design:type", Object)
], AlbumEntity.prototype, "tipoAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => album_artista_entity_1.AlbumArtistaEntity, albumArtista => albumArtista.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "artistasAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => album_cancion_entity_1.AlbumCancionEntity, albumCancion => albumCancion.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "cancionesAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => genero_artista_album_cancion_entity_1.GeneroArtistaAlbumCancionEntity, generoAlbum => generoAlbum.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "generosAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity, enlaceAlbum => enlaceAlbum.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "enlacesAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => imagen_entity_1.ImagenEntity, imagen => imagen.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "imagenesAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity, nominacionAlbum => nominacionAlbum.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "nominacionesAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity, chartAlbum => chartAlbum.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "chartsAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity, unidad => unidad.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "unidadesAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => certificado_chart_entity_1.CertificadoChartEntity, certificado => certificado.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "certificadosAlbum", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_chart_entity_1.RecordChartEntity, record => record.album),
    __metadata("design:type", Array)
], AlbumEntity.prototype, "recordsAlbum", void 0);
AlbumEntity = __decorate([
    typeorm_1.Entity('album')
], AlbumEntity);
exports.AlbumEntity = AlbumEntity;
//# sourceMappingURL=album.entity.js.map