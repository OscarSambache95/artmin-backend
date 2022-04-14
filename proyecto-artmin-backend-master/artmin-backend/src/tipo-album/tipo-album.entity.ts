import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {AlbumEntity} from '../album/album.entity';

@Entity('tipo-album')
export class TipoAlbumEntity extends PrincipalEntity {
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
        type => AlbumEntity,
        album => album.tipoAlbum,
    )
    albumes: AlbumEntity[];
}
