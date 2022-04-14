import { PrincipalAbstractController } from '../principal/principal-controller';
import { CertificadoChartEntity } from './certificado-chart.entity';
import { CertificadoChartService } from './certificado-chart.service';
export declare class CertificadoChartController extends PrincipalAbstractController<CertificadoChartEntity> {
    private readonly _certificadoChartService;
    constructor(_certificadoChartService: CertificadoChartService);
    crearCertificadoChart(datosCertificadosChart: any): Promise<CertificadoChartEntity>;
    editarCertificadoChart(datosCertificadosChart: any): Promise<CertificadoChartEntity>;
    obtenerCharts(datosConsultaCertificados: any): Promise<[CertificadoChartEntity[], number]>;
}
