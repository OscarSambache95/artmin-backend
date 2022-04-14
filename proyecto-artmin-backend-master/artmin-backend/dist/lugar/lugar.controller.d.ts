import { PrincipalAbstractController } from '../principal/principal-controller';
import { LugarEntity } from './lugar.entity';
import { LugarService } from './lugar.service';
export declare class LugarController extends PrincipalAbstractController<LugarEntity> {
    private readonly _lugarService;
    constructor(_lugarService: LugarService);
    crearCancion(file: any, lugarJsonString: any): Promise<any>;
    buscarLugares(datosConsulta: any): Promise<(number | LugarEntity[])[]>;
}
