import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {TipoCancionEntity} from './tipo-cancion.entity';
import {TipoCancionService} from './tipo-cancion.service';

@Controller('tipo-cancion')
export class TipoCancionController extends PrincipalAbstractController<TipoCancionEntity> {
    constructor(private readonly _tipoAlbumService: TipoCancionService,
    ) {
        super(_tipoAlbumService);
    }
}
