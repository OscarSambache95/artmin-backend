import { PrincipalAbstractController } from '../principal/principal-controller';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaService } from './categoria.service';
export declare class CategoriaController extends PrincipalAbstractController<CategoriaEntity> {
    private readonly _categoriaService;
    constructor(_categoriaService: CategoriaService);
}
