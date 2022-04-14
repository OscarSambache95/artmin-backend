import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CancionArtistaEntity} from '../cancion-artista/cancion-artista.entity';
import {AlbumArtistaEntity} from '../album-artista/album-artista.entity';
import {GeneroArtistaAlbumCancionEntity} from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
import {PresentacionArtistaEntity} from '../presentacion-artista/presentacion-artista.entity';
import {ImagenEntity} from '../imagen/imagen.entity';
import {NominacionArtistaAlbumCancionVideoEntity} from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import {ArtistaTourEntity} from '../artista-tour/artista-tour.entity';
import {EnlaceAlbumCancionArtistaVideoEntity} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';

@Entity('artista')
export class ArtistaEntity extends PrincipalEntity {
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

    @Column({
        type: 'int',
        name: 'anio_debut',
    })
    anioDebut: number;

    @Column({
        type: 'varchar',
        name: 'fecha_nacimiento',
    })
    fechaNacimiento: string;

    @OneToMany(
        type => CancionArtistaEntity,
        cancionArtista => cancionArtista.artista,
    )
    cancionesArtista: CancionArtistaEntity[];

    @OneToMany(
        type => AlbumArtistaEntity,
        albumArtista => albumArtista.artista,
    )
    albumesArtista: AlbumArtistaEntity[];

    @OneToMany(
        type => GeneroArtistaAlbumCancionEntity,
        generoArtista => generoArtista.artista,
    )
    generosArtista: GeneroArtistaAlbumCancionEntity[];

    @OneToMany(
        type => PresentacionArtistaEntity,
        presentacionArtista => presentacionArtista.artista,
    )
    presentacionesArtista: PresentacionArtistaEntity[];

    @OneToMany(
        type => ImagenEntity,
        imagen => imagen.artista,
    )
    imagenesArtista: ImagenEntity[];

    @OneToMany(
        type => NominacionArtistaAlbumCancionVideoEntity,
        nominacionArtista => nominacionArtista.artista,
    )
    nominacionesArtista: NominacionArtistaAlbumCancionVideoEntity[];

    @OneToMany(
        type => ArtistaTourEntity,
        tourArtista => tourArtista.artista,
    )
    toursArtista: ArtistaTourEntity[];


    @OneToMany(
        type => EnlaceAlbumCancionArtistaVideoEntity,
        enlaceArtista => enlaceArtista.artista,
    )
    enlacesArtista: CancionArtistaEntity[];
}
