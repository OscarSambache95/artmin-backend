import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {SetlistEntity} from './setlist.entity';
import {SetlistService} from './setlist.service';

@Controller('setlist')
export class SetlistController extends PrincipalAbstractController<SetlistEntity> {
    constructor(private readonly _setlistService: SetlistService,
    ) {
        super(_setlistService);
    }
}
