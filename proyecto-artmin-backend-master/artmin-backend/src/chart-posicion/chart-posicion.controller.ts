import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {ChartPosicionEntity} from './chart-posicion.entity';
import {ChartPosicionService} from './chart-posicion.service';

@Controller('chart-posicion')
export class ChartPosicionController extends PrincipalAbstractController<ChartPosicionEntity> {
    constructor(private readonly _chartPosicionService: ChartPosicionService,
    ) {
        super(_chartPosicionService);
    }
}
