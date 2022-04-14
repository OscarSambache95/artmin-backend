import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { TipoEventoEntity } from './tipo-evento.entity';
export declare class TipoEventoService extends PrincipalService<TipoEventoEntity> {
    private readonly _tipoEventoRepository;
    constructor(_tipoEventoRepository: Repository<TipoEventoEntity>);
}
