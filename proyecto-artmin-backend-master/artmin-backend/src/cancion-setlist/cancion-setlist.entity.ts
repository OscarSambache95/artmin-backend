import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {TourEntity} from '../tour/tour.entity';
import {PresentacionEntity} from '../presentacion/presentacion.entity';
import {SetlistEntity} from '../setlist/setlist.entity';
import {ActoTourEntity} from '../acto-tour/acto-tour.entity';

@Entity('cancion-setlist')
export class CancionSetlistEntity extends PrincipalEntity {
    @Column({
        type: 'int',
        name: 'posicion',
    })
    posicion: number;

    @ManyToOne(
           type => CancionEntity,
        cancion => cancion.setlistsCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => SetlistEntity,
        setlistTour => setlistTour.cancionesSetlistTour,
    )
    setlistTour: SetlistEntity | number;

    @ManyToOne(
        type => ActoTourEntity,
        actoTour => actoTour.cancionesSetlistTour,
    )
    actoTour: ActoTourEntity | number;

    @ManyToOne(
        type => PresentacionEntity,
        presentacion => presentacion.cancionesSetlistPresentacion,
    )
    presentacion: PresentacionEntity | number;
}
