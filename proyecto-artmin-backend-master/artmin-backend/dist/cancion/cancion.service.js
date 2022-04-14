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
exports.CancionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const cancion_entity_1 = require("./cancion.entity");
const imagen_service_1 = require("../imagen/imagen.service");
const genero_artista_album_cancion_service_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.service");
const cancion_artista_service_1 = require("../cancion-artista/cancion-artista.service");
const album_cancion_service_1 = require("../album-cancion/album-cancion.service");
const enlace_album_cancion_artista_video_service_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service");
let CancionService = class CancionService extends principal_service_1.PrincipalService {
    constructor(_cancionRepository, _imagenService, _generoArtistaAlbumCancionService, _cancionArtistaService, _albumCancionService, _enlaceAlbumCancionArtistaVideoService) {
        super(_cancionRepository, cancion_entity_1.CancionEntity);
        this._cancionRepository = _cancionRepository;
        this._imagenService = _imagenService;
        this._generoArtistaAlbumCancionService = _generoArtistaAlbumCancionService;
        this._cancionArtistaService = _cancionArtistaService;
        this._albumCancionService = _albumCancionService;
        this._enlaceAlbumCancionArtistaVideoService = _enlaceAlbumCancionArtistaVideoService;
    }
    guardarCancionAlbumArtistasGenerosImagen(cancion, generos, artistas, albumes, enlaces, pathAlterno, imagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cancionCreada = yield this.create(cancion);
                if (cancionCreada) {
                    const imagenCreada = this._imagenService.guardarImagen(imagen, 'cancion', 1, cancionCreada.id, pathAlterno);
                    const generosCancion = generos.map((genero) => {
                        const generoCancionACrear = {
                            genero: genero,
                            cancion: cancionCreada.id
                        };
                        return generoCancionACrear;
                    });
                    const generosCancionCreados = yield this._generoArtistaAlbumCancionService.createMany(generosCancion);
                    const artistasCancion = artistas.map((artista, indice) => {
                        const artistasCancionACrear = {
                            esArtistaPrincipal: artista.esPrincipal,
                            artista: artista.id,
                            cancion: cancionCreada.id
                        };
                        return artistasCancionACrear;
                    });
                    if (albumes) {
                        yield Promise.all(albumes.map((idAlbum) => __awaiter(this, void 0, void 0, function* () {
                            yield this._albumCancionService.create({
                                cancion: cancionCreada.id,
                                album: idAlbum,
                                posicion: yield this._albumCancionService.devolverPosicionUltimaCancionAlbum(idAlbum),
                            });
                        })));
                    }
                    if (enlaces && enlaces.length) {
                        yield this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo('cancion', cancionCreada.id, enlaces);
                    }
                    const artistasCancionCreados = yield this._cancionArtistaService.createMany(artistasCancion);
                    if (generosCancionCreados && artistasCancionCreados) {
                        const consulta = {
                            where: {
                                id: cancionCreada.id,
                            },
                            relations: [
                                'tipoCancion',
                                'imagenesCancion',
                                'artistasCancion',
                                'artistasCancion.artista',
                                'generosCancion',
                                'generosCancion.genero',
                                'albumesCancion',
                                'albumesCancion.album',
                                'albumesCancion.cancion',
                                'albumesCancion.cancion.tipoCancion',
                                'albumesCancion.cancion.imagenesCancion',
                                'albumesCancion.cancion.artistasCancion',
                                'albumesCancion.cancion.artistasCancion.artista',
                                'albumesCancion.cancion.generosCancion',
                                'albumesCancion.cancion.generosCancion.genero',
                                'albumesCancion.cancion.enlacesCancion',
                                'enlacesCancion'
                            ]
                        };
                        return yield this.findOne(consulta);
                    }
                    else {
                        this.delete(cancionCreada.id);
                    }
                }
            }
            catch (e) {
                console.error(e);
                throw new common_1.BadRequestException(e);
            }
        });
    }
    editarCancion(cancion, generos, artistas, albumes, enlaces, idCancion, pathAlterno, idImagen, imagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cancionEditada = yield this.findOneByIdAndUpdate(idCancion, cancion);
                if (cancionEditada) {
                    if (imagen) {
                        const imagenCreada = yield this._imagenService.guardarImagen(imagen, 'cancion', 1, idCancion, pathAlterno, idImagen);
                    }
                    yield this._generoArtistaAlbumCancionService.guardarGenerosPorArtistaAlbumCancion('cancion', idCancion, generos);
                    yield this._cancionArtistaService.guardarArtistasCancion(idCancion, artistas);
                    yield this._albumCancionService.guardarAlbumesCancion(cancionEditada.id, albumes);
                    if (enlaces && enlaces.length) {
                        yield this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo('cancion', idCancion, enlaces);
                    }
                    const consulta = {
                        where: {
                            id: cancionEditada.id,
                        },
                        relations: [
                            'tipoCancion',
                            'imagenesCancion',
                            'artistasCancion',
                            'artistasCancion.artista',
                            'generosCancion',
                            'generosCancion.genero',
                            'albumesCancion',
                            'albumesCancion.album',
                            'albumesCancion.cancion',
                            'albumesCancion.cancion.tipoCancion',
                            'albumesCancion.cancion.imagenesCancion',
                            'albumesCancion.cancion.artistasCancion',
                            'albumesCancion.cancion.artistasCancion.artista',
                            'albumesCancion.cancion.generosCancion',
                            'albumesCancion.cancion.generosCancion.genero',
                            'albumesCancion.cancion.enlacesCancion',
                            'enlacesCancion'
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
    obtenerCancionePorGeneroArtista(datosConsultaCanciones) {
        return __awaiter(this, void 0, void 0, function* () {
            const condicionGenero = datosConsultaCanciones.idGenero ? ' genero.id = :idGenero ' : '';
            const condicionNombre = datosConsultaCanciones.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda OR cancion.anio = :anio )' : '';
            const condicionArtista = datosConsultaCanciones.idArtista ? ' artista.id = :idArtista AND ' : '';
            const condicionAlbum = datosConsultaCanciones.idAlbum ? ' album.id = :idAlbum AND ' : '';
            const condicionTipoCancion = datosConsultaCanciones.idTipoCancion ? ' tipoCancion.id = :idTipoCancion AND ' : '';
            const seBuscarPorGeneroYNombre = datosConsultaCanciones.idGenero && datosConsultaCanciones.busqueda;
            let consultaAND = '';
            if (seBuscarPorGeneroYNombre) {
                consultaAND = `AND ( ${condicionGenero} AND ${condicionNombre} )`;
            }
            else {
                if (datosConsultaCanciones.idGenero) {
                    consultaAND = `AND ${condicionGenero}`;
                }
                if (datosConsultaCanciones.busqueda) {
                    consultaAND = `AND ${condicionNombre}`;
                }
            }
            return yield typeorm_2.getRepository(cancion_entity_1.CancionEntity)
                .createQueryBuilder('cancion')
                .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
                .leftJoinAndSelect('cancion.albumesCancion', 'albumCancion')
                .leftJoinAndSelect('albumCancion.album', 'album')
                .leftJoinAndSelect('cancion.generosCancion', 'generoCancion')
                .leftJoinAndSelect('generoCancion.genero', 'genero')
                .leftJoinAndSelect('cancion.tipoCancion', 'tipoCancion')
                .where(`${condicionArtista} ${condicionAlbum} ${condicionTipoCancion} imagenCancion.esPrincipal = :esPrincipal ${consultaAND}`, {
                busqueda: `%${datosConsultaCanciones.busqueda}%`,
                idGenero: datosConsultaCanciones.idGenero,
                esPrincipal: datosConsultaCanciones.esImagenPrincipal,
                idArtista: datosConsultaCanciones.idArtista,
                idAlbum: datosConsultaCanciones.idAlbum,
                anio: datosConsultaCanciones.busqueda,
                idTipoCancion: datosConsultaCanciones.idTipoCancion
            })
                .orderBy('cancion.id', 'DESC')
                .getManyAndCount();
        });
    }
};
CancionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cancion_entity_1.CancionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        imagen_service_1.ImagenService,
        genero_artista_album_cancion_service_1.GeneroArtistaAlbumCancionService,
        cancion_artista_service_1.CancionArtistaService,
        album_cancion_service_1.AlbumCancionService,
        enlace_album_cancion_artista_video_service_1.EnlaceAlbumCancionArtistaVideoService])
], CancionService);
exports.CancionService = CancionService;
//# sourceMappingURL=cancion.service.js.map