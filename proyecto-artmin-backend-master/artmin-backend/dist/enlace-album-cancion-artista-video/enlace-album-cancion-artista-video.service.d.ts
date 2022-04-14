import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { EnlaceAlbumCancionArtistaVideoEntity } from './enlace-album-cancion-artista-video.entity';
export declare class EnlaceAlbumCancionArtistaVideoService extends PrincipalService<EnlaceAlbumCancionArtistaVideoEntity> {
    private readonly _enlaceAlbumCancionArtistaVideoRepository;
    constructor(_enlaceAlbumCancionArtistaVideoRepository: Repository<EnlaceAlbumCancionArtistaVideoEntity>);
    guardarEnlaceArtistaAlbumCancionVideo(entidad: string, idEntidad: number, enlaces: EnlaceAlbumCancionArtistaVideoEntity[]): Promise<void>;
}
