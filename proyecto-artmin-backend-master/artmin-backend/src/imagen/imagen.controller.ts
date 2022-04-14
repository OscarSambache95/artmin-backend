import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {ImagenEntity} from './imagen.entity';
import {ImagenService} from './imagen.service';

@Controller('imagen')
export class ImagenController extends PrincipalAbstractController<ImagenEntity> {
    constructor(private readonly _imagenService: ImagenService,
    ) {
        super(_imagenService);
    }
}
