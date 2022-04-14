import {
    BadRequestException,
    Body,
    Controller,
    FileInterceptor,
    Post,
    Query,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {AlbumCancionEntity} from './album-cancion.entity';
import {AlbumCancionService} from './album-cancion.service';
import {AlbumEntity} from '../album/album.entity';

@Controller('album-cancion')
export class AlbumCancionController extends PrincipalAbstractController<AlbumCancionEntity> {
    constructor(private readonly _albumCancionService: AlbumCancionService,
    ) {
        super(_albumCancionService);
    }

    @Post('guardar-canciones-albums')
    async guardarCancionesAlbumCancion(
        @Body('idAlbum') idAlbum,
        @Body('idsCanciones') idsCanciones,
    ): Promise<[AlbumCancionEntity[], number]> {
        try {
            return this._albumCancionService.guardarCancionesAlbum(
                idAlbum,
                idsCanciones
            )
        } catch (error) {
            console.error('Error al guardar canciones album', error);
            throw new BadRequestException('Error al guardar canciones album');
        }
    }
}
