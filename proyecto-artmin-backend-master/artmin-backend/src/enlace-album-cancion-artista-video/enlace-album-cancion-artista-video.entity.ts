import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ArtistaEntity} from '../artista/artista.entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {VideoEntity} from '../video/video.entity';
import {PlataformaEntity} from '../plataforma/plataforma.entity';

@Entity('enlace-album-cancion-artista-video')
export class EnlaceAlbumCancionArtistaVideoEntity extends PrincipalEntity {
    @Column({
        type: 'longtext',
        name: 'url',
    })
    url: string;

    @Column({
        type: 'decimal',
        precision: 20,
        scale: 10,
        nullable: true,
        name: 'cantidad_seguidores'
    })
    seguidores: number;

    @ManyToOne(
        type => ArtistaEntity,
        artista => artista.enlacesArtista,
    )
    artista: ArtistaEntity | number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.enlacesCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.enlacesAlbum,
    )
    album: AlbumEntity | number;

    @ManyToOne(
        type => VideoEntity,
        video => video.enlacesVideo,
    )
    video: VideoEntity | number;

    @ManyToOne(
        type => PlataformaEntity,
        plataforma => plataforma.enlacesPlataforma,
    )
    plataforma: PlataformaEntity | number;
}
