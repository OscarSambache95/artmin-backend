import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TipoAlbumService} from './tipo-album.service';
import {TipoAlbumController} from './tipo-album.controller';
import {TipoAlbumEntity} from './tipo-album.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TipoAlbumEntity], 'default')],
    controllers: [TipoAlbumController],
    providers: [TipoAlbumService],
    exports: [TipoAlbumService],
})
export class TipoAlbumModule {}
