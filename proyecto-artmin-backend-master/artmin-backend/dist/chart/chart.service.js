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
exports.ChartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const chart_entity_1 = require("./chart.entity");
const index_1 = require("typeorm/index");
let ChartService = class ChartService extends principal_service_1.PrincipalService {
    constructor(_chartRepository) {
        super(_chartRepository, chart_entity_1.ChartEntity);
        this._chartRepository = _chartRepository;
    }
    obtenerCharts(datosConsultaChart) {
        return __awaiter(this, void 0, void 0, function* () {
            const condicionPlataforma = datosConsultaChart.idPlataforma ? ' plataforma.id = :idPlataforma ' : '';
            const condicionNombre = datosConsultaChart.busqueda !== '' ? ' ( chart.nombre LIKE :busqueda )' : '';
            const condicionLugar = datosConsultaChart.idLugar ? ' lugar.id = :idLugar ' : '';
            const condicionTipoChart = datosConsultaChart.tipoChart ? ' chart.tipo = :tipoChart ' : '';
            const arregloCondiciones = [
                condicionPlataforma,
                condicionLugar,
                condicionTipoChart,
                condicionNombre,
            ].filter(condicion => condicion !== '');
            const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
                return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : 'AND');
            }, '');
            return yield index_1.getRepository(chart_entity_1.ChartEntity)
                .createQueryBuilder('chart')
                .leftJoinAndSelect('chart.plataforma', 'plataforma')
                .leftJoinAndSelect('plataforma.imagenesPlataforma', 'imagenesPlataforma')
                .leftJoinAndSelect('chart.lugar', 'lugar')
                .leftJoinAndSelect('lugar.imagenesLugar', 'imagenesLugar')
                .where(condicion, {
                busqueda: `%${datosConsultaChart.busqueda}%`,
                idPlataforma: datosConsultaChart.idPlataforma,
                idLugar: datosConsultaChart.idLugar,
                tipoChart: datosConsultaChart.tipoChart
            })
                .orderBy('chart.id', 'DESC')
                .getManyAndCount();
        });
    }
};
ChartService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(chart_entity_1.ChartEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChartService);
exports.ChartService = ChartService;
//# sourceMappingURL=chart.service.js.map