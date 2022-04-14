import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ArtistaEntity} from '../artista/artista.entity';
import {AlbumEntity} from '../album/album.entity';

@Entity('album-artista')
export class AlbumArtistaEntity extends PrincipalEntity {

    @Column({
        type: 'int',
        name: 'orden',
        default: 0
    })
    orden?: number;

    @ManyToOne(
        type => ArtistaEntity,
        artista => artista.albumesArtista,
    )
    artista: ArtistaEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.artistasAlbum,
    )
    album: AlbumEntity | number;

}
