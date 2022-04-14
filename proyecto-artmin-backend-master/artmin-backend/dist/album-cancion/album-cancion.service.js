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
exports.AlbumCancionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const album_cancion_entity_1 = require("./album-cancion.entity");
let AlbumCancionService = class AlbumCancionService extends principal_service_1.PrincipalService {
    constructor(_albumCancionRepository) {
        super(_albumCancionRepository, album_cancion_entity_1.AlbumCancionEntity);
        this._albumCancionRepository = _albumCancionRepository;
    }
    guardarCancionesAlbum(idAlbum, idsCanciones) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaCancionesAntesEdicion = yield this.find({
                where: {
                    album: idAlbum
                },
                relations: [
                    'cancion',
                    'album'
                ]
            });
            const cancionesAlbumAntesEdicion = respuestaCancionesAntesEdicion[0];
            const cancionesAlbumACrear = [];
            let cancionesAlbumAEditar = [];
            yield Promise.all(idsCanciones
                .map((cancion) => __awaiter(this, void 0, void 0, function* () {
                const cancionAlbumCreado = cancionesAlbumAntesEdicion
                    .find(cancionAlbum => {
                    return cancionAlbum.cancion.id === cancion.idCancion;
                });
                if (!cancionAlbumCreado) {
                    cancionesAlbumACrear.push({
                        posicion: cancion.posicion ? cancion.posicion : yield this.devolverPosicionUltimaCancionAlbum(idAlbum),
                        cancion: cancion.idCancion,
                        album: idAlbum
                    });
                }
                else {
                    cancionAlbumCreado.posicion = cancion.posicion ? cancion.posicion : yield this.devolverPosicionUltimaCancionAlbum(idAlbum);
                    cancionesAlbumAEditar.push(cancionAlbumCreado);
                }
            })));
            yield this.createMany(cancionesAlbumACrear);
            const idCancionesAlbumAEliminar = [];
            cancionesAlbumAntesEdicion
                .map((cancionAlbum) => {
                const cancionACrear = idsCanciones.find(cancion => {
                    return cancion.idCancion === cancionAlbum.cancion.id;
                });
                if (!cancionACrear) {
                    idCancionesAlbumAEliminar.push(cancionAlbum.id);
                }
            });
            if (idCancionesAlbumAEliminar && idCancionesAlbumAEliminar.length) {
                yield this.delete(idCancionesAlbumAEliminar);
            }
            if (cancionesAlbumAEditar && cancionesAlbumAEditar.length) {
                yield this._albumCancionRepository.save(cancionesAlbumAEditar);
            }
            yield this.ordenarCancionesPorAlbum(idAlbum);
            return yield this.find({
                where: {
                    album: idAlbum
                },
                relations: [
                    'cancion',
                    'cancion.tipoCancion',
                    'cancion.imagenesCancion',
                    'cancion.artistasCancion',
                    'cancion.artistasCancion.artista',
                    'cancion.generosCancion',
                    'cancion.generosCancion.genero',
                    'album',
                    'album.imagenesAlbum',
                    'album.generosAlbum',
                    'album.generosAlbum.genero',
                    'album.artistasAlbum',
                    'album.artistasAlbum.artista',
                ]
            });
        });
    }
    devolverPosicionUltimaCancionAlbum(idAlbum) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaUltimaCancionAlbum = yield this.find({
                where: {
                    album: idAlbum
                },
                take: 1,
                order: {
                    posicion: 'DESC'
                }
            });
            return respuestaUltimaCancionAlbum[0].length === 0 ? 1 : (respuestaUltimaCancionAlbum[0][0].posicion + 1);
        });
    }
    guardarAlbumesCancion(idCancion, idsAlbumes) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaAlbumesCancionAntesEdicion = yield this.find({
                where: {
                    cancion: idCancion
                },
                relations: [
                    'album',
                    'cancion'
                ]
            });
            const albumesCancionAntesEdicion = respuestaAlbumesCancionAntesEdicion[0];
            const albumesCancionACrear = [];
            let albumesCancionAEditar = [];
            yield Promise.all(idsAlbumes
                .map((idAlbum, indice) => __awaiter(this, void 0, void 0, function* () {
                const albumCancionCreado = albumesCancionAntesEdicion
                    .find(albumCancion => {
                    return albumCancion.album.id === idAlbum;
                });
                if (!albumCancionCreado) {
                    const albumCancionACrear = {
                        posicion: yield this.devolverPosicionUltimaCancionAlbum(idAlbum),
                        album: idAlbum,
                        cancion: idCancion
                    };
                    albumesCancionACrear.push(albumCancionACrear);
                }
                else {
                    albumesCancionAEditar.push(albumCancionCreado);
                }
            })));
            this.createMany(albumesCancionACrear);
            const idAlbumesCancionAEliminar = [];
            albumesCancionAEditar = albumesCancionAEditar
                .filter((albumCancion, indice) => {
                const albumCancionGuardado = idsAlbumes.find(idAlbum => {
                    return idAlbum === albumCancion.album.id;
                });
                if (!albumCancionGuardado) {
                    idAlbumesCancionAEliminar.push(albumCancion.id);
                    idAlbumesCancionAEliminar.splice(indice, 1);
                }
                return albumCancionGuardado;
            });
            if (idAlbumesCancionAEliminar && idAlbumesCancionAEliminar.length) {
                yield this.delete(idAlbumesCancionAEliminar);
            }
            if (albumesCancionAEditar && albumesCancionAEditar.length) {
                yield this._albumCancionRepository.save(albumesCancionAEditar);
            }
            yield idsAlbumes
                .map((idAlbum) => __awaiter(this, void 0, void 0, function* () {
                yield this.ordenarCancionesPorAlbum(idAlbum);
            }));
        });
    }
    ordenarCancionesPorAlbum(idAlbum) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaCancionesAlbumSinOrdenar = yield this.find({
                where: {
                    album: idAlbum
                },
                order: {
                    posicion: 'ASC'
                }
            });
            const arregloCancionesAlbumSinOrdenar = respuestaCancionesAlbumSinOrdenar[0];
            yield arregloCancionesAlbumSinOrdenar.map((cancionAlbum, indice) => __awaiter(this, void 0, void 0, function* () {
                yield this._albumCancionRepository.update(cancionAlbum.id, {
                    posicion: indice + 1,
                });
            }));
        });
    }
};
AlbumCancionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(album_cancion_entity_1.AlbumCancionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlbumCancionService);
exports.AlbumCancionService = AlbumCancionService;
//# sourceMappingURL=album-cancion.service.js.map