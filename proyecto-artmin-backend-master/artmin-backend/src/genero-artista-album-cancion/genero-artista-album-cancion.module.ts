import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GeneroArtistaAlbumCancionEntity} from './genero-artista-album-cancion.entity';
import {GeneroArtistaAlbumCancionService} from './genero-artista-album-cancion.service';
import {GeneroArtistaAlbumCancionController} from './genero-artista-album-cancion.controller';

@Module({
    imports: [TypeOrmModule.forFeature([GeneroArtistaAlbumCancionEntity], 'default')],
    controllers: [GeneroArtistaAlbumCancionController],
    providers: [GeneroArtistaAlbumCancionService],
    exports: [GeneroArtistaAlbumCancionService],
})
export class GeneroArtistaAlbumCancionModule {}
