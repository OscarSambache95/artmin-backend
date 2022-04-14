import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {TipoVideoEntity} from './tipo-video.entity';
import {TipoVideoService} from './tipo-video.service';

@Controller('tipo-video')
export class TipoVideoController extends PrincipalAbstractController<TipoVideoEntity> {
    constructor(private readonly _tipoVideoService: TipoVideoService,
    ) {
        super(_tipoVideoService);
    }
}
