"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificadoChartModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const certificado_chart_entity_1 = require("./certificado-chart.entity");
const certificado_chart_service_1 = require("./certificado-chart.service");
const certificado_chart_controller_1 = require("./certificado-chart.controller");
const certificado_chart_fecha_module_1 = require("../certificado-chart-fecha/certificado-chart-fecha.module");
let CertificadoChartModule = class CertificadoChartModule {
};
CertificadoChartModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([certificado_chart_entity_1.CertificadoChartEntity], 'default'),
            certificado_chart_fecha_module_1.CertificadoChartFechaModule
        ],
        controllers: [certificado_chart_controller_1.CertificadoChartController],
        providers: [certificado_chart_service_1.CertificadoChartService],
        exports: [certificado_chart_service_1.CertificadoChartService],
    })
], CertificadoChartModule);
exports.CertificadoChartModule = CertificadoChartModule;
//# sourceMappingURL=certificado-chart.module.js.map