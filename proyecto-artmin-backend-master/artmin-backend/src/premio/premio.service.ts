import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {PremioEntity} from './premio.entity';

@Injectable()
export class PremioService extends PrincipalService<PremioEntity> {
    constructor(
        @InjectRepository(PremioEntity)
        private readonly _premioRepository: Repository<PremioEntity>,
    ) {
        super(_premioRepository, PremioEntity);
    }
}
