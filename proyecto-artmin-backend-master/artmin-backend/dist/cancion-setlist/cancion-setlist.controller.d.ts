import { PrincipalAbstractController } from '../principal/principal-controller';
import { CancionSetlistEntity } from './cancion-setlist.entity';
import { CancionSetlistService } from './cancion-setlist.service';
export declare class CancionSetlistController extends PrincipalAbstractController<CancionSetlistEntity> {
    private readonly _cancionSetlistService;
    constructor(_cancionSetlistService: CancionSetlistService);
}
