import { PrincipalEntity } from '../principal/principal-entity';
import { RecordEntity } from '../record/record.entity';
import { ChartEntity } from '../chart/chart.entity';
import { MedidaEntity } from '../medida/medida.entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
import { VideoEntity } from '../video/video.entity';
export declare class RecordChartEntity extends PrincipalEntity {
    cantidadMedida: number;
    fechaRecord: string;
    record: RecordEntity | number;
    medida: MedidaEntity | number;
    cancion: CancionEntity | number;
    album: AlbumEntity | number;
    video: VideoEntity | number;
    chart: ChartEntity | number;
}
