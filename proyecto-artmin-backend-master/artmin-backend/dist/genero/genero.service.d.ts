import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { GeneroEntity } from './genero.entity';
export declare class GeneroService extends PrincipalService<GeneroEntity> {
    private readonly _generoRepository;
    constructor(_generoRepository: Repository<GeneroEntity>);
}
