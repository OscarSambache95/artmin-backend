import { PrincipalAbstractController } from '../principal/principal-controller';
import { RecintoEntity } from './recinto.entity';
import { RecintoService } from './recinto.service';
export declare class RecintoController extends PrincipalAbstractController<RecintoEntity> {
    private readonly _recintoService;
    constructor(_recintoService: RecintoService);
}
