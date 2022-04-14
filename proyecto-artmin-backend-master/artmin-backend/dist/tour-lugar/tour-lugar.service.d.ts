import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { TourLugarEntity } from './tour-lugar.entity';
export declare class TourLugarService extends PrincipalService<TourLugarEntity> {
    private readonly _tourLugarRepository;
    constructor(_tourLugarRepository: Repository<TourLugarEntity>);
}
