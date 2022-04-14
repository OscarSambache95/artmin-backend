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
exports.GeneroEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const genero_artista_album_cancion_entity_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.entity");
let GeneroEntity = class GeneroEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], GeneroEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], GeneroEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => genero_artista_album_cancion_entity_1.GeneroArtistaAlbumCancionEntity, generoArtistaAlbumCancion => generoArtistaAlbumCancion.genero),
    __metadata("design:type", Array)
], GeneroEntity.prototype, "generosArtistaAlbumCancion", void 0);
GeneroEntity = __decorate([
    typeorm_1.Entity('genero')
], GeneroEntity);
exports.GeneroEntity = GeneroEntity;
//# sourceMappingURL=genero.entity.js.map