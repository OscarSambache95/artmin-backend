import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {SetlistEntity} from './setlist.entity';

@Injectable()
export class SetlistService extends PrincipalService<SetlistEntity> {
    constructor(
        @InjectRepository(SetlistEntity)
        private readonly _setlistRepository: Repository<SetlistEntity>,
    ) {
        super(_setlistRepository, SetlistEntity);
    }
}
