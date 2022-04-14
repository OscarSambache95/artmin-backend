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
exports.ActoTourEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const cancion_setlist_entity_1 = require("../cancion-setlist/cancion-setlist.entity");
const setlist_entity_1 = require("../setlist/setlist.entity");
let ActoTourEntity = class ActoTourEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", Number)
], ActoTourEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.OneToMany(type => cancion_setlist_entity_1.CancionSetlistEntity, cancionSetlist => cancionSetlist.actoTour),
    __metadata("design:type", Array)
], ActoTourEntity.prototype, "cancionesSetlistTour", void 0);
__decorate([
    typeorm_1.ManyToOne(type => setlist_entity_1.SetlistEntity, setlist => setlist.actosTour),
    __metadata("design:type", Object)
], ActoTourEntity.prototype, "setlist", void 0);
ActoTourEntity = __decorate([
    typeorm_1.Entity('acto-tour')
], ActoTourEntity);
exports.ActoTourEntity = ActoTourEntity;
//# sourceMappingURL=acto-tour.entity.js.map