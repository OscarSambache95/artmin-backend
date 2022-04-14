import { PrincipalAbstractController } from '../principal/principal-controller';
import { TipoCancionEntity } from './tipo-cancion.entity';
import { TipoCancionService } from './tipo-cancion.service';
export declare class TipoCancionController extends PrincipalAbstractController<TipoCancionEntity> {
    private readonly _tipoAlbumService;
    constructor(_tipoAlbumService: TipoCancionService);
}
