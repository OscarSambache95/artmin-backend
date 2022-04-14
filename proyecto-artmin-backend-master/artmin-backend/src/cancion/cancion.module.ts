import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CancionService} from './cancion.service';
import {CancionController} from './cancion.controller';
import {CancionEntity} from './cancion.entity';
import {GeneroArtistaAlbumCancionModule} from '../genero-artista-album-cancion/genero-artista-album-cancion.module';
import {CancionArtistaModule} from '../cancion-artista/cancion-artista.module';
import {ImagenModule} from '../imagen/imagen.module';
import {AlbumCancionModule} from '../album-cancion/album-cancion.module';
import {EnlaceAlbumCancionArtistaVideoModule} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([CancionEntity], 'default'),
        ImagenModule,
        GeneroArtistaAlbumCancionModule,
        CancionArtistaModule,
        AlbumCancionModule,
        EnlaceAlbumCancionArtistaVideoModule
    ],
    controllers: [CancionController],
    providers: [CancionService],
    exports: [CancionService],
})
export class CancionModule {
}
