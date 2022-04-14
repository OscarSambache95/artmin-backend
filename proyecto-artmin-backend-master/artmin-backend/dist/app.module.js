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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const artista_module_1 = require("./artista/artista.module");
const cancion_module_1 = require("./cancion/cancion.module");
const album_module_1 = require("./album/album.module");
const imagen_module_1 = require("./imagen/imagen.module");
const enlace_album_cancion_artista_video_module_1 = require("./enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.module");
const plataforma_module_1 = require("./plataforma/plataforma.module");
const chart_module_1 = require("./chart/chart.module");
const certificado_module_1 = require("./certificado/certificado.module");
const chart_posicion_module_1 = require("./chart-posicion/chart-posicion.module");
const video_module_1 = require("./video/video.module");
const tipo_video_module_1 = require("./tipo-video/tipo-video.module");
const album_cancion_module_1 = require("./album-cancion/album-cancion.module");
const certificado_chart_module_1 = require("./certificado-chart/certificado-chart.module");
const medida_module_1 = require("./medida/medida.module");
const record_module_1 = require("./record/record.module");
const record_chart_module_1 = require("./record-chart/record-chart.module");
const genero_module_1 = require("./genero/genero.module");
const lugar_module_1 = require("./lugar/lugar.module");
const tour_lugar_module_1 = require("./tour-lugar/tour-lugar.module");
const recinto_module_1 = require("./recinto/recinto.module");
const tour_module_1 = require("./tour/tour.module");
const artista_tour_module_1 = require("./artista-tour/artista-tour.module");
const setlist_module_1 = require("./setlist/setlist.module");
const nominacion_artista_album_cancion_video_module_1 = require("./nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.module");
const categoria_module_1 = require("./categoria/categoria.module");
const premio_module_1 = require("./premio/premio.module");
const premio_anio_module_1 = require("./premio-anio/premio-anio.module");
const presentacion_module_1 = require("./presentacion/presentacion.module");
const evento_anio_module_1 = require("./evento-anio/evento-anio.module");
const evento_module_1 = require("./evento/evento.module");
const tipo_evento_module_1 = require("./tipo-evento/tipo-evento.module");
const presentacion_artista_module_1 = require("./presentacion-artista/presentacion-artista.module");
const tipo_album_module_1 = require("./tipo-album/tipo-album.module");
const chart_album_cancion_artista_video_module_1 = require("./chart-album-cancion-artista-video/chart-album-cancion-artista-video.module");
const cancion_artista_module_1 = require("./cancion-artista/cancion-artista.module");
const album_artista_module_1 = require("./album-artista/album-artista.module");
const genero_artista_album_cancion_module_1 = require("./genero-artista-album-cancion/genero-artista-album-cancion.module");
const typeorm_1 = require("@nestjs/typeorm");
const tour_lugar_entity_1 = require("./tour-lugar/tour-lugar.entity");
const presentacion_artista_entity_1 = require("./presentacion-artista/presentacion-artista.entity");
const plataforma_entity_1 = require("./plataforma/plataforma.entity");
const video_entity_1 = require("./video/video.entity");
const record_chart_entity_1 = require("./record-chart/record-chart.entity");
const evento_anio_entity_1 = require("./evento-anio/evento-anio.entity");
const album_artista_entity_1 = require("./album-artista/album-artista.entity");
const lugar_entity_1 = require("./lugar/lugar.entity");
const tour_entity_1 = require("./tour/tour.entity");
const categoria_entity_1 = require("./categoria/categoria.entity");
const cancion_entity_1 = require("./cancion/cancion.entity");
const chart_album_cancion_artista_video_entity_1 = require("./chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity");
const record_entity_1 = require("./record/record.entity");
const certificado_chart_entity_1 = require("./certificado-chart/certificado-chart.entity");
const nominacion_artista_album_cancion_video_entity_1 = require("./nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity");
const premio_entity_1 = require("./premio/premio.entity");
const genero_entity_1 = require("./genero/genero.entity");
const setlist_entity_1 = require("./setlist/setlist.entity");
const enlace_album_cancion_artista_video_entity_1 = require("./enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity");
const album_entity_1 = require("./album/album.entity");
const artista_tour_entity_1 = require("./artista-tour/artista-tour.entity");
const album_cancion_entity_1 = require("./album-cancion/album-cancion.entity");
const medida_entity_1 = require("./medida/medida.entity");
const chart_posicion_entity_1 = require("./chart-posicion/chart-posicion.entity");
const tipo_video_entity_1 = require("./tipo-video/tipo-video.entity");
const genero_artista_album_cancion_entity_1 = require("./genero-artista-album-cancion/genero-artista-album-cancion.entity");
const tipo_evento_entity_1 = require("./tipo-evento/tipo-evento.entity");
const evento_entity_1 = require("./evento/evento.entity");
const recinto_entity_1 = require("./recinto/recinto.entity");
const presentacion_entity_1 = require("./presentacion/presentacion.entity");
const artista_entity_1 = require("./artista/artista.entity");
const chart_entity_1 = require("./chart/chart.entity");
const cancion_artista_entity_1 = require("./cancion-artista/cancion-artista.entity");
const premio_anio_entity_1 = require("./premio-anio/premio-anio.entity");
const imagen_entity_1 = require("./imagen/imagen.entity");
const tipo_album_entity_1 = require("./tipo-album/tipo-album.entity");
const certificado_entity_1 = require("./certificado/certificado.entity");
const genero_service_1 = require("./genero/genero.service");
const crear_datos_prueba_1 = require("./datos-prueba/crear-datos-prueba");
const artista_service_1 = require("./artista/artista.service");
const imagen_service_1 = require("./imagen/imagen.service");
const genero_artista_album_cancion_service_1 = require("./genero-artista-album-cancion/genero-artista-album-cancion.service");
const album_service_1 = require("./album/album.service");
const album_artista_service_1 = require("./album-artista/album-artista.service");
const cancion_service_1 = require("./cancion/cancion.service");
const album_cancion_service_1 = require("./album-cancion/album-cancion.service");
const cancion_artista_service_1 = require("./cancion-artista/cancion-artista.service");
const tipo_cancion_module_1 = require("./tipo-cancion/tipo-cancion.module");
const tipo_cancion_entity_1 = require("./tipo-cancion/tipo-cancion.entity");
const tipo_cancion_service_1 = require("./tipo-cancion/tipo-cancion.service");
const tipo_album_service_1 = require("./tipo-album/tipo-album.service");
const plataforma_service_1 = require("./plataforma/plataforma.service");
const enlace_album_cancion_artista_video_service_1 = require("./enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service");
const tipo_video_service_1 = require("./tipo-video/tipo-video.service");
const video_service_1 = require("./video/video.service");
const lugar_service_1 = require("./lugar/lugar.service");
const chart_service_1 = require("./chart/chart.service");
const chart_album_cancion_artista_video_service_1 = require("./chart-album-cancion-artista-video/chart-album-cancion-artista-video.service");
const unidad_album_cancion_video_entity_1 = require("./unidad-album-cancion-video/unidad-album-cancion-video.entity");
const unidad_album_cancion_video_module_1 = require("./unidad-album-cancion-video/unidad-album-cancion-video.module");
const unidad_album_cancion_video_service_1 = require("./unidad-album-cancion-video/unidad-album-cancion-video.service");
const medida_service_1 = require("./medida/medida.service");
const certificado_service_1 = require("./certificado/certificado.service");
const certificado_chart_fecha_module_1 = require("./certificado-chart-fecha/certificado-chart-fecha.module");
const certificado_chart_fecha_entity_1 = require("./certificado-chart-fecha/certificado-chart-fecha.entity");
const certificado_chart_service_1 = require("./certificado-chart/certificado-chart.service");
const certificado_chart_fecha_service_1 = require("./certificado-chart-fecha/certificado-chart-fecha.service");
const record_service_1 = require("./record/record.service");
const record_chart_service_1 = require("./record-chart/record-chart.service");
const tour_service_1 = require("./tour/tour.service");
const artista_tour_service_1 = require("./artista-tour/artista-tour.service");
const recinto_service_1 = require("./recinto/recinto.service");
const tour_lugar_service_1 = require("./tour-lugar/tour-lugar.service");
const acto_tour_module_1 = require("./acto-tour/acto-tour.module");
const cancion_setlist_module_1 = require("./cancion-setlist/cancion-setlist.module");
const acto_tour_entity_1 = require("./acto-tour/acto-tour.entity");
const cancion_setlist_entity_1 = require("./cancion-setlist/cancion-setlist.entity");
const acto_tour_service_1 = require("./acto-tour/acto-tour.service");
const setlist_service_1 = require("./setlist/setlist.service");
const cancion_setlist_service_1 = require("./cancion-setlist/cancion-setlist.service");
let AppModule = class AppModule {
    constructor(_lugarService, _generoService, _artistaService, _imagenSerivce, _generoArtistaAlbumCancionService, _albumService, _albumArtistaService, _cancionService, _albumCancionService, _cancionArtistaService, _tipoCancionService, _tipoVideoService, _videoService, _tipoAlbumService, _plataformaService, _enlaceAlbumCancionArtistaVideoService, _chartService, _chartAlbumCancionArtistaVideoService, _unidadAlbumCancionVideoService, _medidaService, _certificadoService, _certificadoChartService, _certificadoChartFechaService, _recordService, _recordChartService, _tourService, _artistaTourService, _recintoService, _tourLugarService, _setlistService, _actoTourService, _cancionSetlistService) {
        this._lugarService = _lugarService;
        this._generoService = _generoService;
        this._artistaService = _artistaService;
        this._imagenSerivce = _imagenSerivce;
        this._generoArtistaAlbumCancionService = _generoArtistaAlbumCancionService;
        this._albumService = _albumService;
        this._albumArtistaService = _albumArtistaService;
        this._cancionService = _cancionService;
        this._albumCancionService = _albumCancionService;
        this._cancionArtistaService = _cancionArtistaService;
        this._tipoCancionService = _tipoCancionService;
        this._tipoVideoService = _tipoVideoService;
        this._videoService = _videoService;
        this._tipoAlbumService = _tipoAlbumService;
        this._plataformaService = _plataformaService;
        this._enlaceAlbumCancionArtistaVideoService = _enlaceAlbumCancionArtistaVideoService;
        this._chartService = _chartService;
        this._chartAlbumCancionArtistaVideoService = _chartAlbumCancionArtistaVideoService;
        this._unidadAlbumCancionVideoService = _unidadAlbumCancionVideoService;
        this._medidaService = _medidaService;
        this._certificadoService = _certificadoService;
        this._certificadoChartService = _certificadoChartService;
        this._certificadoChartFechaService = _certificadoChartFechaService;
        this._recordService = _recordService;
        this._recordChartService = _recordChartService;
        this._tourService = _tourService;
        this._artistaTourService = _artistaTourService;
        this._recintoService = _recintoService;
        this._tourLugarService = _tourLugarService;
        this._setlistService = _setlistService;
        this._actoTourService = _actoTourService;
        this._cancionSetlistService = _cancionSetlistService;
        this.crearDatosDePrueba()
            .then(datos => {
        })
            .catch(error => {
            console.error(error);
        });
    }
    crearDatosDePrueba() {
        return __awaiter(this, void 0, void 0, function* () {
            yield crear_datos_prueba_1.crearDatos(this._lugarService, '/datos-lugar.json');
            yield crear_datos_prueba_1.crearDatos(this._tipoAlbumService, '/datos-tipo-album.json');
            yield crear_datos_prueba_1.crearDatos(this._tipoCancionService, '/datos-tipo-cancion.json');
            yield crear_datos_prueba_1.crearDatos(this._tipoVideoService, '/datos-tipo-video.json');
            yield crear_datos_prueba_1.crearDatos(this._plataformaService, '/datos-plataforma.json');
            yield crear_datos_prueba_1.crearDatos(this._medidaService, '/datos-medida.json');
            yield crear_datos_prueba_1.crearDatos(this._generoService, '/datos-genero.json');
            yield crear_datos_prueba_1.crearDatos(this._recintoService, '/datos-recinto.json');
            yield crear_datos_prueba_1.crearDatos(this._artistaService, '/datos-artista.json');
            yield crear_datos_prueba_1.crearDatos(this._albumService, '/datos-album.json');
            yield crear_datos_prueba_1.crearDatos(this._cancionService, '/datos-cancion.json');
            yield crear_datos_prueba_1.crearDatos(this._tourService, '/datos-tour.json');
            yield crear_datos_prueba_1.crearDatos(this._imagenSerivce, '/datos-imagen.json');
            yield crear_datos_prueba_1.crearDatos(this._generoArtistaAlbumCancionService, '/datos-genero-artista-album-cancion.json');
            yield crear_datos_prueba_1.crearDatos(this._albumArtistaService, '/datos-album-artista.json');
            yield crear_datos_prueba_1.crearDatos(this._albumCancionService, '/datos-album-cancion.json');
            yield crear_datos_prueba_1.crearDatos(this._cancionArtistaService, '/datos-cancion-artista.json');
            yield crear_datos_prueba_1.crearDatos(this._videoService, '/datos-video.json');
            yield crear_datos_prueba_1.crearDatos(this._enlaceAlbumCancionArtistaVideoService, '/datos-enlace-album-cancion-artista-video.json');
            yield crear_datos_prueba_1.crearDatos(this._chartService, '/datos-chart.json');
            yield crear_datos_prueba_1.crearDatos(this._certificadoService, '/datos-certificados.json');
            yield crear_datos_prueba_1.crearDatos(this._chartAlbumCancionArtistaVideoService, '/datos-chart-album-cancion-artista-video.json');
            yield crear_datos_prueba_1.crearDatos(this._unidadAlbumCancionVideoService, '/datos-unidades-cancion-album-video.json');
            yield crear_datos_prueba_1.crearDatos(this._certificadoChartService, '/datos-certificado-chart.json');
            yield crear_datos_prueba_1.crearDatos(this._certificadoChartFechaService, '/datos-certificado-chart-fecha.json');
            yield crear_datos_prueba_1.crearDatos(this._recordService, '/datos-record.json');
            yield crear_datos_prueba_1.crearDatos(this._recordChartService, '/datos-record-chart.json');
            yield crear_datos_prueba_1.crearDatos(this._artistaTourService, '/datos-artista-tour.json');
            yield crear_datos_prueba_1.crearDatos(this._tourLugarService, '/datos-tour-lugar.json');
            yield crear_datos_prueba_1.crearDatos(this._setlistService, '/datos-setlist.json');
            yield crear_datos_prueba_1.crearDatos(this._actoTourService, '/datos-acto-tour.json');
            yield crear_datos_prueba_1.crearDatos(this._cancionSetlistService, '/datos-canciones-setlist.json');
        });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                name: 'default',
                type: 'mysql',
                host: 'bkufros1mmvponmm7bmz-mysql.services.clever-cloud.com',
                port: 3306,
                username: 'uhpwwfh1n83nxpfq',
                password: 'ZeslcL5WyXuAMAUsLy4a',
                database: 'bkufros1mmvponmm7bmz',
                synchronize: true,
                retryDelay: 40000,
                retryAttempts: 3,
                connectTimeout: 40000,
                keepConnectionAlive: true,
                dropSchema: true,
                charset: 'utf8mb4',
                timezone: 'local',
                ssl: false,
                migrationsRun: false,
                entities: [
                    artista_entity_1.ArtistaEntity,
                    cancion_entity_1.CancionEntity,
                    album_entity_1.AlbumEntity,
                    imagen_entity_1.ImagenEntity,
                    enlace_album_cancion_artista_video_entity_1.EnlaceAlbumCancionArtistaVideoEntity,
                    plataforma_entity_1.PlataformaEntity,
                    chart_entity_1.ChartEntity,
                    certificado_entity_1.CertificadoEntity,
                    chart_album_cancion_artista_video_entity_1.ChartAlbumCancionArtistaVideoEntity,
                    chart_posicion_entity_1.ChartPosicionEntity,
                    video_entity_1.VideoEntity,
                    tipo_video_entity_1.TipoVideoEntity,
                    cancion_artista_entity_1.CancionArtistaEntity,
                    album_cancion_entity_1.AlbumCancionEntity,
                    album_artista_entity_1.AlbumArtistaEntity,
                    certificado_chart_entity_1.CertificadoChartEntity,
                    unidad_album_cancion_video_entity_1.UnidadAlbumCancionVideoEntity,
                    medida_entity_1.MedidaEntity,
                    record_entity_1.RecordEntity,
                    record_chart_entity_1.RecordChartEntity,
                    genero_artista_album_cancion_entity_1.GeneroArtistaAlbumCancionEntity,
                    genero_entity_1.GeneroEntity,
                    lugar_entity_1.LugarEntity,
                    tour_lugar_entity_1.TourLugarEntity,
                    recinto_entity_1.RecintoEntity,
                    tour_entity_1.TourEntity,
                    artista_tour_entity_1.ArtistaTourEntity,
                    setlist_entity_1.SetlistEntity,
                    nominacion_artista_album_cancion_video_entity_1.NominacionArtistaAlbumCancionVideoEntity,
                    categoria_entity_1.CategoriaEntity,
                    premio_entity_1.PremioEntity,
                    premio_anio_entity_1.PremioAnioEntity,
                    presentacion_entity_1.PresentacionEntity,
                    evento_anio_entity_1.EventoAnioEntity,
                    evento_entity_1.EventoEntity,
                    tipo_evento_entity_1.TipoEventoEntity,
                    presentacion_artista_entity_1.PresentacionArtistaEntity,
                    tipo_album_entity_1.TipoAlbumEntity,
                    tipo_cancion_entity_1.TipoCancionEntity,
                    certificado_chart_fecha_entity_1.CertificadoChartFechaEntity,
                    acto_tour_entity_1.ActoTourEntity,
                    cancion_setlist_entity_1.CancionSetlistEntity,
                ],
            }),
            artista_module_1.ArtistaModule,
            cancion_module_1.CancionModule,
            album_module_1.AlbumModule,
            imagen_module_1.ImagenModule,
            enlace_album_cancion_artista_video_module_1.EnlaceAlbumCancionArtistaVideoModule,
            plataforma_module_1.PlataformaModule,
            chart_module_1.ChartModule,
            certificado_module_1.CertificadoModule,
            chart_album_cancion_artista_video_module_1.ChartAlbumCancionArtistaVideoModule,
            chart_posicion_module_1.ChartPosicionModule,
            video_module_1.VideoModule,
            tipo_video_module_1.TipoVideoModule,
            cancion_artista_module_1.CancionArtistaModule,
            album_cancion_module_1.AlbumCancionModule,
            album_artista_module_1.AlbumArtistaModule,
            certificado_chart_module_1.CertificadoChartModule,
            unidad_album_cancion_video_module_1.UnidadAlbumCancionVideoModule,
            medida_module_1.MedidaModule,
            record_module_1.RecordModule,
            record_chart_module_1.RecordChartModule,
            genero_artista_album_cancion_module_1.GeneroArtistaAlbumCancionModule,
            genero_module_1.GeneroModule,
            lugar_module_1.LugarModule,
            tour_lugar_module_1.TourLugarModule,
            recinto_module_1.RecintoModule,
            tour_module_1.TourModule,
            artista_tour_module_1.ArtistaTourModule,
            setlist_module_1.SetlistModule,
            nominacion_artista_album_cancion_video_module_1.NominacionArtistaAlbumCancionVideoModule,
            categoria_module_1.CategoriaModule,
            premio_module_1.PremioModule,
            premio_anio_module_1.PremioAnioModule,
            presentacion_module_1.PresentacionModule,
            evento_anio_module_1.EventoAnioModule,
            evento_module_1.EventoModule,
            tipo_evento_module_1.TipoEventoModule,
            presentacion_artista_module_1.PresentacionArtistaModule,
            tipo_album_module_1.TipoAlbumModule,
            tipo_cancion_module_1.TipoCancionModule,
            tipo_cancion_module_1.TipoCancionModule,
            certificado_chart_fecha_module_1.CertificadoChartFechaModule,
            acto_tour_module_1.ActoTourModule,
            cancion_setlist_module_1.CancionSetlistModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [lugar_service_1.LugarService,
        genero_service_1.GeneroService,
        artista_service_1.ArtistaService,
        imagen_service_1.ImagenService,
        genero_artista_album_cancion_service_1.GeneroArtistaAlbumCancionService,
        album_service_1.AlbumService,
        album_artista_service_1.AlbumArtistaService,
        cancion_service_1.CancionService,
        album_cancion_service_1.AlbumCancionService,
        cancion_artista_service_1.CancionArtistaService,
        tipo_cancion_service_1.TipoCancionService,
        tipo_video_service_1.TipoVideoService,
        video_service_1.VideoService,
        tipo_album_service_1.TipoAlbumService,
        plataforma_service_1.PlataformaService,
        enlace_album_cancion_artista_video_service_1.EnlaceAlbumCancionArtistaVideoService,
        chart_service_1.ChartService,
        chart_album_cancion_artista_video_service_1.ChartAlbumCancionArtistaVideoService,
        unidad_album_cancion_video_service_1.UnidadAlbumCancionVideoService,
        medida_service_1.MedidaService,
        certificado_service_1.CertificadoService,
        certificado_chart_service_1.CertificadoChartService,
        certificado_chart_fecha_service_1.CertificadoChartFechaService,
        record_service_1.RecordService,
        record_chart_service_1.RecordChartService,
        tour_service_1.TourService,
        artista_tour_service_1.ArtistaTourService,
        recinto_service_1.RecintoService,
        tour_lugar_service_1.TourLugarService,
        setlist_service_1.SetlistService,
        acto_tour_service_1.ActoTourService,
        cancion_setlist_service_1.CancionSetlistService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map