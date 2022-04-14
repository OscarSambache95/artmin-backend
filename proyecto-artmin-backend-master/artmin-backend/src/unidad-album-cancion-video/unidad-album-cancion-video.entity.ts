import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {MedidaEntity} from '../medida/medida.entity';
import {ChartEntity} from '../chart/chart.entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {VideoEntity} from '../video/video.entity';

@Entity('unidad-album-cancion-video')
export class UnidadAlbumCancionVideoEntity extends PrincipalEntity {
    @Column({
        type: 'int',
        name: 'unidades_debut',
        nullable: true,
    })
    unidadesDebut: number;

    @Column({
        type: 'int',
        name: 'unidades_reales',
        nullable: true,
    })
    unidadesReales: number;

    @ManyToOne(
        type => MedidaEntity,
        medida => medida.unidadesChartMedida,
    )
    medida: MedidaEntity | number;

    @ManyToOne(
        type => ChartEntity,
        chart => chart.unidadesAlbumCancionVideoArtista,
    )
    chart: ChartEntity | number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.unidadesCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.unidadesAlbum,
    )
    album: AlbumEntity | number;

    @ManyToOne(
        type => VideoEntity,
        video => video.unidadesVideo,
    )
    video: VideoEntity | number;
}
