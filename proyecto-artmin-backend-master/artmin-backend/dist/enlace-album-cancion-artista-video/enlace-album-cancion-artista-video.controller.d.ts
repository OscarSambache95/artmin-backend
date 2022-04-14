import { PrincipalAbstractController } from '../principal/principal-controller';
import { EnlaceAlbumCancionArtistaVideoEntity } from './enlace-album-cancion-artista-video.entity';
import { EnlaceAlbumCancionArtistaVideoService } from './enlace-album-cancion-artista-video.service';
export declare class EnlaceAlbumCancionArtistaVideoController extends PrincipalAbstractController<EnlaceAlbumCancionArtistaVideoEntity> {
    private readonly _enlaceAlbumCAncionArtistaVideoService;
    constructor(_enlaceAlbumCAncionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService);
}
