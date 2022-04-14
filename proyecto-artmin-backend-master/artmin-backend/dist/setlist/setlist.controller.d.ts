import { PrincipalAbstractController } from '../principal/principal-controller';
import { SetlistEntity } from './setlist.entity';
import { SetlistService } from './setlist.service';
export declare class SetlistController extends PrincipalAbstractController<SetlistEntity> {
    private readonly _setlistService;
    constructor(_setlistService: SetlistService);
}
