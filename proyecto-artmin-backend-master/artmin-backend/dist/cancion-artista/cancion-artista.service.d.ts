import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { CancionArtistaEntity } from './cancion-artista.entity';
export declare class CancionArtistaService extends PrincipalService<CancionArtistaEntity> {
    private readonly _cancionArtistaRepository;
    constructor(_cancionArtistaRepository: Repository<CancionArtistaEntity>);
    guardarArtistasCancion(idCancion: number, idsArtistas: Array<{
        id: number;
        esPrincipal: 0 | 1;
    }>): Promise<void>;
}
