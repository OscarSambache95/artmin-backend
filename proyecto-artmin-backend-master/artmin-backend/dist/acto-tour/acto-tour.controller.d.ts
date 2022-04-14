import { PrincipalAbstractController } from '../principal/principal-controller';
import { ActoTourEntity } from './acto-tour.entity';
import { ActoTourService } from './acto-tour.service';
export declare class ActoTourController extends PrincipalAbstractController<ActoTourEntity> {
    private readonly _actoTourService;
    constructor(_actoTourService: ActoTourService);
}
