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
exports.UnidadAlbumCancionVideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const unidad_album_cancion_video_entity_1 = require("./unidad-album-cancion-video.entity");
const index_1 = require("typeorm/index");
let UnidadAlbumCancionVideoService = class UnidadAlbumCancionVideoService extends principal_service_1.PrincipalService {
    constructor(_unidadAlbumCancionVideoRepository) {
        super(_unidadAlbumCancionVideoRepository, unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity);
        this._unidadAlbumCancionVideoRepository = _unidadAlbumCancionVideoRepository;
    }
    obtenerUnidadesCancionesAlbumsVideos(datosConsultaUnidades) {
        return __awaiter(this, void 0, void 0, function* () {
            let condicionNombre = '';
            let condicionArtista = datosConsultaUnidades.idArtista !== '' ? ' ( artista.id = :idArtista )' : '';
            let condicionAChart = datosConsultaUnidades.idChart !== '' ? ' ( chart.id = :idChart )' : '';
            const consultaBase = yield index_1.getRepository(unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity)
                .createQueryBuilder('unidadAlbumCancionVideo')
                .leftJoinAndSelect('unidadAlbumCancionVideo.chart', 'chart')
                .leftJoinAndSelect('unidadAlbumCancionVideo.medida', 'medida');
            if (datosConsultaUnidades.tipo === 'cancion') {
                condicionNombre = datosConsultaUnidades.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('unidadAlbumCancionVideo.cancion', 'cancion')
                    .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
                    .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                    .leftJoinAndSelect('cancionArtista.artista', 'artista');
            }
            if (datosConsultaUnidades.tipo === 'album') {
                condicionNombre = datosConsultaUnidades.busqueda !== '' ? ' ( album.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('unidadAlbumCancionVideo.album', 'album')
                    .leftJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
                    .leftJoinAndSelect('album.artistasAlbum', 'albumArtista')
                    .leftJoinAndSelect('albumArtista.artista', 'artista');
            }
            if (datosConsultaUnidades.tipo === 'video') {
                condicionNombre = datosConsultaUnidades.busqueda !== '' ? ' ( video.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('unidadAlbumCancionVideo.video', 'video')
                    .leftJoinAndSelect('video.cancion', 'cancion')
                    .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                    .leftJoinAndSelect('cancionArtista.artista', 'artista');
            }
            const arregloCondiciones = [
                condicionArtista,
                condicionAChart,
                condicionNombre,
            ].filter(condicion => condicion !== '');
            const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
                return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : ' AND ');
            }, '');
            return consultaBase
                .where(condicion, {
                busqueda: `%${datosConsultaUnidades.busqueda}%`,
                idArtista: datosConsultaUnidades.idArtista,
                idChart: datosConsultaUnidades.idChart,
            })
                .orderBy('unidadAlbumCancionVideo.unidadesReales', 'ASC')
                .getManyAndCount();
        });
    }
};
UnidadAlbumCancionVideoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UnidadAlbumCancionVideoService);
exports.UnidadAlbumCancionVideoService = UnidadAlbumCancionVideoService;
//# sourceMappingURL=unidad-album-cancion-video.service.js.map