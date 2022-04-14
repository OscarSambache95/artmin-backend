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
exports.TipoEventoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const evento_entity_1 = require("../evento/evento.entity");
let TipoEventoEntity = class TipoEventoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], TipoEventoEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], TipoEventoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_entity_1.EventoEntity, evento => evento.tipoEvento),
    __metadata("design:type", Array)
], TipoEventoEntity.prototype, "eventosTipoEvento", void 0);
TipoEventoEntity = __decorate([
    typeorm_1.Entity('tipo-evento')
], TipoEventoEntity);
exports.TipoEventoEntity = TipoEventoEntity;
//# sourceMappingURL=tipo-evento.entity.js.map