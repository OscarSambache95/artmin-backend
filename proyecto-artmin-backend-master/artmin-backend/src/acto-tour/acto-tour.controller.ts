import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {ActoTourEntity} from './acto-tour.entity';
import {ActoTourService} from './acto-tour.service';

@Controller('acto-tour')
export class ActoTourController extends PrincipalAbstractController<ActoTourEntity> {
    constructor(private readonly _actoTourService: ActoTourService,
    ) {
        super(_actoTourService);
    }
}
