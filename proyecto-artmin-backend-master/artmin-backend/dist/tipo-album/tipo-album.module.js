"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoAlbumModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_album_service_1 = require("./tipo-album.service");
const tipo_album_controller_1 = require("./tipo-album.controller");
const tipo_album_entity_1 = require("./tipo-album.entity");
let TipoAlbumModule = class TipoAlbumModule {
};
TipoAlbumModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipo_album_entity_1.TipoAlbumEntity], 'default')],
        controllers: [tipo_album_controller_1.TipoAlbumController],
        providers: [tipo_album_service_1.TipoAlbumService],
        exports: [tipo_album_service_1.TipoAlbumService],
    })
], TipoAlbumModule);
exports.TipoAlbumModule = TipoAlbumModule;
//# sourceMappingURL=tipo-album.module.js.map