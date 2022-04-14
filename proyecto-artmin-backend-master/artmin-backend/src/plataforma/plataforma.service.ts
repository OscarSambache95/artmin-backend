import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {PlataformaEntity} from './plataforma.entity';

@Injectable()
export class PlataformaService extends PrincipalService<PlataformaEntity> {
    constructor(
        @InjectRepository(PlataformaEntity)
        private readonly _plataformaRepository: Repository<PlataformaEntity>,
    ) {
        super(_plataformaRepository, PlataformaEntity);
    }
}
