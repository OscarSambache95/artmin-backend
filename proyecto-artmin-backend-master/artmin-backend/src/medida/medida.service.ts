import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {MedidaEntity} from './medida.entity';

@Injectable()
export class MedidaService extends PrincipalService<MedidaEntity> {
    constructor(
        @InjectRepository(MedidaEntity)
        private readonly _medidaRepository: Repository<MedidaEntity>,
    ) {
        super(_medidaRepository, MedidaEntity);
    }
}
