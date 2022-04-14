import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { TipoCancionEntity } from './tipo-cancion.entity';
export declare class TipoCancionService extends PrincipalService<TipoCancionEntity> {
    private readonly _tipoCancionRepository;
    constructor(_tipoCancionRepository: Repository<TipoCancionEntity>);
}
