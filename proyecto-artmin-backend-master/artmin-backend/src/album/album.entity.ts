import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {AlbumArtistaEntity} from '../album-artista/album-artista.entity';
import {AlbumCancionEntity} from '../album-cancion/album-cancion.entity';
import {GeneroArtistaAlbumCancionEntity} from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
import {EnlaceAlbumCancionArtistaVideoEntity} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import {ImagenEntity} from '../imagen/imagen.entity';
import {NominacionArtistaAlbumCancionVideoEntity} from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import {ChartAlbumCancionArtistaVideoEntity} from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import {TipoAlbumEntity} from '../tipo-album/tipo-album.entity';
import {UnidadAlbumCancionVideoEntity} from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import {CertificadoChartEntity} from '../certificado-chart/certificado-chart.entity';
import {RecordChartEntity} from '../record-chart/record-chart.entity';

@Entity('album')
export class AlbumEntity extends PrincipalEntity {
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
        name: 'duracion',
        default: 0,
    })
    duracionSegundos: number;

    @Column({
        type: 'varchar',
        name: 'fecha_lanzamiento',
    })
    fechaLanzamiento: string;

    @Column({
        type: 'int',
        name: 'anio',
    })
    anio: number;

    @Column({
        type: 'int',
        name: 'calificacion',
    })
    calificacion: number;

    // @Column({
    //     type: 'enum',
    //     name: 'tipo',
    //     enum: ['studio', 'lp', 'ep', 'deluxe', 'soundtrack', 're-edition', 'live']
    // })
    // tipo: 'studio' | 'lp' | 'ep' | 'deluxe' | 'soundtrack' |'re-edition' | 'live';

    @ManyToOne(
        type => TipoAlbumEntity,
        tipoAlbum => tipoAlbum.albumes,
    )
    tipoAlbum: TipoAlbumEntity | number;

    @OneToMany(
        type => AlbumArtistaEntity,
        albumArtista => albumArtista.album,
    )
    artistasAlbum: AlbumArtistaEntity[];

    @OneToMany(
        type => AlbumCancionEntity,
        albumCancion => albumCancion.album,
    )
    cancionesAlbum: AlbumCancionEntity[];

    @OneToMany(
        type => GeneroArtistaAlbumCancionEntity,
        generoAlbum => generoAlbum.album,
    )
    generosAlbum: GeneroArtistaAlbumCancionEntity[];

    @OneToMany(
        type => EnlaceAlbumCancionArtistaVideoEntity,
        enlaceAlbum => enlaceAlbum.album,
    )
    enlacesAlbum: EnlaceAlbumCancionArtistaVideoEntity[];

    @OneToMany(
        type => ImagenEntity,
        imagen => imagen.album,
    )
    imagenesAlbum: ImagenEntity[];

    @OneToMany(
        type => NominacionArtistaAlbumCancionVideoEntity,
        nominacionAlbum => nominacionAlbum.album,
    )
    nominacionesAlbum: NominacionArtistaAlbumCancionVideoEntity[];

    @OneToMany(
        type => ChartAlbumCancionArtistaVideoEntity,
        chartAlbum => chartAlbum.album,
    )
    chartsAlbum: ChartAlbumCancionArtistaVideoEntity[];

    @OneToMany(
        type => UnidadAlbumCancionVideoEntity,
        unidad => unidad.album,
    )
    unidadesAlbum: UnidadAlbumCancionVideoEntity[];

    @OneToMany(
        type => CertificadoChartEntity,
        certificado => certificado.album,
    )
    certificadosAlbum: CertificadoChartEntity[];

    @OneToMany(
        type => RecordChartEntity,
        record => record.album,
    )
    recordsAlbum: RecordChartEntity[];
}
