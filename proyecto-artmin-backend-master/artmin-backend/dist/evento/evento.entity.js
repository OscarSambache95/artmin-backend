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
exports.EventoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const tipo_evento_entity_1 = require("../tipo-evento/tipo-evento.entity");
const evento_anio_entity_1 = require("../evento-anio/evento-anio.entity");
let EventoEntity = class EventoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], EventoEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], EventoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipo_evento_entity_1.TipoEventoEntity, tipoEvento => tipoEvento.eventosTipoEvento),
    __metadata("design:type", Object)
], EventoEntity.prototype, "tipoEvento", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_anio_entity_1.EventoAnioEntity, eventoAnio => eventoAnio.evento),
    __metadata("design:type", Array)
], EventoEntity.prototype, "eventosAnioEvento", void 0);
EventoEntity = __decorate([
    typeorm_1.Entity('evento')
], EventoEntity);
exports.EventoEntity = EventoEntity;
//# sourceMappingURL=evento.entity.js.map