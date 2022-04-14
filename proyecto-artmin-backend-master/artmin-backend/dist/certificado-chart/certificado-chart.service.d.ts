import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { CertificadoChartEntity } from './certificado-chart.entity';
import { CertificadoChartFechaEntity } from '../certificado-chart-fecha/certificado-chart-fecha.entity';
import { CertificadoChartFechaService } from '../certificado-chart-fecha/certificado-chart-fecha.service';
export declare class CertificadoChartService extends PrincipalService<CertificadoChartEntity> {
    private readonly _certificadoChartRepository;
    private readonly _certificadoChartFechaService;
    constructor(_certificadoChartRepository: Repository<CertificadoChartEntity>, _certificadoChartFechaService: CertificadoChartFechaService);
    guardarCertificadoChart(certificadoChart: CertificadoChartEntity, certificadosChartFecha: CertificadoChartFechaEntity[]): Promise<CertificadoChartEntity>;
    editarCertificadoChart(idCertificadoChart: number, certificadoChart: CertificadoChartEntity, certificadosChartFecha: CertificadoChartFechaEntity[]): Promise<CertificadoChartEntity>;
    obtenerCertificadosChart(datosConsultaCertificados: any): Promise<[CertificadoChartEntity[], number]>;
}
