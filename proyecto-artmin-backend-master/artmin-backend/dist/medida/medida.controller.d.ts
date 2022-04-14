import { PrincipalAbstractController } from '../principal/principal-controller';
import { MedidaEntity } from './medida.entity';
import { MedidaService } from './medida.service';
export declare class MedidaController extends PrincipalAbstractController<MedidaEntity> {
    private readonly _medidaService;
    constructor(_medidaService: MedidaService);
}
