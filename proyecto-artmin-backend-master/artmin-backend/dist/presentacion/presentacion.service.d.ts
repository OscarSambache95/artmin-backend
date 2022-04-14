import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { PresentacionEntity } from './presentacion.entity';
export declare class PresentacionService extends PrincipalService<PresentacionEntity> {
    private readonly _presentacionRepository;
    constructor(_presentacionRepository: Repository<PresentacionEntity>);
}
