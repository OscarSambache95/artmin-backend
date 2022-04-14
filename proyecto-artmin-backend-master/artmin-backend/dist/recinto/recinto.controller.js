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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecintoController = void 0;
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
const recinto_service_1 = require("./recinto.service");
let RecintoController = class RecintoController extends principal_controller_1.PrincipalAbstractController {
    constructor(_recintoService) {
        super(_recintoService);
        this._recintoService = _recintoService;
    }
};
RecintoController = __decorate([
    common_1.Controller('recinto'),
    __metadata("design:paramtypes", [recinto_service_1.RecintoService])
], RecintoController);
exports.RecintoController = RecintoController;
//# sourceMappingURL=recinto.controller.js.map