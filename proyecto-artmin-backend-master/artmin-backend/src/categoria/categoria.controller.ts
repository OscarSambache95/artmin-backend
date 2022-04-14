import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {CategoriaEntity} from './categoria.entity';
import {CategoriaService} from './categoria.service';

@Controller('categoria')
export class CategoriaController extends PrincipalAbstractController<CategoriaEntity> {
    constructor(private readonly _categoriaService: CategoriaService,
    ) {
        super(_categoriaService);
    }
}
