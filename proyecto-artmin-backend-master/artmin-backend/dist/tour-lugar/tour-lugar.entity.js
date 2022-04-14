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
exports.TourLugarEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const tour_entity_1 = require("../tour/tour.entity");
const recinto_entity_1 = require("../recinto/recinto.entity");
const lugar_entity_1 = require("../lugar/lugar.entity");
let TourLugarEntity = class TourLugarEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'locacion',
    }),
    __metadata("design:type", Number)
], TourLugarEntity.prototype, "locacion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'tickets_disponibles',
    }),
    __metadata("design:type", Number)
], TourLugarEntity.prototype, "ticketsDisponibles", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'porcentaje',
    }),
    __metadata("design:type", Number)
], TourLugarEntity.prototype, "porcentaje", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        name: 'se_cancelo',
        enum: [0 | 1],
        nullable: true,
    }),
    __metadata("design:type", Number)
], TourLugarEntity.prototype, "seCancelo", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'razon_cancelacion',
        nullable: true,
    }),
    __metadata("design:type", String)
], TourLugarEntity.prototype, "razonCancelacion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'float',
        default: 0,
        name: 'recaudacion',
    }),
    __metadata("design:type", Number)
], TourLugarEntity.prototype, "recaudacion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha',
    }),
    __metadata("design:type", String)
], TourLugarEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({
        type: 'time',
        name: 'hora',
    }),
    __metadata("design:type", String)
], TourLugarEntity.prototype, "hora", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'observacion',
        nullable: true,
    }),
    __metadata("design:type", String)
], TourLugarEntity.prototype, "observacion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'tickets_vendidos',
    }),
    __metadata("design:type", Number)
], TourLugarEntity.prototype, "ticketsVendidos", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio',
    }),
    __metadata("design:type", Number)
], TourLugarEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tour_entity_1.TourEntity, tour => tour.lugaresTour),
    __metadata("design:type", Object)
], TourLugarEntity.prototype, "tour", void 0);
__decorate([
    typeorm_1.ManyToOne(type => recinto_entity_1.RecintoEntity, recinto => recinto.lugaresTourRecinto),
    __metadata("design:type", Object)
], TourLugarEntity.prototype, "recinto", void 0);
__decorate([
    typeorm_1.ManyToOne(type => lugar_entity_1.LugarEntity, lugar => lugar.touresLugar),
    __metadata("design:type", Object)
], TourLugarEntity.prototype, "lugar", void 0);
TourLugarEntity = __decorate([
    typeorm_1.Entity('tour-lugar')
], TourLugarEntity);
exports.TourLugarEntity = TourLugarEntity;
//# sourceMappingURL=tour-lugar.entity.js.map