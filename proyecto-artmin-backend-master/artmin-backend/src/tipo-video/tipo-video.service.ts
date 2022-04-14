import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {TipoVideoEntity} from './tipo-video.entity';

@Injectable()
export class TipoVideoService extends PrincipalService<TipoVideoEntity> {
    constructor(
        @InjectRepository(TipoVideoEntity)
        private readonly _tipoVideoRepository: Repository<TipoVideoEntity>,
    ) {
        super(_tipoVideoRepository, TipoVideoEntity);
    }
}
