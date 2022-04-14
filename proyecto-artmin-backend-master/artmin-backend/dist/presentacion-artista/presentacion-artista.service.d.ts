import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { PresentacionArtistaEntity } from './presentacion-artista.entity';
export declare class PresentacionArtistaService extends PrincipalService<PresentacionArtistaEntity> {
    private readonly _presentacionArtistaRepository;
    constructor(_presentacionArtistaRepository: Repository<PresentacionArtistaEntity>);
}
