import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {PresentacionArtistaEntity} from './presentacion-artista.entity';

@Injectable()
export class PresentacionArtistaService extends PrincipalService<PresentacionArtistaEntity> {
    constructor(
        @InjectRepository(PresentacionArtistaEntity)
        private readonly _presentacionArtistaRepository: Repository<PresentacionArtistaEntity>,
    ) {
        super(_presentacionArtistaRepository, PresentacionArtistaEntity);
    }
}
