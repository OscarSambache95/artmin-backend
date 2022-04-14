import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {VideoEntity} from './video.entity';
import {VideoService} from './video.service';
import {VideoController} from './video.controller';
import {EnlaceAlbumCancionArtistaVideoModule} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([VideoEntity], 'default'),
        EnlaceAlbumCancionArtistaVideoModule],
    controllers: [VideoController],
    providers: [VideoService],
    exports: [VideoService],
})
export class VideoModule {
}
