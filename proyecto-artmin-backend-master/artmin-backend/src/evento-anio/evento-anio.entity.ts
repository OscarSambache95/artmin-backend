import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {EventoEntity} from '../evento/evento.entity';
import {PresentacionEntity} from '../presentacion/presentacion.entity';

@Entity('evento-anio')
export class EventoAnioEntity extends PrincipalEntity {
    @Column({
        type: 'int',
        name: 'anio',
    })
    anio: number;

    @Column({
        type: 'varchar',
        name: 'lugar',
    })
    lugar: string;

    @Column({
        type: 'varchar',
        name: 'fecha',
    })
    fecha: string;

    @ManyToOne(
        type => EventoEntity,
        evento => evento.eventosAnioEvento,
    )
    evento: EventoEntity | number;

    @OneToMany(
        type => PresentacionEntity,
        presentacion => presentacion.eventoAnio,
    )
    presentacionesEventoAnio: PresentacionEntity[];
}
