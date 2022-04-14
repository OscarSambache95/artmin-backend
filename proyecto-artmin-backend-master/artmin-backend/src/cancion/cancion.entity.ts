import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {AlbumCancionEntity} from '../album-cancion/album-cancion.entity';
import {CancionArtistaEntity} from '../cancion-artista/cancion-artista.entity';
import {GeneroArtistaAlbumCancionEntity} from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
import {ChartAlbumCancionArtistaVideoEntity} from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import {SetlistEntity} from '../setlist/setlist.entity';
import {NominacionArtistaAlbumCancionVideoEntity} from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import {ImagenEntity} from '../imagen/imagen.entity';
import {VideoEntity} from '../video/video.entity';
import {EnlaceAlbumCancionArtistaVideoEntity} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import {TipoCancionEntity} from '../tipo-cancion/tipo-cancion.entity';
import {UnidadAlbumCancionVideoEntity} from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import {CertificadoChartEntity} from '../certificado-chart/certificado-chart.entity';
import {RecordChartEntity} from '../record-chart/record-chart.entity';

@Entity('cancion')
export class CancionEntity extends PrincipalEntity {
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
        nullable: true,
    })
    anio: number;

    // @Column({
    //     type: 'enum',
    //     name: 'tipo',
    //     enum: ['sencillo', 'promocional', 'inedito', 'track']
    // })
    // tipo: 'sencillo' | 'promocional' | 'inedito' | 'track';

    @ManyToOne(
        type => TipoCancionEntity,
        tipoCancion => tipoCancion.canciones,
    )
    tipoCancion: TipoCancionEntity | number;

    @OneToMany(
        type => AlbumCancionEntity,
        albumCancion => albumCancion.cancion,
    )
    albumesCancion: AlbumCancionEntity[];

    @OneToMany(
        type => CancionArtistaEntity,
        cancionArtista => cancionArtista.cancion,
    )
    artistasCancion: CancionArtistaEntity[];

    @OneToMany(
        type => GeneroArtistaAlbumCancionEntity,
        generoCancion => generoCancion.cancion,
    )
    generosCancion: GeneroArtistaAlbumCancionEntity[];

    @OneToMany(
        type => ChartAlbumCancionArtistaVideoEntity,
        chartCancion => chartCancion.cancion,
    )
    chartsCancion: ChartAlbumCancionArtistaVideoEntity[];

    @OneToMany(
        type => SetlistEntity,
        setlist => setlist.cancionesSetlistTour,
    )
    setlistsCancion: SetlistEntity[];

    @OneToMany(
        type => NominacionArtistaAlbumCancionVideoEntity,
        nominacionCancion => nominacionCancion.cancion,
    )
    nominacionesCancion: NominacionArtistaAlbumCancionVideoEntity[];

    @OneToMany(
        type => ImagenEntity,
        imagen => imagen.cancion,
    )
    imagenesCancion: ImagenEntity[];

    @OneToMany(
        type => VideoEntity,
        video => video.cancion,
    )
    videoCancion: VideoEntity[];

    @OneToMany(
        type => EnlaceAlbumCancionArtistaVideoEntity,
        enlaceCancion => enlaceCancion.cancion,
    )
    enlacesCancion: EnlaceAlbumCancionArtistaVideoEntity[];

    @OneToMany(
        type => UnidadAlbumCancionVideoEntity,
        unidad => unidad.cancion,
    )
    unidadesCancion: UnidadAlbumCancionVideoEntity[];

    @OneToMany(
        type => CertificadoChartEntity,
        certificado => certificado.cancion,
    )
    certificadosCancion: CertificadoChartEntity[];

    @OneToMany(
        type => RecordChartEntity,
        record => record.cancion,
    )
    recordsCancion: RecordChartEntity[];
}
