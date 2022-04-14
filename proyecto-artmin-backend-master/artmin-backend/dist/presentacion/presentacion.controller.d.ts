import { PrincipalAbstractController } from '../principal/principal-controller';
import { PresentacionEntity } from './presentacion.entity';
import { PresentacionService } from './presentacion.service';
export declare class PresentacionController extends PrincipalAbstractController<PresentacionEntity> {
    private readonly _presentacionService;
    constructor(_presentacionService: PresentacionService);
}
