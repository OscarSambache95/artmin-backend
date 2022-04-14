import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {ArtistaTourService} from './artista-tour.service';
import {ArtistaTourEntity} from './artista-tour.entity';

@Controller('artista-tour')
export class ArtistaTourController extends PrincipalAbstractController<ArtistaTourEntity> {
    constructor(private readonly _artistaTourService: ArtistaTourService,
    ) {
        super(_artistaTourService);
    }
}
