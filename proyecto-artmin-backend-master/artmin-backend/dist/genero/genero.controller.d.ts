import { PrincipalAbstractController } from '../principal/principal-controller';
import { GeneroEntity } from './genero.entity';
import { GeneroService } from './genero.service';
export declare class GeneroController extends PrincipalAbstractController<GeneroEntity> {
    private readonly _generoService;
    constructor(_generoService: GeneroService);
}
