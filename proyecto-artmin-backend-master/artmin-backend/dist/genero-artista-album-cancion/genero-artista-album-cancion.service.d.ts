import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { GeneroArtistaAlbumCancionEntity } from './genero-artista-album-cancion.entity';
export declare class GeneroArtistaAlbumCancionService extends PrincipalService<GeneroArtistaAlbumCancionEntity> {
    private readonly _generoArtistaAlbumCancionRepository;
    constructor(_generoArtistaAlbumCancionRepository: Repository<GeneroArtistaAlbumCancionEntity>);
    guardarGenerosPorArtistaAlbumCancion(entidad: string, idEntidad: number, idGeneros: number[]): Promise<void>;
}
