import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { PremioEntity } from './premio.entity';
export declare class PremioService extends PrincipalService<PremioEntity> {
    private readonly _premioRepository;
    constructor(_premioRepository: Repository<PremioEntity>);
}
