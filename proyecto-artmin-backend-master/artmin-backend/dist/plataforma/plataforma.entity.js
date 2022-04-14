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
exports.PlataformaEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const enlace_album_cancion_artista_video_entity_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity");
const imagen_entity_1 = require("../imagen/imagen.entity");
const chart_entity_1 = require("../chart/chart.entity");
let PlataformaEntity = class PlataformaEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], PlataformaEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], PlataformaEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        name: 'tipo',
        enum: ['red social', 'chart'],
    }),
    __metadata("design:type", String)
], PlataformaEntity.prototype, "tipo", void 0);
__decorate([
    typeorm_1.OneToMany(type => enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity, enlacePlataforma => enlacePlataforma.plataforma),
    __metadata("design:type", Array)
], PlataformaEntity.prototype, "enlacesPlataforma", void 0);
__decorate([
    typeorm_1.OneToMany(type => imagen_entity_1.ImagenEntity, imagen => imagen.plataforma),
    __metadata("design:type", Array)
], PlataformaEntity.prototype, "imagenesPlataforma", void 0);
__decorate([
    typeorm_1.OneToMany(type => chart_entity_1.ChartEntity, chart => chart.plataforma),
    __metadata("design:type", Array)
], PlataformaEntity.prototype, "chartsPlataforma", void 0);
PlataformaEntity = __decorate([
    typeorm_1.Entity('plataforma')
], PlataformaEntity);
exports.PlataformaEntity = PlataformaEntity;
//# sourceMappingURL=plataforma.entity.js.map