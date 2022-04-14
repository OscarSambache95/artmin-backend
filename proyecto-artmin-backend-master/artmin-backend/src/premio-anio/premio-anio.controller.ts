import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {PremioAnioEntity} from './premio-anio.entity';
import {PremioAnioService} from './premio-anio.service';

@Controller('premio-anio')
export class PremioAnioController extends PrincipalAbstractController<PremioAnioEntity> {
    constructor(private readonly _premioAnioService: PremioAnioService,
    ) {
        super(_premioAnioService);
    }
}
