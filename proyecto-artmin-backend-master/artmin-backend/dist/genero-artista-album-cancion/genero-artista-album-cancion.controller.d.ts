import { PrincipalAbstractController } from '../principal/principal-controller';
import { GeneroArtistaAlbumCancionEntity } from './genero-artista-album-cancion.entity';
import { GeneroArtistaAlbumCancionService } from './genero-artista-album-cancion.service';
export declare class GeneroArtistaAlbumCancionController extends PrincipalAbstractController<GeneroArtistaAlbumCancionEntity> {
    private readonly _generoArtistaAlbumCancionService;
    constructor(_generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService);
}
