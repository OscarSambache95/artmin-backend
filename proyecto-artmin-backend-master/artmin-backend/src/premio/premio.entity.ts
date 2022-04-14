import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {PremioAnioEntity} from '../premio-anio/premio-anio.entity';
import {CategoriaEntity} from '../categoria/categoria.entity';

@Entity('premio')
export class PremioEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: string;

    @Column({
        type: 'varchar',
        name: 'descripcion',
        nullable: true,
    })
    descripcion: string;

    @OneToMany(
        type => PremioAnioEntity,
        premioAnio => premioAnio.premio,
    )
    premiosAnioPremio: PremioAnioEntity[];

    @OneToMany(
        type => CategoriaEntity,
        categoria => categoria.premio,
    )
    categoriasPremio: CategoriaEntity[];
}
