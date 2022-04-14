"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancionArtistaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cancion_artista_service_1 = require("./cancion-artista.service");
const cancion_artista_entity_1 = require("./cancion-artista.entity");
const cancion_artista_controller_1 = require("./cancion-artista.controller");
let CancionArtistaModule = class CancionArtistaModule {
};
CancionArtistaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([cancion_artista_entity_1.CancionArtistaEntity], 'default')],
        controllers: [cancion_artista_controller_1.CancionArtistaController],
        providers: [cancion_artista_service_1.CancionArtistaService],
        exports: [cancion_artista_service_1.CancionArtistaService],
    })
], CancionArtistaModule);
exports.CancionArtistaModule = CancionArtistaModule;
//# sourceMappingURL=cancion-artista.module.js.map