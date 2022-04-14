import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { SetlistEntity } from './setlist.entity';
export declare class SetlistService extends PrincipalService<SetlistEntity> {
    private readonly _setlistRepository;
    constructor(_setlistRepository: Repository<SetlistEntity>);
}
