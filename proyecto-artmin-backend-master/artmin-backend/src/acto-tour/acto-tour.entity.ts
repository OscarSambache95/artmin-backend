import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CancionSetlistEntity} from '../cancion-setlist/cancion-setlist.entity';
import {SetlistEntity} from '../setlist/setlist.entity';

@Entity('acto-tour')
export class ActoTourEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: number;

    @OneToMany(
        type => CancionSetlistEntity,
        cancionSetlist => cancionSetlist.actoTour,
    )
    cancionesSetlistTour: CancionSetlistEntity[];

    @ManyToOne(
        type => SetlistEntity,
        setlist => setlist.actosTour,
    )
    setlist: SetlistEntity | number;
}
