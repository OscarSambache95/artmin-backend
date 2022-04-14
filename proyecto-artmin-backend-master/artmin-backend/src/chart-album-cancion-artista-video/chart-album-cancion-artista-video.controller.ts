import {BadRequestException, Body, Controller, Get, Post, Query} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {ChartAlbumCancionArtistaVideoEntity} from './chart-album-cancion-artista-video.entity';
import {ChartAlbumCancionArtistaVideoService} from './chart-album-cancion-artista-video.service';


@Controller('chart-album-cancion-artista-video')
export class ChartAlbumCancionArtistaVideoController extends PrincipalAbstractController<ChartAlbumCancionArtistaVideoEntity> {
    constructor(private readonly _chartAlbumCancionArtistaVideoService: ChartAlbumCancionArtistaVideoService,
    ) {
        super(_chartAlbumCancionArtistaVideoService);
    }

    @Get('obtener-charts-canciones-albums-artistas-videos')
    async obtenerCharts(
        @Query('datosConsulta') datosConsultaCharts) {
        const existeDatos = datosConsultaCharts;
        if (existeDatos) {
            return await this._chartAlbumCancionArtistaVideoService
                .obtenerChartsCancionesAlbumsArtistasVideos(
                JSON.parse(datosConsultaCharts),
            );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }
}
