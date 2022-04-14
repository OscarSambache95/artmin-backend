import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { CancionSetlistEntity } from './cancion-setlist.entity';
export declare class CancionSetlistService extends PrincipalService<CancionSetlistEntity> {
    private readonly _setlistRepository;
    constructor(_setlistRepository: Repository<CancionSetlistEntity>);
}
