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
exports.MedidaEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const record_entity_1 = require("../record/record.entity");
const unidad_album_cancion_video_entity_1 = require("../unidad-album-cancion-video/unidad-album-cancion-video.entity");
const certificado_entity_1 = require("../certificado/certificado.entity");
const record_chart_entity_1 = require("../record-chart/record-chart.entity");
let MedidaEntity = class MedidaEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], MedidaEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], MedidaEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_entity_1.RecordEntity, record => record.medida),
    __metadata("design:type", Array)
], MedidaEntity.prototype, "recordsMedida", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_chart_entity_1.RecordChartEntity, record => record.medida),
    __metadata("design:type", Array)
], MedidaEntity.prototype, "recordsChartMedida", void 0);
__decorate([
    typeorm_1.OneToMany(type => unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity, unidadAlbumCancionVideoChart => unidadAlbumCancionVideoChart.medida),
    __metadata("design:type", Array)
], MedidaEntity.prototype, "unidadesChartMedida", void 0);
__decorate([
    typeorm_1.OneToMany(type => certificado_entity_1.CertificadoEntity, certificado => certificado.medida),
    __metadata("design:type", Array)
], MedidaEntity.prototype, "certificadosMedida", void 0);
MedidaEntity = __decorate([
    typeorm_1.Entity('medida')
], MedidaEntity);
exports.MedidaEntity = MedidaEntity;
//# sourceMappingURL=medida.entity.js.map