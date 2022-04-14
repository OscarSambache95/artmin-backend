import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {EventoAnioEntity} from './evento-anio.entity';
import {EventoAnioService} from './evento-anio.service';

@Controller('evento-anio')
export class EventoAnioController extends PrincipalAbstractController<EventoAnioEntity> {
    constructor(private readonly _eventoAnioService: EventoAnioService,
    ) {
        super(_eventoAnioService);
    }
}
