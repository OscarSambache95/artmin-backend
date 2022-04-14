import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {TipoEventoEntity} from '../tipo-evento/tipo-evento.entity';
import {EventoAnioEntity} from '../evento-anio/evento-anio.entity';

@Entity('evento')
export class EventoEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: string;

        @Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    })
    descripcion: string;

    @ManyToOne(
        type => TipoEventoEntity,
        tipoEvento => tipoEvento.eventosTipoEvento,
    )
    tipoEvento: TipoEventoEntity | number;

    @OneToMany(
        type => EventoAnioEntity,
        eventoAnio => eventoAnio.evento,
    )
    eventosAnioEvento: EventoAnioEntity[];
}
