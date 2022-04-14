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
exports.CertificadoChartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const certificado_chart_entity_1 = require("./certificado-chart.entity");
const index_1 = require("typeorm/index");
const certificado_chart_fecha_service_1 = require("../certificado-chart-fecha/certificado-chart-fecha.service");
let CertificadoChartService = class CertificadoChartService extends principal_service_1.PrincipalService {
    constructor(_certificadoChartRepository, _certificadoChartFechaService) {
        super(_certificadoChartRepository, certificado_chart_entity_1.CertificadoChartEntity);
        this._certificadoChartRepository = _certificadoChartRepository;
        this._certificadoChartFechaService = _certificadoChartFechaService;
    }
    guardarCertificadoChart(certificadoChart, certificadosChartFecha) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const certificadoChartCreado = yield this.create(certificadoChart);
                if (certificadoChartCreado) {
                    yield this._certificadoChartFechaService
                        .guardarCertificadosChartFecha(certificadoChartCreado.id, certificadosChartFecha);
                    const certificadosChartFechaOrdenadas = yield this._certificadoChartFechaService
                        .find({
                        where: {
                            certificadoChart: certificadoChartCreado.id,
                        },
                        order: {
                            fecha: "DESC",
                        },
                        take: 1
                    });
                    if (certificadosChartFechaOrdenadas[0] && certificadosChartFechaOrdenadas[0][0]) {
                        yield this.repository.update(certificadoChartCreado.id, {
                            fechaActualizacion: certificadosChartFechaOrdenadas[0][0].fecha
                        });
                    }
                    const consulta = {
                        where: {
                            id: certificadoChartCreado.id,
                        },
                        relations: [
                            'chart',
                            'certificadosChartFecha',
                            'certificadosChartFecha.certificado',
                            'certificadosChartFecha.certificado.medida',
                            'cancion',
                            'cancion.imagenesCancion',
                            'cancion.artistasCancion',
                            'cancion.artistasCancion.artista',
                            'album',
                            'album.imagenesAlbum',
                            'album.artistasAlbum',
                            'album.artistasAlbum.artista',
                            'video',
                            'video.cancion',
                            'video.cancion.artistasCancion',
                            'video.cancion.artistasCancion.artista',
                        ]
                    };
                    return yield this.findOne(consulta);
                }
            }
            catch (e) {
                console.error(e);
                throw new common_1.BadRequestException(e);
            }
        });
    }
    editarCertificadoChart(idCertificadoChart, certificadoChart, certificadosChartFecha) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const certificadoChartEditado = yield this.findOneByIdAndUpdate(idCertificadoChart, certificadoChart);
                if (certificadoChartEditado) {
                    yield this._certificadoChartFechaService
                        .guardarCertificadosChartFecha(certificadoChartEditado.id, certificadosChartFecha);
                    const certificadosChartFechaOrdenadas = yield this._certificadoChartFechaService
                        .find({
                        where: {
                            certificadoChart: certificadoChartEditado.id,
                        },
                        order: {
                            fecha: "DESC",
                        },
                        take: 1
                    });
                    if (certificadosChartFechaOrdenadas[0] && certificadosChartFechaOrdenadas[0][0]) {
                        certificadoChartEditado.fechaActualizacion = certificadosChartFechaOrdenadas[0][0].fecha;
                        yield this.findOneByIdAndUpdate(certificadoChartEditado.id, certificadoChartEditado);
                    }
                    const consulta = {
                        where: {
                            id: certificadoChartEditado.id,
                        },
                        relations: [
                            'chart',
                            'certificadosChartFecha',
                            'certificadosChartFecha.certificado',
                            'certificadosChartFecha.certificado.medida',
                            'cancion',
                            'cancion.imagenesCancion',
                            'cancion.artistasCancion',
                            'cancion.artistasCancion.artista',
                            'album',
                            'album.imagenesAlbum',
                            'album.artistasAlbum',
                            'album.artistasAlbum.artista',
                            'video',
                            'video.cancion',
                            'video.cancion.artistasCancion',
                            'video.cancion.artistasCancion.artista',
                        ]
                    };
                    return yield this.findOne(consulta);
                }
            }
            catch (e) {
                console.error(e);
                throw new common_1.BadRequestException(e);
            }
        });
    }
    obtenerCertificadosChart(datosConsultaCertificados) {
        return __awaiter(this, void 0, void 0, function* () {
            let condicionNombre = '';
            let condicionArtista = datosConsultaCertificados.idArtista !== '' ? ' ( artista.id = :idArtista )' : '';
            let condicionAChart = datosConsultaCertificados.idChart !== '' ? ' ( chart.id = :idChart )' : '';
            let condicionACertificado = datosConsultaCertificados.idCertificado ? ' ( certificado.id = :idCertificado )' : '';
            const consultaBase = yield index_1.getRepository(certificado_chart_entity_1.CertificadoChartEntity)
                .createQueryBuilder('certificadoChart')
                .leftJoinAndSelect('certificadoChart.chart', 'chart')
                .leftJoinAndSelect('certificadoChart.certificadosChartFecha', 'certificadoChartFecha')
                .leftJoinAndSelect('certificadoChartFecha.certificado', 'certificado')
                .leftJoinAndSelect('certificado.medida', 'medida');
            if (datosConsultaCertificados.tipo === 'cancion') {
                condicionNombre = datosConsultaCertificados.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('certificadoChart.cancion', 'cancion')
                    .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
                    .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                    .leftJoinAndSelect('cancionArtista.artista', 'artista');
            }
            if (datosConsultaCertificados.tipo === 'album') {
                condicionNombre = datosConsultaCertificados.busqueda !== '' ? ' ( album.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('certificadoChart.album', 'album')
                    .leftJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
                    .leftJoinAndSelect('album.artistasAlbum', 'albumArtista')
                    .leftJoinAndSelect('albumArtista.artista', 'artista');
            }
            if (datosConsultaCertificados.tipo === 'video') {
                condicionNombre = datosConsultaCertificados.busqueda !== '' ? ' ( video.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('certificadoChart.video', 'video')
                    .leftJoinAndSelect('video.cancion', 'cancion')
                    .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                    .leftJoinAndSelect('cancionArtista.artista', 'artista');
            }
            const arregloCondiciones = [
                condicionArtista,
                condicionAChart,
                condicionACertificado,
                condicionNombre,
            ].filter(condicion => condicion !== '');
            const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
                return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : ' AND ');
            }, '');
            return consultaBase
                .where(condicion, {
                busqueda: `%${datosConsultaCertificados.busqueda}%`,
                idArtista: datosConsultaCertificados.idArtista,
                idChart: datosConsultaCertificados.idChart,
                idCertificado: datosConsultaCertificados.idCertificado,
            })
                .orderBy('certificadoChart.fechaActualizacion', 'DESC')
                .getManyAndCount();
        });
    }
};
CertificadoChartService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(certificado_chart_entity_1.CertificadoChartEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        certificado_chart_fecha_service_1.CertificadoChartFechaService])
], CertificadoChartService);
exports.CertificadoChartService = CertificadoChartService;
//# sourceMappingURL=certificado-chart.service.js.map