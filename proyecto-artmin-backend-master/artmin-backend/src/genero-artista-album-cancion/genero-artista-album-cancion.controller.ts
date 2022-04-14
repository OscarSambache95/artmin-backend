import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {GeneroArtistaAlbumCancionEntity} from './genero-artista-album-cancion.entity';
import {GeneroArtistaAlbumCancionService} from './genero-artista-album-cancion.service';

@Controller('genero-artista-album-cancion')
export class GeneroArtistaAlbumCancionController extends PrincipalAbstractController<GeneroArtistaAlbumCancionEntity> {
    constructor(private readonly _generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService,
    ) {
        super(_generoArtistaAlbumCancionService);
    }
}
