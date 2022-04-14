import { PrincipalEntity } from '../principal/principal-entity';
import { CertificadoChartFechaEntity } from '../certificado-chart-fecha/certificado-chart-fecha.entity';
import { MedidaEntity } from '../medida/medida.entity';
import { ChartEntity } from '../chart/chart.entity';
export declare class CertificadoEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    unidades: number;
    chart: ChartEntity | number;
    medida: MedidaEntity | number;
    chartsFechaCertificado: CertificadoChartFechaEntity[];
}
