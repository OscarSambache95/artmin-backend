import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {TipoAlbumEntity} from './tipo-album.entity';

@Injectable()
export class TipoAlbumService extends PrincipalService<TipoAlbumEntity> {
    constructor(
        @InjectRepository(TipoAlbumEntity)
        private readonly _tipoAlbumRepository: Repository<TipoAlbumEntity>,
    ) {
        super(_tipoAlbumRepository, TipoAlbumEntity);
    }
}
