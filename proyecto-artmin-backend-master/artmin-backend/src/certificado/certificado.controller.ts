import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {CertificadoEntity} from './certificado.entity';
import {CertificadoService} from './certificado.service';

@Controller('certificado')
export class CertificadoController extends PrincipalAbstractController<CertificadoEntity> {
    constructor(private readonly _certificadoService: CertificadoService,
    ) {
        super(_certificadoService);
    }
}
