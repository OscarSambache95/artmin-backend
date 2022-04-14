import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { RecordEntity } from './record.entity';
export declare class RecordService extends PrincipalService<RecordEntity> {
    private readonly _recordRepository;
    constructor(_recordRepository: Repository<RecordEntity>);
}
