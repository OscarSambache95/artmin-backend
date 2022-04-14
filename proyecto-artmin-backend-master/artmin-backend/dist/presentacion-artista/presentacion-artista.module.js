"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentacionArtistaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const presentacion_artista_entity_1 = require("./presentacion-artista.entity");
const presentacion_artista_controller_1 = require("./presentacion-artista.controller");
const presentacion_artista_service_1 = require("./presentacion-artista.service");
let PresentacionArtistaModule = class PresentacionArtistaModule {
};
PresentacionArtistaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([presentacion_artista_entity_1.PresentacionArtistaEntity], 'default')],
        controllers: [presentacion_artista_controller_1.PresentacionArtistaController],
        providers: [presentacion_artista_service_1.PresentacionArtistaService],
        exports: [presentacion_artista_service_1.PresentacionArtistaService],
    })
], PresentacionArtistaModule);
exports.PresentacionArtistaModule = PresentacionArtistaModule;
//# sourceMappingURL=presentacion-artista.module.js.map