"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistaTourModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artista_tour_entity_1 = require("./artista-tour.entity");
const artista_tour_service_1 = require("./artista-tour.service");
const artista_tour_controller_1 = require("./artista-tour.controller");
let ArtistaTourModule = class ArtistaTourModule {
};
ArtistaTourModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([artista_tour_entity_1.ArtistaTourEntity], 'default')],
        controllers: [artista_tour_controller_1.ArtistaTourController],
        providers: [artista_tour_service_1.ArtistaTourService],
        exports: [artista_tour_service_1.ArtistaTourService],
    })
], ArtistaTourModule);
exports.ArtistaTourModule = ArtistaTourModule;
//# sourceMappingURL=artista-tour.module.js.map