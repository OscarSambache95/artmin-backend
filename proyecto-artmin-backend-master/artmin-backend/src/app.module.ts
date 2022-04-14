import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ArtistaModule} from './artista/artista.module';
import {CancionModule} from './cancion/cancion.module';
import {AlbumModule} from './album/album.module';
import {ImagenModule} from './imagen/imagen.module';
import {EnlaceAlbumCancionArtistaVideoModule} from './enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.module';
import {PlataformaModule} from './plataforma/plataforma.module';
import {ChartModule} from './chart/chart.module';
import {CertificadoModule} from './certificado/certificado.module';
import {ChartPosicionModule} from './chart-posicion/chart-posicion.module';
import {VideoModule} from './video/video.module';
import {TipoVideoModule} from './tipo-video/tipo-video.module';
import {AlbumCancionModule} from './album-cancion/album-cancion.module';
import {CertificadoChartModule} from './certificado-chart/certificado-chart.module';
import {MedidaModule} from './medida/medida.module';
import {RecordModule} from './record/record.module';
import {RecordChartModule} from './record-chart/record-chart.module';
import {GeneroModule} from './genero/genero.module';
import {LugarModule} from './lugar/lugar.module';
import {TourLugarModule} from './tour-lugar/tour-lugar.module';
import {RecintoModule} from './recinto/recinto.module';
import {TourModule} from './tour/tour.module';
import {ArtistaTourModule} from './artista-tour/artista-tour.module';
import {SetlistModule} from './setlist/setlist.module';
import {NominacionArtistaAlbumCancionVideoModule} from './nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.module';
import {CategoriaModule} from './categoria/categoria.module';
import {PremioModule} from './premio/premio.module';
import {PremioAnioModule} from './premio-anio/premio-anio.module';
import {PresentacionModule} from './presentacion/presentacion.module';
import {EventoAnioModule} from './evento-anio/evento-anio.module';
import {EventoModule} from './evento/evento.module';
import {TipoEventoModule} from './tipo-evento/tipo-evento.module';
import {PresentacionArtistaModule} from './presentacion-artista/presentacion-artista.module';
import {TipoAlbumModule} from './tipo-album/tipo-album.module';
import {ChartAlbumCancionArtistaVideoModule} from './chart-album-cancion-artista-video/chart-album-cancion-artista-video.module';
import {CancionArtistaModule} from './cancion-artista/cancion-artista.module';
import {AlbumArtistaModule} from './album-artista/album-artista.module';
import {GeneroArtistaAlbumCancionModule} from './genero-artista-album-cancion/genero-artista-album-cancion.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TourLugarEntity} from './tour-lugar/tour-lugar.entity';
import {PresentacionArtistaEntity} from './presentacion-artista/presentacion-artista.entity';
import {PlataformaEntity} from './plataforma/plataforma.entity';
import {VideoEntity} from './video/video.entity';
import {RecordChartEntity} from './record-chart/record-chart.entity';
import {EventoAnioEntity} from './evento-anio/evento-anio.entity';
import {AlbumArtistaEntity} from './album-artista/album-artista.entity';
import {LugarEntity} from './lugar/lugar.entity';
import {TourEntity} from './tour/tour.entity';
import {CategoriaEntity} from './categoria/categoria.entity';
import {CancionEntity} from './cancion/cancion.entity';
import {ChartAlbumCancionArtistaVideoEntity} from './chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import {RecordEntity} from './record/record.entity';
import {CertificadoChartEntity} from './certificado-chart/certificado-chart.entity';
import {NominacionArtistaAlbumCancionVideoEntity} from './nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import {PremioEntity} from './premio/premio.entity';
import {GeneroEntity} from './genero/genero.entity';
import {SetlistEntity} from './setlist/setlist.entity';
import {EnlaceAlbumCancionArtistaVideoEntity} from './enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import {AlbumEntity} from './album/album.entity';
import {ArtistaTourEntity} from './artista-tour/artista-tour.entity';
import {AlbumCancionEntity} from './album-cancion/album-cancion.entity';
import {MedidaEntity} from './medida/medida.entity';
import {ChartPosicionEntity} from './chart-posicion/chart-posicion.entity';
import {TipoVideoEntity} from './tipo-video/tipo-video.entity';
import {GeneroArtistaAlbumCancionEntity} from './genero-artista-album-cancion/genero-artista-album-cancion.entity';
import {TipoEventoEntity} from './tipo-evento/tipo-evento.entity';
import {EventoEntity} from './evento/evento.entity';
import {RecintoEntity} from './recinto/recinto.entity';
import {PresentacionEntity} from './presentacion/presentacion.entity';
import {ArtistaEntity} from './artista/artista.entity';
import {ChartEntity} from './chart/chart.entity';
import {CancionArtistaEntity} from './cancion-artista/cancion-artista.entity';
import {PremioAnioEntity} from './premio-anio/premio-anio.entity';
import {ImagenEntity} from './imagen/imagen.entity';
import {TipoAlbumEntity} from './tipo-album/tipo-album.entity';
import {CertificadoEntity} from './certificado/certificado.entity';
import {GeneroService} from './genero/genero.service';
import {crearDatos} from './datos-prueba/crear-datos-prueba';
import {ArtistaService} from './artista/artista.service';
import {ImagenService} from './imagen/imagen.service';
import {GeneroArtistaAlbumCancionService} from './genero-artista-album-cancion/genero-artista-album-cancion.service';
import {AlbumService} from './album/album.service';
import {AlbumArtistaService} from './album-artista/album-artista.service';
import {CancionService} from './cancion/cancion.service';
import {AlbumCancionService} from './album-cancion/album-cancion.service';
import {CancionArtistaService} from './cancion-artista/cancion-artista.service';
import {TipoCancionModule} from './tipo-cancion/tipo-cancion.module';
import {TipoCancionEntity} from './tipo-cancion/tipo-cancion.entity';
import {TipoCancionService} from './tipo-cancion/tipo-cancion.service';
import {TipoAlbumService} from './tipo-album/tipo-album.service';
import {PlataformaService} from './plataforma/plataforma.service';
import {EnlaceAlbumCancionArtistaVideoService} from './enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service';
import {TipoVideoService} from './tipo-video/tipo-video.service';
import {VideoService} from './video/video.service';
import {LugarService} from './lugar/lugar.service';
import {ChartService} from './chart/chart.service';
import {ChartAlbumCancionArtistaVideoService} from './chart-album-cancion-artista-video/chart-album-cancion-artista-video.service';
import {UnidadAlbumCancionVideoEntity} from './unidad-album-cancion-video/unidad-album-cancion-video.entity';
import {UnidadAlbumCancionVideoModule} from './unidad-album-cancion-video/unidad-album-cancion-video.module';
import {UnidadAlbumCancionVideoService} from './unidad-album-cancion-video/unidad-album-cancion-video.service';
import {MedidaService} from './medida/medida.service';
import {CertificadoService} from './certificado/certificado.service';
import {CertificadoChartFechaModule} from './certificado-chart-fecha/certificado-chart-fecha.module';
import {CertificadoChartFechaEntity} from './certificado-chart-fecha/certificado-chart-fecha.entity';
import {CertificadoChartService} from './certificado-chart/certificado-chart.service';
import {CertificadoChartFechaService} from './certificado-chart-fecha/certificado-chart-fecha.service';
import {RecordService} from './record/record.service';
import {RecordChartService} from './record-chart/record-chart.service';
import { TourService } from './tour/tour.service';
import { ArtistaTourService } from './artista-tour/artista-tour.service';
import { RecintoService } from './recinto/recinto.service';
import { TourLugarService } from './tour-lugar/tour-lugar.service';
import { ActoTourModule } from './acto-tour/acto-tour.module';
import { CancionSetlistModule } from './cancion-setlist/cancion-setlist.module';
import {ActoTourEntity} from './acto-tour/acto-tour.entity';
import {CancionSetlistEntity} from './cancion-setlist/cancion-setlist.entity';
import {ActoTourService} from './acto-tour/acto-tour.service';
import {SetlistService} from './setlist/setlist.service';
import {CancionSetlistService} from './cancion-setlist/cancion-setlist.service';

// @ts-ignore
@Module({
    imports: [
        TypeOrmModule.forRoot({
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
                ArtistaEntity,
                CancionEntity,
                AlbumEntity,
                ImagenEntity,
                EnlaceAlbumCancionArtistaVideoEntity,
                PlataformaEntity,
                ChartEntity,
                CertificadoEntity,
                ChartAlbumCancionArtistaVideoEntity,
                ChartPosicionEntity,
                VideoEntity,
                TipoVideoEntity,
                CancionArtistaEntity,
                AlbumCancionEntity,
                AlbumArtistaEntity,
                CertificadoChartEntity,
                UnidadAlbumCancionVideoEntity,
                MedidaEntity,
                RecordEntity,
                RecordChartEntity,
                GeneroArtistaAlbumCancionEntity,
                GeneroEntity,
                LugarEntity,
                TourLugarEntity,
                RecintoEntity,
                TourEntity,
                ArtistaTourEntity,
                SetlistEntity,
                NominacionArtistaAlbumCancionVideoEntity,
                CategoriaEntity,
                PremioEntity,
                PremioAnioEntity,
                PresentacionEntity,
                EventoAnioEntity,
                EventoEntity,
                TipoEventoEntity,
                PresentacionArtistaEntity,
                TipoAlbumEntity,
                TipoCancionEntity,
                CertificadoChartFechaEntity,
                ActoTourEntity,
                CancionSetlistEntity,
            ],
        }),
        ArtistaModule,
        CancionModule,
        AlbumModule,
        ImagenModule,
        EnlaceAlbumCancionArtistaVideoModule,
        PlataformaModule,
        ChartModule,
        CertificadoModule,
        ChartAlbumCancionArtistaVideoModule,
        ChartPosicionModule,
        VideoModule,
        TipoVideoModule,
        CancionArtistaModule,
        AlbumCancionModule,
        AlbumArtistaModule,
        CertificadoChartModule,
        UnidadAlbumCancionVideoModule,
        MedidaModule,
        RecordModule,
        RecordChartModule,
        GeneroArtistaAlbumCancionModule,
        GeneroModule,
        LugarModule,
        TourLugarModule,
        RecintoModule,
        TourModule,
        ArtistaTourModule,
        SetlistModule,
        NominacionArtistaAlbumCancionVideoModule,
        CategoriaModule,
        PremioModule,
        PremioAnioModule,
        PresentacionModule,
        EventoAnioModule,
        EventoModule,
        TipoEventoModule,
        PresentacionArtistaModule,
        TipoAlbumModule,
        TipoCancionModule,
        TipoCancionModule,
        CertificadoChartFechaModule,
        ActoTourModule,
        CancionSetlistModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(
        private readonly _lugarService: LugarService,
        private readonly _generoService: GeneroService,
        private readonly _artistaService: ArtistaService,
        private readonly _imagenSerivce: ImagenService,
        private readonly _generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService,
        private readonly _albumService: AlbumService,
        private readonly _albumArtistaService: AlbumArtistaService,
        private readonly _cancionService: CancionService,
        private readonly _albumCancionService: AlbumCancionService,
        private readonly _cancionArtistaService: CancionArtistaService,
        private readonly _tipoCancionService: TipoCancionService,
        private readonly _tipoVideoService: TipoVideoService,
        private readonly _videoService: VideoService,
        private readonly _tipoAlbumService: TipoAlbumService,
        private readonly _plataformaService: PlataformaService,
        private readonly _enlaceAlbumCancionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService,
        private readonly _chartService: ChartService,
        private readonly _chartAlbumCancionArtistaVideoService: ChartAlbumCancionArtistaVideoService,
        private readonly _unidadAlbumCancionVideoService: UnidadAlbumCancionVideoService,
        private readonly _medidaService: MedidaService,
        private readonly _certificadoService: CertificadoService,
        private readonly _certificadoChartService: CertificadoChartService,
        private readonly _certificadoChartFechaService: CertificadoChartFechaService,
        private readonly _recordService: RecordService,
        private readonly _recordChartService: RecordChartService,
        private readonly _tourService: TourService,
        private readonly _artistaTourService: ArtistaTourService,
        private readonly _recintoService: RecintoService,
        private readonly _tourLugarService: TourLugarService,
        private readonly _setlistService: SetlistService,
        private readonly _actoTourService: ActoTourService,
        private readonly _cancionSetlistService: CancionSetlistService,

    ) {
        this.crearDatosDePrueba()
          // tslint:disable-next-line:no-empty
            .then(datos => {
            })
            .catch(error => {
                console.error(error);
            });
    }

    async crearDatosDePrueba() {
        // modulo de ocnfiguraciones
        await crearDatos(this._lugarService, '/datos-lugar.json');
        await crearDatos(this._tipoAlbumService, '/datos-tipo-album.json');
        await crearDatos(this._tipoCancionService, '/datos-tipo-cancion.json');
        await crearDatos(this._tipoVideoService, '/datos-tipo-video.json');
        await crearDatos(this._plataformaService, '/datos-plataforma.json');
        await crearDatos(this._medidaService, '/datos-medida.json');
        await crearDatos(this._generoService, '/datos-genero.json');
        await crearDatos(this._recintoService, '/datos-recinto.json');
        // modulo de ocnfiguraciones

        await crearDatos(this._artistaService, '/datos-artista.json');
        await crearDatos(this._albumService, '/datos-album.json');
        await crearDatos(this._cancionService, '/datos-cancion.json');
        await crearDatos(this._tourService, '/datos-tour.json');
        await crearDatos(this._imagenSerivce, '/datos-imagen.json');
        await crearDatos(this._generoArtistaAlbumCancionService, '/datos-genero-artista-album-cancion.json');
        await crearDatos(this._albumArtistaService, '/datos-album-artista.json');
        await crearDatos(this._albumCancionService, '/datos-album-cancion.json');
        await crearDatos(this._cancionArtistaService, '/datos-cancion-artista.json');
        await crearDatos(this._videoService, '/datos-video.json');
        await crearDatos(this._enlaceAlbumCancionArtistaVideoService, '/datos-enlace-album-cancion-artista-video.json');
        await crearDatos(this._chartService, '/datos-chart.json');
        await crearDatos(this._certificadoService, '/datos-certificados.json');
        await crearDatos(this._chartAlbumCancionArtistaVideoService, '/datos-chart-album-cancion-artista-video.json');
        await crearDatos(this._unidadAlbumCancionVideoService, '/datos-unidades-cancion-album-video.json');
        await crearDatos(this._certificadoChartService, '/datos-certificado-chart.json');
        await crearDatos(this._certificadoChartFechaService, '/datos-certificado-chart-fecha.json');
        await crearDatos(this._recordService, '/datos-record.json');
        await crearDatos(this._recordChartService, '/datos-record-chart.json');
        await crearDatos(this._artistaTourService, '/datos-artista-tour.json');
        await crearDatos(this._tourLugarService, '/datos-tour-lugar.json');
        await crearDatos(this._setlistService, '/datos-setlist.json');
        await crearDatos(this._actoTourService, '/datos-acto-tour.json');
        await crearDatos(this._cancionSetlistService, '/datos-canciones-setlist.json');
    }
}
