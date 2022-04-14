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
exports.ArtistaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const artista_entity_1 = require("./artista.entity");
const imagen_service_1 = require("../imagen/imagen.service");
const genero_artista_album_cancion_service_1 = require("../genero-artista-album-cancion/genero-artista-album-cancion.service");
const enlace_album_cancion_artista_video_service_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service");
let ArtistaService = class ArtistaService extends principal_service_1.PrincipalService {
    constructor(_artistaRepository, _imagenService, _generoArtistaAlbumCancionService, _enlaceAlbumCancionArtistaVideoService) {
        super(_artistaRepository, artista_entity_1.ArtistaEntity);
        this._artistaRepository = _artistaRepository;
        this._imagenService = _imagenService;
        this._generoArtistaAlbumCancionService = _generoArtistaAlbumCancionService;
        this._enlaceAlbumCancionArtistaVideoService = _enlaceAlbumCancionArtistaVideoService;
    }
    guardarArtistaImagen(artista, generos, enlaces, imagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artistaCreado = yield this.create(artista);
                if (artistaCreado) {
                    const imagenCreada = this._imagenService.guardarImagen(imagen, 'artista', 1, artistaCreado.id, null);
                    if (imagenCreada) {
                        const generosArtista = generos.map((genero) => {
                            const generoArtistaACrear = {
                                genero: genero,
                                artista: artistaCreado.id
                            };
                            return generoArtistaACrear;
                        });
                        const generosArtistaCreados = yield this._generoArtistaAlbumCancionService.createMany(generosArtista);
                        yield this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo('artista', artistaCreado.id, enlaces);
                        if (generosArtistaCreados) {
                            const consulta = {
                                where: {
                                    id: artistaCreado.id,
                                },
                                relations: [
                                    'imagenesArtista',
                                    'generosArtista',
                                    'generosArtista.genero',
                                    'enlacesArtista',
                                    'enlacesArtista.plataforma',
                                    'enlacesArtista.plataforma.imagenesPlataforma',
                                ]
                            };
                            return yield this.findOne(consulta);
                        }
                        else {
                            this.delete(artistaCreado.id);
                        }
                    }
                    else {
                        this.delete(artistaCreado.id);
                    }
                }
            }
            catch (e) {
                console.error(e);
                throw new common_1.BadRequestException(e);
            }
        });
    }
    editarArtistaImagen(artista, generos, enlaces, idArtista, idImagen, imagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artistaEditado = yield this.findOneByIdAndUpdate(idArtista, artista);
                if (artistaEditado) {
                    if (imagen) {
                        const imagenCreada = yield this._imagenService.guardarImagen(imagen, 'artista', 1, artistaEditado.id, null, idImagen);
                    }
                    yield this._generoArtistaAlbumCancionService.guardarGenerosPorArtistaAlbumCancion('artista', idArtista, generos);
                    yield this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo('artista', idArtista, enlaces);
                    const consulta = {
                        where: {
                            id: artistaEditado.id,
                        },
                        relations: [
                            'imagenesArtista',
                            'generosArtista',
                            'generosArtista.genero',
                            'enlacesArtista',
                            'enlacesArtista.plataforma',
                            'enlacesArtista.plataforma.imagenesPlataforma',
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
    obtenerArtistasPorGenero(datosConsultaArtistaGeneros) {
        return __awaiter(this, void 0, void 0, function* () {
            const condicionGenero = datosConsultaArtistaGeneros.idGenero ? ' genero.id = :idGenero ' : '';
            const condicionNombre = datosConsultaArtistaGeneros.busqueda !== '' ? ' artista.nombre LIKE :busqueda ' : '';
            const seBuscarPorGeneroYNombre = datosConsultaArtistaGeneros.idGenero && datosConsultaArtistaGeneros.busqueda;
            let consultaAND = '';
            if (seBuscarPorGeneroYNombre) {
                consultaAND = `AND ( ${condicionGenero} AND ${condicionNombre} )`;
            }
            else {
                if (datosConsultaArtistaGeneros.idGenero) {
                    consultaAND = `AND ${condicionGenero}`;
                }
                if (datosConsultaArtistaGeneros.busqueda) {
                    consultaAND = `AND ${condicionNombre}`;
                }
            }
            return yield typeorm_2.getRepository(artista_entity_1.ArtistaEntity)
                .createQueryBuilder('artista')
                .innerJoinAndSelect('artista.imagenesArtista', 'imagenArtista')
                .innerJoin('artista.generosArtista', 'generoArtista')
                .innerJoin('generoArtista.genero', 'genero')
                .where(`imagenArtista.esPrincipal = :esPrincipal ${consultaAND}`, {
                busqueda: `%${datosConsultaArtistaGeneros.busqueda}%`,
                idGenero: datosConsultaArtistaGeneros.idGenero,
                esPrincipal: datosConsultaArtistaGeneros.esImagenPrincipal
            })
                .orderBy('artista.id', 'DESC')
                .getManyAndCount();
        });
    }
};
ArtistaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(artista_entity_1.ArtistaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        imagen_service_1.ImagenService,
        genero_artista_album_cancion_service_1.GeneroArtistaAlbumCancionService,
        enlace_album_cancion_artista_video_service_1.EnlaceAlbumCancionArtistaVideoService])
], ArtistaService);
exports.ArtistaService = ArtistaService;
//# sourceMappingURL=artista.service.js.map