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
exports.LugarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const lugar_entity_1 = require("./lugar.entity");
const imagen_service_1 = require("../imagen/imagen.service");
let LugarService = class LugarService extends principal_service_1.PrincipalService {
    constructor(_lugarRepository, _imagenService) {
        super(_lugarRepository, lugar_entity_1.LugarEntity);
        this._lugarRepository = _lugarRepository;
        this._imagenService = _imagenService;
    }
    buscarLugares(datosBuscarLugares) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            if (datosBuscarLugares.nombre && datosBuscarLugares.nombre !== '') {
                where.nombre = typeorm_2.Like(`%${datosBuscarLugares.nombre}%`);
            }
            if (datosBuscarLugares.tipo && datosBuscarLugares.tipo !== '') {
                where.tipo = datosBuscarLugares.tipo;
            }
            const criteriosBusqueda = {
                where,
                relations: [
                    'lugarPadre',
                    'imagenesLugar',
                ],
            };
            try {
                const lugaresEncontradasConPadres = (yield this.find(criteriosBusqueda))[0];
                try {
                    const respuesta = yield this.obtenerLugaresPadre(lugaresEncontradasConPadres);
                    return [respuesta, respuesta.length];
                }
                catch (e) {
                    console.error({
                        error: e,
                        mensaje: 'Error al buscar los lugares padre',
                        data: datosBuscarLugares,
                    });
                    throw new common_1.InternalServerErrorException({
                        mensaje: 'Error al buscar los lugares padre',
                    });
                }
            }
            catch (e) {
                console.error({
                    error: e,
                    mensaje: 'Error al buscar los lugares padre',
                    data: criteriosBusqueda,
                });
                throw new common_1.InternalServerErrorException({
                    mensaje: 'Error al buscar los lugares padre',
                });
            }
        });
    }
    obtenerLugaresPadre(lugaresConCoindicencias) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lugaresEncontradasConPadres = yield Promise.all(lugaresConCoindicencias.map((lugar) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const areasPisoPadre = yield this._lugarRepository.findAncestorsTree(lugar);
                        return this.obtenerLugarPadre(areasPisoPadre);
                    }
                    catch (e) {
                        console.error({
                            error: e,
                            mensaje: 'Error al obtener el lugar padre',
                            data: {
                                lugar,
                            },
                        });
                        throw new common_1.InternalServerErrorException({
                            mensaje: 'Error al obtener el lugar padre',
                        });
                    }
                })));
                return lugaresEncontradasConPadres;
            }
            catch (e) {
                console.error({
                    error: e,
                    mensaje: 'Error al obtener arreglo de las áreas piso padre',
                    data: { lugaresConCoindicencias },
                });
                throw new common_1.InternalServerErrorException({
                    mensaje: 'Error al obtener arreglo de  las áreas piso padre',
                });
            }
        });
    }
    obtenerLugarPadre(lugar) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!lugar.lugarPadre) {
                    return yield this._lugarRepository.findDescendantsTree(lugar);
                }
                else {
                    return this.obtenerLugarPadre(lugar.lugarPadre);
                }
            }
            catch (e) {
                console.error({
                    error: e,
                    mensaje: 'Error al obtener el lugar padre',
                    data: { lugar },
                });
                throw new common_1.InternalServerErrorException({
                    mensaje: 'Error al obtener el lugar padre',
                });
            }
        });
    }
    guardarLugarImagen(lugar, imagenFile) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lugarCreadoEditado;
                if (lugar.id) {
                    delete lugar.imagen;
                    lugarCreadoEditado = yield this.findOneByIdAndUpdate(lugar.id, lugar);
                }
                else {
                    lugarCreadoEditado = yield this.create(lugar);
                }
                if (lugarCreadoEditado) {
                    if (lugar.id) {
                        const imagenEncontrada = yield this._imagenService.findOne({
                            where: {
                                lugar: lugar.id,
                                esPrincipal: 1,
                            },
                        });
                        if (imagenFile) {
                            yield this._imagenService.guardarImagen(imagenFile, 'lugar', 1, lugarCreadoEditado.id, imagenEncontrada.url, imagenEncontrada.id);
                        }
                    }
                    else {
                        yield this._imagenService.guardarImagen(imagenFile, 'lugar', 1, lugarCreadoEditado.id, '');
                    }
                    const consulta = {
                        where: {
                            id: lugarCreadoEditado.id,
                        },
                        relations: [
                            'lugarPadre',
                            'lugaresHijos',
                            'imagenesLugar',
                        ],
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
};
LugarService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(lugar_entity_1.LugarEntity)),
    __metadata("design:paramtypes", [typeorm_2.TreeRepository,
        imagen_service_1.ImagenService])
], LugarService);
exports.LugarService = LugarService;
//# sourceMappingURL=lugar.service.js.map