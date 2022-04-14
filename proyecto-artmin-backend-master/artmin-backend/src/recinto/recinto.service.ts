import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {RecintoEntity} from './recinto.entity';

@Injectable()
export class RecintoService extends PrincipalService<RecintoEntity> {
    constructor(
        @InjectRepository(RecintoEntity)
        private readonly _recintoRepository: Repository<RecintoEntity>,
    ) {
        super(_recintoRepository, RecintoEntity);
    }
}
