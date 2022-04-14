import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { RecintoEntity } from './recinto.entity';
export declare class RecintoService extends PrincipalService<RecintoEntity> {
    private readonly _recintoRepository;
    constructor(_recintoRepository: Repository<RecintoEntity>);
}
