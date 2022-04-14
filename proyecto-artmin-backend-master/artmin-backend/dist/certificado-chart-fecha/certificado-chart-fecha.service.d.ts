import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { CertificadoChartFechaEntity } from './certificado-chart-fecha.entity';
export declare class CertificadoChartFechaService extends PrincipalService<CertificadoChartFechaEntity> {
    private readonly _certificadoChartRepository;
    constructor(_certificadoChartRepository: Repository<CertificadoChartFechaEntity>);
    guardarCertificadosChartFecha(idChartCertificado: number, certificadosChartFecha: CertificadoChartFechaEntity[]): Promise<void>;
}
