import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {CategoriaEntity} from './categoria.entity';

@Injectable()
export class CategoriaService extends PrincipalService<CategoriaEntity> {
    constructor(
        @InjectRepository(CategoriaEntity)
        private readonly _categoriaRepository: Repository<CategoriaEntity>,
    ) {
        super(_categoriaRepository, CategoriaEntity);
    }
}
