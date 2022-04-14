import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AlbumArtistaService} from './album-artista.service';
import {AlbumArtistaController} from './album-artista.controller';
import {AlbumArtistaEntity} from './album-artista.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AlbumArtistaEntity], 'default')],
    controllers: [AlbumArtistaController],
    providers: [AlbumArtistaService],
    exports: [AlbumArtistaService],
})
export class AlbumArtistaModule {}
