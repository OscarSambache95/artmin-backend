import { PrincipalAbstractController } from '../principal/principal-controller';
import { CertificadoChartFechaEntity } from './certificado-chart-fecha.entity';
import { CertificadoChartFechaService } from './certificado-chart-fecha.service';
export declare class CertificadoChartFechaController extends PrincipalAbstractController<CertificadoChartFechaEntity> {
    private readonly _certificadoChartService;
    constructor(_certificadoChartService: CertificadoChartFechaService);
}
