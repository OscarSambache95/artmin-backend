import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ArtistaService} from './artista.service';
import {ArtistaController} from './artista.controller';
import {ArtistaEntity} from './artista.entity';
import {ImagenModule} from '../imagen/imagen.module';
import {GeneroArtistaAlbumCancionModule} from '../genero-artista-album-cancion/genero-artista-album-cancion.module';
import {EnlaceAlbumCancionArtistaVideoModule} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ArtistaEntity], 'default'),
        ImagenModule,
        GeneroArtistaAlbumCancionModule,
        EnlaceAlbumCancionArtistaVideoModule
    ],
    controllers: [ArtistaController],
    providers: [ArtistaService],
    exports: [ArtistaService],
})
export class ArtistaModule {}
