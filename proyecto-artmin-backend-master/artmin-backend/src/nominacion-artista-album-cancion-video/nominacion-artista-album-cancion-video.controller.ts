import {Body, Controller, Post} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {NominacionArtistaAlbumCancionVideoService} from './nominacion-artista-album-cancion-video.service';
import {NominacionArtistaAlbumCancionVideoEntity} from './nominacion-artista-album-cancion-video.entity';

@Controller('nominacion-artista-album-cancion-video')
export class NominacionArtistaAlbumCancionVideoController extends PrincipalAbstractController<NominacionArtistaAlbumCancionVideoEntity> {
    constructor(private readonly _nominacionArtistaAlbumCancionVideoService: NominacionArtistaAlbumCancionVideoService,
    ) {
        super(_nominacionArtistaAlbumCancionVideoService);
    }
}
