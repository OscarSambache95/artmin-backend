import { PrincipalAbstractController } from '../principal/principal-controller';
import { TipoEventoEntity } from './tipo-evento.entity';
import { TipoEventoService } from './tipo-evento.service';
export declare class TipoEventoController extends PrincipalAbstractController<TipoEventoEntity> {
    private readonly _tipoEventoService;
    constructor(_tipoEventoService: TipoEventoService);
}
