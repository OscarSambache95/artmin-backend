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
exports.EventoAnioEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const evento_entity_1 = require("../evento/evento.entity");
const presentacion_entity_1 = require("../presentacion/presentacion.entity");
let EventoAnioEntity = class EventoAnioEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio',
    }),
    __metadata("design:type", Number)
], EventoAnioEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'lugar',
    }),
    __metadata("design:type", String)
], EventoAnioEntity.prototype, "lugar", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha',
    }),
    __metadata("design:type", String)
], EventoAnioEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.ManyToOne(type => evento_entity_1.EventoEntity, evento => evento.eventosAnioEvento),
    __metadata("design:type", Object)
], EventoAnioEntity.prototype, "evento", void 0);
__decorate([
    typeorm_1.OneToMany(type => presentacion_entity_1.PresentacionEntity, presentacion => presentacion.eventoAnio),
    __metadata("design:type", Array)
], EventoAnioEntity.prototype, "presentacionesEventoAnio", void 0);
EventoAnioEntity = __decorate([
    typeorm_1.Entity('evento-anio')
], EventoAnioEntity);
exports.EventoAnioEntity = EventoAnioEntity;
//# sourceMappingURL=evento-anio.entity.js.map