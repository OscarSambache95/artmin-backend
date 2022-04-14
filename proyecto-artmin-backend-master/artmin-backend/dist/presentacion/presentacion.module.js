"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentacionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const presentacion_controller_1 = require("./presentacion.controller");
const presentacion_entity_1 = require("./presentacion.entity");
const presentacion_service_1 = require("./presentacion.service");
let PresentacionModule = class PresentacionModule {
};
PresentacionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([presentacion_entity_1.PresentacionEntity], 'default')],
        controllers: [presentacion_controller_1.PresentacionController],
        providers: [presentacion_service_1.PresentacionService],
        exports: [presentacion_service_1.PresentacionService],
    })
], PresentacionModule);
exports.PresentacionModule = PresentacionModule;
//# sourceMappingURL=presentacion.module.js.map