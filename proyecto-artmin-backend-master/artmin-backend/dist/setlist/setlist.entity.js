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
exports.SetlistEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const cancion_setlist_entity_1 = require("../cancion-setlist/cancion-setlist.entity");
const tour_entity_1 = require("../tour/tour.entity");
const acto_tour_entity_1 = require("../acto-tour/acto-tour.entity");
let SetlistEntity = class SetlistEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", Number)
], SetlistEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        name: 'fecha_inicio',
    }),
    __metadata("design:type", String)
], SetlistEntity.prototype, "fechaInicio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        name: 'fecha_fin',
        nullable: true,
    }),
    __metadata("design:type", String)
], SetlistEntity.prototype, "fechaFin", void 0);
__decorate([
    typeorm_1.Column({
        type: 'boolean',
        name: 'tiene_actos',
        nullable: true,
    }),
    __metadata("design:type", Number)
], SetlistEntity.prototype, "tieneActos", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tour_entity_1.TourEntity, tour => tour.setlistsTour),
    __metadata("design:type", Object)
], SetlistEntity.prototype, "tour", void 0);
__decorate([
    typeorm_1.OneToMany(type => cancion_setlist_entity_1.CancionSetlistEntity, cancionSetlist => cancionSetlist.setlistTour),
    __metadata("design:type", Array)
], SetlistEntity.prototype, "cancionesSetlistTour", void 0);
__decorate([
    typeorm_1.OneToMany(type => acto_tour_entity_1.ActoTourEntity, actosTour => actosTour.setlist),
    __metadata("design:type", Array)
], SetlistEntity.prototype, "actosTour", void 0);
SetlistEntity = __decorate([
    typeorm_1.Entity('setlist')
], SetlistEntity);
exports.SetlistEntity = SetlistEntity;
//# sourceMappingURL=setlist.entity.js.map