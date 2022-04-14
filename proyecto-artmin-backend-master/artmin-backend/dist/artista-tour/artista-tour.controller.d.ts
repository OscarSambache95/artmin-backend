import { PrincipalAbstractController } from '../principal/principal-controller';
import { ArtistaTourService } from './artista-tour.service';
import { ArtistaTourEntity } from './artista-tour.entity';
export declare class ArtistaTourController extends PrincipalAbstractController<ArtistaTourEntity> {
    private readonly _artistaTourService;
    constructor(_artistaTourService: ArtistaTourService);
}
