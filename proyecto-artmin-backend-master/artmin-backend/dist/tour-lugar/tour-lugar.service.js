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
exports.TourLugarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const tour_lugar_entity_1 = require("./tour-lugar.entity");
let TourLugarService = class TourLugarService extends principal_service_1.PrincipalService {
    constructor(_tourLugarRepository) {
        super(_tourLugarRepository, tour_lugar_entity_1.TourLugarEntity);
        this._tourLugarRepository = _tourLugarRepository;
    }
};
TourLugarService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tour_lugar_entity_1.TourLugarEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TourLugarService);
exports.TourLugarService = TourLugarService;
//# sourceMappingURL=tour-lugar.service.js.map