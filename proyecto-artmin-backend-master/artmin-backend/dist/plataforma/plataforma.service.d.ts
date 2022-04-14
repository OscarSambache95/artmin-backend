import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { PlataformaEntity } from './plataforma.entity';
export declare class PlataformaService extends PrincipalService<PlataformaEntity> {
    private readonly _plataformaRepository;
    constructor(_plataformaRepository: Repository<PlataformaEntity>);
}
