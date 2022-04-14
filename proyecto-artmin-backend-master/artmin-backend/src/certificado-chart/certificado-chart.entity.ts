import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ChartEntity} from '../chart/chart.entity';
import {CertificadoChartFechaEntity} from '../certificado-chart-fecha/certificado-chart-fecha.entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {VideoEntity} from '../video/video.entity';

@Entity('certificado-chart')
export class CertificadoChartEntity extends PrincipalEntity {

    @Column({
        type: 'varchar',
        name: 'fecha_actualizacion',
        nullable: true,
    })
    fechaActualizacion: string;

    @ManyToOne(
        type => ChartEntity,
        chart => chart.certificadosChartAlbumCAncionArtistaVideo,
    )
    chart: ChartEntity | number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.certificadosCancion,
    )
    cancion: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.certificadosAlbum,
    )
    album: AlbumEntity | number;

    @ManyToOne(
        type => VideoEntity,
        video => video.certificadosVideo,
    )
    video: VideoEntity | number;

    @OneToMany(
        type => CertificadoChartFechaEntity,
        certicadoChartFecha => certicadoChartFecha.certificadoChart,
    )
    certificadosChartFecha: CertificadoChartFechaEntity[];
}
