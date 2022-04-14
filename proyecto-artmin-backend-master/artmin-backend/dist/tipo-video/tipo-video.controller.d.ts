import { PrincipalAbstractController } from '../principal/principal-controller';
import { TipoVideoEntity } from './tipo-video.entity';
import { TipoVideoService } from './tipo-video.service';
export declare class TipoVideoController extends PrincipalAbstractController<TipoVideoEntity> {
    private readonly _tipoVideoService;
    constructor(_tipoVideoService: TipoVideoService);
}
