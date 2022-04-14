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
exports.TourEntity = void 0;
const typeorm_1 = require("typeorm");
const principal_entity_1 = require("../principal/principal-entity");
const tour_lugar_entity_1 = require("../tour-lugar/tour-lugar.entity");
const artista_tour_entity_1 = require("../artista-tour/artista-tour.entity");
const setlist_entity_1 = require("../setlist/setlist.entity");
const imagen_entity_1 = require("../imagen/imagen.entity");
let TourEntity = class TourEntity extends principal_entity_1.PrincipalEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'nombre',
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'sinopsis',
        nullable: true,
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "sinopsis", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'observaciones',
        nullable: true,
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "observaciones", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        name: 'fecha_inicio',
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "fechaInicio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        name: 'fecha_fin',
        nullable: true,
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "fechaFin", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'lugar_inicio',
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "lugarInicio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'lugar_fin',
        nullable: true,
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "lugarFin", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'cantidad_shows',
        default: 0,
    }),
    __metadata("design:type", Number)
], TourEntity.prototype, "cantidadShows", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'cantidad_tickets',
        default: 0,
    }),
    __metadata("design:type", Number)
], TourEntity.prototype, "cantidadTickets", void 0);
__decorate([
    typeorm_1.Column({
        type: 'float',
        default: 0,
        name: 'recaudacion',
    }),
    __metadata("design:type", Number)
], TourEntity.prototype, "recaudacion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'anio',
    }),
    __metadata("design:type", Number)
], TourEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        name: 'tipo',
        enum: ['gira', 'residencia'],
    }),
    __metadata("design:type", String)
], TourEntity.prototype, "tipo", void 0);
__decorate([
    typeorm_1.OneToMany(type => tour_lugar_entity_1.TourLugarEntity, tourLugar => tourLugar.tour),
    __metadata("design:type", Array)
], TourEntity.prototype, "lugaresTour", void 0);
__decorate([
    typeorm_1.OneToMany(type => artista_tour_entity_1.ArtistaTourEntity, artistaTour => artistaTour.tour),
    __metadata("design:type", Array)
], TourEntity.prototype, "artistasTour", void 0);
__decorate([
    typeorm_1.OneToMany(type => setlist_entity_1.SetlistEntity, setlist => setlist.tour),
    __metadata("design:type", Array)
], TourEntity.prototype, "setlistsTour", void 0);
__decorate([
    typeorm_1.OneToMany(type => imagen_entity_1.ImagenEntity, imagen => imagen.tour),
    __metadata("design:type", Array)
], TourEntity.prototype, "imagenesTour", void 0);
TourEntity = __decorate([
    typeorm_1.Entity('tour')
], TourEntity);
exports.TourEntity = TourEntity;
//# sourceMappingURL=tour.entity.js.map