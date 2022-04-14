import { PrincipalAbstractController } from '../principal/principal-controller';
import { TipoAlbumEntity } from './tipo-album.entity';
import { TipoAlbumService } from './tipo-album.service';
export declare class TipoAlbumController extends PrincipalAbstractController<TipoAlbumEntity> {
    private readonly _tipoAlbumService;
    constructor(_tipoAlbumService: TipoAlbumService);
}
