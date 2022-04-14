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
exports.ArtistaEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const cancion_artista_entity_1 = require("../cancion-artista/cancion-artista.entity");
const album_artista_entity_1 = require("../album-artista/album-artista.entity");
const genero_artista_album_cancion_entity_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.entity");
const presentacion_artista_entity_1 = require("../presentacion-artista/presentacion-artista.entity");
const imagen_entity_1 = require("../imagen/imagen.entity");
const nominacion_artista_album_cancion_video_entity_1 = require("../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity");
const artista_tour_entity_1 = require("../artista-tour/artista-tour.entity");
const enlace_album_cancion_artista_video_entity_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity");
let ArtistaEntity = class ArtistaEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], ArtistaEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], ArtistaEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio_debut',
    }),
    __metadata("design:type", Number)
], ArtistaEntity.prototype, "anioDebut", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha_nacimiento',
    }),
    __metadata("design:type", String)
], ArtistaEntity.prototype, "fechaNacimiento", void 0);
__decorate([
    typeorm_1.OneToMany(type => cancion_artista_entity_1.CancionArtistaEntity, cancionArtista => cancionArtista.artista),
    __metadata("design:type", Array)
], ArtistaEntity.prototype, "cancionesArtista", void 0);
__decorate([
    typeorm_1.OneToMany(type => album_artista_entity_1.AlbumArtistaEntity, albumArtista => albumArtista.artista),
    __metadata("design:type", Array)
], ArtistaEntity.prototype, "albumesArtista", void 0);
__decorate([
    typeorm_1.OneToMany(type => genero_artista_album_cancion_entity_1.GeneroArtistaAlbumCancionEntity, generoArtista => generoArtista.artista),
    __metadata("design:type", Array)
], ArtistaEntity.prototype, "generosArtista", void 0);
__decorate([
    typeorm_1.OneToMany(type => presentacion_artista_entity_1.PresentacionArtistaEntity, presentacionArtista => presentacionArtista.artista),
    __metadata("design:type", Array)
], ArtistaEntity.prototype, "presentacionesArtista", void 0);
__decorate([
    typeorm_1.OneToMany(type => imagen_entity_1.ImagenEntity, imagen => imagen.artista),
    __metadata("design:type", Array)
], ArtistaEntity.prototype, "imagenesArtista", void 0);
__decorate([
    typeorm_1.OneToMany(type => nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity, nominacionArtista => nominacionArtista.artista),
    __metadata("design:type", Array)
], ArtistaEntity.prototype, "nominacionesArtista", void 0);
__decorate([
    typeorm_1.OneToMany(type => artista_tour_entity_1.ArtistaTourEntity, tourArtista => tourArtista.artista),
    __metadata("design:type", Array)
], ArtistaEntity.prototype, "toursArtista", void 0);
__decorate([
    typeorm_1.OneToMany(type => enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity, enlaceArtista => enlaceArtista.artista),
    __metadata("design:type", Array)
], ArtistaEntity.prototype, "enlacesArtista", void 0);
ArtistaEntity = __decorate([
    typeorm_1.Entity('artista')
], ArtistaEntity);
exports.ArtistaEntity = ArtistaEntity;
//# sourceMappingURL=artista.entity.js.map