import {
    BadRequestException,
    Body,
    Controller,
    FileInterceptor,
    Get,
    Post,
    Query, UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {VideoEntity} from './video.entity';
import {VideoService} from './video.service';

@Controller('video')
export class VideoController extends PrincipalAbstractController<VideoEntity> {
    constructor(private readonly _videoService: VideoService,
    ) {
        super(_videoService);
    }

    @Post('crear-video')
    async crearVideo(
        @Query('datosCrearVideo') datosCrearVideo,
    ): Promise<VideoEntity> {
        try {
            datosCrearVideo = JSON.parse(datosCrearVideo);
            return await this._videoService.guardarVideo(
                datosCrearVideo.video,
                datosCrearVideo.enlaces,
            );
        } catch (error) {
            console.error('Error al crear el video', error);
            throw new BadRequestException('Error al crear el video');
        }
    }

    @Post('editar-video')
    async editarVideo(
        @Query('datosEditarVideo') datosCrearVideo,
    ): Promise<VideoEntity> {
        try {
            datosCrearVideo = JSON.parse(datosCrearVideo);
            delete datosCrearVideo.video.enlace;
            return await this._videoService.editarVideo(
                datosCrearVideo.video,
                datosCrearVideo.enlaces,
                datosCrearVideo.idVideo,
            );
        } catch (error) {
            console.error('Error al editar el video', error);
            throw new BadRequestException('Error al editar el video');
        }
    }


    @Get('obtener-videos-por-cancion-artista-album-tipo')
    async obtenervideos(
        @Query('datosConsulta') datosConsultaVideos) {
        const existeDatos = datosConsultaVideos;
        if (existeDatos) {
            return await this._videoService.obtenerVideos(
                JSON.parse(datosConsultaVideos),
            );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }
}
