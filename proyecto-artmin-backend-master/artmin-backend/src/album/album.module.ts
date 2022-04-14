import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AlbumService} from './album.service';
import {AlbumController} from './album.controller';
import {AlbumEntity} from './album.entity';
import {ImagenModule} from '../imagen/imagen.module';
import {GeneroArtistaAlbumCancionModule} from '../genero-artista-album-cancion/genero-artista-album-cancion.module';
import {AlbumArtistaModule} from '../album-artista/album-artista.module';

@Module({
    imports: [TypeOrmModule.forFeature([AlbumEntity], 'default'),
        ImagenModule,
        GeneroArtistaAlbumCancionModule,
        AlbumArtistaModule
    ],
    controllers: [AlbumController],
    providers: [AlbumService],
    exports: [AlbumService],
})
export class AlbumModule {
}
