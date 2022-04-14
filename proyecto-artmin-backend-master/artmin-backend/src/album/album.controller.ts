import {AlbumService} from './album.service';
import {AlbumEntity} from './album.entity';
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
import {ArtistaEntity} from '../artista/artista.entity';

@Controller('album')
export class AlbumController extends PrincipalAbstractController<AlbumEntity> {
    constructor(private readonly _albumService: AlbumService,
    ) {
        super(_albumService);
    }

    @Post('crear-album-imagen-generos')
    @UseInterceptors(FileInterceptor('imagen'))
    async crearAlbum(
        @UploadedFile() file,
        @Query() datosAlbumGeneros,
    ): Promise<AlbumEntity> {
        try {
            datosAlbumGeneros = JSON.parse(datosAlbumGeneros.datosAlbumGeneros);
            return await this._albumService.guardarAlbumArtistasGenerosImagen(
                datosAlbumGeneros.album,
                datosAlbumGeneros.generos,
                datosAlbumGeneros.artistas,
                file,
            );
        } catch (error) {
            console.error('Error al crear el album', error);
            throw new BadRequestException('Error al crear el album');
        }
    }

    @Post('editar-album-artista-imagen-generos')
    @UseInterceptors(FileInterceptor('imagen'))
    async editarArtista(
        @UploadedFile() file,
        @Query() datosAlbumGenerosImagenArtistas,
    ): Promise<AlbumEntity> {
        try {
            datosAlbumGenerosImagenArtistas = JSON.parse(datosAlbumGenerosImagenArtistas.datosAlbumGenerosImagenArtistas);
            delete datosAlbumGenerosImagenArtistas.album.imagen;
            delete datosAlbumGenerosImagenArtistas.album.artistas;
            delete datosAlbumGenerosImagenArtistas.album.generos;
            return await this._albumService.editarAlbumArtistaImagenGeneros(
                datosAlbumGenerosImagenArtistas.album,
                datosAlbumGenerosImagenArtistas.generos,
                datosAlbumGenerosImagenArtistas.artistas,
                datosAlbumGenerosImagenArtistas.idAlbum,
                datosAlbumGenerosImagenArtistas.idImagen,
                file,
            );
        } catch (error) {
            console.error('Error al editar el album', error);
            throw new BadRequestException('Error al editar el album');
        }
    }

    @Get('albumes-por-genero')
    async obtenerAlbumesPorGenero(
        @Query('datosConsulta') datosAlbumsPorGenero) {
        const existeDatos = datosAlbumsPorGenero;
        if (existeDatos) {
            return await this._albumService.obtenerAlbumesPorGenero(
                JSON.parse(datosAlbumsPorGenero),
            );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }
}
