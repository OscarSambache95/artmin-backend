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
exports.PresentacionEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const presentacion_artista_entity_1 = require("../presentacion-artista/presentacion-artista.entity");
const premio_anio_entity_1 = require("../premio-anio/premio-anio.entity");
const evento_anio_entity_1 = require("../evento-anio/evento-anio.entity");
const cancion_setlist_entity_1 = require("../cancion-setlist/cancion-setlist.entity");
let PresentacionEntity = class PresentacionEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], PresentacionEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => premio_anio_entity_1.PremioAnioEntity, premioAnio => premioAnio.presentacionesPremioAnio),
    __metadata("design:type", Object)
], PresentacionEntity.prototype, "premioAnio", void 0);
__decorate([
    typeorm_1.ManyToOne(type => evento_anio_entity_1.EventoAnioEntity, eventoAnio => eventoAnio.presentacionesEventoAnio),
    __metadata("design:type", Object)
], PresentacionEntity.prototype, "eventoAnio", void 0);
__decorate([
    typeorm_1.OneToMany(type => cancion_setlist_entity_1.CancionSetlistEntity, setlist => setlist.presentacion),
    __metadata("design:type", Array)
], PresentacionEntity.prototype, "cancionesSetlistPresentacion", void 0);
__decorate([
    typeorm_1.OneToMany(type => presentacion_artista_entity_1.PresentacionArtistaEntity, presentacionArtista => presentacionArtista.presentacion),
    __metadata("design:type", Array)
], PresentacionEntity.prototype, "presentacionesArtista", void 0);
PresentacionEntity = __decorate([
    typeorm_1.Entity('presentacion')
], PresentacionEntity);
exports.PresentacionEntity = PresentacionEntity;
//# sourceMappingURL=presentacion.entity.js.map