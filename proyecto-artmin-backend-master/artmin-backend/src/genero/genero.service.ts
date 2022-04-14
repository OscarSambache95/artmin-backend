import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {GeneroEntity} from './genero.entity';

@Injectable()
export class GeneroService extends PrincipalService<GeneroEntity> {
    constructor(
        @InjectRepository(GeneroEntity)
        private readonly _generoRepository: Repository<GeneroEntity>,
    ) {
        super(_generoRepository, GeneroEntity);
    }
}
