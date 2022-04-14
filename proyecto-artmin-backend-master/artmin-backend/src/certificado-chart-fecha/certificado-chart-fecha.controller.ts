import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {CertificadoChartFechaEntity} from './certificado-chart-fecha.entity';
import {CertificadoChartFechaService} from './certificado-chart-fecha.service';

@Controller('certificado-chart-fecha')
export class CertificadoChartFechaController extends PrincipalAbstractController<CertificadoChartFechaEntity> {
    constructor(private readonly _certificadoChartService: CertificadoChartFechaService,
    ) {
        super(_certificadoChartService);
    }
}
