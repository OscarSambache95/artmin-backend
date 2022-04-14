import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {PresentacionEntity} from './presentacion.entity';

@Injectable()
export class PresentacionService extends PrincipalService<PresentacionEntity> {
    constructor(
        @InjectRepository(PresentacionEntity)
        private readonly _presentacionRepository: Repository<PresentacionEntity>,
    ) {
        super(_presentacionRepository, PresentacionEntity);
    }
}
