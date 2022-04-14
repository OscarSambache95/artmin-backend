import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {ChartPosicionEntity} from './chart-posicion.entity';

@Injectable()
export class ChartPosicionService extends PrincipalService<ChartPosicionEntity> {
    constructor(
        @InjectRepository(ChartPosicionEntity)
        private readonly _chartPosicionRepository: Repository<ChartPosicionEntity>,
    ) {
        super(_chartPosicionRepository, ChartPosicionEntity);
    }
}
