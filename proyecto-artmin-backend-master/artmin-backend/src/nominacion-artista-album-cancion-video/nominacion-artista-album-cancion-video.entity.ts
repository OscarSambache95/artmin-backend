import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ArtistaEntity} from '../artista/artista.entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {VideoEntity} from '../video/video.entity';
import {PremioAnioEntity} from '../premio-anio/premio-anio.entity';
import {CategoriaEntity} from '../categoria/categoria.entity';

@Entity('nominacion-artista-album-cancion-video')
export class NominacionArtistaAlbumCancionVideoEntity extends PrincipalEntity {
    @Column({
        type: 'enum',
        name: 'si_gano',
        enum: [0 | 1]
    })
    siGano: 0 | 1;

    @ManyToOne(
        type => ArtistaEntity,
        artista => artista.nominacionesArtista,
    )
    artista: ArtistaEntity | number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.nominacionesCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.nominacionesAlbum,
    )
    album: AlbumEntity | number;

    @ManyToOne(
        type => VideoEntity,
        video => video.nominacionesVideo,
    )
    video: VideoEntity | number;

    @ManyToOne(
        type => PremioAnioEntity,
        premioAnio => premioAnio.nominacionesPremioAnio,
    )
    premioAnio: PremioAnioEntity | number;

    @ManyToOne(
        type => CategoriaEntity,
        categoria => categoria.nominacionesCategoria,
    )
    categoria: CategoriaEntity | number;
}
