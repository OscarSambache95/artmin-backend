import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { CertificadoEntity } from './certificado.entity';
export declare class CertificadoService extends PrincipalService<CertificadoEntity> {
    private readonly _certificadoRepository;
    constructor(_certificadoRepository: Repository<CertificadoEntity>);
}
