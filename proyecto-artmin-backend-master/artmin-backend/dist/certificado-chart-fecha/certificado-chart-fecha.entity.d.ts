import { PrincipalEntity } from '../principal/principal-entity';
import { CertificadoChartEntity } from '../certificado-chart/certificado-chart.entity';
import { CertificadoEntity } from '../certificado/certificado.entity';
export declare class CertificadoChartFechaEntity extends PrincipalEntity {
    cantidad: number;
    fecha: string;
    certificadoChart: CertificadoChartEntity | number;
    certificado: CertificadoEntity | number;
}
