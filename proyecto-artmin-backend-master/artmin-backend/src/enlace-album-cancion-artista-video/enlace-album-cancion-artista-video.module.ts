import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EnlaceAlbumCancionArtistaVideoEntity} from './enlace-album-cancion-artista-video.entity';
import {EnlaceAlbumCancionArtistaVideoService} from './enlace-album-cancion-artista-video.service';
import {EnlaceAlbumCancionArtistaVideoController} from './enlace-album-cancion-artista-video.controller';

@Module({
    imports: [TypeOrmModule.forFeature([EnlaceAlbumCancionArtistaVideoEntity], 'default')],
    controllers: [EnlaceAlbumCancionArtistaVideoController],
    providers: [EnlaceAlbumCancionArtistaVideoService],
    exports: [EnlaceAlbumCancionArtistaVideoService],
})
export class EnlaceAlbumCancionArtistaVideoModule {}
