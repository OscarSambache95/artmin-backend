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
exports.PremioEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const premio_anio_entity_1 = require("../premio-anio/premio-anio.entity");
const categoria_entity_1 = require("../categoria/categoria.entity");
let PremioEntity = class PremioEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], PremioEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], PremioEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => premio_anio_entity_1.PremioAnioEntity, premioAnio => premioAnio.premio),
    __metadata("design:type", Array)
], PremioEntity.prototype, "premiosAnioPremio", void 0);
__decorate([
    typeorm_1.OneToMany(type => categoria_entity_1.CategoriaEntity, categoria => categoria.premio),
    __metadata("design:type", Array)
], PremioEntity.prototype, "categoriasPremio", void 0);
PremioEntity = __decorate([
    typeorm_1.Entity('premio')
], PremioEntity);
exports.PremioEntity = PremioEntity;
//# sourceMappingURL=premio.entity.js.map