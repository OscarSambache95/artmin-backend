import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CancionEntity} from '../cancion/cancion.entity';

@Entity('tipo-cancion')
export class TipoCancionEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: string;

    @Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true
    })
    descripcion: string;

    @OneToMany(
        type => CancionEntity,
        cancion => cancion.tipoCancion,
    )
    canciones: CancionEntity[];
}
