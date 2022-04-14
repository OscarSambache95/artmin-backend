import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ArtistaEntity} from '../artista/artista.entity';
import {PresentacionEntity} from '../presentacion/presentacion.entity';

@Entity('presentacion-anio')
export class PresentacionArtistaEntity extends PrincipalEntity {
    @Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    })
    descripcion: string;

    @ManyToOne(
        type => ArtistaEntity,
        artista => artista.presentacionesArtista,
    )
    artista: ArtistaEntity | number;

    @ManyToOne(
        type => PresentacionEntity,
        presentacion => presentacion.presentacionesArtista,
    )
    presentacion: PresentacionEntity | number;
}
