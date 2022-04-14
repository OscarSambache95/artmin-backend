import { PrincipalAbstractController } from '../principal/principal-controller';
import { ChartPosicionEntity } from './chart-posicion.entity';
import { ChartPosicionService } from './chart-posicion.service';
export declare class ChartPosicionController extends PrincipalAbstractController<ChartPosicionEntity> {
    private readonly _chartPosicionService;
    constructor(_chartPosicionService: ChartPosicionService);
}
