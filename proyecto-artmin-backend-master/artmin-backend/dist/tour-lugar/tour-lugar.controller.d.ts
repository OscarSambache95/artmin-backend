import { PrincipalAbstractController } from '../principal/principal-controller';
import { TourLugarEntity } from './tour-lugar.entity';
import { TourLugarService } from './tour-lugar.service';
export declare class TourLugarController extends PrincipalAbstractController<TourLugarEntity> {
    private readonly _tourLugarService;
    constructor(_tourLugarService: TourLugarService);
}
