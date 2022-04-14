import { PrincipalAbstractController } from '../principal/principal-controller';
import { EventoEntity } from './evento.entity';
import { EventoService } from './evento.service';
export declare class EventoController extends PrincipalAbstractController<EventoEntity> {
    private readonly _eventoService;
    constructor(_eventoService: EventoService);
}
