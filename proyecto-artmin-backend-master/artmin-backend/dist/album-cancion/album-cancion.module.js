"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumCancionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_cancion_entity_1 = require("./album-cancion.entity");
const album_cancion_controller_1 = require("./album-cancion.controller");
const album_cancion_service_1 = require("./album-cancion.service");
let AlbumCancionModule = class AlbumCancionModule {
};
AlbumCancionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([album_cancion_entity_1.AlbumCancionEntity], 'default')],
        controllers: [album_cancion_controller_1.AlbumCancionController],
        providers: [album_cancion_service_1.AlbumCancionService],
        exports: [album_cancion_service_1.AlbumCancionService],
    })
], AlbumCancionModule);
exports.AlbumCancionModule = AlbumCancionModule;
//# sourceMappingURL=album-cancion.module.js.map