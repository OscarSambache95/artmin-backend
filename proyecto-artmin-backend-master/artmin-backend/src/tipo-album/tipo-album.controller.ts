import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {TipoAlbumEntity} from './tipo-album.entity';
import {TipoAlbumService} from './tipo-album.service';

@Controller('tipo-album')
export class TipoAlbumController extends PrincipalAbstractController<TipoAlbumEntity> {
    constructor(private readonly _tipoAlbumService: TipoAlbumService,
    ) {
        super(_tipoAlbumService);
    }
}
