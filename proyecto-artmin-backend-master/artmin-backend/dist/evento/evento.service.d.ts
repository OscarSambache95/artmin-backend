import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { EventoEntity } from './evento.entity';
export declare class EventoService extends PrincipalService<EventoEntity> {
    private readonly _eventoRepository;
    constructor(_eventoRepository: Repository<EventoEntity>);
}
