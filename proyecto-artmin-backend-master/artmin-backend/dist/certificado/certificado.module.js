"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificadoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const certificado_controller_1 = require("./certificado.controller");
const certificado_service_1 = require("./certificado.service");
const certificado_entity_1 = require("./certificado.entity");
let CertificadoModule = class CertificadoModule {
};
CertificadoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([certificado_entity_1.CertificadoEntity], 'default')],
        controllers: [certificado_controller_1.CertificadoController],
        providers: [certificado_service_1.CertificadoService],
        exports: [certificado_service_1.CertificadoService],
    })
], CertificadoModule);
exports.CertificadoModule = CertificadoModule;
//# sourceMappingURL=certificado.module.js.map