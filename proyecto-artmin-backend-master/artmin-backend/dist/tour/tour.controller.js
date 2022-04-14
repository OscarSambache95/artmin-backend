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
exports.TourController = void 0;
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
const tour_service_1 = require("./tour.service");
let TourController = class TourController extends principal_controller_1.PrincipalAbstractController {
    constructor(_tourService) {
        super(_tourService);
        this._tourService = _tourService;
    }
    obtenerTourPorArtistasTipo(datosConsultaTours) {
        return __awaiter(this, void 0, void 0, function* () {
            const existeDatos = datosConsultaTours;
            if (existeDatos) {
                return yield this._tourService.obtenerTourPorArtistasTipo(JSON.parse(datosConsultaTours));
            }
            else {
                throw new common_1.BadRequestException('No envía parámetros');
            }
        });
    }
    crearCancion(file, tourJsonString) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tour = JSON.parse(tourJsonString);
                return yield this._tourService.guardarTour(tour, file);
            }
            catch (error) {
                console.error('Error al crear tour', error);
                throw new common_1.BadRequestException('Error al crear el tour');
            }
        });
    }
};
__decorate([
    common_1.Get('tours-por-artista-tipo'),
    __param(0, common_1.Query('datosConsulta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TourController.prototype, "obtenerTourPorArtistasTipo", null);
__decorate([
    common_1.Post('crear-tour-imagen'),
    common_1.UseInterceptors(common_1.FileInterceptor('imagen')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Body('tour')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TourController.prototype, "crearCancion", null);
TourController = __decorate([
    common_1.Controller('tour'),
    __metadata("design:paramtypes", [tour_service_1.TourService])
], TourController);
exports.TourController = TourController;
//# sourceMappingURL=tour.controller.js.map