import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CancionSetlistEntity} from '../cancion-setlist/cancion-setlist.entity';
import {TourEntity} from '../tour/tour.entity';
import {ActoTourEntity} from '../acto-tour/acto-tour.entity';

@Entity('setlist')
export class SetlistEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: number;

    @Column({
        type: 'date',
        name: 'fecha_inicio',
    })
    fechaInicio: string;

    @Column({
        type: 'date',
        name: 'fecha_fin',
        nullable: true,
    })
    fechaFin: string;

    @Column({
        type: 'boolean',
        name: 'tiene_actos',
        nullable: true,
    })
    tieneActos: 0 | 1;

    @ManyToOne(
        type => TourEntity,
        tour => tour.setlistsTour,
    )
    tour: TourEntity | number;

    @OneToMany(
        type => CancionSetlistEntity,
        cancionSetlist => cancionSetlist.setlistTour,
    )
    cancionesSetlistTour: CancionSetlistEntity[];

    @OneToMany(
        type => ActoTourEntity,
        actosTour => actosTour.setlist,
    )
    actosTour: ActoTourEntity[];
}
