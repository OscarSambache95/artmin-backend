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
exports.TipoVideoEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const video_entity_1 = require("../video/video.entity");
let TipoVideoEntity = class TipoVideoEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], TipoVideoEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.OneToMany(type => video_entity_1.VideoEntity, video => video.tipoVideo),
    __metadata("design:type", Array)
], TipoVideoEntity.prototype, "videos", void 0);
TipoVideoEntity = __decorate([
    typeorm_1.Entity('tipo-video')
], TipoVideoEntity);
exports.TipoVideoEntity = TipoVideoEntity;
//# sourceMappingURL=tipo-video.entity.js.map