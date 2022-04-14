import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {MedidaEntity} from './medida.entity';
import {MedidaService} from './medida.service';

@Controller('medida')
export class MedidaController extends PrincipalAbstractController<MedidaEntity> {
    constructor(private readonly _medidaService: MedidaService,
    ) {
        super(_medidaService);
    }
}
