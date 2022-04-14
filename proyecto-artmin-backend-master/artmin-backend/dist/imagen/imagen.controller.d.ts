import { PrincipalAbstractController } from '../principal/principal-controller';
import { ImagenEntity } from './imagen.entity';
import { ImagenService } from './imagen.service';
export declare class ImagenController extends PrincipalAbstractController<ImagenEntity> {
    private readonly _imagenService;
    constructor(_imagenService: ImagenService);
}
