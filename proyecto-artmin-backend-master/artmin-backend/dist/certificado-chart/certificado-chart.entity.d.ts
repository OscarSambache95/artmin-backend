import { PrincipalEntity } from '../principal/principal-entity';
import { ChartEntity } from '../chart/chart.entity';
import { CertificadoChartFechaEntity } from '../certificado-chart-fecha/certificado-chart-fecha.entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
import { VideoEntity } from '../video/video.entity';
export declare class CertificadoChartEntity extends PrincipalEntity {
    fechaActualizacion: string;
    chart: ChartEntity | number;
    cancion: CancionEntity | number;
    album: AlbumEntity | number;
    video: VideoEntity | number;
    certificadosChartFecha: CertificadoChartFechaEntity[];
}
