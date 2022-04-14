import { PrincipalAbstractController } from '../principal/principal-controller';
import { PremioEntity } from './premio.entity';
import { PremioService } from './premio.service';
export declare class PremioController extends PrincipalAbstractController<PremioEntity> {
    private readonly _premioService;
    constructor(_premioService: PremioService);
}
