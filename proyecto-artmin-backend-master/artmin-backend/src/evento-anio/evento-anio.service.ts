import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {EventoAnioEntity} from './evento-anio.entity';

@Injectable()
export class EventoAnioService extends PrincipalService<EventoAnioEntity> {
    constructor(
        @InjectRepository(EventoAnioEntity)
        private readonly _eventoAnioRepository: Repository<EventoAnioEntity>,
    ) {
        super(_eventoAnioRepository, EventoAnioEntity);
    }
}
