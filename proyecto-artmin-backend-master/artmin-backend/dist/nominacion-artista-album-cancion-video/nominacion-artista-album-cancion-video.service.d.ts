import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { NominacionArtistaAlbumCancionVideoEntity } from './nominacion-artista-album-cancion-video.entity';
export declare class NominacionArtistaAlbumCancionVideoService extends PrincipalService<NominacionArtistaAlbumCancionVideoEntity> {
    private readonly _nominacionArtistaAlbumCancionVideoRepository;
    constructor(_nominacionArtistaAlbumCancionVideoRepository: Repository<NominacionArtistaAlbumCancionVideoEntity>);
}
