"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoEventoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_evento_entity_1 = require("./tipo-evento.entity");
const tipo_evento_controller_1 = require("./tipo-evento.controller");
const tipo_evento_service_1 = require("./tipo-evento.service");
let TipoEventoModule = class TipoEventoModule {
};
TipoEventoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipo_evento_entity_1.TipoEventoEntity], 'default')],
        controllers: [tipo_evento_controller_1.TipoEventoController],
        providers: [tipo_evento_service_1.TipoEventoService],
        exports: [tipo_evento_service_1.TipoEventoService],
    })
], TipoEventoModule);
exports.TipoEventoModule = TipoEventoModule;
//# sourceMappingURL=tipo-evento.module.js.map