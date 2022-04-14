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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const video_entity_1 = require("./video.entity");
const index_1 = require("typeorm/index");
const enlace_album_cancion_artista_video_service_1 = require("../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service");
let VideoService = class VideoService extends principal_service_1.PrincipalService {
    constructor(_videoRepository, _enlaceAlbumCancionArtistaVideoService) {
        super(_videoRepository, video_entity_1.VideoEntity);
        this._videoRepository = _videoRepository;
        this._enlaceAlbumCancionArtistaVideoService = _enlaceAlbumCancionArtistaVideoService;
    }
    guardarVideo(video, enlaces) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoCreado = yield this.create(video);
                if (videoCreado) {
                    if (enlaces && enlaces.length) {
                        yield this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo('video', videoCreado.id, enlaces);
                    }
                    const consulta = {
                        where: {
                            id: videoCreado.id,
                        },
                        relations: [
                            'tipoVideo',
                            'cancion',
                            'cancion.imagenesCancion',
                            'cancion.artistasCancion',
                            'cancion.artistasCancion.artista',
                            'cancion.albumesCancion',
                            'cancion.albumesCancion.album',
                            'enlacesVideo'
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
    editarVideo(video, enlaces, idVideo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoEditado = yield this.findOneByIdAndUpdate(idVideo, video);
                if (videoEditado) {
                    if (enlaces && enlaces.length) {
                        yield this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo('video', idVideo, enlaces);
                    }
                    const consulta = {
                        where: {
                            id: videoEditado.id,
                        },
                        relations: [
                            'tipoVideo',
                            'cancion',
                            'cancion.imagenesCancion',
                            'cancion.artistasCancion',
                            'cancion.artistasCancion.artista',
                            'cancion.albumesCancion',
                            'cancion.albumesCancion.album',
                            'enlacesVideo'
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
    obtenerVideos(datosConsultaVideo) {
        return __awaiter(this, void 0, void 0, function* () {
            const condicionCancion = datosConsultaVideo.idCancion ? ' cancion.id = :idCancion ' : '';
            const condicionNombre = datosConsultaVideo.busqueda !== '' ? ' ( video.nombre LIKE :busqueda OR video.anio = :anio )' : '';
            const condicionArtista = datosConsultaVideo.idArtista ? ' artista.id = :idArtista ' : '';
            const condicionAlbum = datosConsultaVideo.idAlbum ? ' album.id = :idAlbum ' : '';
            const condicionTipoVideo = datosConsultaVideo.idTipoVideo ? ' tipoVideo.id = :idTipoVideo ' : '';
            const arregloCondiciones = [
                condicionCancion,
                condicionArtista,
                condicionAlbum,
                condicionTipoVideo,
                condicionNombre,
            ].filter(condicion => condicion !== '');
            const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
                return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : 'AND');
            }, '');
            return yield index_1.getRepository(video_entity_1.VideoEntity)
                .createQueryBuilder('video')
                .leftJoinAndSelect('video.cancion', 'cancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
                .leftJoinAndSelect('cancion.albumesCancion', 'albumCancion')
                .leftJoinAndSelect('albumCancion.album', 'album')
                .leftJoinAndSelect('video.tipoVideo', 'tipoVideo')
                .leftJoinAndSelect('video.enlacesVideo', 'enlacesVideo')
                .where(condicion, {
                busqueda: `%${datosConsultaVideo.busqueda}%`,
                idCancion: datosConsultaVideo.idCancion,
                idArtista: datosConsultaVideo.idArtista,
                idAlbum: datosConsultaVideo.idAlbum,
                anio: datosConsultaVideo.busqueda,
                idTipoVideo: datosConsultaVideo.idTipoVideo
            })
                .orderBy('video.id', 'DESC')
                .getManyAndCount();
        });
    }
};
VideoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(video_entity_1.VideoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enlace_album_cancion_artista_video_service_1.EnlaceAlbumCancionArtistaVideoService])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map