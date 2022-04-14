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
exports.CancionSetlistEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const cancion_entity_1 = require("../cancion/cancion.entity");
const presentacion_entity_1 = require("../presentacion/presentacion.entity");
const setlist_entity_1 = require("../setlist/setlist.entity");
const acto_tour_entity_1 = require("../acto-tour/acto-tour.entity");
let CancionSetlistEntity = class CancionSetlistEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'posicion',
    }),
    __metadata("design:type", Number)
], CancionSetlistEntity.prototype, "posicion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cancion_entity_1.CancionEntity, cancion => cancion.setlistsCancion),
    __metadata("design:type", Object)
], CancionSetlistEntity.prototype, "cancion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => setlist_entity_1.SetlistEntity, setlistTour => setlistTour.cancionesSetlistTour),
    __metadata("design:type", Object)
], CancionSetlistEntity.prototype, "setlistTour", void 0);
__decorate([
    typeorm_1.ManyToOne(type => acto_tour_entity_1.ActoTourEntity, actoTour => actoTour.cancionesSetlistTour),
    __metadata("design:type", Object)
], CancionSetlistEntity.prototype, "actoTour", void 0);
__decorate([
    typeorm_1.ManyToOne(type => presentacion_entity_1.PresentacionEntity, presentacion => presentacion.cancionesSetlistPresentacion),
    __metadata("design:type", Object)
], CancionSetlistEntity.prototype, "presentacion", void 0);
CancionSetlistEntity = __decorate([
    typeorm_1.Entity('cancion-setlist')
], CancionSetlistEntity);
exports.CancionSetlistEntity = CancionSetlistEntity;
//# sourceMappingURL=cancion-setlist.entity.js.map