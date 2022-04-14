import { PrincipalAbstractController } from '../principal/principal-controller';
import { EventoAnioEntity } from './evento-anio.entity';
import { EventoAnioService } from './evento-anio.service';
export declare class EventoAnioController extends PrincipalAbstractController<EventoAnioEntity> {
    private readonly _eventoAnioService;
    constructor(_eventoAnioService: EventoAnioService);
}
