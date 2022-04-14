import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {VideoEntity} from '../video/video.entity';
import {RecordChartEntity} from '../record-chart/record-chart.entity';
import {ChartPosicionEntity} from '../chart-posicion/chart-posicion.entity';
import {CertificadoChartEntity} from '../certificado-chart/certificado-chart.entity';
import {ChartEntity} from '../chart/chart.entity';

@Entity('chart-album-cancion-artista-video')
export class ChartAlbumCancionArtistaVideoEntity extends PrincipalEntity {
    // @Column({
    //     type: 'int',
    //     name: 'unidades_debut',
    //     nullable: true,
    // })
    // unidadesDebut: number;
    //
    // @Column({
    //     type: 'int',
    //     name: 'unidades_reales',
    //     nullable: true,
    // })
    // unidadesReales: number;

    @Column({
        type: 'varchar',
        name: 'fecha_debut',
    })
    fechaDebut: string;

    @Column({
        type: 'varchar',
        name: 'fecha_peak',
        nullable: true,
    })
    fechaPeak: string;

    @Column({
        type: 'int',
        name: 'anio',
    })
    anio: number;

    @Column({
        type: 'int',
        name: 'peak',
    })
    peak: number;

    @Column({
        type: 'int',
        name: 'numero_semanas',
        nullable: true,
    })
    numeroSemanas: number;

    @Column({
        type: 'int',
        name: 'numero_dias',
        nullable: true,
    })
    numeroDias: number;

    @Column({
        type: 'int',
        name: 'numero_semanas_peak',
        nullable: true,
    })
    numeroSemanasPeak: number;

    @Column({
        type: 'int',
        name: 'numero_dias_peak',
        nullable: true,
    })
    numeroDiasPeak: number;

    @Column({
        type: 'int',
        name: 'numero_semanas_top_5',
        nullable: true,
    })
    numeroSemanasTop5: number;

    @Column({
        type: 'int',
        name: 'numero_dias_top_5',
        nullable: true,
    })
    numeroDiasTop5: number;

    @Column({
        type: 'int',
        name: 'numero_semanas_top_10',
        nullable: true,
    })
    numeroSemanasTop10: number;

    @Column({
        type: 'int',
        name: 'numero_dias_top_10',
        nullable: true,
    })
    numeroDiasTop10: number;

    @Column({
        type: 'int',
        name: 'posicion_debut',
    })
    posicionDebut: number;

    @Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true
    })
    descripcion: string;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.chartsCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.chartsAlbum,
    )
    album: AlbumEntity | number;

    @ManyToOne(
        type => VideoEntity,
        video => video.chartsVideo,
    )
    video: VideoEntity | number;

    @ManyToOne(
        type => ChartEntity,
        chart => chart.albumesCancionesVideosArtistasChart,
    )
    chart: ChartEntity | number;


    @OneToMany(
        type => ChartPosicionEntity,
        chartPosicion => chartPosicion.chartAlbumCancionArtistaVideo,
    )
    posicionesChartAlbumCAncionArtistaVideo: ChartPosicionEntity[];
}
