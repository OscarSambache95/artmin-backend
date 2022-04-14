import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {EventoEntity} from './evento.entity';
import {EventoService} from './evento.service';

@Controller('evento')
export class EventoController extends PrincipalAbstractController<EventoEntity> {
    constructor(private readonly _eventoService: EventoService,
    ) {
        super(_eventoService);
    }
}
