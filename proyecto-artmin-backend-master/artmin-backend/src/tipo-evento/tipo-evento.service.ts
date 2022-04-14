import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {TipoEventoEntity} from './tipo-evento.entity';

@Injectable()
export class TipoEventoService extends PrincipalService<TipoEventoEntity> {
    constructor(
        @InjectRepository(TipoEventoEntity)
        private readonly _tipoEventoRepository: Repository<TipoEventoEntity>,
    ) {
        super(_tipoEventoRepository, TipoEventoEntity);
    }
}
