import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {PresentacionArtistaEntity} from '../presentacion-artista/presentacion-artista.entity';
import {PremioEntity} from '../premio/premio.entity';
import {PremioAnioEntity} from '../premio-anio/premio-anio.entity';
import {EventoAnioEntity} from '../evento-anio/evento-anio.entity';
import {CancionSetlistEntity} from '../cancion-setlist/cancion-setlist.entity';

@Entity('presentacion')
export class PresentacionEntity extends PrincipalEntity {

    @Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    })
    descripcion: string;

    @ManyToOne(
        type => PremioAnioEntity,
        premioAnio => premioAnio.presentacionesPremioAnio,
    )
    premioAnio: PremioAnioEntity | number;

    @ManyToOne(
        type => EventoAnioEntity,
        eventoAnio => eventoAnio.presentacionesEventoAnio,
    )
    eventoAnio: EventoAnioEntity | number;

    @OneToMany(
        type => CancionSetlistEntity,
        setlist => setlist.presentacion,
    )
    cancionesSetlistPresentacion: CancionSetlistEntity[];

    @OneToMany(
        type => PresentacionArtistaEntity,
        presentacionArtista => presentacionArtista.presentacion,
    )
    presentacionesArtista: PresentacionArtistaEntity[];
}
