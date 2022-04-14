import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {CertificadoEntity} from './certificado.entity';

@Injectable()
export class CertificadoService extends PrincipalService<CertificadoEntity> {
    constructor(
        @InjectRepository(CertificadoEntity)
        private readonly _certificadoRepository: Repository<CertificadoEntity>,
    ) {
        super(_certificadoRepository, CertificadoEntity);
    }
}
