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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LugarController = void 0;
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
const lugar_service_1 = require("./lugar.service");
let LugarController = class LugarController extends principal_controller_1.PrincipalAbstractController {
    constructor(_lugarService) {
        super(_lugarService);
        this._lugarService = _lugarService;
    }
    crearCancion(file, lugarJsonString) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lugar = JSON.parse(lugarJsonString);
                return yield this._lugarService.guardarLugarImagen(lugar, file);
            }
            catch (error) {
                console.error('Error al crear lugar', error);
                throw new common_1.BadRequestException('Error al crear el lugar');
            }
        });
    }
    buscarLugares(datosConsulta) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._lugarService.buscarLugares(JSON.parse(datosConsulta));
            }
            catch (e) {
                console.error({
                    error: e,
                    mensaje: 'Error al buscar los lugares padre',
                    data: JSON.parse(datosConsulta),
                });
                throw new common_1.BadRequestException({
                    mensaje: 'Error al buscar lugares padre',
                });
            }
        });
    }
};
__decorate([
    common_1.Post('crear-lugar-imagen'),
    common_1.UseInterceptors(common_1.FileInterceptor('imagen')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Body('lugar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LugarController.prototype, "crearCancion", null);
__decorate([
    common_1.Get('buscar-lugares-padre'),
    __param(0, common_1.Query('datosConsulta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LugarController.prototype, "buscarLugares", null);
LugarController = __decorate([
    common_1.Controller('lugar'),
    __metadata("design:paramtypes", [lugar_service_1.LugarService])
], LugarController);
exports.LugarController = LugarController;
//# sourceMappingURL=lugar.controller.js.map