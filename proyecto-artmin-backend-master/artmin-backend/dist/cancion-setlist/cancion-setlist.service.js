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
exports.CancionSetlistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const cancion_setlist_entity_1 = require("./cancion-setlist.entity");
let CancionSetlistService = class CancionSetlistService extends principal_service_1.PrincipalService {
    constructor(_setlistRepository) {
        super(_setlistRepository, cancion_setlist_entity_1.CancionSetlistEntity);
        this._setlistRepository = _setlistRepository;
    }
};
CancionSetlistService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cancion_setlist_entity_1.CancionSetlistEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CancionSetlistService);
exports.CancionSetlistService = CancionSetlistService;
//# sourceMappingURL=cancion-setlist.service.js.map