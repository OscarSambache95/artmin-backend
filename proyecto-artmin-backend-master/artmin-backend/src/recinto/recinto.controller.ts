import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {RecintoEntity} from './recinto.entity';
import {RecintoService} from './recinto.service';

@Controller('recinto')
export class RecintoController extends PrincipalAbstractController<RecintoEntity> {
    constructor(private readonly _recintoService: RecintoService,
    ) {
        super(_recintoService);
    }
}
