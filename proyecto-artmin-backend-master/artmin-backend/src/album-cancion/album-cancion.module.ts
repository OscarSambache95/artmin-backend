import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AlbumCancionEntity} from './album-cancion.entity';
import {AlbumCancionController} from './album-cancion.controller';
import {AlbumCancionService} from './album-cancion.service';

@Module({
    imports: [TypeOrmModule.forFeature([AlbumCancionEntity], 'default')],
    controllers: [AlbumCancionController],
    providers: [AlbumCancionService],
    exports: [AlbumCancionService],
})
export class AlbumCancionModule {}
