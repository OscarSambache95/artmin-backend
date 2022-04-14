import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {GeneroEntity} from './genero.entity';
import {GeneroService} from './genero.service';

@Controller('genero')
export class GeneroController extends PrincipalAbstractController<GeneroEntity> {
    constructor(private readonly _generoService: GeneroService,
    ) {
        super(_generoService);
    }
}
