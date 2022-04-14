import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { TipoVideoEntity } from './tipo-video.entity';
export declare class TipoVideoService extends PrincipalService<TipoVideoEntity> {
    private readonly _tipoVideoRepository;
    constructor(_tipoVideoRepository: Repository<TipoVideoEntity>);
}
