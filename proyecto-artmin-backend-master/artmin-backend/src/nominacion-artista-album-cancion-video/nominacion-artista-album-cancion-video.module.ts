import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NominacionArtistaAlbumCancionVideoEntity} from './nominacion-artista-album-cancion-video.entity';
import {NominacionArtistaAlbumCancionVideoService} from './nominacion-artista-album-cancion-video.service';
import {NominacionArtistaAlbumCancionVideoController} from './nominacion-artista-album-cancion-video.controller';

@Module({
    imports: [TypeOrmModule.forFeature([NominacionArtistaAlbumCancionVideoEntity], 'default')],
    controllers: [NominacionArtistaAlbumCancionVideoController],
    providers: [NominacionArtistaAlbumCancionVideoService],
    exports: [NominacionArtistaAlbumCancionVideoService],
})
export class NominacionArtistaAlbumCancionVideoModule {}
