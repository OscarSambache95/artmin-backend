import { PrincipalAbstractController } from '../principal/principal-controller';
import { CancionArtistaEntity } from './cancion-artista.entity';
import { CancionArtistaService } from './cancion-artista.service';
export declare class CancionArtistaController extends PrincipalAbstractController<CancionArtistaEntity> {
    private readonly _cancionArtistaService;
    constructor(_cancionArtistaService: CancionArtistaService);
}
