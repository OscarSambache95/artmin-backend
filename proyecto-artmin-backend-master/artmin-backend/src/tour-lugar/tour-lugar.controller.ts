import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {TourLugarEntity} from './tour-lugar.entity';
import {TourLugarService} from './tour-lugar.service';

@Controller('tour-lugar')
export class TourLugarController extends PrincipalAbstractController<TourLugarEntity> {
    constructor(private readonly _tourLugarService: TourLugarService,
    ) {
        super(_tourLugarService);
    }
}
