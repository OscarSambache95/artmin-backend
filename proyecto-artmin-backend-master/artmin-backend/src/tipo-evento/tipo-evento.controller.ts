import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {TipoEventoEntity} from './tipo-evento.entity';
import {TipoEventoService} from './tipo-evento.service';

@Controller('tipo-evento')
export class TipoEventoController extends PrincipalAbstractController<TipoEventoEntity> {
    constructor(private readonly _tipoEventoService: TipoEventoService,
    ) {
        super(_tipoEventoService);
    }
}
