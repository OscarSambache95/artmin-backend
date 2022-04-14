import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {NominacionArtistaAlbumCancionVideoEntity} from './nominacion-artista-album-cancion-video.entity';

@Injectable()
export class NominacionArtistaAlbumCancionVideoService extends PrincipalService<NominacionArtistaAlbumCancionVideoEntity> {
    constructor(
        @InjectRepository(NominacionArtistaAlbumCancionVideoEntity)
        private readonly _nominacionArtistaAlbumCancionVideoRepository: Repository<NominacionArtistaAlbumCancionVideoEntity>,
    ) {
        super(_nominacionArtistaAlbumCancionVideoRepository, NominacionArtistaAlbumCancionVideoEntity);
    }
}
