import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {PresentacionArtistaEntity} from './presentacion-artista.entity';
import {PresentacionArtistaService} from './presentacion-artista.service';

@Controller('presentacion-artista')
export class PresentacionArtistaController extends PrincipalAbstractController<PresentacionArtistaEntity> {
    constructor(private readonly _presentacionArtistaService: PresentacionArtistaService,
    ) {
        super(_presentacionArtistaService);
    }
}
