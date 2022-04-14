import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {PlataformaEntity} from './plataforma.entity';
import {PlataformaService} from './plataforma.service';

@Controller('plataforma')
export class PlataformaController extends PrincipalAbstractController<PlataformaEntity> {
    constructor(private readonly _plataformaService: PlataformaService,
    ) {
        super(_plataformaService);
    }
}
