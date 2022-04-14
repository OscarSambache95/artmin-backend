import {
    BadRequestException,
    Body,
    Controller,
    FileInterceptor, Get,
    Post,
    Query,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {CancionEntity} from './cancion.entity';
import {CancionService} from './cancion.service';
import {AlbumEntity} from '../album/album.entity';

@Controller('cancion')
export class CancionController extends PrincipalAbstractController<CancionEntity> {
    constructor(private readonly _cancionService: CancionService,
    ) {
        super(_cancionService);
    }

    @Post('crear-cancion-artista-album-imagen-generos')
    @UseInterceptors(FileInterceptor('imagen'))
    async crearCancion(
        @UploadedFile() file,
        @Query('datosCrearCancion') datosCrearCancion,
    ): Promise<CancionEntity> {
        try {
            datosCrearCancion = JSON.parse(datosCrearCancion);
            return await this._cancionService.guardarCancionAlbumArtistasGenerosImagen(
                datosCrearCancion.cancion,
                datosCrearCancion.generos,
                datosCrearCancion.artistas,
                datosCrearCancion.albums,
                datosCrearCancion.enlaces,
                datosCrearCancion.pathAlterno,
                file,
            );
        } catch (error) {
            console.error('Error al crear la canción', error);
            throw new BadRequestException('Error al crear la canción');
        }
    }

    @Post('editar-cancion-artista-album-imagen-generos')
    @UseInterceptors(FileInterceptor('imagen'))
    async editarCancion(
        @UploadedFile() file,
        @Query('datosEditarCancion') datosEditarCancion,
    ): Promise<CancionEntity> {
        try {
            datosEditarCancion = JSON.parse(datosEditarCancion);
            delete datosEditarCancion.cancion.generos;
            delete datosEditarCancion.cancion.artistas;
            delete datosEditarCancion.cancion.albums;
            delete datosEditarCancion.cancion.imagen;
            delete datosEditarCancion.cancion.enlace;
            return await this._cancionService.editarCancion(
                datosEditarCancion.cancion,
                datosEditarCancion.generos,
                datosEditarCancion.artistas,
                datosEditarCancion.albums,
                datosEditarCancion.enlaces,
                datosEditarCancion.idCancion,
                datosEditarCancion.pathAlterno,
                datosEditarCancion.idImagen,
                file,
            );
        } catch (error) {
            console.error('Error al editar la canción', error);
            throw new BadRequestException('Error al editar la canción');
        }
    }

    @Get('canciones-por-genero-artista')
    async obtenerAlbumesPorGenero(
        @Query('datosConsulta') datosConsultaCanciones) {
        const existeDatos = datosConsultaCanciones;
        if (existeDatos) {
            return await this._cancionService.obtenerCancionePorGeneroArtista(
                JSON.parse(datosConsultaCanciones),
            );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }
}
