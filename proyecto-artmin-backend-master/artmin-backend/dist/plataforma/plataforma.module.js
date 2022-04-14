"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlataformaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const plataforma_controller_1 = require("./plataforma.controller");
const plataforma_entity_1 = require("./plataforma.entity");
const plataforma_service_1 = require("./plataforma.service");
let PlataformaModule = class PlataformaModule {
};
PlataformaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([plataforma_entity_1.PlataformaEntity], 'default')],
        controllers: [plataforma_controller_1.PlataformaController],
        providers: [plataforma_service_1.PlataformaService],
        exports: [plataforma_service_1.PlataformaService],
    })
], PlataformaModule);
exports.PlataformaModule = PlataformaModule;
//# sourceMappingURL=plataforma.module.js.map