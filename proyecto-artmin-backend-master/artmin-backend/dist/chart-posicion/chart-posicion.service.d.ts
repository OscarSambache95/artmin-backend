import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { ChartPosicionEntity } from './chart-posicion.entity';
export declare class ChartPosicionService extends PrincipalService<ChartPosicionEntity> {
    private readonly _chartPosicionRepository;
    constructor(_chartPosicionRepository: Repository<ChartPosicionEntity>);
}
