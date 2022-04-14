import { PrincipalAbstractController } from '../principal/principal-controller';
import { PresentacionArtistaEntity } from './presentacion-artista.entity';
import { PresentacionArtistaService } from './presentacion-artista.service';
export declare class PresentacionArtistaController extends PrincipalAbstractController<PresentacionArtistaEntity> {
    private readonly _presentacionArtistaService;
    constructor(_presentacionArtistaService: PresentacionArtistaService);
}
