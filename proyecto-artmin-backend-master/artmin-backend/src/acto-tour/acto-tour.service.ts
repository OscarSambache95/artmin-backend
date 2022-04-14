import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {ActoTourEntity} from './acto-tour.entity';

@Injectable()
export class ActoTourService extends PrincipalService<ActoTourEntity> {
    constructor(
        @InjectRepository(ActoTourEntity)
        private readonly _actoTourRepository: Repository<ActoTourEntity>,
    ) {
        super(_actoTourRepository, ActoTourEntity);
    }
}
