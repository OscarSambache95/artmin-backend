import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {CancionSetlistEntity} from './cancion-setlist.entity';

@Injectable()
export class CancionSetlistService extends PrincipalService<CancionSetlistEntity> {
    constructor(
        @InjectRepository(CancionSetlistEntity)
        private readonly _setlistRepository: Repository<CancionSetlistEntity>,
    ) {
        super(_setlistRepository, CancionSetlistEntity);
    }
}
