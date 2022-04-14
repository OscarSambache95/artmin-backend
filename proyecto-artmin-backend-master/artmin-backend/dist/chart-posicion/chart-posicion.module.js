"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartPosicionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chart_posicion_entity_1 = require("./chart-posicion.entity");
const chart_posicion_service_1 = require("./chart-posicion.service");
const chart_posicion_controller_1 = require("./chart-posicion.controller");
let ChartPosicionModule = class ChartPosicionModule {
};
ChartPosicionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([chart_posicion_entity_1.ChartPosicionEntity], 'default')],
        controllers: [chart_posicion_controller_1.ChartPosicionController],
        providers: [chart_posicion_service_1.ChartPosicionService],
        exports: [chart_posicion_service_1.ChartPosicionService],
    })
], ChartPosicionModule);
exports.ChartPosicionModule = ChartPosicionModule;
//# sourceMappingURL=chart-posicion.module.js.map