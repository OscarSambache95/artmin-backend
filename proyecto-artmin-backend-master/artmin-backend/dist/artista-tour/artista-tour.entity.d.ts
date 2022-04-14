import { PrincipalEntity } from '../principal/principal-entity';
import { ArtistaEntity } from '../artista/artista.entity';
import { TourEntity } from '../tour/tour.entity';
export declare class ArtistaTourEntity extends PrincipalEntity {
    artista: ArtistaEntity | number;
    tour: TourEntity | number;
}
