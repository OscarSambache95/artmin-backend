import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {PremioEntity} from './premio.entity';
import {PremioService} from './premio.service';

@Controller('premio')
export class PremioController extends PrincipalAbstractController<PremioEntity> {
    constructor(private readonly _premioService: PremioService,
    ) {
        super(_premioService);
    }
}
