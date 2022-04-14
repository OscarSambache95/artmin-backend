"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartPosicionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const chart_posicion_entity_1 = require("./chart-posicion.entity");
let ChartPosicionService = class ChartPosicionService extends principal_service_1.PrincipalService {
    constructor(_chartPosicionRepository) {
        super(_chartPosicionRepository, chart_posicion_entity_1.ChartPosicionEntity);
        this._chartPosicionRepository = _chartPosicionRepository;
    }
};
ChartPosicionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(chart_posicion_entity_1.ChartPosicionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChartPosicionService);
exports.ChartPosicionService = ChartPosicionService;
//# sourceMappingURL=chart-posicion.service.js.map