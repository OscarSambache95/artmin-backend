import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UnidadAlbumCancionVideoController} from './unidad-album-cancion-video.controller';
import {UnidadAlbumCancionVideoService} from './unidad-album-cancion-video.service';
import {UnidadAlbumCancionVideoEntity} from './unidad-album-cancion-video.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UnidadAlbumCancionVideoEntity], 'default')],
    controllers: [UnidadAlbumCancionVideoController],
    providers: [UnidadAlbumCancionVideoService],
    exports: [UnidadAlbumCancionVideoService],
})
export class UnidadAlbumCancionVideoModule {}
