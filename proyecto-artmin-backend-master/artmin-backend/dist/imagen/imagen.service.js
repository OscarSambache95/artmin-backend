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
exports.ImagenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const imagen_entity_1 = require("./imagen.entity");
const fs = require("fs");
const moment = require("moment");
let ImagenService = class ImagenService extends principal_service_1.PrincipalService {
    constructor(_imagenRepository) {
        super(_imagenRepository, imagen_entity_1.ImagenEntity);
        this._imagenRepository = _imagenRepository;
        this.pathCarpetaImagenes = __dirname + '/../../public/imagenes/';
    }
    guardarImagen(imagen, entidad, esPrincipal, idEntidad, pathAlterno, idImagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let nombreImagen = pathAlterno;
                if (imagen && imagen.buffer) {
                    const fecha = moment(new Date());
                    nombreImagen = `imagen-${entidad}-${idEntidad}-${fecha}.jpg`;
                    const pathImagen = this.pathCarpetaImagenes + '/' + nombreImagen;
                    fs.writeFile(pathImagen, imagen.buffer, 'base64', (err) => __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            throw err;
                        }
                    }));
                }
                const imagenACrearEditar = {
                    url: nombreImagen,
                    esPrincipal,
                };
                imagenACrearEditar[entidad] = idEntidad;
                if (!idImagen) {
                    const imagenCreada = yield this.create(imagenACrearEditar);
                    return imagenCreada;
                }
                else {
                    const imagenAntesEditar = yield this.findOne({
                        where: {
                            id: idImagen,
                        },
                    });
                    yield this._imagenRepository.update(idImagen, {
                        esPrincipal: 0,
                    });
                    const imagenEditada = yield this.create(imagenACrearEditar);
                    if (entidad === 'album') {
                        const consultaEditarImagenes = {
                            where: {
                                url: imagenAntesEditar.url,
                            },
                        };
                        const imagenesConIgualUrl = yield this.find(consultaEditarImagenes);
                        if (imagenesConIgualUrl && imagenesConIgualUrl[0] && imagenesConIgualUrl[0].length) {
                            const idsImagenesConIgualUrl = imagenesConIgualUrl[0]
                                .map(imagen => imagen.id);
                            this._imagenRepository.update(idsImagenesConIgualUrl, {
                                url: imagenEditada.url,
                            });
                        }
                    }
                    return imagenEditada;
                }
            }
            catch (e) {
                console.error({ error: e, mensaje: 'error al guardar el imagen' });
                throw new common_1.InternalServerErrorException(e);
            }
        });
    }
    eliminarArchivo(pathImagen) {
        const filePath = pathImagen;
        fs.unlink(filePath, err => {
            if (err) {
                throw err;
            }
        });
    }
};
ImagenService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(imagen_entity_1.ImagenEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImagenService);
exports.ImagenService = ImagenService;
//# sourceMappingURL=imagen.service.js.map