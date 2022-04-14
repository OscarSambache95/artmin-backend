"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoAnioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const evento_anio_service_1 = require("./evento-anio.service");
const evento_anio_entity_1 = require("./evento-anio.entity");
const evento_anio_controller_1 = require("./evento-anio.controller");
let EventoAnioModule = class EventoAnioModule {
};
EventoAnioModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([evento_anio_entity_1.EventoAnioEntity], 'default')],
        controllers: [evento_anio_controller_1.EventoAnioController],
        providers: [evento_anio_service_1.EventoAnioService],
        exports: [evento_anio_service_1.EventoAnioService],
    })
], EventoAnioModule);
exports.EventoAnioModule = EventoAnioModule;
//# sourceMappingURL=evento-anio.module.js.map