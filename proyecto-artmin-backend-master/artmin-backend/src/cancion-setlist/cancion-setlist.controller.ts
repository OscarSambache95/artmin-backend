import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {CancionSetlistEntity} from './cancion-setlist.entity';
import {CancionSetlistService} from './cancion-setlist.service';

@Controller('cancion-setlist')
export class CancionSetlistController extends PrincipalAbstractController<CancionSetlistEntity> {
    constructor(private readonly _cancionSetlistService: CancionSetlistService,
    ) {
        super(_cancionSetlistService);
    }
}
