import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { CategoriaEntity } from './categoria.entity';
export declare class CategoriaService extends PrincipalService<CategoriaEntity> {
    private readonly _categoriaRepository;
    constructor(_categoriaRepository: Repository<CategoriaEntity>);
}
