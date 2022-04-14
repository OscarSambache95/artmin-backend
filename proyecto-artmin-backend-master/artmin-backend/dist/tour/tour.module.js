"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tour_service_1 = require("./tour.service");
const tour_controller_1 = require("./tour.controller");
const tour_entity_1 = require("./tour.entity");
const imagen_module_1 = require("../imagen/imagen.module");
const artista_tour_module_1 = require("../artista-tour/artista-tour.module");
let TourModule = class TourModule {
};
TourModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tour_entity_1.TourEntity], 'default'),
            imagen_module_1.ImagenModule,
            artista_tour_module_1.ArtistaTourModule,
        ],
        controllers: [tour_controller_1.TourController],
        providers: [tour_service_1.TourService],
        exports: [tour_service_1.TourService],
    })
], TourModule);
exports.TourModule = TourModule;
//# sourceMappingURL=tour.module.js.map