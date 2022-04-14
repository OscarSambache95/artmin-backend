import { PrincipalEntity } from '../principal/principal-entity';
import { MedidaEntity } from '../medida/medida.entity';
import { RecordChartEntity } from '../record-chart/record-chart.entity';
import { ChartEntity } from '../chart/chart.entity';
export declare class RecordEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    chart: ChartEntity | number;
    medida: MedidaEntity | number;
    recordsChartCancionAlbumVideo: RecordChartEntity[];
}
