import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { MedidaEntity } from './medida.entity';
export declare class MedidaService extends PrincipalService<MedidaEntity> {
    private readonly _medidaRepository;
    constructor(_medidaRepository: Repository<MedidaEntity>);
}
