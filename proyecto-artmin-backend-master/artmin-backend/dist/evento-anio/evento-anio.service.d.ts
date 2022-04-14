import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { EventoAnioEntity } from './evento-anio.entity';
export declare class EventoAnioService extends PrincipalService<EventoAnioEntity> {
    private readonly _eventoAnioRepository;
    constructor(_eventoAnioRepository: Repository<EventoAnioEntity>);
}
