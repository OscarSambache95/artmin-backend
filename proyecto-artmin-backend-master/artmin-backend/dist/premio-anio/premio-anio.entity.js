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
exports.PremioAnioEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const premio_entity_1 = require("../premio/premio.entity");
const nominacion_artista_album_cancion_video_entity_1 = require("../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity");
const presentacion_entity_1 = require("../presentacion/presentacion.entity");
let PremioAnioEntity = class PremioAnioEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio',
    }),
    __metadata("design:type", Number)
], PremioAnioEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'lugar',
    }),
    __metadata("design:type", String)
], PremioAnioEntity.prototype, "lugar", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'fecha',
    }),
    __metadata("design:type", String)
], PremioAnioEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.ManyToOne(type => premio_entity_1.PremioEntity, premio => premio.premiosAnioPremio),
    __metadata("design:type", Object)
], PremioAnioEntity.prototype, "premio", void 0);
__decorate([
    typeorm_1.OneToMany(type => nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity, nominacionPremioAnio => nominacionPremioAnio.premioAnio),
    __metadata("design:type", Array)
], PremioAnioEntity.prototype, "nominacionesPremioAnio", void 0);
__decorate([
    typeorm_1.OneToMany(type => presentacion_entity_1.PresentacionEntity, presentacion => presentacion.premioAnio),
    __metadata("design:type", Array)
], PremioAnioEntity.prototype, "presentacionesPremioAnio", void 0);
PremioAnioEntity = __decorate([
    typeorm_1.Entity('premio-anio')
], PremioAnioEntity);
exports.PremioAnioEntity = PremioAnioEntity;
//# sourceMappingURL=premio-anio.entity.js.map