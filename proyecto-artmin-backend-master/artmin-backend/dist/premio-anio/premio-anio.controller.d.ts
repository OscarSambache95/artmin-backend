import { PrincipalAbstractController } from '../principal/principal-controller';
import { PremioAnioEntity } from './premio-anio.entity';
import { PremioAnioService } from './premio-anio.service';
export declare class PremioAnioController extends PrincipalAbstractController<PremioAnioEntity> {
    private readonly _premioAnioService;
    constructor(_premioAnioService: PremioAnioService);
}
