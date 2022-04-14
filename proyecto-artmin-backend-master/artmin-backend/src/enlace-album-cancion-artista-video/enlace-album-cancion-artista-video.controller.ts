import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {EnlaceAlbumCancionArtistaVideoEntity} from './enlace-album-cancion-artista-video.entity';
import {EnlaceAlbumCancionArtistaVideoService} from './enlace-album-cancion-artista-video.service';

@Controller('enlace-album-cancion-artista-video')
export class EnlaceAlbumCancionArtistaVideoController extends PrincipalAbstractController<EnlaceAlbumCancionArtistaVideoEntity> {
    constructor(private readonly _enlaceAlbumCAncionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService,
    ) {
        super(_enlaceAlbumCAncionArtistaVideoService);
    }
}
