import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { PremioAnioEntity } from './premio-anio.entity';
export declare class PremioAnioService extends PrincipalService<PremioAnioEntity> {
    private readonly _premioAnioRepository;
    constructor(_premioAnioRepository: Repository<PremioAnioEntity>);
}
