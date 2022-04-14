import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ChartAlbumCancionArtistaVideoEntity} from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import {RecordEntity} from '../record/record.entity';
import {ChartEntity} from '../chart/chart.entity';
import {MedidaEntity} from '../medida/medida.entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {VideoEntity} from '../video/video.entity';

@Entity('record-chart')
export class RecordChartEntity extends PrincipalEntity {
    @Column({
        type: 'bigint',
        name: 'cantidad-medida',
    })
    cantidadMedida: number;

    @Column({
        type: 'varchar',
        name: 'fecha_record',
    })
    fechaRecord: string;

    @ManyToOne(
        type => RecordEntity,
        record => record.recordsChartCancionAlbumVideo,
    )
    record: RecordEntity | number;

    @ManyToOne(
        type => MedidaEntity,
        medida => medida.recordsChartMedida,
    )
    medida: MedidaEntity | number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.recordsCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.recordsAlbum,
    )
    album: AlbumEntity | number;

    @ManyToOne(
        type => VideoEntity,
        video => video.recordsVideo,
    )
    video: VideoEntity | number;

    @ManyToOne(
        type => ChartEntity,
        chart => chart.recordsChartAlbumCancionArtistaVideo,
    )
    chart: ChartEntity | number;
}
