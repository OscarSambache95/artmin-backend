import {Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ArtistaEntity} from '../artista/artista.entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {GeneroEntity} from '../genero/genero.entity';

@Entity('genero-artista-album-cancion')
export class GeneroArtistaAlbumCancionEntity extends PrincipalEntity {

    @ManyToOne(
        type => ArtistaEntity,
        artista => artista.generosArtista,
    )
    artista?: ArtistaEntity | number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.generosCancion,
    )
    cancion?: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.generosAlbum,
    )
    album?: AlbumEntity | number;

    @ManyToOne(
        type => GeneroEntity,
        genero => genero.generosArtistaAlbumCancion,
    )
    genero: GeneroEntity | number;

}
