import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {EventoEntity} from './evento.entity';

@Injectable()
export class EventoService extends PrincipalService<EventoEntity> {
    constructor(
        @InjectRepository(EventoEntity)
        private readonly _eventoRepository: Repository<EventoEntity>,
    ) {
        super(_eventoRepository, EventoEntity);
    }
}
