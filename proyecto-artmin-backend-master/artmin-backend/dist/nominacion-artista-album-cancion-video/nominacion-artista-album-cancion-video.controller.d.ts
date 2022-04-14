import { PrincipalAbstractController } from '../principal/principal-controller';
import { NominacionArtistaAlbumCancionVideoService } from './nominacion-artista-album-cancion-video.service';
import { NominacionArtistaAlbumCancionVideoEntity } from './nominacion-artista-album-cancion-video.entity';
export declare class NominacionArtistaAlbumCancionVideoController extends PrincipalAbstractController<NominacionArtistaAlbumCancionVideoEntity> {
    private readonly _nominacionArtistaAlbumCancionVideoService;
    constructor(_nominacionArtistaAlbumCancionVideoService: NominacionArtistaAlbumCancionVideoService);
}
