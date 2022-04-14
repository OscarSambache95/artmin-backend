import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {EventoEntity} from '../evento/evento.entity';

@Entity('tipo-evento')
export class TipoEventoEntity extends PrincipalEntity {
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

    @OneToMany(
        type => EventoEntity,
        evento => evento.tipoEvento,
    )
    eventosTipoEvento: EventoEntity[];
}
