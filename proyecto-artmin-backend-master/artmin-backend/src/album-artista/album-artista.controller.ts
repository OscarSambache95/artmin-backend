import {AlbumArtistaService} from './album-artista.service';
import {AlbumArtistaEntity} from './album-artista.entity';
import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';

@Controller('album-artista')
export class AlbumArtistaController extends PrincipalAbstractController<AlbumArtistaEntity> {
    constructor(private readonly _albumArtistaService: AlbumArtistaService,
    ) {
        super(_albumArtistaService);
    }
}
