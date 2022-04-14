import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {PlataformaEntity} from '../plataforma/plataforma.entity';
import {ChartAlbumCancionArtistaVideoEntity} from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import {LugarEntity} from '../lugar/lugar.entity';
import {UnidadAlbumCancionVideoEntity} from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import {RecordChartEntity} from '../record-chart/record-chart.entity';
import {CertificadoChartEntity} from '../certificado-chart/certificado-chart.entity';
import {CertificadoEntity} from '../certificado/certificado.entity';
import {RecordEntity} from '../record/record.entity';

@Entity('chart')
export class ChartEntity extends PrincipalEntity {
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
        type: 'enum',
        name: 'tipo',
        enum: ['cancion', 'album', 'video']
    })
    tipo: string;

    @ManyToOne(
        type => PlataformaEntity,
        plataforma => plataforma.chartsPlataforma,
    )
    plataforma: PlataformaEntity | number;

    @OneToMany(
        type => ChartAlbumCancionArtistaVideoEntity,
        chartAlbum => chartAlbum.chart,
    )
    albumesCancionesVideosArtistasChart: ChartAlbumCancionArtistaVideoEntity[];

    @OneToMany(
        type => UnidadAlbumCancionVideoEntity,
        unidades => unidades.chart,
    )
    unidadesAlbumCancionVideoArtista: UnidadAlbumCancionVideoEntity[];

    @ManyToOne(
        type => LugarEntity,
        lugar => lugar.chartsLugar,
    )
    lugar: LugarEntity | number;

    @OneToMany(
        type => CertificadoChartEntity,
        certicadoChart => certicadoChart.chart,
    )
    certificadosChartAlbumCAncionArtistaVideo: CertificadoChartEntity[];


    @OneToMany(
        type => CertificadoEntity,
        cerficado => cerficado.chart,
    )
    certificadosChart: CertificadoEntity[];


    @OneToMany(
        type => RecordEntity,
        record => record.chart,
    )
    recordsChart: RecordEntity[];

    @OneToMany(
        type => RecordChartEntity,
        recordChart => recordChart.chart,
    )
    recordsChartAlbumCancionArtistaVideo: RecordChartEntity[];
}
