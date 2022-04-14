import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';

@Entity('album-cancion')
export class AlbumCancionEntity extends PrincipalEntity {
    @Column({
        type: 'int',
        name: 'posicion',
    })
    posicion: number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.albumesCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.cancionesAlbum,
    )
    album: AlbumEntity | number;

}
