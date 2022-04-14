import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { ActoTourEntity } from './acto-tour.entity';
export declare class ActoTourService extends PrincipalService<ActoTourEntity> {
    private readonly _actoTourRepository;
    constructor(_actoTourRepository: Repository<ActoTourEntity>);
}
