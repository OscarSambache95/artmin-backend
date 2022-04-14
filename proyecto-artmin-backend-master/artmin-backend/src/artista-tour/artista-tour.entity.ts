import {Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ArtistaEntity} from '../artista/artista.entity';
import {TourEntity} from '../tour/tour.entity';

@Entity('artista-tour')
export class ArtistaTourEntity extends PrincipalEntity {
    @ManyToOne(
        type => ArtistaEntity,
        artista => artista.toursArtista,
    )
    artista: ArtistaEntity | number;

    @ManyToOne(
        type => TourEntity,
        tour => tour.artistasTour,
    )
    tour: TourEntity | number;
}
