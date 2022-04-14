import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {TourLugarEntity} from './tour-lugar.entity';

@Injectable()
export class TourLugarService extends PrincipalService<TourLugarEntity> {
    constructor(
        @InjectRepository(TourLugarEntity)
        private readonly _tourLugarRepository: Repository<TourLugarEntity>,
    ) {
        super(_tourLugarRepository, TourLugarEntity);
    }
}
