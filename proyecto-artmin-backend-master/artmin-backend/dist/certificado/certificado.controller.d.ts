import { PrincipalAbstractController } from '../principal/principal-controller';
import { CertificadoEntity } from './certificado.entity';
import { CertificadoService } from './certificado.service';
export declare class CertificadoController extends PrincipalAbstractController<CertificadoEntity> {
    private readonly _certificadoService;
    constructor(_certificadoService: CertificadoService);
}
