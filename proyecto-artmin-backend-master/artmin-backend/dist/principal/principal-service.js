"use strict";
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
exports.PrincipalService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
class PrincipalService {
    constructor(repository, Entidad, nombreRepositorio) {
        this.repository = repository;
        this.Entidad = Entidad;
        this.nombreRepositorio = nombreRepositorio;
    }
    findOne(criterioBusqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield this.repository.findOne(criterioBusqueda);
                return respuesta;
            }
            catch (e) {
                console.error({
                    mensaje: 'Error findOne',
                    error: e,
                });
                throw new common_1.InternalServerErrorException({
                    error: 500,
                    mensaje: 'Error del servidor',
                });
            }
        });
    }
    find(criterioBusqueda, arregloIds) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (criterioBusqueda && criterioBusqueda.camposOr) {
                    criterioBusqueda.camposOr.map(campo => {
                        if (campo.like) {
                            let objetoConsulta = {};
                            criterioBusqueda.where = [];
                            objetoConsulta[campo.nombreCampo] = typeorm_1.Like(`%${campo.valor}%`);
                            criterioBusqueda.where.push(objetoConsulta);
                        }
                    });
                }
                if (criterioBusqueda && criterioBusqueda.camposIn) {
                    criterioBusqueda.camposIn.map(campo => {
                        let objetoConsulta = {};
                        criterioBusqueda.where = {};
                        objetoConsulta[campo.nombreCampo] = typeorm_1.In(campo.valor);
                        criterioBusqueda.where = objetoConsulta;
                    });
                }
                const respuesta = yield this.repository.findAndCount(criterioBusqueda);
                return respuesta;
            }
            catch (e) {
                console.error({
                    mensaje: 'Error find',
                    error: e,
                });
                throw new common_1.InternalServerErrorException({
                    error: 500,
                    mensaje: 'Error del servidor',
                });
            }
        });
    }
    create(registro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield this.repository.save(registro);
                return respuesta;
            }
            catch (e) {
                console.error({
                    mensaje: 'Error create',
                    error: e,
                });
                throw new common_1.InternalServerErrorException({
                    error: 500,
                    mensaje: 'Error del servidor',
                });
            }
        });
    }
    createMany(registros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield this.repository.create(registros);
                return yield this.repository.save(respuesta);
            }
            catch (e) {
                console.error({
                    mensaje: 'Error create many',
                    error: e,
                });
                throw new common_1.InternalServerErrorException({
                    error: 500,
                    mensaje: 'Error del servidor',
                });
            }
        });
    }
    findOneByIdAndUpdate(id, datosAActualizar, esSocket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repository.update(id, datosAActualizar);
                const respuesta = yield this.repository.findOne(id);
                return respuesta;
            }
            catch (e) {
                console.error({
                    mensaje: 'Error create findOneByIdAndUpdate',
                    error: e,
                });
                throw new common_1.InternalServerErrorException({
                    error: 500,
                    mensaje: 'Error del servidor',
                });
            }
        });
    }
    delete(criterio) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield this.repository.delete(criterio);
                return respuesta;
            }
            catch (e) {
                console.error({
                    mensaje: 'Error create delete',
                    error: e,
                });
                throw new common_1.InternalServerErrorException({
                    error: 500,
                    mensaje: 'Error del servidor',
                });
            }
        });
    }
}
exports.PrincipalService = PrincipalService;
//# sourceMappingURL=principal-service.js.map