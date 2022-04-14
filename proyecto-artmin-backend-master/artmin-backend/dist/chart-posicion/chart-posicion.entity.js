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
exports.ChartPosicionEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const chart_album_cancion_artista_video_entity_1 = require("../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity");
let ChartPosicionEntity = class ChartPosicionEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'posicion',
    }),
    __metadata("design:type", Number)
], ChartPosicionEntity.prototype, "posicion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'numero_semana',
    }),
    __metadata("design:type", Number)
], ChartPosicionEntity.prototype, "numeroSemana", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha',
    }),
    __metadata("design:type", String)
], ChartPosicionEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.ManyToOne(type => chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity, chartAlbumCancionArtistaVideo => chartAlbumCancionArtistaVideo.posicionesChartAlbumCAncionArtistaVideo),
    __metadata("design:type", Object)
], ChartPosicionEntity.prototype, "chartAlbumCancionArtistaVideo", void 0);
ChartPosicionEntity = __decorate([
    typeorm_1.Entity('chart-posicion')
], ChartPosicionEntity);
exports.ChartPosicionEntity = ChartPosicionEntity;
//# sourceMappingURL=chart-posicion.entity.js.map