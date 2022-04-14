"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoCancionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_cancion_entity_1 = require("./tipo-cancion.entity");
const tipo_cancion_controller_1 = require("./tipo-cancion.controller");
const tipo_cancion_service_1 = require("./tipo-cancion.service");
let TipoCancionModule = class TipoCancionModule {
};
TipoCancionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipo_cancion_entity_1.TipoCancionEntity], 'default')],
        controllers: [tipo_cancion_controller_1.TipoCancionController],
        providers: [tipo_cancion_service_1.TipoCancionService],
        exports: [tipo_cancion_service_1.TipoCancionService],
    })
], TipoCancionModule);
exports.TipoCancionModule = TipoCancionModule;
//# sourceMappingURL=tipo-cancion.module.js.map