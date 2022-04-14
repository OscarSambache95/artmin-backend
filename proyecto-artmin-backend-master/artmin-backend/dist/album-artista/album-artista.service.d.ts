import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { AlbumArtistaEntity } from './album-artista.entity';
export declare class AlbumArtistaService extends PrincipalService<AlbumArtistaEntity> {
    private readonly _albumArtistaRepository;
    constructor(_albumArtistaRepository: Repository<AlbumArtistaEntity>);
    guardarArtistasAlbumCancion(idAlbum: number, idsArtistas: number[]): Promise<void>;
}
