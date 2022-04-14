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
exports.ChartAlbumCancionArtistaVideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const chart_album_cancion_artista_video_entity_1 = require("./chart-album-cancion-artista-video.entity");
const index_1 = require("typeorm/index");
let ChartAlbumCancionArtistaVideoService = class ChartAlbumCancionArtistaVideoService extends principal_service_1.PrincipalService {
    constructor(_chartAlbumCancionArtistaVideoRepository) {
        super(_chartAlbumCancionArtistaVideoRepository, chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity);
        this._chartAlbumCancionArtistaVideoRepository = _chartAlbumCancionArtistaVideoRepository;
    }
    obtenerChartsCancionesAlbumsArtistasVideos(datosConsultaChart) {
        return __awaiter(this, void 0, void 0, function* () {
            let condicionNombre = '';
            let condicionArtista = datosConsultaChart.idArtista !== '' ? ' ( artista.id = :idArtista )' : '';
            let condicionAChart = datosConsultaChart.idChart !== '' ? ' ( chart.id = :idChart )' : '';
            const consultaBase = yield index_1.getRepository(chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity)
                .createQueryBuilder('chartAlbumCancionArtistaVideo')
                .leftJoinAndSelect('chartAlbumCancionArtistaVideo.chart', 'chart');
            if (datosConsultaChart.tipo === 'cancion') {
                condicionNombre = datosConsultaChart.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('chartAlbumCancionArtistaVideo.cancion', 'cancion')
                    .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
                    .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                    .leftJoinAndSelect('cancionArtista.artista', 'artista');
            }
            if (datosConsultaChart.tipo === 'album') {
                condicionNombre = datosConsultaChart.busqueda !== '' ? ' ( album.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('chartAlbumCancionArtistaVideo.album', 'album')
                    .leftJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
                    .leftJoinAndSelect('album.artistasAlbum', 'albumArtista')
                    .leftJoinAndSelect('albumArtista.artista', 'artista');
            }
            if (datosConsultaChart.tipo === 'video') {
                condicionNombre = datosConsultaChart.busqueda !== '' ? ' ( video.nombre LIKE :busqueda )' : '';
                consultaBase
                    .leftJoinAndSelect('chartAlbumCancionArtistaVideo.video', 'video')
                    .leftJoinAndSelect('video.cancion', 'cancion')
                    .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                    .leftJoinAndSelect('cancionArtista.artista', 'artista');
            }
            const condicionTop = datosConsultaChart.top ? ' ( chartAlbumCancionArtistaVideo.peak <= :top )' : '';
            const arregloCondiciones = [
                condicionArtista,
                condicionAChart,
                condicionNombre,
                condicionTop,
            ].filter(condicion => condicion !== '');
            const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
                return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : ' AND ');
            }, '');
            return consultaBase
                .where(condicion, {
                busqueda: `%${datosConsultaChart.busqueda}%`,
                top: datosConsultaChart.top,
                idArtista: datosConsultaChart.idArtista,
                idChart: datosConsultaChart.idChart,
            })
                .orderBy('chartAlbumCancionArtistaVideo.peak', 'ASC')
                .getManyAndCount();
        });
    }
};
ChartAlbumCancionArtistaVideoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChartAlbumCancionArtistaVideoService);
exports.ChartAlbumCancionArtistaVideoService = ChartAlbumCancionArtistaVideoService;
//# sourceMappingURL=chart-album-cancion-artista-video.service.js.map