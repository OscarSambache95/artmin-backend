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
exports.CertificadoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const certificado_chart_fecha_entity_1 = require("../certificado-chart-fecha/certificado-chart-fecha.entity");
const medida_entity_1 = require("../medida/medida.entity");
const chart_entity_1 = require("../chart/chart.entity");
let CertificadoEntity = class CertificadoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], CertificadoEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], CertificadoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bigint',
        name: 'unidades',
    }),
    __metadata("design:type", Number)
], CertificadoEntity.prototype, "unidades", void 0);
__decorate([
    typeorm_1.ManyToOne(type => chart_entity_1.ChartEntity, chart => chart.certificadosChart),
    __metadata("design:type", Object)
], CertificadoEntity.prototype, "chart", void 0);
__decorate([
    typeorm_1.ManyToOne(type => medida_entity_1.MedidaEntity, medida => medida.certificadosMedida),
    __metadata("design:type", Object)
], CertificadoEntity.prototype, "medida", void 0);
__decorate([
    typeorm_1.OneToMany(type => certificado_chart_fecha_entity_1.CertificadoChartFechaEntity, certificadoFechaChart => certificadoFechaChart.certificado),
    __metadata("design:type", Array)
], CertificadoEntity.prototype, "chartsFechaCertificado", void 0);
CertificadoEntity = __decorate([
    typeorm_1.Entity('certificado')
], CertificadoEntity);
exports.CertificadoEntity = CertificadoEntity;
//# sourceMappingURL=certificado.entity.js.map