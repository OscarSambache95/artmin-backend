import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {TipoCancionEntity} from './tipo-cancion.entity';

@Injectable()
export class TipoCancionService extends PrincipalService<TipoCancionEntity> {
    constructor(
        @InjectRepository(TipoCancionEntity)
        private readonly _tipoCancionRepository: Repository<TipoCancionEntity>,
    ) {
        super(_tipoCancionRepository, TipoCancionEntity);
    }
}
