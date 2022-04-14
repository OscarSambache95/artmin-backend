import {BadRequestException, Body, Controller, Get, Post, Query} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {UnidadAlbumCancionVideoService} from './unidad-album-cancion-video.service';
import {UnidadAlbumCancionVideoEntity} from './unidad-album-cancion-video.entity';

@Controller('unidad-album-cancion-video')
export class UnidadAlbumCancionVideoController extends PrincipalAbstractController<UnidadAlbumCancionVideoEntity> {
    constructor(private readonly _unidadAlbumCancionVideoService: UnidadAlbumCancionVideoService,
    ) {
        super(_unidadAlbumCancionVideoService);
    }
    @Get('obtener-unidades-canciones-albums-videos')
    async obtenerCharts(
        @Query('datosConsulta') datosConsultaUnidades) {
        const existeDatos = datosConsultaUnidades;
        if (existeDatos) {
            return await this._unidadAlbumCancionVideoService
                .obtenerUnidadesCancionesAlbumsVideos(
                    JSON.parse(datosConsultaUnidades),
                );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }

}
