import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {RecordEntity} from './record.entity';
import {RecordService} from './record.service';

@Controller('record')
export class RecordController extends PrincipalAbstractController<RecordEntity> {
    constructor(private readonly _recordService: RecordService,
    ) {
        super(_recordService);
    }
}
