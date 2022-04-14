import { PrincipalAbstractController } from '../principal/principal-controller';
import { RecordEntity } from './record.entity';
import { RecordService } from './record.service';
export declare class RecordController extends PrincipalAbstractController<RecordEntity> {
    private readonly _recordService;
    constructor(_recordService: RecordService);
}
