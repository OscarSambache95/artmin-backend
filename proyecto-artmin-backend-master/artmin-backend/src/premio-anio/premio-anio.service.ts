import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {PremioAnioEntity} from './premio-anio.entity';

@Injectable()
export class PremioAnioService extends PrincipalService<PremioAnioEntity> {
    constructor(
        @InjectRepository(PremioAnioEntity)
        private readonly _premioAnioRepository: Repository<PremioAnioEntity>,
    ) {
        super(_premioAnioRepository, PremioAnioEntity);
    }
}
