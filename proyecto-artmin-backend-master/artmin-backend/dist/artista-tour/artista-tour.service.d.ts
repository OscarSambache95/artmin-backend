import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { ArtistaTourEntity } from './artista-tour.entity';
export declare class ArtistaTourService extends PrincipalService<ArtistaTourEntity> {
    private readonly _artistaTourRepository;
    constructor(_artistaTourRepository: Repository<ArtistaTourEntity>);
    guardarArtistasTour(idTour: number, idsArtistas: number[]): Promise<void>;
}
