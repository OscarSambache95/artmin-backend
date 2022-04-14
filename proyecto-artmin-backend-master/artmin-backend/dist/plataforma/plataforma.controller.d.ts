import { PrincipalAbstractController } from '../principal/principal-controller';
import { PlataformaEntity } from './plataforma.entity';
import { PlataformaService } from './plataforma.service';
export declare class PlataformaController extends PrincipalAbstractController<PlataformaEntity> {
    private readonly _plataformaService;
    constructor(_plataformaService: PlataformaService);
}
