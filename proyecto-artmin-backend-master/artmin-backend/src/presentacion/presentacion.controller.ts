import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {PresentacionEntity} from './presentacion.entity';
import {PresentacionService} from './presentacion.service';

@Controller('presentacion')
export class PresentacionController extends PrincipalAbstractController<PresentacionEntity> {
    constructor(private readonly _presentacionService: PresentacionService,
    ) {
        super(_presentacionService);
    }
}
