"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremioAnioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const premio_anio_entity_1 = require("./premio-anio.entity");
const premio_anio_service_1 = require("./premio-anio.service");
const premio_anio_controller_1 = require("./premio-anio.controller");
let PremioAnioModule = class PremioAnioModule {
};
PremioAnioModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([premio_anio_entity_1.PremioAnioEntity], 'default')],
        controllers: [premio_anio_controller_1.PremioAnioController],
        providers: [premio_anio_service_1.PremioAnioService],
        exports: [premio_anio_service_1.PremioAnioService],
    })
], PremioAnioModule);
exports.PremioAnioModule = PremioAnioModule;
//# sourceMappingURL=premio-anio.module.js.map