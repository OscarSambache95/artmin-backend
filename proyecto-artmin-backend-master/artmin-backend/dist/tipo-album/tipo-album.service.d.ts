import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { TipoAlbumEntity } from './tipo-album.entity';
export declare class TipoAlbumService extends PrincipalService<TipoAlbumEntity> {
    private readonly _tipoAlbumRepository;
    constructor(_tipoAlbumRepository: Repository<TipoAlbumEntity>);
}
