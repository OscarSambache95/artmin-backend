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
exports.RecordEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const medida_entity_1 = require("../medida/medida.entity");
const record_chart_entity_1 = require("../record-chart/record-chart.entity");
const chart_entity_1 = require("../chart/chart.entity");
let RecordEntity = class RecordEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => chart_entity_1.ChartEntity, chart => chart.recordsChart),
    __metadata("design:type", Object)
], RecordEntity.prototype, "chart", void 0);
__decorate([
    typeorm_1.ManyToOne(type => medida_entity_1.MedidaEntity, medida => medida.recordsMedida),
    __metadata("design:type", Object)
], RecordEntity.prototype, "medida", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_chart_entity_1.RecordChartEntity, recordChart => recordChart.record),
    __metadata("design:type", Array)
], RecordEntity.prototype, "recordsChartCancionAlbumVideo", void 0);
RecordEntity = __decorate([
    typeorm_1.Entity('record')
], RecordEntity);
exports.RecordEntity = RecordEntity;
//# sourceMappingURL=record.entity.js.map