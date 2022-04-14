import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {RecordEntity} from './record.entity';

@Injectable()
export class RecordService extends PrincipalService<RecordEntity> {
    constructor(
        @InjectRepository(RecordEntity)
        private readonly _recordRepository: Repository<RecordEntity>,
    ) {
        super(_recordRepository, RecordEntity);
    }
}
