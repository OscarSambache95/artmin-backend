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
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const album_entity_1 = require("./album.entity");
const principal_service_1 = require("../principal/principal-service");
const imagen_service_1 = require("../imagen/imagen.service");
const genero_artista_album_cancion_service_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.service");
const album_artista_service_1 = require("../album-artista/album-artista.service");
let AlbumService = class AlbumService extends principal_service_1.PrincipalService {
    constructor(_albumRepository, _imagenService, _generoArtistaAlbumCancionService, _albumArtistaService) {
        super(_albumRepository, album_entity_1.AlbumEntity);
        this._albumRepository = _albumRepository;
        this._imagenService = _imagenService;
        this._generoArtistaAlbumCancionService = _generoArtistaAlbumCancionService;
        this._albumArtistaService = _albumArtistaService;
    }
    guardarAlbumArtistasGenerosImagen(album, generos, artistas, imagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const albumCreado = yield this.create(album);
                if (albumCreado) {
                    const imagenCreada = this._imagenService.guardarImagen(imagen, 'album', 1, albumCreado.id, null);
                    if (imagenCreada) {
                        const generosAlbum = generos.map((genero) => {
                            const generoAlbumACrear = {
                                genero,
                                album: albumCreado.id,
                            };
                            return generoAlbumACrear;
                        });
                        const generosAlbumesCreados = yield this._generoArtistaAlbumCancionService.createMany(generosAlbum);
                        const artistasAlbum = artistas.map((idArtista) => {
                            const artistasAlbumACrear = {
                                artista: idArtista,
                                album: albumCreado.id,
                            };
                            return artistasAlbumACrear;
                        });
                        const albumesArtistaCreados = yield this._albumArtistaService.createMany(artistasAlbum);
                        if (generosAlbumesCreados && albumesArtistaCreados) {
                            const consulta = {
                                where: {
                                    id: albumCreado.id,
                                },
                                relations: [
                                    'imagenesAlbum',
                                    'generosAlbum',
                                    'generosAlbum.genero',
                                    'artistasAlbum',
                                    'artistasAlbum.artista',
                                    'cancionesAlbum',
                                    'cancionesAlbum.cancion',
                                    'cancionesAlbum.cancion.tipoCancion',
                                    'cancionesAlbum.cancion.imagenesCancion',
                                    'cancionesAlbum.cancion.artistasCancion',
                                    'cancionesAlbum.cancion.artistasCancion.artista',
                                    'cancionesAlbum.cancion.generosCancion',
                                    'cancionesAlbum.cancion.generosCancion.genero',
                                    'cancionesAlbum.cancion.enlacesCancion',
                                    'tipoAlbum',
                                ],
                            };
                            return yield this.findOne(consulta);
                        }
                        else {
                            this.delete(albumCreado.id);
                        }
                    }
                    else {
                        this.delete(albumCreado.id);
                    }
                }
            }
            catch (e) {
                console.error(e);
                throw new common_1.BadRequestException(e);
            }
        });
    }
    editarAlbumArtistaImagenGeneros(album, generos, artistas, idAlbum, idImagen, imagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const albumEditado = yield this.findOneByIdAndUpdate(idAlbum, album);
                if (albumEditado) {
                    if (imagen) {
                        const imagenCreada = yield this._imagenService.guardarImagen(imagen, 'album', 1, idAlbum, null, idImagen);
                    }
                    yield this._generoArtistaAlbumCancionService.guardarGenerosPorArtistaAlbumCancion('album', idAlbum, generos);
                    yield this._albumArtistaService.guardarArtistasAlbumCancion(idAlbum, artistas);
                    const consulta = {
                        where: {
                            id: idAlbum,
                        },
                        relations: [
                            'imagenesAlbum',
                            'generosAlbum',
                            'generosAlbum.genero',
                            'artistasAlbum',
                            'artistasAlbum.artista',
                            'cancionesAlbum',
                            'cancionesAlbum.cancion',
                            'cancionesAlbum.cancion.tipoCancion',
                            'cancionesAlbum.cancion.imagenesCancion',
                            'cancionesAlbum.cancion.artistasCancion',
                            'cancionesAlbum.cancion.artistasCancion.artista',
                            'cancionesAlbum.cancion.generosCancion',
                            'cancionesAlbum.cancion.generosCancion.genero',
                            'cancionesAlbum.cancion.enlacesCancion',
                            'tipoAlbum',
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
    obtenerAlbumesPorGenero(datosConsultaAlbumGeneros) {
        return __awaiter(this, void 0, void 0, function* () {
            const condicionGenero = datosConsultaAlbumGeneros.idGenero ? ' genero.id = :idGenero ' : '';
            const condicionNombre = datosConsultaAlbumGeneros.busqueda !== '' ? ' ( album.nombre LIKE :busqueda OR album.anio = :anio )' : '';
            const condicionArtista = datosConsultaAlbumGeneros.idArtista ? ' artista.id = :idArtista AND ' : '';
            const condicionTipoAlbum = datosConsultaAlbumGeneros.idTipoAlbum ? ' tipoAlbum.id = :idTipoAlbum AND ' : '';
            const seBuscarPorGeneroYNombre = datosConsultaAlbumGeneros.idGenero && datosConsultaAlbumGeneros.busqueda;
            let consultaAND = '';
            if (seBuscarPorGeneroYNombre) {
                consultaAND = `AND ( ${condicionGenero} AND ${condicionNombre} )`;
            }
            else {
                if (datosConsultaAlbumGeneros.idGenero) {
                    consultaAND = `AND ${condicionGenero}`;
                }
                if (datosConsultaAlbumGeneros.busqueda) {
                    consultaAND = `AND ${condicionNombre}`;
                }
            }
            return yield typeorm_2.getRepository(album_entity_1.AlbumEntity)
                .createQueryBuilder('album')
                .innerJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
                .innerJoin('album.artistasAlbum', 'albumArtista')
                .innerJoin('albumArtista.artista', 'artista')
                .innerJoin('album.generosAlbum', 'generoAlbum')
                .innerJoin('album.tipoAlbum', 'tipoAlbum')
                .innerJoin('generoAlbum.genero', 'genero')
                .where(`${condicionArtista} ${condicionTipoAlbum} imagenAlbum.esPrincipal = :esPrincipal ${consultaAND}`, {
                busqueda: `%${datosConsultaAlbumGeneros.busqueda}%`,
                idGenero: datosConsultaAlbumGeneros.idGenero,
                esPrincipal: datosConsultaAlbumGeneros.esImagenPrincipal,
                idArtista: datosConsultaAlbumGeneros.idArtista,
                idTipoAlbum: datosConsultaAlbumGeneros.idTipoAlbum,
                anio: datosConsultaAlbumGeneros.busqueda,
            })
                .orderBy('album.id', 'DESC')
                .getManyAndCount();
        });
    }
};
AlbumService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(album_entity_1.AlbumEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        imagen_service_1.ImagenService,
        genero_artista_album_cancion_service_1.GeneroArtistaAlbumCancionService,
        album_artista_service_1.AlbumArtistaService])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map