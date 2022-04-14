import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChartAlbumCancionArtistaVideoEntity} from './chart-album-cancion-artista-video.entity';
import {ChartAlbumCancionArtistaVideoService} from './chart-album-cancion-artista-video.service';
import {ChartAlbumCancionArtistaVideoController} from './chart-album-cancion-artista-video.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ChartAlbumCancionArtistaVideoEntity], 'default')],
    controllers: [ChartAlbumCancionArtistaVideoController],
    providers: [ChartAlbumCancionArtistaVideoService],
    exports: [ChartAlbumCancionArtistaVideoService],
})
export class ChartAlbumCancionArtistaVideoModule {}
