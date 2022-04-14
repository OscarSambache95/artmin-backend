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
exports.LugarEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const tour_lugar_entity_1 = require("../tour-lugar/tour-lugar.entity");
const imagen_entity_1 = require("../imagen/imagen.entity");
const chart_entity_1 = require("../chart/chart.entity");
let LugarEntity = class LugarEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], LugarEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        name: 'tipo',
        enum: ['ciudad', 'pais', 'continente', 'global']
    }),
    __metadata("design:type", String)
], LugarEntity.prototype, "tipo", void 0);
__decorate([
    typeorm_1.TreeParent(),
    __metadata("design:type", Object)
], LugarEntity.prototype, "lugarPadre", void 0);
__decorate([
    typeorm_1.TreeChildren(),
    __metadata("design:type", Array)
], LugarEntity.prototype, "lugaresHijos", void 0);
__decorate([
    typeorm_1.OneToMany(type => tour_lugar_entity_1.TourLugarEntity, tourLugar => tourLugar.lugar),
    __metadata("design:type", Array)
], LugarEntity.prototype, "touresLugar", void 0);
__decorate([
    typeorm_1.OneToMany(type => imagen_entity_1.ImagenEntity, imagen => imagen.lugar),
    __metadata("design:type", Array)
], LugarEntity.prototype, "imagenesLugar", void 0);
__decorate([
    typeorm_1.OneToMany(type => chart_entity_1.ChartEntity, chart => chart.lugar),
    __metadata("design:type", Array)
], LugarEntity.prototype, "chartsLugar", void 0);
LugarEntity = __decorate([
    typeorm_1.Tree('nested-set'),
    typeorm_1.Entity('lugar')
], LugarEntity);
exports.LugarEntity = LugarEntity;
//# sourceMappingURL=lugar.entity.js.map