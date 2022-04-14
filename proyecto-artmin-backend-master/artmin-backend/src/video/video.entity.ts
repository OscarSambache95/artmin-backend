import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {TipoVideoEntity} from '../tipo-video/tipo-video.entity';
import {EnlaceAlbumCancionArtistaVideoEntity} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import {NominacionArtistaAlbumCancionVideoEntity} from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import {ChartAlbumCancionArtistaVideoEntity} from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import {UnidadAlbumCancionVideoEntity} from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import {CertificadoChartEntity} from '../certificado-chart/certificado-chart.entity';
import {RecordChartEntity} from '../record-chart/record-chart.entity';

@Entity('video')
export class VideoEntity extends PrincipalEntity {
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
    })
    anio: number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.videoCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => TipoVideoEntity,
        tipoVideo => tipoVideo.videos,
    )
    tipoVideo: TipoVideoEntity | number;

    @OneToMany(
        type => EnlaceAlbumCancionArtistaVideoEntity,
        enlaceVideo => enlaceVideo.video,
    )
    enlacesVideo: EnlaceAlbumCancionArtistaVideoEntity[];

    @OneToMany(
        type => NominacionArtistaAlbumCancionVideoEntity,
        nominacionVideo => nominacionVideo.video,
    )
    nominacionesVideo: NominacionArtistaAlbumCancionVideoEntity[];

    @OneToMany(
        type => ChartAlbumCancionArtistaVideoEntity,
        chartVideo => chartVideo.video,
    )
    chartsVideo: ChartAlbumCancionArtistaVideoEntity[];

    @OneToMany(
        type => UnidadAlbumCancionVideoEntity,
        unidad => unidad.video,
    )
    unidadesVideo: UnidadAlbumCancionVideoEntity[];

    @OneToMany(
        type => CertificadoChartEntity,
        certificado => certificado.video,
    )
    certificadosVideo: CertificadoChartEntity[];

    @OneToMany(
        type => RecordChartEntity,
        record => record.video,
    )
    recordsVideo: RecordChartEntity[];
}
