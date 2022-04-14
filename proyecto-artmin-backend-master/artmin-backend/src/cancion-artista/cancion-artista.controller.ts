import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {CancionArtistaEntity} from './cancion-artista.entity';
import {CancionArtistaService} from './cancion-artista.service';

@Controller('cancion-artista')
export class CancionArtistaController extends PrincipalAbstractController<CancionArtistaEntity> {
    constructor(private readonly _cancionArtistaService: CancionArtistaService,
    ) {
        super(_cancionArtistaService);
    }
}
