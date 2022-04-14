"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const premio_controller_1 = require("./premio.controller");
const premio_service_1 = require("./premio.service");
const premio_entity_1 = require("./premio.entity");
let PremioModule = class PremioModule {
};
PremioModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([premio_entity_1.PremioEntity], 'default')],
        controllers: [premio_controller_1.PremioController],
        providers: [premio_service_1.PremioService],
        exports: [premio_service_1.PremioService],
    })
], PremioModule);
exports.PremioModule = PremioModule;
//# sourceMappingURL=premio.module.js.map